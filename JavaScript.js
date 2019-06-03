// ZMIENNA
	// Składa się z:
	// Nazwa (identyfikator)
	// Miejsce w pamięci (adres)
	// Wartość

	// Dwa procesy
		// Deklaracja
		// Inicjalizacja (przypisanie wartości)

// var, let i const

var a = "a - zakres globalny";
let b = "b - zakres globalny"
const c = "c - zakres globalny"

{
	var a = "a - zakres lokalny";
	let b = "b - zakres lokalny";
	const c = "c - zakres lokalny"
	console.log(a); // "a - zakres lokalny";
	console.log(b); // "b - zakres lokalny";
	console.log(c); // "c - zakres lokalny";
}

console.log(a); // "a - zakres lokalny";
console.log(b); // "b - zakres globalny";
console.log(c); // "c - zakres globalny";

// let, const - zasięg zmiennych w zakresie blokowym (w tym zakres funkcji). var - zakres funkcji (bez zakresu blokowego)

// Ponowna deklaracja
	// let,const - błąd 
		// przykład
			// let a = 5;
			// let a = 10; // błąd
			// const a = 5;
			// const a = 10; // błąd
	// var - nadpisuje
		// przykład
			// var a = 5;
			// var a = 10; // nie ma błędu

// HOISTING - przenoszenie DEKLARACJI zmiennej var i funkcji, na sam początek zakresu kodu. 
// Czyli, jeżeli jest w zakresie golbalnym (funckja lub var), to na początek zakresu globalnego, jeżeli zmienna jest w zakresie funkcji, to na początek zakresu funkcji

console.log(zmienna);

var zmienna = 1;

mojaFunkcja();

function mojaFunkcja() {
	console.log("hello");

	console.log(zmienna); // odczyta normlanie funkcje

	// console.log(nieistniejeTaZMienna); // RefferenceError

	console.log(istniejeTutaj);

	var istniejeTutaj = 2;

	funkcjaWewnetrzna();

	function funkcjaWewnetrzna() {
		console.log("Wewnątrz"); // zadziała
	}
};

// generalnie do poniższego przykłądu z hoistingiem możemy podjeśc tak
// 	Przykład:
// 		console.log(d);
// 		var d = 22;
// 	Jak widzi to program:
// 		var d;
// 		console.log(d);
// 		d = 22;
	// Czyli deklaracja zmeinnej przenoszona na góre scope'a

// console.log(istniejeTutaj); // RefferenceError
// funkcjaWewnetrzna(); // RefferenceError

// HOISTING w let i const - NIE ZADZIAŁA! będzie w "TYMACZASOWEJ STREFIE ŚMIERCI"
	// let i const
	//	console.log(d); // wyrzuci błąd
	//	let d = 22;

// WŁAŚCIWOŚCI OBIEKTU GLOBALNEGO

	var globVar = 1;
	let globLet = 2;
	const globConst = 3;

	// Teraz wpisując w przeglądarce w consoli jedno z powyższych (globVar, globLet, globConst)
	// to otrzymamy normlanie ich wartości, natomiast jak wpsizemy obiekt globlany window i zoabczymy jego podgląd, to zobaczymy, że zmienna globVar będzie w niej zapisana jako wartość
	// będzie -> globVar: 1
	// natomiast NIE BĘDZIE w obiekcie window globLet i globConst! 

	// LET vs. CONST
	// Przypisać nową wartośc możesz tylko do let, do const nie, bo to stała!

	// CONST - ZABEZPIECZONA PRZED...
		// Czy const zabezpiecza wartość? TAK(typ prosty) i NIE (obiekt) :)
		// Czy const zabezpiecza zmienną? TAK, przed przypisaniem innej wartości
		// Przykłady:
			const aNumber = 5;
			// a = 6; // wyrzuci błąd: TypeError: Assignment to constant variable

			// teraz dla obiektu (tablica to też obiekt)
			const bArray = ['a', 'b'];
			bArray[2] = 'c';
			bArray[0] = 'a1';
			console.log(bArray); // dostaniemy zmienioną tablicę, ['a1','b','c'] - chodzi o to, że ta tablica będzie zawsze przypisana do zmiennej, ale nie koniecznie taka sama tablica

			// const bArray = ['a', 'b']; // teraz otrzymamy bład
			// czyli jeśli damy w const obiekt, to to będzie ten obiekt, ale on sam w sobie może ewoluować

	// DEKLARACJA BEZ INICJALIZACJI
	// czyli:
	// let a; - undefined
	// var a; -undefined
	// const a; - BŁĄD! - będzie błąd Missing initilazer const declaration

	// Kiedy const, Kiedy let, kiedy var
	// Zapamiętaj: Użyj const, chyba że z jakiegoś powodu zmienisz w przyszłości zawartośc na inną wartość (nie chodzi o samą wartośc tylko inną wartość)
	// Jak nie możesz użyć const, użyj let.
	// Użyj var jeśli z jakiegoś powodu zależy Ci na jego odmiennych właściwościach.


//  Immediately Invoked Function Expression (IIFE)
//  Dobry link doo tego: https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174
//  Generalnie używamy, żeby zapezpieczyć naszą funkcję przed ponownym wywołaniem. (Doczytaj jeszcze)

//  TYPY PROSTE: string, numer, Boolean, null, undefined, symbol
// 	Przy przypisaniu jednej zmiennej do drugiej:
// 	1. Tworzona jest nowa kopia wartości
// 	2. Nowa wartość ma przydzielone nowe (odrębne) miejsce w pamięci
// 	3. Nowa wartość nie ma żadnych związków ze starą wartością

//  TYP REFERENCYJNY: Obiekty przede wszystkim Objekt ogólny, funkcja, tablica

// SKOŃĆZYŁEŚ NA 3:40 o obiektahc
