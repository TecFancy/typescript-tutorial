interface Point {
  x: number;
  y: number;
}

const sum = (data: Point) => {
  return data.x + data.y;
};

export default sum;
