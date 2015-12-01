
export function sum(list, fn) {
  fn = fn || (x => x)
  return list.reduce((previous, current) => previous + fn(current), 0)
}

export function sumAll(obj) {
  let result = 0
  for (let k in obj) {
    result += sum(obj[k], x => x.price)
  }
  return result
}
