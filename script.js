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
    name: "Riscuri Asociate cu Consumul de Droguri",
    credite: "2",
    semestru: "1",
    an: "1",
  },
  { name: "Educatie Fizica", credite: "1", semestru: "2", an: "1" },
  { name: "Engleza", credite: "2", semestru: "2", an: "1" },
];

const form = document.querySelector("#form"),
  submit = document.querySelector("#submit"),
  wrapper = document.querySelector("#wrapper"),
  final = document.querySelector("#final");

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
