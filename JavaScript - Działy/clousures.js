// CLOUSURES - DOMKNIĘCIA
	// Chodzi w gruncie o dostep do zmiennej spoza aktualnego zasięgu
	// Załóżmy, że chcemy uzyskać dostęp do zmiennej poza funkcją, w której ta zmienna istnieje

	// Poniżej przykłady, które mogą być technicznie uznawane za "Clousres", ale to nie do końca jest Clousures co do zasady
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
		// Tutaj też to jest uznawane troche za Clousures,
		// bo funkcja userInfo, korzysta ze stałej zdefiniowanej wyżej, w zakresie globlanym (userAge)
		// Wciąż to nie jest do końca CLousures
		// Zasięg leksykalny jest częścią mechanizmu CLOSURE.
		const userAge = 23;

		const userInfo = function() {
			const userName = "Adam";
			return userName + userAge
		}

		const newUser = userInfo();
		console.log(newUser); // Adam23

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

// W SKRÓCIE
	// Domknięcia występują wtedy gdy funkcja może zapamiętać i uzyskać dostęp
	// do swojego zakresu leksykalnego, nawet po jej wywołaniu na zewnątrz tego zakresu
		// Przykład:
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