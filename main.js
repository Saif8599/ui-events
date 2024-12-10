/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction12 = document.querySelector("a:nth-of-type(12)");

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction12.addEventListener("click", jump);

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jump() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction12.classList.toggle("jump");
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction12.addEventListener("animationend", jump);

// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...

// Stap 2: addEventListener
// bibberLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...

// Interaction 1
let interaction1 = document.querySelector("a:nth-of-type(1)");
let body = document.querySelector("body");

function changeBackgroundColor() {
  body.classList.toggle("changeBackgroundColor");
}
interaction1.addEventListener("click", changeBackgroundColor);

// Interaction 2
let interaction2 = document.querySelector("a:nth-of-type(2)");

function spinButton() {
  interaction2.classList.toggle("spinButton");
}
interaction2.addEventListener("click", spinButton);

// Interaction 3
let interaction3 = document.querySelector("a:nth-of-type(3)");
let modal = document.querySelector("a:nth-of-type(3)");

function modalPopup() {
  modal.classList.toggle("modal");
}
interaction3.addEventListener("click", modalPopup);

// Interaction 4
let interaction4 = document.querySelector("a:nth-of-type(4)");

function functie() {
  interaction4.classList.toggle("moveOut");
}
interaction4.addEventListener("click", functie);

// Interaction 5
let interaction5 = document.querySelector("a:nth-of-type(5)");

if (interaction5) {
  // Voeg een 'dblclick' event listener toe
  interaction5.addEventListener("dblclick", () => {
    interaction5.classList.toggle("btn-5");
  });
} else {
  console.log("Element niet gevonden!");
}

// Interaction 6
let interaction6 = document.querySelector("a:nth-of-type(6)");

if (interaction6) {
  interaction6.addEventListener("keyup", (event) => {
    if (event.key === "F" || event.key === "f") {
      interaction6.classList.toggle("jumpAround");
    }
  });
} else {
  console.log("Element niet gevonden!");
}

// Interaction 7
let interaction7 = document.querySelector("a:nth-of-type(7)");

if (interaction7) {
  // Voeg een 'mouseover' event listener toe
  interaction7.addEventListener("mouseover", () => {
    interaction7.classList.add("shake");
  });

  // Verwijder de class na de animatie, zodat het opnieuw kan starten
  interaction7.addEventListener("animationend", () => {
    interaction7.classList.remove("shake");
  });
} else {
  console.log("Element niet gevonden!");
}

// Interaction 8
let interaction8 = document.querySelector("a:nth-of-type(8)");

if (interaction8) {
  interaction8.addEventListener("focus", () => {
    interaction8.classList.add("focusAnimation");
  });

  // Verwijder de animatieklasse na de animatie, zodat het opnieuw kan starten
  interaction8.addEventListener("animationend", () => {
    interaction8.classList.remove("focusAnimation");
  });
} else {
  console.log("Element niet gevonden!");
}

// Interaction 9
let interaction9 = document.querySelector("a:nth-of-type(9)");

if (interaction9) {
  interaction9.addEventListener("dragstart", () => {
    interaction9.classList.add("dragging");
  });

  interaction9.addEventListener("dragend", () => {
    interaction9.classList.remove("dragging");
  });
} else {
  console.log("Element niet gevonden!");
}

// Interaction 10
let interaction10 = document.querySelector("a:nth-of-type(10)");

if (interaction10) {
  window.addEventListener("resize", () => {
    interaction10.classList.add("resizing");

    // Verwijder de animatieklasse na de animatie om deze opnieuw te laten starten
    interaction10.addEventListener("animationend", () => {
      interaction10.classList.remove("resizing");
    });
  });
} else {
  console.log("Element niet gevonden!");
}
