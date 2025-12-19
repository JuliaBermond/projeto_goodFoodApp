import { FaCartPlus } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdFoodBank } from "react-icons/md";


export const buttonContent = [
  { id: 1, text: "CARDÁPIO", linkTo: "/", icon: IoFastFoodOutline },
  { id: 2, text: "SOBRE NÓS", linkTo: "/sobre", icon: MdFoodBank },
  { id: 3, text: "FALE CONOSCO", linkTo: "/contato", icon: FiPhoneCall },
  { id: 4, text: "FINALIZAR COMPRA", linkTo: "/cart", icon: FaCartPlus },
];

export const aboutUsContent = {
  title: "SOBRE NÓS",
  text: "A Good Food nasceu com um propósito simples: transformar cada refeição em uma experiência saborosa, prática e acessível. Acreditamos que comer bem não deve ser complicado — por isso unimos ingredientes de qualidade, cuidado no preparo e muito carinho em cada prato que entregamos. Somos uma equipe apaixonada por gastronomia, comprometida em oferecer refeições frescas, balanceadas e prontas para o dia a dia.  Queremos estar presentes nas suas rotinas, nas suas pausas, nos seus encontros e sempre que você precisar de uma refeição deliciosa!",
  image:
    "https://nectar.empregare.com/wp-content/uploads/2023/10/Cozinheiro-3.jpg",
};

const contactText = `Na Good Food, estamos sempre prontos para ouvir você! Para dúvidas, sugestões ou feedback sobre nossas refeições, entre em contato:

Telefone: (11) 1234-5678

E-mail: contato@goodfood.com.br
`;

export const contactUsContent = {
  title: "Fale Conosco",
  text: contactText,
};

const formFieldLegendAndHelperText = [
  {
    concludePurchaseBuyerFields: {
      legend: "Preencha o formulário a seguir com os seus dados",
      helperText:
        "Os dados a seguir são necessários para o envio de sua compra. Preencha-os com cuidado",
    },
  },
];

export const createAMealFormFields = [
  {
    formFieldLegendAndHelperText: {
      legend: "Crie uma refeição",
      helperText:
        "É necessário que se preencha todos os campos corretamente. Após a sua criação, ela será exibida para seus clientes",
    },
    fields: [
      {
        fieldName: "nome",
        type: "text",
        placeholder: "Digite o nome da refeição",
        errorMessage: ["Campo obrigatório"]
      },
      {
        fieldName: "valor",
        type: "number",
        placeholder: "Digite o seu preço, em reais",
        errorMessage: [
          "Campo obrigatório", 
          "O preço de um produto precisa estar em R$(reais)"
        ]
      },
      {
        fieldName: "resumo",
        type: "text",
        placeholder: "Faça uma descrição do objeto",
        errorMessage: ["Campo obrigatório", "A descrição do produto é obrigatória."]
      },
      {
        fieldName: "imagem",
        type: "text",
        placeholder: "Cole aqui a url da imagem",
        errorMessage: [
          "Campo obrigatório", 
          "A imagem precisa vir de uma url que funcione"
        ]
      },
    ],
  },
];

export const concludePurchaseBuyerFields = [
  {
    formFieldLegendAndHelperText: {
      legend: "Preencha o formulário a seguir com os seus dados",
      helperText:
        "Os dados a seguir são necessários para o envio de sua compra. Preencha-os com cuidado",
    },
    fields: [
      {
        fieldName: "nome",
        type: "text",
        placeholder: "Digite seu nome",
        errorMessage: ["Campo obrigatório", "O nome é obrigatório."]
      },
      {
        fieldName: "telefone",
        type: "telephone",
        placeholder: "Digite o seu telefone",
        errorMessage: [
          "Campo obrigatório", 
          "Digite o número de celular corretamente, com o seu DDD"
        ]
      },
      {
        fieldName: "bairro",
        type: "text",
        placeholder: "",
        errorMessage: ["Campo obrigatório"]
      },
      {
        fieldName: "rua",
        type: "text",
        placeholder: "",
        errorMessage: ["Campo obrigatório"]
      },
      {
        fieldName: "numero",
        type: "number",
        placeholder: "",
        errorMessage: [
          "Campo obrigatório", 
        ]
      },
      {
        fieldName: "cep",
        type: "text",
        placeholder: "",
        errorMessage: [
          "Campo obrigatório", 
          "Preencha somente com os números do seu cep, sem espaço nem ponto"
        ]
      },
    ],
  },
];


export const confirmedModalClient = {
  title: "Pedido confirmado!",
  msgToUser: "Em breve entraremos em contato com você com as informações sobre seu pedido e tempo de entrega!",
}

export const ITEMS_PER_PAGE = 6;

export const STATUS_OPTIONS = [
  { label: "Todos", value: "all" },
  { label: "Pendente", value: "pending" },
  { label: "Preparando", value: "preparing" },
  { label: "Pronto", value: "ready" },
  { label: "Entregue", value: "delivered" },
  { label: "Cancelado", value: "cancelled" },
];