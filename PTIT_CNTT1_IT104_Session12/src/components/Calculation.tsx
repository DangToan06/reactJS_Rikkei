export const Calculation = () => {
  const sum = (a: number, b: number): number => {
    return a + b;
  };

  const sub = (a: number, b: number): number => {
    return a - b;
  };

  const multi = (a: number, b: number): number => {
    return a * b;
  };

  const divide = (a: number, b: number): number => {
    return a / b;
  };

  return (
    <>
      <h1>Danh sach ket qua</h1>
      <ul>
        <li>10 + 10 = {sum(10, 10)}</li>
        <li>10 - 10 = {sub(10, 10)}</li>
        <li>10 * 10 = {multi(10, 10)}</li>
        <li>10 / 10 = {divide(10, 10)}</li>
      </ul>
    </>
  );
};
