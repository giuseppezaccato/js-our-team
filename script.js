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

//task seleziono campo in cui scrivere
const teams = document.getElementById('teams');

//task creo funzione per fillare in maniera automatica con un ciclo e il template literal 
function addCards() {
  for (let i = 0; i < teamMembers.length; i++) {

    let card = teamMembers[i];

    teams.innerHTML += `
            <div>
                <div class="card mb-4 " style="width: 18rem;">
                    <img src="${card.img}" alt="${card.name}">
                    <div class="card-body">
                        <ul class="list-group list-group-flush text-center ">
                            <li class="list-group-item">
                                <h5>${card.name}</h5>
                            </li>
                            <li class="list-group-item">${card.role} </li>
                            <li class="list-group-item text-primary">${card.email}</li>
                        </ul>
                    </div>
                </div>
            </div>
    `

  }
};

//task invoco la funzione
addCards();

//task eventlistener e selezione submit
const sub = document.getElementById("sub");

sub.addEventListener("click", function (event) {

  event.preventDefault();

  //task collect values di tutti i campi input
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;
  const img = document.getElementById("img").value;

  //task push nell'array del nuovo obj con tutte le chiavi corrispondenti
  teamMembers.push({
    name,
    role,
    email,
    img
  });

  console.log(teamMembers);

  //task svuoto il campo teams
  teams.innerHTML = '';

  //task re-invoco la funzione per aggiungere anche la card appena creata col FORM
  //* NB il form autocompila richiamando le chiavi inserite con l'input,
  //*  grazie al ${} nel template literal
  addCards();
});

