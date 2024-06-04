import * as y from "yup";

export const loginSchema = y.object().shape({
  email: y
    .string()
    .email("Por favor, insira um email válido.")
    .required("Endereço de email é obrigatório."),
});

export const registerSchema = y.object().shape({
  email: y
    .string()
    .email("Por favor, insira um email válido.")
    .required("Endereço de email é obrigatório."),
});

export const verifyOtpSchema = y.object().shape({
  activation_code: y.string().required("Verificação OTP inválido."),
});
