let student1 :{name:string,id:number,class:string}={
    name:'quan le',
    id:17,
    class:'17A2',
}
let student2 :{name:string,id:number,class:string}={
    name:'nghe an',
    id:18,
    class:'18A1',
}
let student3 :{name:string,id:number,class:string}={
    name:'vinh',
    id:19,
    class:'17A2',
}

let arr :{name:string,id:number,class:string}[]=[student1,student2,student3];
function filterStudents(arr:{name:string,id:number,class:string}[],class1 :string):object[]{
    let filters=arr.filter(e=>e.class===class1);
    return filters;
}
console.log(filterStudents(arr,'17A2'));