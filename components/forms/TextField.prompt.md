Campos do formulário /agendar. Rótulo em negrito acima, controle reto de 48px, erro em 12px vermelho.

```jsx
<SelectField id="problema" label="Qual é o problema?" options={["Escorpiões","Baratas ou formigas","Cupins","Roedores","Outro"]} value={form.problema} onChange={v=>set("problema",v)} error={errors.problema} />
<TextField id="bairro" label="Bairro ou cidade" placeholder="Ex.: Centro, Franca" value={form.bairro} onChange={v=>set("bairro",v)} />
```

O formulário não armazena dados: ele monta a mensagem e abre o WhatsApp. Diga isso abaixo do botão.
