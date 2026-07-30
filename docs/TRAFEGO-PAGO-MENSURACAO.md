# Mensuração para Google Ads e Meta Ads

## Variáveis de ambiente

Configure no projeto de produção:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

Use o GTM como fonte principal quando ele estiver configurado. Evite instalar GA4 e Google Ads novamente dentro do GTM se também estiver usando o carregamento standalone.

## Consentimento

As tags de medição só carregam depois de o visitante escolher **Aceitar medição**. A recusa mantém o site e os contatos funcionando. A preferência fica registrada no navegador.

## Eventos disponíveis

| Evento | Uso |
| --- | --- |
| `sentinela_conversion_click` | Clique em CTA identificado por `data-track` |
| `lead_form_completed` | Formulário de diagnóstico validado |
| `whatsapp_hero` | WhatsApp principal do hero |
| `whatsapp_empresarial` | Contato empresarial |
| `form_diagnostico` | Continuação do diagnóstico no WhatsApp |

No GTM, crie um gatilho de Evento Personalizado para `sentinela_conversion_click` e use `conversion_name` como parâmetro. Crie outro para `lead_form_completed`.

## Google Ads

1. Vincule GA4 e Google Ads.
2. Marque `lead_form_completed` como conversão principal.
3. Use cliques de WhatsApp como conversão secundária.
4. Ative Enhanced Conversions somente depois de configurar tratamento e consentimento de dados pessoais.
5. Valide no Tag Assistant antes de publicar campanhas.

## Meta Ads

1. Verifique o domínio no Business Manager.
2. Cadastre o Pixel em `NEXT_PUBLIC_META_PIXEL_ID`.
3. Mapeie `SentinelaConversionClick` como evento personalizado.
4. Priorize o formulário concluído ou o lead qualificado; não otimize apenas para PageView.
5. Para Conversions API, use um endpoint server-side. Nunca exponha token da Meta em `NEXT_PUBLIC_*`.

## UTMs recomendadas

```text
utm_source=google|meta
utm_medium=cpc|paid_social
utm_campaign=nome_da_campanha
utm_content=criativo_ou_grupo
utm_term=palavra_chave
```

## Checklist antes de investir

- Consentimento aceito e recusado testados.
- PageView não duplicado.
- Clique de WhatsApp aparece uma vez.
- Formulário inválido não dispara conversão.
- Formulário válido dispara uma vez.
- UTMs preservadas no relatório.
- Eventos conferidos em GA4 DebugView, Tag Assistant e Meta Test Events.
