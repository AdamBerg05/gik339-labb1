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

// Uppgift 5

const num1 = 0;
let arg1;
let sum = false;

console.log("Test 1");
console.log(add(sum, 1));

console.log("Test 2");
console.log(add("0", 3));

console.log("Test 3");
console.log(add(3, "num1"));

console.log("Test 4");
console.log(add(-5, num1));

console.log("Test 5");
console.log(add(arg1, 7));

console.log("Test 6");
console.log(add());

console.log("Slutvärden:");
console.log(num1);
console.log(sum);

/*
Reflektion uppgift 5

Parameter, variabel och argument:
- Parameter: namnet i funktionens parentes, t.ex. num1 och num2 i add.
- Variabel: en låda med ett namn som håller ett värde, t.ex. sum.
- Argument: värdet jag skickar in när jag anropar funktionen, t.ex. -5.

Sista outputen (num1):
Det blir 0. num1 utanför funktionen ändras aldrig. Parametern num1
inuti funktionen är en egen variabel som bara finns medan funktionen körs.

Test 4, add(-5, num1) steg för steg:
1. Parametrarna får num1 = -5 och num2 = 0.
2. Jämförelserna ger false, false, true, false.
3. Ternaryn skriver "truthy", eftersom -5 är truthy.
4. If-satsen släpps igenom, eftersom båda är tal och inte null/undefined.
5. Funktionen returnerar -5.

Övriga anrop returnerar undefined, eftersom if-satsen inte släpper
igenom dem (sträng, false, undefined eller inga argument).
*/
