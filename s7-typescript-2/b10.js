"use strict";
console.log(filterValue({ a: null, b: false, c: true, d: 0, e: 1, f: '', g: 'a', }));
function filterValue(obj) {
    let item = {};
    for (let key in obj) {
        let check = true;
        if (!obj[key]) {
            check = false;
        }
        if (check == true) {
            item[key] = obj[key];
        }
    }
    return item;
}
