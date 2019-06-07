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

//  FAKING NAMESPACES
	//  Generalnie tych faking namespaces używamy przy budownaiu np. frameworka, albo biblioteki
	//  Chodzi o to, żeby tworzyć dla naszych zmiennych pewien konterner w postaci obiektu,
	//  żeby te zmeinne nie były dostępne globalnie i nikt ich nie nadpisał.
	//  Przykład:
	var english = {
		greetings: "Nasza zmienna"
	};
	console.log(english.greetings);

// FUNKCJE
	// Function is a special type of Object!
	function greet() {
		console.log('Hi');
	}

	// ponieważ funckje to obiekty, możemy po kropce się odwołać i dodać właściwość do funkcji
	greet.language = "english";
	console.log(greet); // dostaneisz tekst całej funkcji, którą napsiałeś
	console.log(greet.language); // zwróci 'english'

// FUNCTION STATEMENTS(DECLARATION) AND FUNCTION EXPRESSIONS

	// Expression: A unit of a code that results in a Value
	// It doesn't have to save to a variable
	// Expression returns a value!
		// Przykłady:
			// a = 3;
			// 1 + 2;
			// a = {greeting: 'hi'}

	// Statement: np. 'if', czyli statement, tylko robi jakąs robotę, ale wartość zwraca expression
		// Przykłądy:
			// var a;
			// if (a===3) {
			// wewnątrz już będzie expression, bo if zwróci 'true' lub 'false'
			// }

	// Poniżej przykład z Function statement, bo nie zwraca żadnej wartości i zaczyna się od słowa "function"
		greet3();
		function greet3() {
			console.log('hi!');
		};

	// Poniżej przykład Function expression, bo masz '=' masz jakąś zmienną, która posiada jakąś wartość (w tym przypadku funkcję - czyli special object)
		var anonymousGreet = function() {
			console.log('hi!');
		};

	// FUNCTION DECLARATION HOISTING
		// Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope. You can use the function before you declared it:
			hoisted(); // logs "foo"

			function hoisted() {
				console.log('foo');
			}

	// FUNCTION EXPPRESSIONS are NOT HOISTED
		// 	notHoisted(); // TypeError: notHoisted is not a function
		//
		// 	var notHoisted = function() {
		// 		console.log('bar');
		// 	};

	// Function scope
		// Variables defined inside a function CANNOT be accessed from anywhere outside the function,
		// because the variable is defined only in the scope of the function. However, a function can access all variables and functions
		// defined inside the scope in which it is defined. In other words, a function defined in the global scope can access all variables defined in the global scope.
		// A function defined inside another function can also access all variables defined in its parent function and any other variable to which the parent function has access.
			// Przykład:
				// The following variables are defined in the global scope
				var num1 = 20,
					num2 = 3,
					name = 'Chamahk';

				// This function is defined in the global scope
				function multiply() {
					return num1 * num2;
				}

				multiply(); // Returns 60

				// A nested function example
				function getScore() {
					var num1 = 2,
						num2 = 3;

					function add() {
						// var example = "zewnętrzna funkcja getScore nie może z tego skorzystać";
						console.log(name + ' scored ' + (num1 + num2));
						return name + ' scored ' + (num1 + num2);
					}

					// console.log(example); //  ReferenceError: example is not defined

					return add();
				}

				getScore(); // Returns "Chamahk scored 5"

				// The inner function forms a closure: the inner function can use the arguments and variables of the outer function,
				// while the outer function cannot use the arguments and variables of the inner function.

	// Muliply-nested functions
		// Functions can be multiply-nested, i.e. a function (A) containing a function (B) containing a function (C). Both functions B and C form closures here,
		// so B can access A and C can access B. In addition, since C can access B which can access A, C can also access A. Thus,
		// the closures can contain multiple scopes; they recursively contain the scope of the functions containing it. This is called scope chaining. (Why it is called "chaining" will be explained later.)
			var d = 4;
			function A(x) {
				function B(y) {
					function C(z) {
						console.log(x + y + z + d);
					}
					C(3);
				}
				B(2);
			}
			A(1); // logs 10 (1 + 2 + 3 + 4)
		// In this example, C accesses B's y and A's x. This can be done because:
		// 	1. B forms a closure including A, i.e. B can access A's arguments and variables.
		//  2. C forms a closure including B.
		// 	3. Because B's closure includes A, C's closure includes A, C can access both B and A's arguments and variables. In other words, C chains the scopes of B and A in that order.

		// 	The reverse, however, is not true. A cannot access C, because A cannot access any argument or variable of B, which C is a variable of. Thus, C remains private to only B.

	// UWAGA!
		// Powyższy przykłąd nie zadziała jak wywołamy go za pomocą A(1)(2)(3)
		// Musimy to zrobić tak, że za każdym razem zwracamy w funkcji funkcję, wtedy zadziałą, czyli:
		// var d = 4;
		// function A(x) {
		// 	return function B(y) {
		// 		return function C(z) {
		// 			console.log(x + y + z + d);
		// 		}
		// 	}
		// }
		// A(1)(2)(3) // logs 10 (1 + 2 + 3 + 4)

	// Name conflicts
		// When two arguments or variables in the scopes of a closure have the same name, there is a name conflict.
		// More inner scopes take precedence, so the inner-most scope takes the highest precedence, while the outer-most scope takes the lowest.
		// This is the scope chain. The first on the chain is the inner-most scope, and the last is the outer-most scope. Consider the following:
			function outside() {
				var x = 5;
				function inside(x) {
					return x * 2;
				}
				return inside;
			}
			outside()(10); // returns 20 instead of 10
		// The name conflict happens at the statement return x and is between inside's parameter x and outside's variable x.
		// The scope chain here is {inside, outside, global object}.
		// Therefore inside's x takes precedences over outside's x, and 20 (inside's x) is returned instead of 10 (outside's x).



//  Immediately Invoked Function Expression (IIFE)
		//  Dobry link doo tego: https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174
		//  Generalnie używamy, żeby zapezpieczyć naszą funkcję przed ponownym wywołaniem. (Doczytaj jeszcze)


//  TYPY PROSTE: string, numer, Boolean, null, undefined, symbol
	// 	Przy przypisaniu jednej zmiennej do drugiej:
	// 	1. Tworzona jest nowa kopia wartości
	// 	2. Nowa wartość ma przydzielone nowe (odrębne) miejsce w pamięci
	// 	3. Nowa wartość nie ma żadnych związków ze starą wartością

	let a1 = "jeden";
	let b1 = a1;
	a1 = "dwa";
	console.log("wartość a1:" + a1); // - pokaże dwa
	console.log("wartość b1:" + b1); // - pokaże jeden

	//  TYP REFERENCYJNY: Obiekty przede wszystkim Objekt ogólny, funkcja, tablica
	// Przy przypisaniu jednej zmiennej do drugiej:
	// 1. Przypisany jest tylko nowy adres (nadal mamy tylko jeden obiekt)
	// 2. Obiekt istnieje póki ma choć jedno wiązanie. (brak - wyrzuca z pamięci - odśmiecanie czyli dereferencja)
	// 3. Adres referencja, wskaźnik - nazwy zamiennie dla opisania relacji zmiennej i obiektu