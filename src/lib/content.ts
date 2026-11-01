export const steps = [
  {
    number: "01",
    title: "Toque no telemóvel",
    text: "A placa fica onde a pessoa já para: ao lado da caixa, na bandeja da conta ou no balcão da receção. Não há um processo para explicar.",
  },
  {
    number: "02",
    title: "Abre a página certa",
    text: "O chip NFC abre a ficha do Google do seu negócio, já no ecrã de avaliação. O cliente não pesquisa o nome, não escolhe a unidade errada e não desiste a meio.",
  },
  {
    number: "03",
    title: "A review fica feita",
    text: "As estrelas e o texto escrevem-se ali, de pé, enquanto a experiência ainda está fresca. Leva menos de um minuto.",
  },
] as const;

export const comparison = {
  without: [
    "A pessoa diz que avalia quando chegar a casa. Em casa, já não avalia.",
    "Pesquisa o nome e cai numa ficha antiga, ou na unidade ao lado.",
    "O QR do talão térmico perde contraste ao fim de uma semana.",
  ],
  with: [
    "O gesto cabe entre o pagamento e a porta.",
    "O NFC abre a ficha que programou, não a primeira que o Google sugere.",
    "O QR de reserva está impresso na placa, não em papel térmico.",
  ],
} as const;

export const benefits = [
  {
    title: "Mais avaliações, sem pedir duas vezes",
    text: "Quem gostou do serviço avalia se o caminho for óbvio. Quem tem de pesquisar depois quase nunca volta. A placa torna o pedido numa coisa física, sempre no mesmo sítio.",
  },
  {
    title: "Matéria para a pesquisa local",
    text: "Avaliações recentes contam quando alguém procura um restaurante, uma clínica ou um salão perto de si. Não prometemos a primeira posição. Prometemos que o caminho para avaliar deixa de ser o obstáculo.",
  },
  {
    title: "Sem aplicação para instalar",
    text: "Nem para a equipa, nem para o cliente. O link programa-se uma vez. A placa trata do resto, abertura após abertura, sem bateria e sem conta.",
  },
  {
    title: "iPhone e Android",
    text: "A leitura NFC em segundo plano funciona na maior parte dos iPhones desde o XS, com o ecrã ligado, e nos Android com NFC. Quem ficar de fora usa o QR Code da mesma placa.",
  },
  {
    title: "Feita para estar à vista",
    text: "Acrílico de 5 mm, base estável, impressão que aguenta o álcool do balcão. Parece parte do espaço, não um panfleto colado com fita.",
  },
] as const;

export const specs = [
  { label: "Material", value: "Acrílico fundido, 5 mm, cantos arredondados" },
  { label: "Formatos", value: "9 × 9 cm de balcão, ou 12 × 8 cm para a bandeja" },
  { label: "Chip", value: "NTAG215, regravável se mudar o link" },
  { label: "Impressão", value: "UV direta, legível à luz do balcão" },
  { label: "Reserva", value: "QR Code com o mesmo destino do NFC" },
  { label: "Fixação", value: "Base estável ou fita de dupla face" },
] as const;

export const colorways = [
  {
    id: "navy",
    name: "Atlântico",
    phrase: "Avalie-nos",
    business: "Café da Esquina",
  },
  {
    id: "sand",
    name: "Areia",
    phrase: "A sua opinião",
    business: "Clínica Largo",
  },
  {
    id: "ink",
    name: "Tinta",
    phrase: "Como correu?",
    business: "Salão Brilho",
  },
] as const;

export type ColorwayId = (typeof colorways)[number]["id"];

export const industries = [
  "Restaurantes",
  "Clínicas",
  "Clínicas dentárias",
  "Salões",
  "Barbearias",
  "Hotéis",
  "Lojas",
  "Ginásios",
  "Oficinas",
  "Farmácias",
  "Agências",
  "Franchises",
] as const;

