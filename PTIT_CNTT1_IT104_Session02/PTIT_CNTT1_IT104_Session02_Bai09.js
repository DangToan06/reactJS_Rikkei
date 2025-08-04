const getStudentSummary = (student) => {
  const { name, age, listSubject } = student;

  const total = listSubject.reduce((sum, subject) => sum + subject.score, 0);
  const avg = +(total / listSubject.length).toFixed(2);

  let classification = "";
  if (avg >= 8.5) classification = "Hoc sinh gioi";
  else if (avg >= 7) classification = "Hoc sinh kha";
  else if (avg >= 5) classification = "Hoc sinh tb";
  else classification = "Hoc sinh yeu";

  const sortScore = [...listSubject].sort((a, b) => b.score - a.score);
  const highScore = sortScore[0];
  const lowScore = sortScore[sortScore.length - 1];

  return `
    ${name} is ${age} years old
    Average score: ${avg} -> ${classification}
    Best subject: ${highScore.subject} (${highScore.score})
    Weakest subject: ${lowScore.subject} (${lowScore.score})
  `.trim();
};

const student = {
  name: "Nguyễn Văn A",
  age: 20,
  listSubject: [
    { subject: "Toán", score: 9 },
    { subject: "Lý", score: 8 },
    { subject: "Hóa", score: 7 },
    { subject: "Văn", score: 6 },
  ],
};

console.log(getStudentSummary(student));
