const materii = [
  { name: "Anatomie si Embriologie", credite: "4", semestru: "1", an: "1" },
  { name: "Fiziologie", credite: "4", semestru: "1", an: "1" },
  { name: "Biochimie", credite: "3", semestru: "1", an: "1" },
  { name: "Biochimia Cavitatii Orale", credite: "3", semestru: "1", an: "1" },
  { name: "Biofizica", credite: "3", semestru: "1", an: "1" },
  { name: "Histologie", credite: "3", semestru: "1", an: "1" },
  { name: "Istoria Medicinei", credite: "2", semestru: "1", an: "1" },
  { name: "Prim Ajutor Medical", credite: "2", semestru: "1", an: "1" },
  { name: "Comunicare Medicala", credite: "2", semestru: "1", an: "1" },
  { name: "Stiinte Comportamentale", credite: "2", semestru: "1", an: "1" },
  {
    name: "Morfologia Dintilor si a Arcadelor Dentare",
    credite: "5",
    semestru: "2",
    an: "1",
  },
  { name: "Anatomie si Embriologie", credite: "4", semestru: "2", an: "1" },
  { name: "Fiziologie", credite: "4", semestru: "2", an: "1" },
  { name: "Histologie", credite: "4", semestru: "2", an: "1" },
  {
    name: "Biologie Celulara si Moleculara",
    credite: "4",
    semestru: "2",
    an: "1",
  },
  {
    name: "Informatica Medicala si Biostatistica",
    credite: "3",
    semestru: "2",
    an: "1",
  },
  { name: "Limbi Moderne/Limba Romana", credite: "2", semestru: "2", an: "1" },
  {
    name: "Invatare si Comunicare Eficienta",
    credite: "2",
    semestru: "2",
    an: "1",
  },
  { name: "Educatie Fizica", credite: "1", semestru: "2", an: "1" },
  { name: "Materiale Dentare", credite: "5", semestru: "1", an: "2" },
  { name: "Anatomie Patologica", credite: "5", semestru: "1", an: "2" },
  { name: "Fiziopatologie | Imunologie", credite: "5", semestru: "1", an: "2" },
  { name: "Microbiologie", credite: "3", semestru: "1", an: "2" },
  {
    name: "Morfologia Dintilor si a Arcadelor Dentare",
    credite: "4",
    semestru: "1",
    an: "2",
  },
  {
    name: "Etica si Integritate Academica",
    credite: "2",
    semestru: "1",
    an: "2",
  },
  {
    name: "Alergologie si Imunologie Clinica",
    credite: "2",
    semestru: "1",
    an: "2",
  },
  { name: "Psihologie Medicala", credite: "2", semestru: "1", an: "2" },
  { name: "Fiziopatologie Aplicata", credite: "2", semestru: "1", an: "2" },
  {
    name: "Tehnologia Protezelor Dentare",
    credite: "5",
    semestru: "2",
    an: "2",
  },
  { name: "Materiale Dentare", credite: "5", semestru: "2", an: "2" },
  { name: "Ergonomie", credite: "4", semestru: "2", an: "2" },
  { name: "Parodontologie", credite: "3", semestru: "2", an: "2" },
  { name: "Genetica", credite: "2", semestru: "2", an: "2" },
  { name: "Limbi Moderne/Limba Romana", credite: "2", semestru: "2", an: "2" },
  {
    name: "Metodologia Cercetarii Stiintifice",
    credite: "3",
    semestru: "2",
    an: "2",
  },
  { name: "Microbiologie", credite: "2", semestru: "2", an: "2" },
  {
    name: "Morfo-funcționalitatea Sistemului Stomatognat din Perspectiva Ultrasonografică ",
    credite: "5",
    semestru: "2",
    an: "2",
  },
  { name: "Educatie Fizica", credite: "2", semestru: "2", an: "2" },
  { name: "Odontoterapie Restauratoare", credite: "5", semestru: "1", an: "3" },
  {
    name: "Tehnologia Protezelor Dentare",
    credite: "5",
    semestru: "1",
    an: "3",
  },
  { name: "Medicina Interna", credite: "4", semestru: "1", an: "3" },
  { name: "Prevenţie Oro-Dentară", credite: "5", semestru: "1", an: "3" },
  { name: "Farmacologie", credite: "5", semestru: "1", an: "3" },
  {
    name: "Chirurgie Generala. Anestezie si Terapie Intensiva",
    credite: "2",
    semestru: "1",
    an: "3",
  },
  { name: "Igiena", credite: "2", semestru: "1", an: "3" },
  { name: "Protetica Dentara", credite: "5", semestru: "2", an: "3" },
  {
    name: "Anestezie si Sedare in Stomatologie",
    credite: "5",
    semestru: "2",
    an: "3",
  },
  { name: "Endodontie", credite: "5", semestru: "2", an: "3" },
  { name: "Preventie Oro-Dentara", credite: "5", semestru: "2", an: "3" },
  { name: "Medicina Interna", credite: "3", semestru: "2", an: "3" },
  {
    name: "Radiologie-Imagistica Medicala",
    credite: "3",
    semestru: "2",
    an: "3",
  },
  { name: "Odontoterapie Restauratoare", credite: "5", semestru: "1", an: "4" },
  { name: "Oncluziologie", credite: "5", semestru: "1", an: "4" },
  { name: "Pedodontie", credite: "5", semestru: "1", an: "4" },
  { name: "Protetica Dentara", credite: "4", semestru: "1", an: "4" },
  {
    name: "Boli Infectioase. Epidemiologie",
    credite: "3",
    semestru: "1",
    an: "4",
  },
  {
    name: "Radiologie - Imagistica in Stomatologie",
    credite: "4",
    semestru: "1",
    an: "4",
  },
  { name: "Sisteme CAD/CAM", credite: "2", semestru: "1", an: "4" },
  { name: "Endodontie", credite: "5", semestru: "2", an: "4" },
  {
    name: "Chirurgie Orala si Maxilo-Faciala",
    credite: "4",
    semestru: "2",
    an: "4",
  },
  { name: "Protetica Dentara", credite: "4", semestru: "2", an: "4" },
  { name: "Otorinolaringologie (ORL)", credite: "2", semestru: "2", an: "4" },
  { name: "Neurochirurgie", credite: "2", semestru: "2", an: "4" },
  { name: "Endocrinologie", credite: "2", semestru: "2", an: "4" },
  { name: "Neurologie. Psihiatrie", credite: "2", semestru: "2", an: "4" },
  { name: "Oftalmologie", credite: "2", semestru: "2", an: "4" },
  { name: "Pediatrie", credite: "2", semestru: "2", an: "4" },
  {
    name: "Chirurgie Orala si Maxilo-Faciala",
    credite: "5",
    semestru: "1",
    an: "5",
  },
  { name: "Parodontologie", credite: "5", semestru: "1", an: "5" },
  { name: "Reabilitare Orala", credite: "5", semestru: "1", an: "5" },
  {
    name: "Managementul Cabinetului Dentar",
    credite: "4",
    semestru: "1",
    an: "5",
  },
  { name: "Implantologie Stomatologica", credite: "3", semestru: "1", an: "5" },
  { name: "Promovarea Sanatatii", credite: "2", semestru: "1", an: "5" },
  { name: "Estetica Dentara", credite: "2", semestru: "1", an: "5" },
  { name: "Medicina Legala", credite: "2", semestru: "1", an: "5" },
  {
    name: "Urgente Medico-Chirurgicale in Stomatologie",
    credite: "5",
    semestru: "2",
    an: "5",
  },
  {
    name: "Ortodontie si Ortopedie Dento Faciala",
    credite: "5",
    semestru: "2",
    an: "5",
  },
  { name: "Parodontologie", credite: "5", semestru: "2", an: "5" },
  { name: "Protetica Dentara", credite: "5", semestru: "2", an: "5" },
  { name: "Odontoterapei Restauratoare", credite: "4", semestru: "2", an: "5" },
  { name: "Dermatovenerologie", credite: "2", semestru: "2", an: "5" },
  {
    name: "Chirurgie Orala si Maxilo-Faciala",
    credite: "4",
    semestru: "2",
    an: "6",
  },
  { name: "Impantologie Stomatologica", credite: "4", semestru: "1", an: "6" },
  {
    name: "Ortodontie si Ortopedie-Dento-Faciala",
    credite: "4",
    semestru: "1",
    an: "6",
  },
  { name: "Protetica Dentara", credite: "4", semestru: "1", an: "6" },
  { name: "Patologie Orala", credite: "3", semestru: "1", an: "6" },
  { name: "Pedodontie", credite: "3", semestru: "1", an: "6" },
  {
    name: "Sanatate Orala si Comunitara",
    credite: "3",
    semestru: "1",
    an: "6",
  },
  { name: "Reabilitare Orala", credite: "3", semestru: "1", an: "6" },
  {
    name: "Chirurgie Orala si Maxilo-Faciala",
    credite: "4",
    semestru: "2",
    an: "6",
  },
  {
    name: "Organizare si Legislatie Profesionala",
    credite: "4",
    semestru: "2",
    an: "6",
  },
  {
    name: "Fizioterapie in Medicina Dentara",
    credite: "3",
    semestru: "2",
    an: "6",
  },
  { name: "Protetica Dentara", credite: "3", semestru: "2", an: "6" },
  { name: "Pedodontie", credite: "3", semestru: "2", an: "6" },
  { name: "Reabilitare Orala", credite: "3", semestru: "2", an: "6" },
  {
    name: "Ortodontie si Ortopedie-Dento-Faciala",
    credite: "3",
    semestru: "2",
    an: "6",
  },
  {
    name: "Sanatate Orala si Comunitara",
    credite: "3",
    semestru: "2",
    an: "6",
  },
];

