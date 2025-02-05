import { Default } from "../default";

export enum CATEGORIES {
  PAYMENT_METHOD = "paymentMethod",
  PAYMENT_FORM = "paymentForm",
  DEPARTMENT = "department",
  CREDIT_CARD = "creditCard",
}

export interface Category extends Default {
  name: CATEGORIES;
}
