const namePerson: string = "Benny";
const age: number = 19;
const job: string = "Tho sua ong nuoc";

const getInformation = (name: string, age: number, job: string): void => {
  console.log(`Name: ${name} || Age: ${age} || Job: ${job}`);
};

getInformation(namePerson, age, job);
