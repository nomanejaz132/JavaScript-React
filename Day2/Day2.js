// 1
const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const newStudents = [
  { name: "Eve", grade: 88 },
  { name: "Frank", grade: 92 },
];

const totalStudents = students.concat(newStudents);
console.log(totalStudents);
