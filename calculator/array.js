const students = [
    { id: 10, name: 'John Smith', marks: [10, 8, 6, 9, 8, 7]},
    { id: 11, name: 'John Doe', marks: [ 9, 8, 7, 6, 7]},
    { id: 12, name: 'Thomas Anderson', marks: [6, 7, 10, 8]},
    { id: 13, name: 'Jean-Baptiste Emanuel Zorg',marks: [10, 9, 8, 9]}
]

console.log(averageStudentMark(13));
console.log(averageGroupMark(students));

function getStudentMarksById(studentId){
    const studentDetails = students.find(student => student.id == studentId);
    return studentDetails.marks;
}

function calculateAverageMark(marks) {
    const studentMarkSum = marks.reduce((a, b) => a + b, 0);
    return (studentMarkSum / marks.length).toFixed(1);
}

function averageStudentMark(studentId) {
    const studentMarks = getStudentMarksById(studentId);
    return calculateAverageMark(studentMarks);
}

function averageGroupMark(array) {
    let allGroupMarks = [];
    for (let i = 0; i < array.length; i++) {
        let studentMarksSum = array[i].marks.reduce((a, b) => a + b, 0);
        let studentAverageMark = studentMarksSum / array[i].marks.length;
        allGroupMarks.push(studentAverageMark);
    }
    return calculateAverageMark(allGroupMarks);
}




// function averageStudentMark(studentId) {
//     studentDetails = students.find(student => student.id == studentId);
//     studentMarksSum = studentDetails.marks.reduce((a, b) => a + b);
//     return studentMarksSum / studentDetails.marks.length;
// }
//
// function averageGroupMark() {
//     const allGroupMarks = [];
//     for (let i = 0; i < students.length; i++) {
//         studentMarksSum = students[i].marks.reduce((a, b) => a + b);
//         studentAverageMark = studentMarksSum / students[i].marks.length;
//         allGroupMarks.push(studentAverageMark);
//     }
//     groupMarksSum = allGroupMarks.reduce((a, b) => a + b);
//     averageMarkInGroup = groupMarksSum / allGroupMarks.length;
//     return averageMarkInGroup.toFixed(1);
// }
//averageStudentMark - выведет средний бал студента, ид которого передан в аргументе

//averageGroupMark - выведет средний бал по всем студентам. Средний балл группы равен сумме средних баллов каждого студента поделить на количество студентов.

// const results = students.map(student => student.marks).toString().split(",") ;
// const numbersResult = results.map(Number);
// const sumResults = numbersResult.reduce((a, b) => a + b);
//
// const generalResults = Number(sumResults) / numbersResult.length;
// console.log(sumResults,generalResults);