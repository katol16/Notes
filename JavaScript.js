UWAGA! KOD nie będzie tutaj działał, bo sporo zmeinnych jest nadpisywanych
ale sam kod jest raczej porpawny. Zrób z tego wiele plików np "Clousures", "Functions", itd.

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
// Czyli, jeżeli jest w zakresie golbalnym (funckja lub var), to na początek zakresu globalnego,
// jeżeli zmienna jest w zakresie funkcji, to na początek zakresu funkcji
	console.log(zmienna);

	var zmienna = 1;

	mojaFunkcja();

	function mojaFunkcja() {
		console.log("hello");

		console.log(zmienna); // odczyta normlanie zmienna

		// console.log(nieistniejeTaZMienna); // RefferenceError

		console.log(istniejeTutaj); // zwróci undefined

		var istniejeTutaj = 2;

		funkcjaWewnetrzna(); // zadziała, czyliz wróci "wewnątrz"

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
	// funkcjaWewnetrzna(); // RefferenceError - bo function declaration są hoisted, a nie same wywołania



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

	// Pamiętaj, że moze być zwykłe EXPRESSION, alb zwykły STATMENT
	// oraz FUNCTION STATEMENTS(DECLARATION) AND FUNCTION EXPRESSIONS

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

	// Poniżej przykład Function expression, bo masz '=' masz jakąś zmienną,
	// która posiada jakąś wartość (w tym przypadku funkcję - czyli special object)
		var anonymousGreet = function() {
			console.log('hi!');
		};

	// FUNCTION DECLARATION HOISTING
		// Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope.
		// You can use the function before you declared it:
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

	// FUNCTION CURRYING - Creating a copy of a function but with some preset parameters.
	// Very useful in mathematical situations

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

			(function(name) {
				console.log('inside IIFE: Hello ' + name);
			})("Karol"); // IIFE (klasyczyny przykład)

			// Poniżej dla celów demonstracyjnych zrobiłęm nazwaną (IIFE), co troche nie ma sensu, bo po co to robic, jak i tak nie mozesz sie do niej odwołać.
			// Tutaj po prostu abyś zoabczył, że takie coś też zadziała i consola zwróci 'inside IIFE: Hello Karol'
			(function nazwana(name) {
				console.log('inside IIFE: Hello ' + name);
			})("Karol");

			// Nie Odwołasz się w ten sposób dot ej funckji, bo jest opleciona w nawiasy
				// nazwana("Kamil");

			// Pamiętaj, że to wyrzuci błąd, Ponieważ syntax parser wymaga po słowie kluczowym nazwy funkcji,
			// wymaga, zeby to było function expression, a w naszym przypadku to będzie function statement!
				// function(name) {
				// 	return 'Hello ' + name;
				// }

			// Więc jeśli chcesz mieć function expression zamiast function statement to robisz taki trik:
				(function(name) {
					return 'Hello ' + name;
				});
			// Oczywiście nie wywołasz teraz tej funkcji, jest to zwykły statement
				// (function nazwana(name) {
				// 	console.log('inside IIFE: Hello ' + name);
				// })(imie);


			// ZALETA IIFE
				// Tworzymy nowy plik greet.js ( w załozeniu mamy ten plik a tam po prostu var greetingTwo = "Hola"; )
				// w pliku greet.js tworzymy zmienną greetingTwo, ktora i tak zostanie nadpisna w poniższej funkcji

				// Pamiętajmy jednak, ze jeśli tutaj zrobimy:
					// console.log("z pliku greet.js: "+greetingTwo); // to wyswietli 'Hola' z pliku greet.js

					// (function(name) {
					// 	var greetingTwo = "Hello";
					// 	console.log(greetingTwo + ' ' + name);
					// }('John')); // IIFE

				// Pamiętajmy jednak, ze jeśli tutaj zrobimy:
					// console.log("z pliku greet.js: "+greetingTwo); // to wyswietli 'Hola' z pliku greet.js

				// wiec plus IIFE, jest taki, że mamy pewność, ze np. zmienna zapsiana w IIFE, nie będzie naruszana przez inny kod
				// ani nie naruszy innego kodu, bo nie jesteś w stanie jej wywołać (chyba o to chodzi)


// CLOUSURES - DOMKNIĘCIA
	// Chodzi w gruncie o dostep do zmiennje spoza aktualnego zasięgu
	// Załóżmy, że chcemy uzyskać dostęp do zmiennej poza funkcją, w któ©ej ta zmienna istnieje

	// Poniżej przykłądy, które mogą być technicznie uznawane za "Clousres", ale to nie do końca jest Clousures co do zasady
	// Przykład 1 - RETURN
		function example() {
			const insideVar = "zmienna stworzona w funkcji";
			return insideVar;
		}

		let outsideVar = example();
		console.log(outsideVar); // zwróci "zmienna stworzona w funkcji"

		// Jeśli chcemy zwrócić kilka zmiennych to:
			function example2() {
				const insideVar1 = "zmienna1 stworzona w funkcji";
				const insideVar2 = "zmienna2 stworzona w funkcji";
				return [insideVar1, insideVar2];
			}

			let outsideVar1 = example2()[0];
			let outsideVar2 = example2()[1];
			console.log(outsideVar1); // zwróci "zmienna1 stworzona w funkcji"
			console.log(outsideVar2); // zwróci "zmienna2 stworzona w funkcji"

	// Przykład 2 - ZAKRESY
		// Tutaj też to jest uznawane troche za Clousrues,
		// bo funkcja userInfo, korzysta ze stałej zdefiniowanej wyżej, w zakresie globlanym (userAge)
		// Wciąż to nie jest do końća CLousures
		// Zasięg leksykalny jest częścią mechanizmu CLOSURE.
		const userAge = 23;

		const userInfo = function() {
			const userName = "Adam";
			return userName + userAge
		}

		const newUser = userInfo();
		console.log(newUser);

	// TERAZ co to jest CLOSURES (DOMKNIĘCIA)
		// Domknięcia występują wtedy gdy funkcja może zapamiętać i uzyskać dostęp
		// do swojego zakresu leksykalnego, nawet po jej wywołaniu na zewnątrz tego zakresu

		// Kolejna definicja:
		// Domknięcie to dostęp do zmiennej, która została stworzona wewnątrz zakresu innej funkcji,
		// która zakończyła już swoje działania.

		// PRZYKŁADY
			function hello(name) {
				return function(day) {
					console.log(name+" "+day);
				}
			}

			const user = hello("Jan");
			console.log(user); // wyświetli nam funkcje
			console.log(user("środa")); // wyświetli "Jan środa"
			// Tutaj chodzi o to, że ta wartość "name" została zapamiętana,
			// mimo tego, że funckja hello, zwróciła nam funkcje i się jej działanie zakonczylo, wiec nie powinno być dostępu do "name".
			// Wywołujemy funkcję w zasiegu globalnym user("środa"), a mimo wszystko mamy dostęp do tego "name".
			// Jednak dzięki CLOUSURES mamy dostęp do "name" w tej wewnętrznej zwracanej funkcji

			// Gdzie to dokładnie siedzi?
			// wpisz sobie console.dir(user); - tam zobaczysz Scopes, wewnątrz tego będzie Clousure, a tam będzie nasze name: "Jan".

			// Kolejny przykład
				const dodaj = function(a) {
					let b = 10;
					return function(c) {
						return a + b + c;
					}
				}

				const dodajWszystko = dodaj(10);
				console.log(dodajWszystko); // to jest funkcją, więc zwróci funkcje
				console.log(dodajWszystko(10)); // zwróci 30
			// Następny
				const dodaj2 = function(a) {
					let b = 10;
					return function(c) {
						let d = 10;
						return function(e) {
							return a + b + c + d + e
						}
					}
				}

				const dodajWszystko2 = dodaj2(10);
				console.log(dodajWszystko2); // zwróci funkcje
				console.log(dodajWszystko2(10)(10)); // zwróci 50

			// WAŻNY PRZYKŁAD
				function licznik(start) {
					let liczbaWywolan = start;

					return function() {
						return ++liczbaWywolan;
					}
				};

				const count = licznik(0);
				console.log(count); // zwróci funkcję
				count(); // tu zwróci 1 i zapamięta to jeden
				count(); // tu doda do 1, więc zwróci 2
				console.log(count()); // // tu doda do 2, więc zwróci 3
				// Powyższy rpzykłąd świadczy o tym, że mamy możliwośc modyfikowania naszego let liczbaWywolan
				// Nie tylko mamy do niej dostęp ale możemy się z nią "komunikować"
				// Mamy tu "dwu stronną" relację, możemy modyfikować nasz parametr

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


// CALLBACKS (Samuraj programowania)
	// Funkcja jako first-class objects (pełnoprawny obiekt)
	// Czyli może być używana jako każdy inny obiekt

	// Funkcje jako first-class objects - oznacza to, że funkcje są pełnoprawnymi obiektami i mogą być wykorzystywane jak inne obiekty.
	// Funkcje mogą być np. przekazywane do innej funckji jako argument czy zwracane z nich dokłądnie tak jak inne wartości.
	// Można użyć funkcji jako argumentu w innej funkcji i zwrócić funckje w funckji (za pomocą return)

	// CALLBACK - funckja wywołania zwrotnego (callback function)
	// To funkcja, którą przekazujemy jako argument, do funkcji, którą wywołujmey
	// CALLBACK (callback function), to funckja, która jest wprowadzana jako argument do innej funkcji w celu wywołanie ich wewnątrz funkcji.

	// FUNKCJA WYŻSZEGO RZĘDU(POZIOMU) -> HIGHER-ORDER(LEVEL) FUNCTION
	// Jest to funkcja zawierajaca CALLBACK.
	// Funkcje wyższego rzędu (Higher-order functions) to funkcje w których inne funkcje użyte są
	// jako argumenty funkcji lub są zwracane z funkcji. Dużo funckji wyższego rzędu jest też wbudowanych w język JS.
	// Funkcja showPopup jest w tym przykłądzie funkcą wyższego rzędu
	function showPopup(name, alert) {
		// alert to callbackk w tym przypadku
		alert(name)
	}

	// Przykład 1a
		function dodaj(x,y) {
			return x + y;
		};

		function odejmij(x,y) {
			return x - y;
		};

		function calc(a,b,callback) {
			console.log(`wprowadzone zostały wartości: ${a} i ${b}`);
			return callback(a,b);
		}

		const wynik = calc(10,20,dodaj);
		console.log(wynik);

	// Przykład 2a
		function pokazWKonsoli(x) {
			console.log(x);
		}

		function pokazALert(x) {
			alert(x);
		}

		function pokazGdzies(x, callback) {
			callback(x);
		}

		pokazGdzies("tekst", pokazWKonsoli); // Pamiętaj, ze tu bez wywołania funkcji "pokazWKonsoli" bo ona się wywoła w funkcji pokazGdzies.

	// Przykłady wbudowanych funkcji w których wykorzystamy callback
		// Przykład 1a
		// setInterval - jako pierwszy parametr wlasnie rpzyjmuje callback

		function show() {
			console.log("cos");
		};

		setInterval(show, 1000);
		// show - jest tutaj calbback function
		// setInterval - jest tutaj funkcją wyższego rzędu

		// Przykład 1b (addEventListener)
		// document.addEventListener('click', callback);

		// Oczywiście w powyższych przykłądach mozesz dać anonimową funkcję jako callback
		// np:
		setInterval(function () {
			console.log("cos");
		}, 1000);

        // CALLBACK FUNCTON - A function you give to antoher function, to be run when the other function is finished.

// TABLICE
	// Obiekt wbduowany
	// Trzy najważniejsze obiekty wbudowane: Object, Function, ARRAY.

	// CHARAKTERYSTYKA Tablicy
	// Uporządkowany zbiór wartości (może być string, number, object, inny array, itd.)
	// Dobrze myśleć o tablicy jako "Elementy tablicy to pary INDEKS - WARTOŚĆ", gdzie indeks, to indeks tablicy

	// TWORZENIE Tablicy
	// Sposób 1
		// literał: []

		// Pamiętaj, że tablice to Typy referencyjne czyli:
			let arr = ['aaa', 34, {}];
			let arr2 = arr;
			let arr3 =  arr2;
			arr3[0] = 'bbb';
			console.log(arr[0]); // zwróci 'bbb'

		// Jeśli teraz każdej z tych zmiennej przypiszemy inną wartośc, to nasza tablica przestanie istnieć, jest to też nazywane czyszczeniem pamięci
			arr = null;
			arr2 = undefined;
			arr3 = "cos";
			console.log(arr); // pokaze "null"

	// Sposób 2
		// Konstruktor - rzadko używamy, raczej używamy literału
			const tablica = new Array(); // słowo kluczowe "new" i funkcję Array(), za pomocą new wlasnie "wywołamy"(stworzymy) tę funkcję(array)
			const tablica2 = new Array("a", "b");

	// Tworzenie za pomocą literału i konstruktora daje ten sam efekt

	// Mały bonus (Mało ważne)
		const cars = ["opel", "fiat"];
		delete cars[1]; // tutaj nie do końća usunie, tylko zastapi nasz element za pomocą undefined

	// Troche o proototypie
		tablica instanceof Array; // zwróci true
		tablica instanceof Object; // też zwróci true
		tablica instanceof Function; // też zwróci false

	// Metody i właściwości tablic
		// pop -> usuwa ostatni element tablicy i go zwraca. Ważne jest to, że go zwraca, bo np. mozemy potrzebowaćtego usuniętego elmentu
			const cars2 = ['opel', 'fiat'];
			let ostatniSamochod = cars2.pop(); // w tej zmiennej będzie "fiat"
			console.log(ostatniSamochod);
		// shift -> usuwa i zwraca pierwszy element tablicy
		// push -> dodaje na koniec tablicy nowy element, ktory podalismy jako argument i ZWRACA nam nową długość naszej tablicy. Pamiętaj, że możesz dodać wiele elementów nie tylko jeden!
		// unshift -> dodaje na początek tablicy nowy element, ktory podalismy jako argument i ZWRACA nam nową długość naszej tablicy. Pamiętaj, że możesz dodać wiele elementów nie tylko jeden!
		// concat -> dodaje jedną tablicę do drugiej, może łaczyć kilka tablic ze sobą. Zwraca nową tablicę!
		// join -> dostniemy stringa, ktróy bedzie zawierał elementy z naszej tablicy. Jako argument możmey podać separatoe np: (","). Zwróci nwoego stringa!

        // UWAGA!
            // Metody na tablicach możemy wywołać też w inny sposób, nie tylko za pomocą adnotacji kropkowej jak "arr.pop;"
                // Przykład
                // arr.pop; i arr["pop"](); ZADZIAŁA TAK SAMO


// CALLBACKS
	const posts = [
		{ title: 'Post One', body: 'This is post one' },
		{ title: 'Post Two', body: 'This is post two' }
	];

	function getPosts() {
		setTimeout(() => {
			let output = '';
			posts.forEach((post, index) => {
				output += `<li>${post.title}</li>`;
			});

			document.body.innerHTML = output;
		}, 1000)
	};

	function createPost(post, callback) {
		setTimeout(() => {
			posts.push(post);
			callback();
		}, 2000);
	}

	// TO poniżej wywołamy w callbacku, jako drugi parametr funckji createPost
	// getPosts();

	// Ponieważ stworzenie posta ma opóżnienie 2s, to nie zoabcyzmy go, bo getPosts czeka tylko 1s
	// dlatego w funkcji createPost, tworzymy callback
	createPost({ title: 'Post Three', body: 'Post three text'}, getPosts);

//  PROMISES
	const posts = [
		{ title: 'Post One', body: 'This is post one' },
		{ title: 'Post Two', body: 'This is post two' }
	];

	function getPosts() {
		setTimeout(() => {
			let output = '';
			posts.forEach((post, index) => {
				output += `<li>${post.title}</li>`;
			});

			document.body.innerHTML = output;
		}, 1000)
	};

	function createPost(post) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				posts.push(post);

				const error = false;

				if (!error) {
					resolve();
				} else {
					reject('Error: Something went wrong');
				}
			}, 2000);
		});
	}

	// createPost({ title: 'Post Three', body: 'Post three text'})
	// 	.then(getPosts)
	// 	.catch(err => console.log(err));

	// Poniżej przykład kiedy jest kilka promisów:

	// promise.all
	const promise1 = Promise.resolve('Hello World');
	const promise2 = 10;
	const promise3 = new Promise((resolve, reject) =>
			setTimeout(resolve, 2000, 'Goodbye')
		);
	// z fetchem jest troche inaczej, trzeba tutaj też dać "then", jak gdyby dwa razy wywołamy "then"
	const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json());

	Promise.all([promise1, promise2, promise3, promise4])
		.then(values => console.log(values));

// ASYNC AWAIT
	const posts = [
		{ title: 'Post One', body: 'This is post one' },
		{ title: 'Post Two', body: 'This is post two' }
	];

	function getPosts() {
		setTimeout(() => {
			let output = '';
			posts.forEach((post, index) => {
				output += `<li>${post.title}</li>`;
			});

			document.body.innerHTML = output;
		}, 1000)
	};

	function createPost(post) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				posts.push(post);

				const error = false;

				if (!error) {
					resolve();
				} else {
					reject('Error: Something went wrong');
				}
			}, 2000);
		});
	}

	async function init() {
		await createPost({ title: 'Post Three', body: 'Post three text'});

		getPosts();
	}

	init();