class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getAverageMark() {
        const sum = this.getMarksSum();

        return sum / this.marks.length;

    }

    getMarksSum() {
        return this.marks.reduce((acc, number) => acc + number);
    }
}

class Group {
    #students = [];
    get students() {
        return this.#students;
    }

    addStudent(student) {
        if(this.isStudent(student)) {
            students.push(student);
        }
    }

    isStudent(student) {
        return student instanceof Student;
    }


    getAverageMark() {
        const sum = this.getAverageMarksSum();

        return sum / this.students.length;

    }

    getAverageMarksSum() {
        return this.#students.reduce((acc, student) => acc + student.getAverageMark(), 0);
    }
}
const group = new Group();

group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10,])); // средний балл = 8
group.addStudent({}); // игнорируем добавлениие невалидных данных

// Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);