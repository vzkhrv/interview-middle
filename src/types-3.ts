type SberCard = {
  type: "sber";
  expired: string;
};

type TCard = {
  type: "tink";
  expired: string;
};

type VCard = {
  type: "vtb";
  expired: string;
};

// Напиши общий тип BaseCard так, чтобы не приходилось дублировать код
