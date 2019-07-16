// HOISTING - przenoszenie DEKLARACJI zmiennej var i funkcji, na sam początek zakresu kodu.
// Czyli, jeżeli jest w zakresie globalnym (funckja lub var), to na początek zakresu globalnego,
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
			console.log(d);
			var d = 22;
	// 	Jak widzi to program:
			var d;
			console.log(d);
			d = 22;
	// Czyli deklaracja zmeinnej przenoszona na góre scope'a

	console.log(istniejeTutaj); // RefferenceError
	funkcjaWewnetrzna(); // RefferenceError

	// Ogarnij pokombinuj tu sobie jeszcze z funkcjami



	// HOISTING w let i const - NIE ZADZIAŁA! będzie w "TYMACZASOWEJ STREFIE ŚMIERCI"
		// let i const
			console.log(d); // wyrzuci błąd
			let d = 22;

// Uzupełnienie materiałami z dokumentacji:
	// HOISTING -W języku JavaScript, funkcje oraz zmienne są windowane. Windowanie (hoisting) w JavaScripcie oznacza przeniesienie deklaracji na samą górę (do globalnego zasięgu lub do zasięgu funkcji).
	// Oznacza to, że możesz użyć funkcji lub zmiennej przed jej zadeklarowaniem lub innymi słowy: funkcje lub zmienne mogę być deklarowane po ich użyciu.

	// Przykład:
		// zmienne
			console.log(foo); // undefined
			foo = 2;
			console.log(foo); // 2
			var foo;
			console.log(foo); // 2
			// można to rozumieć jako:
			var foo;
			foo = 2;

		// Funkcje
			hoisted(); // w consoli zobaczymy "foo"

			function hoisted() {
			  console.log("foo");
			}

	// Tylko deklaracje są windowane
		// W języku JavaScript tylko deklaracje są windowane, nie inicjalizacje. Jeśli zmienna zostanie zadeklarowana i zainicjalizowana po jej użyciu, wartość zmiennej będzię niezdefiniowana (undefined).
			console.log(num); // zwróci undefined 
			var num;
			num = 6;

		// Jeśli zadeklarujesz zmienną po tym jak zostanie użyta, ale zainicjalizujesz jej wartość przed tym, owa wartość zostanie zwrócona:
			num = 6;
			console.log(num); // zwróci 6
			var num;

		// Dwa przykłady poniżej obrazują to samo zachowanie.
			var x = 1; // inicjalizacja x
			console.log(x + " " + y); // '1 undefined'
			var y = 2; // inicjalizacja y

			// Powyższy przykład jest rozumiany jako: 
			var x = 1; // inicjalizacja x
			var y; // deklaracja y
			console.log(x + " " + y); // '1 undefined'
			y = 2; // inicjalizacja y

// W SKRÓCIE
		// przenoszenie DEKLARACJI zmiennej var i funkcji, na sam początek zakresu kodu. (globalnego lub funkcyjnego, w zależności gdzie żyje zmienna lub funkcja)
			// Przykłady:
				// Zmienna:
					console.log(num); // zwróci undefined 
					var num;
					num = 6;
				// Funkcja:
					hoisted(); // w consoli zobaczymy "foo"
					function hoisted() {
					  console.log("foo");
					}