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

			// DOBRY MATERIAŁ DO IIFE
				// https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174

// W SKRÓCIE
	// Jeśli chcemy, żeby do naszej funckji nie było dostępu i nikt z niej nie korzystał, (lub skorzystał przypadkowo), to tworzymy IIFE.
	// Dlatego często we frameworkach, cały kod jest zawarty w IIFE

		// Przykład:
			(function(name) {
				console.log('inside IIFE: Hello ' + name);
			})("Karol"); // IIFE (klasyczyny przykład)