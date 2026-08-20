O CTA do site — use `variant="whatsapp"` para toda conversão real, `lime` sobre navy, `navy`/`outline-navy` sobre superfície clara.

```jsx
<Button variant="whatsapp" size="cta" href={waHref} target="_blank" icon={<WhatsAppIcon size={20} />}>
  Chamar no WhatsApp
</Button>
<Button variant="outline-light" href="/agendar">Solicitar avaliação</Button>
```

Regras: cantos retos (nunca arredonde CTA de seção; `pill` só onde o site usa); no par de botões, WhatsApp primeiro e secundário em outline; `underline` é o "Ver orientação" das linhas de serviço.
