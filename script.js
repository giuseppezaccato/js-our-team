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
const container = document.querySelector('.container');

for (let i = 0; i < teamMembers.length; i++) {

  let card = teamMembers[i];

  container.innerHTML += `
        <div>
            <div class="d-flex align-items-center pb-5 justify-content-center  " style="width: 18rem;">
                <img src="${card.img}" alt="${card.name}">
                <div>
                    <ul class="list-group text-center list-group-flush">
                        <li class="list-group-item"> <h5>${card.name}</h5> </li>
                        <li class="list-group-item">${card.role} </li>
                        <li class="list-group-item text-primary">${card.email}</li>
                    </ul>
                </div>
            </div>

        </div>
    `





}