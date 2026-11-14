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

// ---------------------------------------------------------------------------//
// Uppgift 4

// add är en variabel som innehåller en funktion
// num1 och num2 är de två talen som funktionen tar emot
const add = (num1, num2) => {
  // Jämförelser, bara för att testa
  console.log(num1 == 0);
  console.log(num2 === '0');
  console.log(num2 === 0);
  console.log(num1 == NaN);

  // Ternary: skriver truthy eller falsy beroende på num1
  console.log(num1 ? "truthy" : "falsy");

  // Går bara in här om båda är riktiga tal
  if (
    num1 !== null && num1 !== undefined &&
    num2 !== null && num2 !== undefined &&
    typeof num1 === "number" && typeof num2 === "number" &&
    !isNaN(num1) && !isNaN(num2)
  ) {
    // return skickar tillbaka summan
    return num1 + num2;
  } else {
    console.log("Fel: ogiltig input");
  }
};

/*
Reflektion uppgift 4

Ternary operator:
Det är ett kortare sätt att skriva if/else på en rad.
Det ser ut så här: villkor ? om sant : om falskt.
En if-sats kan ha många rader kod inuti. En ternary passar bäst
när man bara ska välja mellan två värden.

Skillnaden mellan == och ===:
== jämför bara värdet, så "0" == 0 blir true.
=== jämför både värde och typ, så "0" === 0 blir false.

Hur jag kollade att parametrarna inte är null:
Jag skrev num1 !== null && num2 !== null, och samma sak för undefined.
Sedan kollade jag att båda är tal med typeof och !isNaN. Det behövs
eftersom NaN också räknas som ett tal (typeof NaN är "number").
*/