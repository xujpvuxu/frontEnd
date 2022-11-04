function maxTwoNumber(first, second) {
  let result;
  if (first / 1 === first && second / 1) {
    if (first === second) {
      result = "相等";
    } else if (first > second) {
      result = first;
    } else {
      result = second;
    }
  }
  return result;
}
