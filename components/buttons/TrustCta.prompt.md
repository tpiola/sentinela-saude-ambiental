Trio obrigatório de CTA com prova social. Vai em **dois** lugares de toda página: depois de "Como funciona" e antes do rodapé, acima do mapa GBP.

```jsx
<TrustCtaTrio rating="4,9" place="Franca SP" onNavigate={(k) => go(k)} />
```

Regras fixas: 56px de altura mínima; mobile empilhado em largura total com gap 12px; o botão de WhatsApp é âmbar (`tone="ambar"`) e é o primário do trio; hover escurece 8% e sobe 2px em 200ms — nunca escala.
