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

	// Pamiętaj, że moze być zwykłe EXPRESSION, albo zwykły STATMENT
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


// FUNKCJE - SAMURAJ PROGRAMOWANIA
	Czym są funkcje?
		-Funkcje są obiektami.
		-Od innych obiektów wyróżnia je właściwość [[Call]]
		-Funckje są "mini programami" z których można zbudować duży program
		- Funkcje przypominają tajemnicze pudełko. Do któ©ego coś wpada i zmktórego coś wychodzi (Dane, return, mogą być efekty uboczne(nie muszą być negatywne))

	Wywołąnie funkcji
		function addFive(a) {
			let result = 5 + a;
			console.log(result);
			return result;
		}
		let numbet = addFive(10); -> do let numbet zostanie przypisane to co zwróci funkcja

	Jak zbudowana jest funkcja
		1) Identyfikator *nazwa
			Przykłady:
				function makeMeHappy() {}
				const giveMeMoney = function() {} (anonimowa)

		2) Parametry 
			function a(parametr1) {};
			const b = function(param1, param2) {};

		3) Ciało funckji
			function a() {
				// coś robimy
				return wyrażenie // coś zwracamy;
			}

		RETURN

			-Po return umieszczamy wyrażnei, które zwracamy, Jelsi po return ne będzie wyrażenia zwracamy undefined, jeśłi brak return to zwraca undefined.
			-Return kończy też funkcję i wraca do meijsca w którym zostałą wywołana
			-FUnckja czasami hest po to by coś zrobić, ale najczęściej po to by coś zrobić i zwrócić wrtość

		FUNCKJA MOŻE WYGLĄDAĆ TAK:

			1) Dekalrujemy zmienną i przypisujemy do niej funckję anonimową
				
				const add = function(value1, value2) {
					return value1 + value2;
				}

			2) 
				function add(value1, value2) {
					return value1 + value2;
				}

			3)  Za pomocą konstruktora (Najgrosza metoda)

				const add = new Function ('value1', 'value2', 'return calue1 + value2;');

			4) Arrow function
				const add = (value1, value2) => {
					return value1 + value2;
				}

		FUNKCJE MOŻNA WYWOŁAĆ
			-wieloktortnie
			-bo tylko funckje mają właściwość [[call]]
			-za pomocą oepratora wywołania () np. name()

		Funckaj zawsze coś zwraca (nawet jak nie ma return w ciele)