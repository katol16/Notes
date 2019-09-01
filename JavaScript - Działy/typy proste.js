//  TYPY PROSTE: string, numer, Boolean, null, undefined, symbol
	// 	Przy przypisaniu jednej zmiennej do drugiej:
		// 	1. Tworzona jest nowa kopia wartości
		// 	2. Nowa wartość ma przydzielone nowe (odrębne) miejsce w pamięci
		// 	3. Nowa wartość nie ma żadnych związków ze starą wartością

	let a1 = "jeden";
	let b1 = a1;
	a1 = "dwa";
	console.log("wartość a1:" + a1); // - pokaże "dwa"
	console.log("wartość b1:" + b1); // - pokaże "jeden"

	//  TYP REFERENCYJNY: Obiekty przede wszystkim Objekt ogólny, funkcja, tablica
	// Przy przypisaniu jednej zmiennej do drugiej:
		// 1. Przypisany jest tylko nowy adres (nadal mamy tylko jeden obiekt)
		// 2. Obiekt istnieje póki ma choć jedno wiązanie. (brak - wyrzuca z pamięci - odśmiecanie czyli dereferencja)
		// 3. Adres, referencja, wskaźnik - nazwy zamiennie dla opisania relacji zmiennej i obiektu

		let x1 = {name: 'Karol'}
		console.log(x1); // {name: 'Karol'}
		let x2 = x1;
		console.log(x2); // {name: 'Karol'}
		x1.name = 'Michał'
		console.log(x1); // {name: Michał'}
		console.log(x2); // {name: Michał'}

// W SKRÓCIE:
// 	Typy proste-> string, numer, Boolean, null, undefined, symbol -> przypisanie przez dodanie nowego miejsca w pamięci
// 	Typy referencyjne-> (wszystko poza typem prostym) Objekt, funkcja, tablica  -> przypisanie przez referencje
