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

// W SKRÓCIE
	// CALLBACK - funckja wywołania zwrotnego (callback function)
	// To funkcja, którą przekazujemy jako argument, do funkcji, którą wywołujmey
	// CALLBACK (callback function), to funkcja, która jest wprowadzana jako argument do innej funkcji w celu wywołania jej wewnątrz funkcji.

	// FUNKCJA WYŻSZEGO RZĘDU(POZIOMU) -> HIGHER-ORDER(LEVEL) FUNCTION
	// Jest to funkcja zawierajaca CALLBACK.
	// Funkcje wyższego rzędu (Higher-order functions) to funkcje w których inne funkcje użyte są
	// jako argumenty funkcji lub są zwracane z funkcji. Dużo funkcji wyższego rzędu jest też wbudowanych w język JS.

		//Przykład:
			// show to CALLBACK function a setInterval to wbudowana funkcja WYŻSZEGO RZĘDU
		function show() {
			console.log("cos");
		};

		setInterval(show, 1000);