const form = document.querySelector("#form"),
  submit = document.querySelector("#submit"),
  wrapper = document.querySelector("#wrapper"),
  final = document.querySelector("#final");

function mediaArit() {
  const materii = document.querySelectorAll("#materie");
  let total = 0;
  let i = 0;
  materii.forEach((materie) => {
    if (materie.children[3].value != "necompletat") {
      total += Number(materie.children[3].value);
      i++;
    }
  });
  return (total / i).toFixed(2);
}

function mediaPond() {
  const materii = document.querySelectorAll("#materie");
  let total = 0;
  let i = 0;

  materii.forEach((materie) => {
    if (materie.children[3].value != "necompletat") {
      total +=
        Number(materie.children[3].value) * Number(materie.children[1].value);
      i += Number(materie.children[1].value);
    }
  });
  return (total / i).toFixed(2);
}

function filterByAnSem(materie) {
  if (
    materie.an == form.children[1].value &&
    materie.semestru == form.children[3].value
  ) {
    return true;
  }
  return false;
}

function formSubmit(e) {
  e.preventDefault();
  wrapper.innerHTML = "";

  let materiiFiltered = [];
  materiiFiltered = materii.filter(filterByAnSem);

  //Create an element for each Materie then add it to the DOM
  materiiFiltered.forEach((materie) => {
    let div = document.createElement("div");
    div.id = "materie";
    let name = document.createElement("p");
    name.innerText = materie.name;
    let credit = document.createElement("li");
    credit.innerText = `Credite: ${materie.credite}`;
    credit.value = materie.credite;
    let label = document.createElement("label");
    label.innerText = "Nota";
    let nota = document.createElement("select");
    nota.name = "Nota";
    nota.id = "nota";
    nota.innerHTML = `<option value="necompletat" selected="selected">Necompletat</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>`;
    div.appendChild(name);
    div.appendChild(credit);
    div.appendChild(label);
    div.appendChild(nota);
    wrapper.appendChild(div);
  });

  //Add calculeaza button to the end of Wrapper
  let button = document.createElement("button");
  button.innerText = "Calculeaza";
  button.id = "calculate";
  wrapper.appendChild(button);

  return Promise.resolve(button);
}

submit.addEventListener("click", async (e) => {
  const button = await formSubmit(e);
  button.addEventListener("click", (e) => {
    e.preventDefault();
    final.innerHTML = "";

    let mediaAritmetica = document.createElement("p");
    mediaAritmetica.innerText = `Media Aritmetica: ${mediaArit()}`;
    let mediaPonderata = document.createElement("p");
    mediaPonderata.innerText = `Media Ponderata: ${mediaPond()}`;
    let mediaMediilor = document.createElement("p");
    let medMed = Number(mediaArit()) + Number(mediaPond());
    mediaMediilor.innerText = `Media Mediilor: ${(medMed / 2).toFixed(2)}`;
    final.appendChild(mediaAritmetica);
    final.appendChild(mediaPonderata);
    final.appendChild(mediaMediilor);
  });
});
