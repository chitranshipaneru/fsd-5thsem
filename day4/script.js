let students = [];

function addStudent() {
    let n = name.value, r = roll.value, c = course.value, m = +marks.value;

    if (!n || !r || !c || m < 0 || m > 100) return alert("Enter valid details");

    let g = m >= 90 ? "A+" : m >= 80 ? "A" : m >= 70 ? "B" :
            m >= 60 ? "B" : m >= 50 ? "C" : "F";

    students.push({n,r,c,m,g});
    show();
}

function show() {
    studentTable.innerHTML = students.map(s =>
        `<tr><td>${s.r}</td><td>${s.n}</td><td>${s.c}</td>
        <td>${s.m}</td><td>${s.g}</td>
        <td><button>Edit</button> <button>Delete</button></td></tr>`
    ).join("");

    total.innerText = students.length;
    average.innerText = students.length ?
        (students.reduce((a,s)=>a+s.m,0)/students.length).toFixed(2) : 0;
}