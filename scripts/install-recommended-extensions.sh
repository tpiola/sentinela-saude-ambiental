#!/usr/bin/env bash
# Instala as extensões listadas em .vscode/extensions.json (Cursor ou VS Code na PATH).
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
JSON="$ROOT/.vscode/extensions.json"

pick_cli() {
  if command -v cursor >/dev/null 2>&1; then
    echo cursor
  elif command -v code >/dev/null 2>&1; then
    echo code
  else
    echo ""
  fi
}

CLI="$(pick_cli)"
if [[ -z "$CLI" ]]; then
  echo "Nenhum comando 'cursor' ou 'code' encontrado na PATH."
  echo "No Cursor: Ctrl+Shift+P → \"Extensions: Show Recommended Extensions\"."
  exit 0
fi

if [[ ! -f "$JSON" ]]; then
  echo "Ficheiro não encontrado: $JSON"
  exit 1
fi

echo "A usar: $CLI"
node <<NODE
const fs = require("fs");
const path = "$JSON";
const { recommendations } = JSON.parse(fs.readFileSync(path, "utf8"));
const { spawnSync } = require("child_process");
for (const id of recommendations) {
  console.log("→", id);
  const r = spawnSync("$CLI", ["--install-extension", id], { stdio: "inherit" });
  if (r.status !== 0) process.exit(r.status ?? 1);
}
NODE
