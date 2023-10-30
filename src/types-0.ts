// 1
// Можно ли в рантайме создать объект объект по типу Animal?
// Если да, то как? Если нет, то почему?

type Card = {
  value: number;
  cardNumber: string;
  securityCode: string;
};

// 2 Как сделать все поля в типе Card условными?
type OptionalCard = 