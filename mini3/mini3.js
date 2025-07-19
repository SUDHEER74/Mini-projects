let students = [
     {name:"Sudheer",Age:21},
     {name:"Surya",Age:20},
     {name:"Mahi",Age:22},
];
function A() {
    const list = document.getElementById("ul");
    list.innerHTML = "";
    
    students.forEach((student,index) => {
        let li = document.createElement("li");
        li.textContent = `${student.name} -Age: ${student.Age}`;
        list.appendChild(li);

});

}
function B(){
    students.sort((a,b) =>  a.name.localeCompare(b.name));
    A();
}
function C(){
    students.sort((a,b) => a.Age -b.Age);
    A();
}
