const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Dichiaro la constante del container per l'imput
const row = document.querySelector(".rows");
const header = document.querySelector("header")

// Variabile per accumulo degli output
let cards = "";

// Cicliamo l'array degli oggetti
for(let i = 0; i < teamMembers.length; i++){
  const member = teamMembers[i];
  // Aggiungo ogni card tramite la funzione
  cards += createCard(member)
  console.log(cards);
}

// Funzione per la creazione delle card
function createCard(obj) {

  const { name, role, email, img} = obj;

  const card = `
        <div class="card">
            <img src="${img}" alt="${name}">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${role}</p>
                <a href="#" class="email">${email}</a>
            </div>
        </div>`;

  return card
}

// Output delle cards nel container

row.innerHTML = cards;

const title = document.createElement("h1");
header.appendChild(title);
title.innerText = "IL NOSTRO TEAM";
