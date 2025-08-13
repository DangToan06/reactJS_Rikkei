function mergeObj<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const person = { name: "Toàn", age: 19 };
const job = { title: "Developer", salary: 2000 };

const result = mergeObj(person, job);

console.log(result);
