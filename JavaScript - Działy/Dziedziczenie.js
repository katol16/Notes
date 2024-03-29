// https://www.nafrontendzie.pl/ecmascript-6-co-nowego -> Dobry materiał na ten temat
// Dziedziczenie przed ECMAScript2015 (ES6)
    function Base (name){
      this.name = name;
    }

    Base.prototype.getName = function (){
      return this.name + ' blada';
    }

    var test = new Base('dupa');

    document.getElementById('result').innerHTML = test.getName();

// Dziedziczenie w ES6
    // Pamiętaj, że tutaj to działa w sumie pod spodem taks amo jak wczesniej (przed ES6), tylko zapis jest inny bardziej podobny do inncyh języków programowania.
    // Jest to tzw. syntactic sugar
    class Car {
        constructor(name) { // konstruktor
            this.name = name
        }
    }

    class FamilyCar extends Car { // dziedziczenie
        constructor(name, maxSpeed) {
            super(name); // wywołanie bazowego konstruktora
            this.maxSpeed = maxSpeed;
        }
    }

    var familyCar = new FamilyCar('Volvo', 120);

    console.log(familyCar.name);
    console.log(familyCar.maxSpeed);


// DOKUMENTCJA

Dziedziczenie i łańcuch prototypów
    Jeżeli chodzi o dziedziczenie, JavaScript posiada tylko jedną konstrukcję: Obiekty. Każdy obiekt posiada prywatną własność łaćzącą go z innym obiektem zwanym prototypem. Obiekt prototype posiada swój własny protototyp, i tak dalej aż osiągnie null jako swój protoyp. Null nie ma prototypu i działa jak zakońćzenie łancucha prototypów.

	Dziedziczenie z łańcucha prototypów
		Dziedziczenie właściwości
			Obiekty w JavaScript są dynamicznymi "workami" właściwości, nazywanych własnymi właściwościami (own properties). Obiekty JavaScript mają połączenie z obiektem prototypu. Podczas próby dostępu do właściwości obiektu, właściwość będzie szukana nie tylko w samym obiekcie, ale też w jego prototypie, prototypie jego prototypu i tak dalej, aż do odnalezienia właściwości o pasującej nazwie bądź końca łańcucha prototypów.

			Oto co się dzieje kiedy próbujemy uzyskać dostęp do właściwości:

				// Przyjmijmy istnienie obiektu o, z własnymi właściwościami a i b:
				// {a: 1, b: 2}
				// o.[[Prototype]] ma właściwości b i c:
				// {b: 3, c: 4}
				// o.[[Prototype]].[[Prototype]] jest nullem.
				// Oznacza to koniec łańcucha prototypów,
				// zgodnie z definicją null nie ma [[Prototype]]
				// A więc pełny łańcuch prototypów wygląda tak:
				// {a:1, b:2} ---> {b:3, c:4} ---> null

				console.log(o.a); // 1
				// Czy istnieje własna właściwość 'a' obiektu o? Tak, jej wartość to 1.

				console.log(o.b); // 2
				// Czy istnieje własna właściwość 'b' obiektu o? Tak, jej wartość to 2.
				// Prototyp także ma właściwość 'b', ale nie jest ona brana pod uwagę.
				// Nazywa się to "zakrywaniem właściwości" (ang. property shadowing)

				console.log(o.c); // 4
				// Czy istnieje właściwość 'c' obiektu o? Nie, sprawdź prototyp.
				// Czy istnieje właściwość 'c' obiektu o.[[Prototype]]? Tak, jej wartość to 4.

				console.log(o.d); // undefined
				// Czy istnieje właściwość 'd' obiektu o? Nie, sprawdź prototyp.
				// Czy istnieje właściwość 'd' obiektu o.[[Prototype]]? Nie, sprawdź prototyp.
				// o.[[Prototype]].[[Prototype]] to null, koniec wyszukiwania.
				// Nie znaleziono właściwości, zwróć undefined.

		Dziedziczenie "metody" -> DOCZYTAJ i zrób notatki

	Różne sposoby tworzenia obiektów i powiązae z nimi łąnuchy prototypów.
		Obiekty stworzone za pomocą podstawowej składni:
			var o = {a: 1};
			// Nowo stworzony obiekt używa Object.prototype jako swojego [[Prototype]]
			// o nie posiada właściwości o nazwie 'hasOwnProperty' 
			// hasOwnProperty jest własną właściwością Object.prototype.
			// o dziedziczy hasOwnProperty z Object.prototype
			// Object.prototype ma null jako swój prototyp.
			// o ---> Object.prototype ---> null

			var a = ["yo", "whadup", "?"];
			// Tablice dziedziczą z Array.prototype
			// (który zawiera metody takie jak indexOf, forEach, itd.)
			// Łańcuch prototypów wygląda następująco:
			// a ---> Array.prototype ---> Object.prototype ---> null

			function f(){
			  return 2;
			}

			// Funkcje dziedziczą z Function.prototype
			// (który zawiera metody takie jak call, bind, itd.)
			// f ---> Function.prototype ---> Object.prototype ---> null