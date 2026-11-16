import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import test from "node:test";
import { readVerifiedMetaPayload } from "../src/lib/meta-webhook.ts";

const secret = "test-only-not-a-credential";
const payload = '{ "entry": [], "text": "olá" }';
const sign = (body, key = secret) =>
  `sha256=${createHmac("sha256", key).update(body).digest("hex")}`;
const request = (body, signature = sign(body)) =>
  new Request("https://example.test/webhook", {
    method: "POST",
    body,
    headers: signature === null ? {} : { "x-hub-signature-256": signature },
  });

test("accepts a valid signature over original UTF-8 bytes", async () => {
  assert.deepEqual(await readVerifiedMetaPayload(request(payload), secret), {
    ok: true, body: JSON.parse(payload),
  });
});

test("fails closed when the app secret is absent", async () => {
  for (const missing of [undefined, ""]) {
    assert.deepEqual(await readVerifiedMetaPayload(request(payload), missing), {
      ok: false, status: 503,
    });
  }
});

test("rejects missing, malformed and incorrect signatures", async () => {
  for (const signature of [null, "sha256=", "sha256=" + "z".repeat(64), sign(payload, "wrong-secret")]) {
    assert.deepEqual(await readVerifiedMetaPayload(request(payload, signature), secret), {
      ok: false, status: 403,
    });
  }
});

test("rejects an altered body even when parsed JSON is identical", async () => {
  const rewritten = JSON.stringify(JSON.parse(payload));
  assert.deepEqual(await readVerifiedMetaPayload(request(rewritten, sign(payload)), secret), {
    ok: false, status: 403,
  });
});

test("does not parse unauthenticated JSON", async () => {
  assert.deepEqual(await readVerifiedMetaPayload(request("not JSON", sign(payload)), secret), {
    ok: false, status: 403,
  });
});

test("returns bad request for signed invalid JSON", async () => {
  assert.deepEqual(await readVerifiedMetaPayload(request("not JSON"), secret), {
    ok: false, status: 400,
  });
});
