# ReviewTap

Site de venda de placas NFC para avaliações no Google. O cliente aproxima o telemóvel da placa e a página de avaliação do negócio abre no browser. Cada placa traz QR Code impresso, para telemóveis sem NFC.

Feito com Next.js (App Router), TypeScript e Tailwind CSS. Pronto para publicar na Vercel.

## Correr em local

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Ligar o Whop

Os botões de compra e o checkout embutido leem os plan IDs de `src/lib/plans.ts`.

1. No dashboard do Whop, abra o produto e copie o plan ID. Tem o formato `plan_` seguido de uma cadeia.
2. Substitua os placeholders:

   - `plan_ESSENCIAL` — 1 placa
   - `plan_BALCAO` — pack de 3
   - `plan_CASA` — pack de 10
   - `plan_REDE` — volume, se criar um plano com preço fixo

3. Os botões «Comprar» abrem `https://whop.com/checkout/{planId}`.
4. «Pagar sem sair do site» abre `/checkout/[plano]`, que monta `WhopCheckoutEmbed` com o mesmo ID.
5. No produto Whop, configure o redirect depois do pagamento para `https://o-seu-dominio/obrigado`. O checkout embutido já envia essa `returnUrl`.

Enquanto os IDs forem os placeholders, a página de checkout mostra um aviso e o formulário do Whop não conclui a compra.

## Formulário de orçamento

O formulário de empresas usa o [Formspree](https://formspree.io).

1. Copie `.env.example` para `.env.local`.
2. Defina `NEXT_PUBLIC_FORMSPREE_ID` com o ID do formulário (o que vem a seguir a `/f/`).
3. Defina `NEXT_PUBLIC_SITE_URL` com o domínio público, sem barra no fim.

Sem o ID do Formspree, o formulário não envia email e diz-o no ecrã.

O email do rodapé está em `src/lib/site.ts` (`contactEmail`).

## Deploy na Vercel

1. Importe o repositório.
2. Framework: Next.js. Comandos por omissão (`npm run build`).
3. Adicione `NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_FORMSPREE_ID`.
4. Publique e confirme um checkout de teste com um plan ID real.

## Páginas

- `/` — página de venda
- `/produto` — materiais e personalização
- `/empresas` — volumes e orçamento
- `/checkout/[plano]` — checkout Whop embutido
- `/obrigado` — encomenda confirmada