export const testimonials = [
  {
    quote:
      "Pus a placa ao lado da máquina do café. Na primeira semana passámos de quatro avaliações no mês para dezanove. A maior parte diz só «ótimo pequeno-almoço». É isso que a ficha precisa de mostrar.",
    name: "Marta Leal",
    role: "Café da Esquina, Lisboa",
  },
  {
    quote:
      "Os pacientes saíam a dizer que iam avaliar e nunca avaliavam. Agora a receção aponta a placa enquanto marca a consulta seguinte. O gesto cabe no tempo da despedida.",
    name: "Rui Pacheco",
    role: "Clínica Largo, Porto",
  },
  {
    quote:
      "Gerimos catorze salões. Antes cada um tinha um link perdido numa conversa de WhatsApp. Com as placas, a arte é a mesma e o NFC abre a ficha daquela unidade.",
    name: "Inês Carvalho",
    role: "Grupo Brilho",
  },
] as const;

export const faqs = [
  {
    id: "app",
    question: "Preciso de instalar alguma aplicação?",
    answer:
      "Não. O cliente aproxima o telemóvel e a página abre no browser. A sua equipa também não precisa de uma app para ativar a placa. Não há conta para criar nem bateria para carregar.",
  },
  {
    id: "iphone",
    question: "Funciona no iPhone?",
    answer:
      "Sim, na maior parte dos modelos desde o iPhone XS, com o ecrã ligado. O telemóvel lê a etiqueta NFC sem uma aplicação da ReviewTap. Modelos mais antigos, e Android sem NFC, usam o QR Code impresso na mesma placa.",
  },
  {
    id: "recusa",
    question: "E se o cliente não quiser avaliar?",
    answer:
      "Não acontece nada. A placa não guarda dados, não envia notificações e não pede um registo. Só abre a página se a pessoa aproximar o telemóvel ou ler o QR.",
  },
  {
    id: "link",
    question: "Posso mudar o link mais tarde?",
    answer:
      "Sim. O chip é regravável. Se mudar de ficha do Google, ou se uma unidade passar a ter página própria, reprogramamos a placa ou enviamos as instruções.",
  },
  {
    id: "google",
    question: "O Google permite pedir avaliações desta forma?",
    answer:
      "Pedir uma avaliação honesta é permitido. Comprar reviews, oferecer um desconto em troca de estrelas, ou impedir opiniões negativas não é, e não fazemos nada disso. A placa leva a pessoa à página oficial. O texto é dela, incluindo o que correu menos bem.",
  },
  {
    id: "prazo",
    question: "Quanto tempo até chegar?",
    answer:
      "Três a cinco dias úteis de produção depois de termos o link e a arte aprovada, mais o envio. Portugal continental está incluído nos planos Essencial, Balcão e Casa. Açores e Madeira confirmam-se no orçamento.",
  },
  {
    id: "fatura",
    question: "Fazem fatura?",
    answer:
      "Sim, com NIF. Nos planos de quantidade a fatura sai em nome da empresa. Precisamos do nome, do NIF e da morada fiscal no email da encomenda.",
  },
  {
    id: "unidades",
    question: "Posso ter placas para várias unidades?",
    answer:
      "Sim. Cada placa pode abrir uma ficha diferente. É o caso de um grupo com várias clínicas ou de uma franchise em que cada loja tem a sua página no Google.",
  },
] as const;

export const volumeTiers = [
  { range: "1 placa", note: "Plano Essencial, pronta a programar", price: "34 €" },
  { range: "3 placas", note: "Logótipo e frase própria", price: "89 €" },
  { range: "10 placas", note: "Até 3 links diferentes", price: "229 €" },
  { range: "25 ou mais", note: "Arte única para a rede, preço por volume", price: "Sob consulta" },
] as const;

export const businessTypes = [
  "Restaurante ou café",
  "Clínica ou consultório",
  "Salão ou barbearia",
  "Loja",
  "Hotel ou alojamento",
  "Ginásio",
  "Franchise ou grupo",
  "Agência",
  "Outro",
] as const;
