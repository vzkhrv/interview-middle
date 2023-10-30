type CreditCard = {
  value: number;
  cardNumber: string;
  securityCode: string;
};

type Cash = {
  value: number;
};

type PayPal = {
  value: string;
  email: string;
};

// 2 Какие поля будут у этих типов?

type PaymentMethod1 = Cash | PayPal | CreditCard;
// type PaymentMethod1 = {

// }

type PaymentMethod2 = Cash & PayPal & CreditCard;
// type PaymentMethod2 = {

// }
