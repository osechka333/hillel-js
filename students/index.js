class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getAverageMark() {
    const studentMarkSum = marks.reduce((a, b) => a + b, 0);
    return (studentMarkSum / marks.length).toFixed(1);
  }

  getMarksSum() {

  }
}

class Group {
  students = [];

  addStudent(student) {

  }

  isStudent(student) {
    // используй instanceof
  }

  getAverageMark() {

  }

  getAverageMarksSum() {

  }
}
const group = new Group();

group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10,])); // средний балл = 8
group.addStudent({}); // игнорируем добавлениие невалидных данных

// Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);