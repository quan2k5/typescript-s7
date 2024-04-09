"use strict";
let userName1 = 'lê anh quân';
let userName2 = 154566;
if (typeof userName1 == 'string') {
    console.log(userName1.includes('lê'));
}
console.log(userName2.includes(2));
// sự khác nhau giữa any và unknown trong typescript
//+khác biệt co bản là unknown cho phép chúng ta kiểm tra kiểu dữ liệu trong khi đó any thì ko=>mất đi sự kiểm
//soát dữ liệu trong typescript tránh cho ta có thể sử dụng nhầm phương thức của đối tượng.
