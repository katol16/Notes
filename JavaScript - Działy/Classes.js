TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!
TE NOTATKI SĄ DO PRZEANALZIOWANIA JESZCZE RAZ!!!!!

CLASSES
	Klasy w JS zostały wrpwoadzone w ECMAScript 2015. Składnia klas nie wprowadza nowego zorientowanego obiekotwego obiektowo modelu dziedziczenia.
	Klasy wprowadzją znacznie prostszą i bardziej czytelną skłądnię do tworzenia obiektów i dziedziczenia.

	Definiowanie klas
		Klasy są w zasadzie "szczególnymi funkcjami". Podobnie jak w fukncji można definiować wyrażenie function i deklaracje funkcji, taka składnia klasy posiada dwa komponenty: Wyrażenie class i dekalracje klasy

		Deklaracja klas
			Aby zadeklarować kalsę należy użyć wyrażenia "class" wraz z nazwą

			Przykład:
				class Prostokat {
					constructor(wysokosc, szerokosc) {
						this.wysokosc =  wysokosc;
						this.szerokosc = szerokosc;
					}
				}

			Hoisting
				Ważną różnicą pomiędzy deklaracją funkcji a deklaracją klasy jest to, że deklaracje funckji są przenoszone na początek (hoisted) a klas nie.
				Najpeirw musisz zadekalrować swoją klase by mięc do niej dostęp

					var p = new Prostokat(); // ReferenceError

					class Prostokat {}

			Wyrażenie class
				Jest kolejnym sposobem definiowania klasy. Wyrażenia class mogą być nazwane lub nienazwane. Nazwa przypisana wyrażeniu class jest lokalna dla ciała klasy.

					// nienazwane
					var Prostokat = class {
						constructor(wysokosc, szerokosc) {
							this.wysokosc = wysokosc;
							this.szerokosc = szerokosc;
						}
					};

					// nazwane
					var Prostokat = class Prostokat {
						constructor(wysokosc, szerokosc) {
							this.wysokosc = wysokosc;
							this.szerokosc = szerokosc;
						}
					};

				Uwaga: Wyrażenia class dotykają te same kwestie związane z przenoszeniem na początek (ang. hoisting) co wspomnianych deklaracji klas.

		Ciało klasy i definicje metod
			Ciało klasy jest umieszczane w nawiasach klamrowych {}. to tam definiuje się metody, czy konstruktory

				Tryb ścisły:
					Ciało klasy jest wykonywane w trybie ścisłym (ang. strict mode)

				Konstruktor
					Constructor jest szczególną metodą, która służy tworzeniu i inicjalizowaniu obiektu zdefiniowanego słowem kluczowym class.
					Aby wywołać konstruktor klasy bazowej, należy użyć słowa kluczowego "super".

				Metody statyczne (Doczytaj o tym)

				Boxing with prototype and static methods (Doczytaj o tym)

		Podklasy z extends
			słowo kluczowe extends jest uzywane w deklaracjach klas lub wyrażeniach klas do tworzenia jako elementu potomnego innej klasy

				class Animal {
					constructor(name) {
						this.name = name;
					}

					speak() {
						console.log(this.name + ' barks.');
					}
				}

				var d = new Animal('Mitzie');
				d.speak();

			Jeśli w podklasie znajduje się konstruktor, musi najpierw wywołąć super() rpzed użyciem "this".

			Można również rozszerzyć tradycyjne klasy oparte na funkcjach:
				function Animal (name) {
					this.name = name;
				}

				Animal.prototype.speak = function () {
					console.log(this.name + ' makes a noise.');
				}

				class Dog extends Animal {
					speak() {
						console.log(this.name + ' barks.');
					}
				}

				var d = new Dog('Bambo');
				d.speak();

				Podklasy z extends -> DOKOŃCZ !!! https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Classes#Konstruktor