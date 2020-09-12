// const count = (first: number, second: number): number => {
//   return first + second;
// };
// const sum = count(1, 2);

// const count = ({
//   first,
//   second,
// }: {
//   first: number;
//   second: number;
// }): number => {
//   return first + second;
// };
// const sum = count({ first: 1, second: 2 });

interface Icount {
  first: number;
  second: number;
}
const count = ({ first, second }: Icount): number => {
  return first + second;
};
const sum = count({ first: 1, second: 2 });

export default sum;
