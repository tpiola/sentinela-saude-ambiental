Prova social no ponto de decisão. Sempre SVG inline — **nunca** PNG/JPG.

```jsx
<GoogleReviewBadge rating="4,9" place="Franca SP" width={160} opacity={0.7} />
```

Herda `currentColor`, então funciona em fundo claro e escuro sem ajuste. Ajuste `rating` para a nota real do perfil.
