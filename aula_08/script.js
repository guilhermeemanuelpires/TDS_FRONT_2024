const alunos = [
    {
        nome: "Thiago Araujo",
        ra: "1146443"
    },
    {
        nome: "Bruno",
        ra: "2847378"
    },
    {
        nome: "Pedro",
        ra: "3657856"
    },
    {
        nome: "Diovana",
        ra: "3570953"
    }
];


const body = document.getElementsByTagName("body")[0];

const h1 = window.document.createElement("h1");

h1.innerHTML = "Alunos";

const ol = window.document.createElement("ol");
const li = window.document.createElement("li");

li.innerHTML = "Guilherme"

ol.appendChild(li)

body.appendChild(h1);
body.appendChild(ol)
