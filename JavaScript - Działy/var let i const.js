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

	// HOISTING w let i const - NIE ZADZIAŁA! będzie w "TYMACZASOWEJ STREFIE ŚMIERCI"
		//  let i const
		//	console.log(d); // wyrzuci błąd
		//	let d = 22;

W SKRÓCIE:
	let i const zasięg w zakresie blokowym i nie działa hoisting (wyrzuca błąd)
	const - nie można nadpisać, nie można ponownie dekalrować
	let - można nadpisać, nie można ponownie dekalrować