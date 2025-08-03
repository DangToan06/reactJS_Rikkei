const createPreson = (name, age = 20, role = "user") => {
  const preson = {
    name,
    age,
    role,
  };
  return preson;
};

console.log(createPreson("Dev"));
console.log(createPreson("Nguyen Van A", 20, "Admin"));
