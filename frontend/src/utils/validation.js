import {
  isAlphanumeric,
  isEmail,
  isEmpty,
  isMobilePhone,
  isNumeric,
} from "validator";

export function validateField(fieldName, value) {
  if (isEmpty(String(value ?? ""))) return false;

  switch (fieldName) {
    case "nome":
    case "bairro":
    case "rua":
    case "resumo":
      return isAlphanumeric(value, "pt-BR", { ignore: " " });

    case "cep":
      return /^\d{5}-?\d{3}$/.test(value);

    case "telefone":
      return isMobilePhone(value, "pt-BR");

    case "email":
      return isEmail(value);

    case "imagem":
      return /^https?:\/\/.*\.(png|jpg|jpeg|gif|webp|svg)(\?.*)?$/i.test(value);

    case "numero":
    case "valor":
      return isNumeric(String(value));

    default:
      return true;
  }
}
