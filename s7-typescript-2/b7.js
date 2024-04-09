"use strict";
let student1 = {
    name: 'quan le',
    id: 17,
    class: '17A2',
};
let student2 = {
    name: 'nghe an',
    id: 18,
    class: '18A1',
};
let student3 = {
    name: 'vinh',
    id: 19,
    class: '17A2',
};
let arr = [student1, student2, student3];
function filterStudents(arr, class1) {
    let filters = arr.filter(e => e.class === class1);
    return filters;
}
console.log(filterStudents(arr, '17A2'));
