FAQ da home — o primeiro item já abre. Perguntas na voz do cliente ("Encontrei um escorpião. O que devo fazer?"), respostas sem promessa que o escopo não garante.

```jsx
<ul style={{display:"grid",gap:12,padding:0,margin:0}}>
  {faq.map((item,i)=>(
    <FaqItem key={item.question} {...item} open={openIndex===i} onToggle={()=>setOpenIndex(openIndex===i?null:i)} />
  ))}
</ul>
```
