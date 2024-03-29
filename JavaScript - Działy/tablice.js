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
		tablica instanceof Function; // tu zwróci false

	// Metody i właściwości tablic
		// pop -> usuwa ostatni element tablicy i go zwraca. Ważne jest to, że go zwraca, bo np. mozemy potrzebować tego usuniętego elmentu
			const cars2 = ['opel', 'fiat'];
			let ostatniSamochod = cars2.pop(); // w tej zmiennej będzie "fiat"
			console.log(ostatniSamochod);
		// shift -> usuwa i zwraca pierwszy element tablicy
		// push -> dodaje na koniec tablicy nowy element, ktory podalismy jako argument i ZWRACA nam nową długość naszej tablicy. Pamiętaj, że możesz dodać wiele elementów nie tylko jeden!
		// unshift -> dodaje na początek tablicy nowy element, ktory podalismy jako argument i ZWRACA nam nową długość naszej tablicy. Pamiętaj, że możesz dodać wiele elementów nie tylko jeden!
		// concat -> dodaje jedną tablicę do drugiej, może łaczyć kilka tablic ze sobą. Zwraca nową tablicę!
		// join -> dostniemy stringa, ktróy bedzie zawierał elementy z naszej tablicy. Jako argument możmey podać separator np: (","). Zwróci nwoego stringa!

        // UWAGA!
            // Metody na tablicach możemy wywołać też w inny sposób, nie tylko za pomocą adnotacji kropkowej jak "arr.pop;"
                // Przykład
                // arr.pop; i arr["pop"](); ZADZIAŁA TAK SAMO

// W SKRÓCIE:
	// Tablice to typy referencyjne
	// Dobrze myśleć o tablicy jako "Elementy tablicy to pary INDEKS - WARTOŚĆ", gdzie indeks, to indeks tablicy