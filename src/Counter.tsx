import { useEffect, useState } from "react";

// Задание
// 1. Выводить 2 сообщения в консоль перед изменением value и после
// 2. Пропускать componentDidMount

export const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {}, []);

  return <button onClick={() => setValue(value + 1)}>clicked {value}</button>;
};
