// Uppgift 2

// Före blocket
console.log(a);
// console.log(b);
// console.log(c);

{
  var a = "jag är var";
  let b = "jag är let";
  const c = "jag är const";

  // Inuti blocket
  console.log("Inuti blocket:", a, b, c);
}

// Efter blocket
console.log("Efter blocket, a:", a);
// console.log("Efter blocket, b:", b);
// console.log("Efter blocket, c:", c);

/*
Reflektion uppgift 2

Skillnad: var är inte blockbundet och går att använda utanför blocket.
let och const är blockbundna och finns bara inuti blocket. let kan
tilldelas nytt värde, const kan inte det.

Placering av console.log():
- Före blocket: a ger undefined (var hoistas). b och c ger ReferenceError.
- I blocket: alla tre fungerar.
- Efter blocket: a fungerar, b och c ger ReferenceError (is not defined).

Raderna som ger fel är bortkommenterade så att koden inte kraschar.
*/
// ---------------------------------------------------------------------------//
// Uppgift 3

// add är en variabel som innehåller en funktion
// num1 och num2 är de två talen som funktionen tar emot
const add = (num1, num2) => {
  // return skickar tillbaka summan
  return num1 + num2;
};

/*
Reflektion uppgift 3

Om jag hade använt let istället för const:
Det hade fungerat lika bra. Skillnaden är att med let kan jag senare
ändra vad add innehåller. Med const går det inte att ändra.

Funktionsdeklaration istället:
function add(num1, num2) {
  return num1 + num2;
}

Vad return betyder:
Funktionen skickar tillbaka ett svar. Svaret kan jag sedan skriva ut
eller spara i en variabel. När return körs är funktionen färdig.
*/