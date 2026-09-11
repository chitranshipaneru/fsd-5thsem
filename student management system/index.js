let students = [];

document.getElementById("submit").onclick = function() {
    let n = document.getElementById("name").value.trim();
    let r = document.getElementById("roll").value.trim();
    let c = document.getElementById("course").value;
    let m = Number(document.getElementById("marks").value);

    if (!n || !r || !c || document.getElementById("marks").value == "")
        return alert("Enter valid details");

    let g = m >= 90 ? "A+" : m >= 80 ? "A" : m >= 70 ? "B+" :
            m >= 60 ? "B" : m >= 50 ? "C" : "F";

    students.push({n,r,c,m,g});
    show();
};

function show() {
    let s = document.getElementById("search").value.toLowerCase();

    document.getElementById("table").innerHTML = students
    .filter(x => x.n.toLowerCase().includes(s) || x.r.includes(s))
    .map(x => `<tr>
        <td>${x.r}</td>
        <td>${x.n}</td>
        <td>${x.c}</td>
        <td>${x.m}</td>
        <td>${x.g}</td>
        <td>${x.m >= 80 ? "Good" : "Average"}</td>
        <td><button>Edit</button> <button>Delete</button></td>
    </tr>`).join("");

    document.getElementById("total").innerText = students.length;
    document.getElementById("average").innerText =
        students.length ? (students.reduce((a,x) => a+x.m,0)/students.length).toFixed(2) : 0;
}

document.getElementById("search").oninput = show;