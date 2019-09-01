// DOKUMENTACJA
// PODSTAWOWE INFORMACJE

// JSX
// 	Why Using JSX in React?
// 		React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
// 		React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

// 	Embedding Expressions in JSX
// 		You can put any valid JavaScript EXPRESSION (EXPRESSION -> An expression is any valid unit of code that resolves to a value) inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.
// 			Przykład:
				function formatName(user) {
				  return user.firstName + ' ' + user.lastName;
				}

				const user = {
				  firstName: 'Harper',
				  lastName: 'Perez'
				};

				const element = (
				  <h1>
				    Hello, {formatName(user)}!
				  </h1>
				);

				ReactDOM.render(
				  element,
				  document.getElementById('root')
				);

	// JSX is an Expression Too
	// 	This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:
	// 		Przykład:
				function getGreeting(user) {
				  if (user) {
				    return <h1>Hello, {formatName(user)}!</h1>;
				  }
				  return <h1>Hello, Stranger.</h1>;
				}

	// JSX Prevents Injection Attacks -> To jako dodatkowa informacja, którą warto wiedzieć jako ciekawostka (Na romozwach moze tego nie mów, bo mogą zapytać jak blokuje przed wstrzyknięciem)

	// Warning:
	// 	Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
	// 	For example, class becomes className in JSX, and tabindex becomes tabIndex.



// Rendering Elements
// 	Elements are the smallest building blocks of React apps.
		 const element = <h1>Hello, world</h1>;

	// Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating thw DOM to match the React elements.

	// Note:
	// 	One might confuse elements with a more widely known consept of "components". We will introduce components in the next section. Elements are what components are "mede of", and we encourage you to read this section before jumping ahead.

	// Rendering an Element into the DOM
		const element = <h1>Hello, world</h1>;
		ReactDOM.render(element, document.getElementById('root'));

	// Updating the Rendered ELement
	// 	React elements are immutable. Once you create an element, you can't change its children oe attributes. An element is like a single frame ina a movie: it represents the UI at a certain point in time.

	// 	With our knowledge so far (Później nauczymy się to robić inaczej, bo w praktyce inaczej się to robi, ale na ten moment chcemy wiedzieć to co tutaj), the only way to update the UI is to create a new element, and pass it to ReactDOM.render().

	// 	Consider this ticking clock example:

			function tick() {
				const element = (
					<div>
						<h1>Hello, world!</h1>
						<h2>It is {new Date().toLocaleTimeString()}</h2>
					</div>
				);
				ReactDOM.render(element, docuemnt.getElementById('root'));
			}

			setIntreval(tick, 1000);

		// It calls ReactDOM.render() every second from a setInterval() callback.

		// Note:
		// In practice, most React apps only call ReactDOM.render() once. In the next sections we will learn how such code gets encapsulated into stateful components.

		// That's we You should don't skip topics because they build on each other.

		// React only update's what's necessary

	// 		You can check it with example with time
	// 		"setIntreval(tick, 1000);"

	// 	Even though we create an element describing the whole UI tree on every tick, only the text node whose contents has changed gets updated by React DOM.

	// 	In our experience, thinking about how the UI should look at any given moment rather than how to change t over time eliminates a whole class of bugs.

	// Components and Props
	// 	Components let You split rhe UI into independent, reausable pieces, and think about each piece in isolation.

	// 	Function and Class Components
	// 		The simplest way to define a component is to write a JavaScript function:

			function Welcome(props) {
				return <h1>Hello, {props.name}</h1>;
			}

			// This function is a valid React component because it accepts a single "props" (which stands for properties) object argument with data and returns a React element. We call such components "function components"  beacuse they are literally JavaScript functions.
			//
			// You can also use an ES6 to define a component:
			class Welcome extends React.Component {
				render() {
					return <h1>Hello, {thos.props.name}</h1>;
				}
			}
						
		// The above two components are equivalent from Reacts point of view.

		// 	Classes have some additional features that we will discuss in the next sections. Untill then, we will use function components for their conciseness

		// Rendering a Component
			// 	Previosly, we only encountered React elements that represent DOM tags:
					const element = <div />;
				// However, elements can also represent user-defined components"
					const element = <Welcome name="Sara" />;

				// Example
					function Welcome(props) {
						return <h1>Hello, {props.name}</h1>;
					}

					const element = <Welcome name="Sara" />;
					ReactDOM.render(element, document.getElementById('root'));

			// 	Let's recap what happens in this example:
			// 		1. We call ReactDOM.render() with the <Welocme name="Sara" /> element
			// 		2. React calls the Welocme component with {name: 'Sara'} as the props.
			// 		3. Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
			// 		4. React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.

			// 	Note:
			// 		Always start component names with a capital letter. React treats components starting with a lowercase letters as DOM tags. For example, <div/> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

		// Composing Components
		// 	Typically, new React apps have a single App component at the very top. However, if you integrate React into an existing app, you might start bottom-up with a small component like Button and gradually work your way to the top ot the view hierarchy.

		// Extracting Components
			// Nie bój się dzielić komponenty na mniejsze.
			// Przykład:
				function Comment(props) {
					return (
						<div className="Comment">
							<div className="UserInfo">
								<img className="Avatar"
										 src={props.author.avatarUrl}
										 alt={props.author.name}
								/>
								<div className="UserInfo-name">
									{props.author.name}
								</div>
							</div>
							<div className="Comment-text">
								{props.text}
							</div>
							<div className="Comment-date">
								{formatDate(props.date)}
							</div>
						</div>
					);
				}


			// Zmiana tego komponentu czy ponowne użycie jego poszczególnych części może okazać się skomplikowane z powodu całego tego zagnieżdżenia. Rozbijmy go zatem na kilka mniejszych komponentów. 
			// Najpierw wydzielimy komponent Avatar:
				function Avatar(props) {
					return (
						<img className="Avatar"
							src={props.user.avatarUrl}
							 alt={props.user.name}
						 />
					)
				}
			// Zauważ, że Avatar nie musi weidzież, że jest renderowany wewnątrz komponponentu COmment. Dlatego też daliśmy jego właściwości bardziej ogólną nazwę user zamiast author.

// Zauważ jednak ,że teraz upraszczając nasz component Comment, będziemi mieli
// <Avatar user={props.author} -> czyli tutaj musimy nazwać nasz obiekt "user" -> user={props.author}
	function Comment(props) {
		return (
			<div className="Comment">
				<div className="UserInfo">
					<Avatar user={props.author} />
					<div className="UserInfo-name">
						{props.author.name}
					</div>
				</div>
				<div className="Comment-text">
					{props.text}
				</div>
				<div className="Comment-date">
					{formatDate(props.date)}
				</div>
			</div>
		);
	}

// Następnie wydzielimy komponent userInfo, który wyrenderuje Avatar obok nazwy uzytkownika:
	function UserInfo(props) {
		return (
			<div className="UserInfo">
				<Avatar user={props.user} />
				<div className="UserInfo-name">
					{props.user.name}
				</div>
			</div>
		)
	}
// To pozwoli uprościć Comment jeszcze barziej:
	function Comment(props) {
		return (
			<div className="Comment">
				<UserInfo user={props.author} />
				<div className="Comment-text">
					{props.text}
				</div>
				<div className="Comment-date">
					{formatDate(props.date)}
				</div>
			</div>
		);
	}

// Właściwości są tylko do odczytu

// Bez względu na to, czy zadeklarujesz komponent jako funkcję czy klasę, nie może on nigdy modyfikować swoich właściwości. Rozważ następującą funkcję sum:

	function sum(a, b) {
		return a + b;
	}

// Funkcje tego typu nazywane są “czystymi” (ang. pure function), dlatego że nie próbują one zmieniać swoich argumentów i zawsze zwracają ten sam wynik dla tych samych argumentów.

	// W przeciwieństwie do poprzedniej funkcji, ta poniżej nie jest “czysta”, ponieważ zmienia swój argument.

	function withdraw(account, amount) {
		account.total -= amount;
	}

// React jest bardzo elastyczny, ale ma jedną ścisłą zasadę:
//
// 	Wszytkie komponenty muszą zachowywać się jak czyste funkcje w odniesieniu do ich właściwości.
//
// 	Rzecz jasna, interfejsy użytkownika w aplikacjach są zwykle dynamiczne, zmieniają się w czasie. W kolejnym rozdziale wprowadzimy nowe pojęcie “stanu”. Stan pozwala komponentom reactowym na zmianę swojego wyniku w czasie, w odpowiedzi na akcje użytkownika, żądania sieciowe itp. bez naruszania powyższej zasady.

// STAN I CYKL ŻYCIA
	// Stan przypomina trochę atrybuty (ang props), jednak jest prywatny i w pełni kontrolowany przez dany komponent

// Przekształcanie funkcji w klasę
	// Proces przekształcania komponentu funkcyjnego wklasę można opisać w pięciu korkach:
		// 1. Stwórz klasę zgodną ze standardem ES6 ot ej samej nazwie i odziedzicz po klasie React.Component przy pomocy słowa kluczowego extend.
		// 2. Dodaj pustą metodę o nazwie render().
		// 3. Przenieś ciało funkcji do ciał metody render().
		// 4. W render() zamień wszystkie props na this.props.
		// 5. Usuń starą deklarację funckji.

		// Function Component:
			function tick() {
				const element = (
					<div>
						<h1>Hello, world!</h1>
						<h2>It is {new Date().toLocaleTimeString()}.</h2>
					</div>
				);
				ReactDOM.render(
					element,
					document.getElementById('root')
				);
			}

			setInterval(tick, 1000);

		// Class based component:
			class Clock extends React.Component {
				render() {
					return (
						<div>
							<h1>Hello, world!</h1>
							<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
						</div>
					);
				}
			}

			function tick() {
				ReactDOM.render(
					<Clock date={new Date()} />,
					document.getElementById('root')
				);
			}

			setInterval(tick, 1000);

	// Dodawanie lokalnego stanu do klasy
		// Prznieśmy teraz date z powyższego Class Based component z atrybutów do stanu w trzech krokach:

		// 1. Zamień wystąpienia this.props.date na this.state.date w ciele metody render():
			class Clock extends React.Component {
				render() {
					return (
						<div>
							<h1>Witaj, świecie!</h1>
							<h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
						</div>
					);
				}
			}

		// 2. Dodaj konstruktor klasy i zainicjuj w nim pole this.state
			class Clock extends React.Component {
				constructor(props) {
					super(props);
					this.state = {date: new Date()};
				}

				render() {
					return (
						<div>
							<h1>Witaj, świecie!</h1>
							<h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
						</div>
					);
				}
			}
			// Zwróć uwagę na arguemnty props przekazywany do kosntruktora bazowego za pomocą specjalnej funkcji super()
			// Komponenty klasowe zawsze powinny przekazywać props do konstruktora bazowego

		// 3. Usuń atrybut date zelementu <Clock />

		// W rezultacie powinniśmy otrzynać następujący kod:
			class Clock extends React.Component {
				constructor(props) {
					super(props);
					this.state = {date: new Date()};
				}

				render() {
					return (
						<div>
							<h1>Witaj, świecie!</h1>
							<h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
						</div>
					);
				}
			}

			ReactDOM.render(
				<Clock />,
				document.getElementById('root')
			);

	// Dodawanie metod cyklu życia do klasy
		// W aplikacji o wielu komponentach istotne jest zwalnianie zasobów przy niszczeniu każdego z komponentów.

		//Chcielibyśmy uruchamiać timer przy każdym pierwszym wyrenderowaniu komponentu Clock do drzewa DOM. W Reakcie taki moment w cyklu życia komponentu nazywamy “montowaniem” (ang. mounting).
		//
		// Chcemy również resetować timer za każdym razem, gdy DOM wygenerowany przez Clock jest usuwany z dokumentu. W Reakcie taki moment nazywamy to “odmontowaniem” (ang. unmounting) komponentu.

		// Takie metody nazywamy "metodami cyklu życia"

		// Metoda componentDidMount() uruchamiana jest po wyrenderowaniu komponentu do drzewa DOM. To dobre meisjce na inicjalizacje timera:

			componentDidMount() {
				this.timerID = setInteval(
					() => this.tick(), 1000
				);
			}

		// Zwróć uwagę, ze identyfiaktor timera zapisujemy bezpośrednio do this (this,timerID).

		// Mimo że this.props jest ustawione przez Reacta, a this,state jest specjalnym polem, to nic nie stoi na przeszkodzie, aby stworzyć dodatkowe pola, w którymch chcielibyśµy przechowywać wartości niezwiązane bezpośrednio z przepływem danych (jak nasz indetyfikator timera).

		// Zatrzymaien timera zajmie się metoda cyklu życia zwana componentWillUnmount

			componentWillUmount() {
				clearInterval(this.timerID);
			}

		// Na koniec zaimplementujemy metodę o nazwie tick(), którą komponent Clock będzie wywoływał co sekundę.
		// Użyjemy w niej this.setState(), aby zaplanować aktualizację lokalnego stanu komponentu:

			class Clock extends React.Component {
				constructor(props) {
					super(props);
					this.state = {date: new Date()};
				}

				componentDidMount() {
					this.timerID = setInterval(
						() => this.tick(),
						1000
					);
				}

				componentWillUnmount() {
					clearInterval(this.timerID);
				}

				tick() {
					this.setState({
						date: new Date()
					});
				}

				render() {
					return (
						<div>
							<h1>Witaj, świecie!</h1>
							<h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
						</div>
					);
				}
			}

			ReactDOM.render(
				<Clock />,
				document.getElementById('root')
			);

		// Podsumowanie:
			// 	1. Kiedy element <Clock /> przekazywany jest do funkcji ReactDOM.render(), React wywołuje konstruktor komponentu Clock. Jako że Clock będzie wyświetlać aktualny czas, musi on zainicjalizować this.state obiektem zawierającym aktualną datę. Później ten stan będzie aktualizowany.
			// 	2. Następnie React wywołuje metodę render() komponentu Clock. W ten sposób uzyskuje informację, co powinno zostać wyświetlone na stronie. Gdy otrzyma odpowiedź, odpowiednio aktualizuje drzewo DOM.
			// 	3. Po wyrenderowaniu komponentu Clock do drzewa DOM, React wywołuje metodę cyklu życia o nazwie componentDidMount(). W jej ciele komponent Clock prosi przeglądarkę o zainicjalizowanie nowego timera, który będzie wywoływać metodę tick() co sekundę.
			// 	4. Co sekundę przeglądarka wywołuje metodę tick(). W jej ciele komponent Clock żąda aktualizacji UI poprzez wywołanie metody setState(), przekazując jako argument obiekt z aktualnym czasem. Dzięki wywołaniu setState() React wie, że zmienił się stan i że może ponownie wywołać metodę render(), by dowiedzieć się, co powinno zostać wyświetlone na ekranie. Tym razem wartość zmiennej this.state.date w ciele metody render() będzie inna, odpowiadająca nowemu czasowi - co React odzwierciedli w drzewie DOM.
			// 	5. Jeśli kiedykolwiek komponent Clock zostanie usunięty z drzewa DOM, React wywoła na nim metodę cyklu życia o nazwie componentWillUnmount(), zatrzymując tym samym timer.


// Poprawne używanie stanu
	// 1. Nie modyfikuj stanu bezpośrednio
		// Przykład:
			// Poniższy kod nie spowoduje ponownego wyrenderowania komponentu
				// Źle
				this.state.comment = 'Witam';

			// Zamaist tego używaj setState()
				// Dobrze
				this.setState({comment: 'Witam'});

			// Jedynym miejscem, w którym wolno Ci użyć this.stae jest konstruktor klasy.

// Aktualizacje stanu mogą dziac się asynchronicznie
	// React może zgrupować kilka wywołań metody setState() w jedną pazckę w celu zwiększenia wydajności aplikaji.
	// Z racji tego, że zmienne this.props i this.state mogą być aktualizowane asynchronicznie, nie powinno się polegać na ich wartościach przy obliczaniu nowego stanu.
		// Źle:
		this.setState({
			counter: this.state.counter + this.props.increment,
		});

	// Aby temu zaradzić, wystarczy użyć alternatywnej wersji metody setState(), która jako argument przyjmuje funkcję zamiast obiektu.
	// Funkcja ta otrzyma dwa argumenty: aktualny stan oraz aktualne atrybuty komponenty.
		// Dobrze
		this.setState((state, props) => ({
			counter: state.counter + props.increment
		}));

	// W powyższym kodzie użyliśmy funckji strzałkowej, lecz równie dobrze moglibyśmy użyć zwykłej funkcji:
		// Dobrze
		this.setState(function(state, props) {
			return {
				counter: state.counter + props.increment
			};
		});

// Aktualizowany stan jest scalany
	// Gdy wywołujesz setState(), React scala (ang. merge) przekazany obiekt z aktualnym stanem komponentu
	// Na przykłąd gdyby komponnent przechowywał w stanie kilka niezależnych zmiennych:
		constructor(props) {
			super(props);
			this.state = {
				post: [],
				comments: []
			};
		}
	// Można byłoby je zaktualizować niezależnie za pomocą osobnych wywołań metody setState();
	componentDidMount() {
		fetchPosts().then(response => {
			this.setState({
				postsL response.posts
			})
		})

		fetchComments().then(response => {
			this.setState({
				comments: response.comments
			})
		})
	})

	// Scalanie jest płytkie (ang. shallow), tzn. this.setState({comments}) nie zmieni this.state.posts, lecz całkowicie nadpisze wartość this.state.coments.

// Dane płyną z góry na dół
	// Ani komponenty-rodzice, ani ich dzieci nie wiedzą, czy jakiś komponent posiada stan, czy też nie. Nie powinny się również przejmować tym, czy jest on funkcyjny, czy klasowy.
	// Właśnie z tego powodu stan jest nazywany loklanym lub enkaspulowanym. Nie mają do niego dostępu żadne komponenty pzoa tym, który do posiada i modyfikuje.
	// Komponent moze zdecydować się na przekazanie swojego stanu w dó strukturypoprzez atrybuty jego komponentów potomnych:
		// <h2>Aktualny czs: {thos.state.date.toLocaleString()}.</h2>
	// To samo tyczy się komponentów własnych:
		<FormattedDate date={this.state.date} />
	// Komponent <FormattedDate /> otrzyma "date" jako atrybuty i nie będzie w stanie rzróżnić, czy pochodzi on ze stanu lub z jednego atrybutów komponentu CLock, czy też został przekaany bezpośrednio przez wartość:
		function FormattedDate(props) {
			return <h2>Aktualny czas: {props.date.toLocaleTimeString()}.</h2>;
		}
	// Taki przepływ danych nazywany jest powszechniejednokierunkowym (ang. undirectional) lub "z góry na dół" (ang. top-down). Stan jest zawsze własnością konkretnego komponentu i wszelkie dane lub części UI, pwostałe w oparciu o niego, mogą wpłynąć jedynie na komponenty znajdujące się "ponizej" w drzewie.

	// Wyobraź sobie, ze drzewo komponentóœ to wodospac atrybutóœ, a stan każdego to dodatkowe źródło wody, któ©e go zasila, jednocześnie spadająć w dół zwraz z resztą wody.

// Obsługa zdrzeń
	// Obsługa zdarzeń w Reakcie jest bardzo podobna do tej z drzewa DOM. Istnieje jednak kilka różnic w składni:
		// - Zdarzenia reactowe pisane są camelCasem, a nei małymi ltierami
		// - W JSX procedura obsługi zdarzenia przekazywana jest jako funckja, a nie łąńcuch znaków.

	// Na przykład, poniższy kod HTMl:
		<button onclick="activeLasers()">
			Aktywuj lasery
		</button>

	// W Reakcie wygląða nieco inaczej:
		<button onClick={activeLasers}>
			Atkywuj lasery
		</button>

	// Kolejna różnica polega na tym,że w REakcie nie można zwrócić false W celu zapobiegnięcia wykonania domyślnej akcji. Należy jawnie wywołać preventDefult. Na przykład, w czystym HTML-u, aby zapobiec domyślnej akcji linku, można napisać:
		<a href="#" onClick="console.log('Kliknięto w link.'); return false">
			Kliknij mnie
		</a>

	// W Reakce, zamsit tego, należy npisać:
		function ActionLink() {
			function handleClick(e) {
				e.preventDefault();
				console.log('Kliknięto link.');
			}

			return (
				<a href="#" onClick={handleClick}>
					Kliknij mnie
				</a>
			);
		}

	// Gdy komponent definiowany jest przy użyciu klasy ze standardu ES6, często definiuje się procedurę obłsugi zdrzenia jako metodę tej klasy.
	// Na przykład poniższy komponent Toggle wyświetli przycisk, który pozwala użytkownikowi przełączać się miedzy stanami "WŁĄCZONY" i "WYŁĄCZONY":
		class Toggle extends React.Component {
			constructor(props) {
				super(props);
				this.state = {isToggleOn: true};

				// Poniższe wiązanie jest niezbędne do prawidłowego przekazania `this` przy wywołaniu funkcji
				this.handleClick = this.handleClick.bind(this);
			}

			handleClick() {
				this.setState(state => ({
					isToggleOn: !state.isToggleOn
				}));
			}

			render() {
				return (
					<button onClick={this.handleClick}>
						{this.state.isToggleOn ? 'WŁĄCZONY' : 'WYŁĄCZONY'}
					</button>
				);
			}
		}

		ReactDOM.render(
			<Toggle />,
			document.getElementById('root')
		);

	// Należy zwrócić szczególną uwagę na znaczenie this funkcjach zwrotnych (ang. callbacks) używanych w JSX. W JavaScripcie metody klasy nie są domyślnie dowiązane do instancji. Jeśli zapomnisz dowiązać metodę this.handleClick i przekażesz ją jako atrybut onClick, to this przy wywołaniu będzie miało wartość undefined.
	// To zachowanie nie jest specyficzne dla Reacta; tak właśnie działają funkcje w JavaScripcie. Generalnie, jeśli odwołujesz się do metody bez () po nazwie, jak na przykład onClick={this.handleClick}, pamiętaj, aby zawsze dowiązywać ją do instancji.
	// Jeśli denerwuje Cię ciągłe wywoływanie bind, istnieją dwa sposoby na obejście tego problemu. Jeśli używasz eksperymentalnej składni publicznych pól klasy, możesz dowiązać metody do instancji poprzez zadeklarowanie ich jako pola klasy:
		class LoggingButton extends React.Component {
			// Poniższy kod wymusza dowiązanie `this` wewnątrz handleClick.
			// Uwaga: to jest składnia *eksperymentalna*.
			handleClick = () => {
				console.log('this ma wartość:', this);
			}

			render() {
				return (
					<button onClick={this.handleClick}>
						Kliknij mnie
					</button>
				);
			}
		}
	// Powyższa składnia jest domyślnie włączona w Create React App.

	// Jeśli nie chcesz używać tej składni, możesz skorzystać z funkcji strzałkowej (ang. arrow function):
		class LoggingButton extends React.Component {
			handleClick() {
				console.log('this ma wartość:', this);
			}

			render() {
				// Poniższy kod wymusza dowiązanie `this` wewnątrz handleClick.
				return (
					<button onClick={(e) => this.handleClick(e)}>
						Kliknij mnie
					</button>
				);
			}
		}

	// Problem z taką składnią polega na tym, że za każdym razem, gdy LoggingButton jest renderowany, tworzona jest nowa funkcja. W większości przypadków nie ma to większego znaczenia.
	// Jeśli jednak będzie przekazywana do komponentów osadzonych głębiej w strukturze, będzie niepotrzebnie powodowała ich ponowne renderowanie. Zalecamy więc korzystanie ze składni pól klasy lub wiązanie metod w konstruktorze, aby uniknąć tego typu problemów z wydajnością.

// Przekazywanie argumentów do procedur obsługi zdarzeń

	// Dość często, na przykład w pętli, potrzebujemy przekazać do procedury obsługi zdarzenia dodatkowy parametr. Na przykład, jeśli zmienna id zawierałaby identyfikator wiersza w tabeli, można by rozwiązać to na dwa sposoby:
		<button onClick={(e) => this.deleteRow(id, e)}>Usuń wiersz</button>
		<button onClick={this.deleteRow.bind(this, id)}>Usuń wiersz</button>

	// Obydwie linie robią to samo, przy użyciu, odpowiednio, funkcji strzałkowej oraz Function.prototype.bind.
	// W obydwóch przypadkach argument e, reprezentujący zdarzenie reactowe, zostanie przekazany jako drugi w kolejności, zaraz po identyfikatorze wiersza. W przypadku funkcji strzałkowej, musimy przekazać go jawnie, natomiast w bind kolejne argumenty są przekazywane do funkcji automatycznie.

// Renderowanie warunkowe
	// Te rzeczy raczej ogarniasz, więc bez notatek

// Listy i klucze
	// Wyświetlanie wielu komponentów
		// Poniżej iterujemy tablicę liczb numbers używając javascriptowej funkcji map(). Zwracamy element <li> dla każdego elementu tablicy. Na koniec przypisujemy powstałą w ten sposób tablicę do zmiennej listItems:
			const numbers = [1, 2, 3, 4, 5];
			const listItems = numbers.map((number) =>
				<li>{number}</li>
			);

		// Umieszczamy całą tablicę listItems wewnątrz elementu <ul> i wyświetlamy ją w DOM:
			ReactDOM.render(
				<ul>{listItems}</ul>,
				document.getElementById('root')
			);

		// Możemy przekształcić poprzedni przykład w komponent, który akceptuje tablicę liczb numbers i zwraca listę elementów.
			function NumberList(props) {
				const numbers = props.numbers;
				const listItems = numbers.map((number) =>
					<li>{number}</li>
				);
				return (
					<ul>{listItems}</ul>
				);
			}

			const numbers = [1, 2, 3, 4, 5];
			ReactDOM.render(
				<NumberList numbers={numbers} />,
				document.getElementById('root')
			);

		// Kiedy uruchomisz powyższy kod, dostaniesz ostrzeżenie o tym, że do elementów listy należy dostarczyć właściwość klucza.
		// „Klucz” (ang. key) jest specjalnym atrybutem o typie łańcucha znaków, który musisz dodać podczas tworzenia elementów listy. O tym, dlaczego jest to ważne, opowiemy w następnej sekcji.

	// Klucze
		// Klucze pomagają Reaktowi zidentyfikować, które elementy uległy zmainie, zostały dodane lub usunięte. Klucze powinny zostać nadane elementom wewnątrz tablicy, aby elementy zyskały stabilną tożsamość:
		// Najlepszym sposobem wyboru klucza jest użycie unikatowego ciągu znaków, który jednoznacznie identyfikuje elementy listy spośród jego rodzeńśtwa. Jako kluczy często będziesz używać ID ze swoich danych.
		// Jesli w danych nie masz stabilnych ID dla wyświetlananych elementów, w skrajnym przypadku do orkeśłenia klucza możesz użyć elemntu tablicy.
		// Nie zaleca się używania indeksów jako kluczy, jeżeli kolejność elementów może ulec zmianie. Moze to negatywnie wpłynąć na wydajność i spowodwoać probley ze stanem komponentu
		// Jeżeli nie zdecydujesz się jawnie ustawić kluczy dla elementów listy, React domyślnie uzyje indeksów jako kluczy.

		// Wyodrębnianie komponentóœ z kluczami
			// klucze mają sens tylko w kontekście otaczajaćej tablicy.
			// Dla przykłądu, jeżeli wyodrębnisz komponent ListITem, trzymj klucz na elementach <ListItem /> wewnątrz tablicy zamist na elemencie <li> wewnątrz komponentu ListItem

			// Przykład: Niepoprawne użycie klucza
				function ListItem(props) {
					const value = props.value;
					return (
						// Źle! Nie ma potrzeby definiowania klucza tutaj:
						<li key={value.toString()}>
							{value}
						</li>
					);
				}

				function NumberList(props) {
					const numbers = props.numbers;
					const listItems = numbers.map((number) =>
						// Źle! Klucz powinien zostać określony w tym miejscu:
						<ListItem value={number} />
					);
					return (
						<ul>
							{listItems}
						</ul>
					);
				}

				const numbers = [1, 2, 3, 4, 5];
				ReactDOM.render(
					<NumberList numbers={numbers} />,
					document.getElementById('root')
				);

			// Przykład: Poprawne użycie klucza
				function ListItem(props) {
					// Dobrze! Nie ma potrzeby definiowania klucza tutaj:
					return <li>{props.value}</li>;
				}

				function NumberList(props) {
					const numbers = props.numbers;
					const listItems = numbers.map((number) =>
						// Dobrze! Klucz powinien zostać ustawiony na elementach wewnątrz tablicy.
						<ListItem key={number.toString()}
								  value={number} />

					);
					return (
						<ul>
							{listItems}
						</ul>
					);
				}

				const numbers = [1, 2, 3, 4, 5];
				ReactDOM.render(
					<NumberList numbers={numbers} />,
					document.getElementById('root')
				);

		// Podstawową regułą jest to, że elementy wewnątrz wywołania map() potrzebują kluczy.

	// Klucze muszą być unikalne tylko wśróð rodzeńśtwa
		// Klucze używane wewnątrz tablic powinny być unikalne w kontekście swojego rodzeństwa. Jednakże nie muszą one być niepowtarzalne globalnie.
		// Możemy użyć tych samych kluczy, gdy tworzymy dwie różne tablice:
			function Blog(props) {
				const sidebar = (
					<ul>
						{props.posts.map((post) =>
							<li key={post.id}>
								{post.title}
							</li>
						)}
					</ul>
				);
				const content = props.posts.map((post) =>
					<div key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.content}</p>
					</div>
				);
				return (
					<div>
						{sidebar}
						<hr />
						{content}
					</div>
				);
			}

			const posts = [
				{id: 1, title: 'Witaj Świecie', content: 'Witamy uczących się Reacta!'},
				{id: 2, title: 'Instalacja', content: 'Możesz zainstalować Reacta używając npm.'}
			];
			ReactDOM.render(
				<Blog posts={posts} />,
				document.getElementById('root')
			);

	// Użycie map() wewnątrz JSX
		// JSX pzowala na wstawienie dowolnego wyrażenia wewnątrz nawisaów klamrowych, dzięki temu mozemy użyć wyniku funckji map() bez przypisywania do zmiennej:
			function NumberList(props) {
				const numbers = props.numbers;
				return (
					<ul>
						{numbers.map((number) =>
							<ListItem key={number.toString()}
									  value={number} />

						)}
					</ul>
				);
			}

// Formularze
	// W Reakce elementy forularza HTML działają trochę inaczej niż pozostałe elementy DOM. Wynika to stąd, że elementy formularza same utrzymują swój wewnętrzny stan.
	// Dla przykładu przyjrzyjmy sę zwykłemu formualrzowi HTML z jedną wartością - imieniem:
		<form>
			<label>
				Imię:
				<input type="text" name="name" />
			</label>
			<input type="submit" value="Wyślij" />
		</form>

	// Powyższy formularz posiada domyślną funkcję automatycznego przekierowania przeglądarki do nowej strony po wysłaniu formularza przez użytkownika. Jeśli zależy ci na tej funkcjonalności, to działa ona również w Reakcie. Jednak w większości przypadków dobrze jest mieć funkcję javascriptową, która obsługuje wysyłanie formularza i ma dostęp do podanych przez użytkownika danych.
	// Standardem stała się obsługa formularzy poprzez tzw. “komponenty kontrolowane”.

	// Komponenty kontrolowane
		// W HTML-u, elementy formularza takie jak <input>, <textarea> i <select> najczęściej zachowują swój własny stan, który jest aktualizowany na podstawie danych wejściowych podawanych przez użytkownika. Natomiast w Reakcie zmienny stan komponentu jest zazwyczaj przechowywany we właściwości state (pol. stan) danego komponentu. Jest on aktualizowany jedynie za pomocą funkcji setState().

		// Możliwe jest łączenie tych dwóch rozwiązań poprzez ustanowienie reactowego stanu jako “wyłącznego źródła prawdy”. Wówczas reactowy komponent renderujący dany formularz kontroluje również to, co zachodzi wewnątrz niego podczas wypełniania pól przez użytkownika. Element input formularza, kontrolowany w ten sposób przez Reacta, nazywamy “komponentem kontrolowanym”

		// Gdybyśmy chcieli sprawić, aby podany wcześniej przykładowy formularz wyświetlał przy wysłaniu podane przez użytkownika imię, możemy zrobić z niego komponent kontrolowany w następujący sposób:

			class NameForm extends React.Component {
				constructor(props) {
					super(props);
					this.state = {value: ''};

					this.handleChange = this.handleChange.bind(this);
					this.handleSubmit = this.handleSubmit.bind(this);
				}

				handleChange(event) {
					this.setState({value: event.target.value});
				}

				handleSubmit(event) {
					alert('Podano następujące imię: ' + this.state.value);
					event.preventDefault();
				}

				render() {
					return (
						<form onSubmit={this.handleSubmit}>
							<label>
								Imię:
								<input type="text" value={this.state.value} onChange={this.handleChange} />
							</label>
							<input type="submit" value="Wyślij" />
						</form>
					);
				}
			}

		// Dzięki ustawieniu atrybutu value na elemencie formularza, wyświetlane dane zawsze będą odpowiadały this.state.value. Tym samym reactowy stan jest tutaj źródłem prawdy. Ponieważ zaś handleChange aktualizuje reactowy stan przy każdym wciśnięciu klawisza, wyświetlane dane aktualizują się na bieżąco w miarę wpisywania ich przez użytkownika.

	// Znacznik textarea
		// W HTML-u element <textarea> definiuje swój tekst poprzez elementy potomne:
			<textarea>
			  Cześć, oto przykład tekstu w polu tekstowym.
			</textarea>

		// Natomiast w Reakcie <textarea> wykorzystuje w tym celu atrybut value. Dzięki temu kod formularza zawierającego <textarea> może być podobny do kodu formularza z jednoliniowym elementem input:
			class EssayForm extends React.Component {
				constructor(props) {
					super(props);
					this.state = {
						value: 'Proszę napisać wypracowanie o swoim ulubionym elemencie DOM'
					};

					this.handleChange = this.handleChange.bind(this);
					this.handleSubmit = this.handleSubmit.bind(this);
				}

				handleChange(event) {
					this.setState({value: event.target.value});
				}

				handleSubmit(event) {
					alert('Wysłano następujące wypracowanie: ' + this.state.value);
					event.preventDefault();
				}

				render() {
					return (
						<form onSubmit={this.handleSubmit}>
							<label>
								Wypracowanie:
								<textarea value={this.state.value} onChange={this.handleChange} />
							</label>
							<input type="submit" value="Wyślij" />
						</form>
					);
				}
			}
		// Zwróć uwagę, że wartość this.state.value jest inicjalizowana w konstruktorze, tak aby pole tekstowe zawierało jakiś domyślny tekst.

	// Znacznik select
		// W HTML-u element <select> tworzy rozwijaną listę. Dla przykładu poniższy kod HTML tworzy rozwijaną listę smaków:
			<select>
				<option value="grejpfrutowy">Grejpfrutowy</option>
				<option value="limonkowy">Limonkowy</option>
				<option selected value="kokosowy">Kokosowy</option>
				<option value="mango">Mango</option>
			</select>

		// Zwróć uwagę na atrybut selected, który sprawia, że opcją wybraną domyślnie jest opcja “Kokosowy”. W Reakcie zamiast atrybutu selected używamy atrybutu value na głównym znaczniku select. W przypadku komponentów kontrolowanych jest to rozwiązanie bardziej dogodne, ponieważ wartość tego atrybutu aktualizowana jest tylko w jednym miejscu:

			class FlavorForm extends React.Component {
				constructor(props) {
					super(props);
					this.state = {value: "kokosowy"};

					this.handleChange = this.handleChange.bind(this);
					this.handleSubmit = this.handleSubmit.bind(this);
				}

				handleChange(event) {
					this.setState({value: event.target.value});
				}

				handleSubmit(event) {
					alert('Twój ulubiony smak to: ' + this.state.value);
					event.preventDefault();
				}

				render() {
					return (
						<form onSubmit={this.handleSubmit}>
							<label>
								Wybierz swój ulubiony smak:
								<select value={this.state.value} onChange={this.handleChange}>
									<option value="grejpfrutowy">Grejpfrutowy</option>
									<option value="limonkowy">Limonkowy</option>
									<option value="kokosowy">Kokosowy</option>
									<option value="mango">Mango</option>
								</select>
							</label>
							<input type="submit" value="Wyślij" />
						</form>
					);
				}
			}

		// Ogólnie elementy <input type="text">, <textarea>, i <select> działają podobnie. Wszystkie przyjmują atrybut value, który można wykorzystać w komponentach kontrolowanych.

		// Wskazówka:
		// Wartością atrybutu value może być także tablica. Daje to możliwość wyboru spośród wielu opcji w znaczniku select:
			{/*<select multiple={true} value={['B', 'C']}>*/}

	// Obsługa wielu elementów input
		// Kiedy zachodzi potrzeba obsługi wielu kontrolowanych elementów input, do każdego elementu można dodać atrybut name oraz pozwolić funkcji obsługującej (ang. handler function) zadecydować o dalszych krokach w zależności od wartości atrybutu event.target.name.

		// Przykład:
			class Reservation extends React.Component {
				constructor(props) {
					super(props);
					this.state = {
						wybieraSie: true,
						liczbaGosci: 2
					};

					this.handleInputChange = this.handleInputChange.bind(this);
				}

				handleInputChange(event) {
					const target = event.target;
					const value = target.type === "checkbox" ? target.checked : target.value;
					const name = target.name;

					this.setState({
						[name]: value
					});
				}

				render() {
					return (
						<form>
							<label>
								Wybiera się:
								<input
									name="wybieraSie"
									type="checkbox"
									checked={this.state.wybieraSie}
									onChange={this.handleInputChange} />
							</label>
							<br />
							<label>
								Liczba gości:
								<input
									name="liczbaGosci"
									type="number"
									value={this.state.liczbaGosci}
									onChange={this.handleInputChange} />
							</label>
						</form>
					);
				}
			}

		// Zwróć uwagę na wykorzystaną przez nas składnię obliczonych nazw właściwości umożliwioną przez ES6. Pozwala ona na aktualizację klucza stanu odpowiadającego nazwie danego elementu input:

		// Ponadto ponieważ setState() automatycznie scala podany stan częściowy ze stanem aktualnym, funkcja ta wywoływana jest tylko z nowo dostarczonymi danymi.


// Wynoszenie stanu w górę
	// Bardzo często kilka komponentów musi odzwierciedlać jednocześnie te same zmainy w danych. W takim przypadku proponujemy przeniesienie stanu do najbliższego przodka. Zobaczmy, jak wygląda to w praktyce.

	// W tej częsci poradnika stworzymy kalkualtor, który obliczy nam czy woda będzie się gotować w podanej temepraturze.

	// Rozpocznijmy od komponent:
		function BoilingVerdict(props) {
			if (props.celsius >= 100) {
				return <p>Woda będzie się gotować</p>;
			}
			return <p>Woda nie będzie się gotować.</p>;
		}

	// Następnie stwórzmy komponent o nazwie Calculator. Wyrenderuje on element <input>, który pozwoli wpisać temperaturę oraz zachowa jego wartość w this.state.temperature.
	// Dodatkowo, będzie on renderował komponent BoilingVerdict dla obecnej wartości inputa.
		class Calculator extends React.Component {
			constructor(props) {
				super(props);
				this.handleChange = this.handleChange.bind(this);
				this.state = {temperature: ''};
			}

			handleChange(e) {
				this.setState({temperature: e.target.value});
			}

			render() {
				const temperature = this.state.temperature;
				return (
					<fieldset>
						<legend>Podaj temperaturę w Celsjuszach:</legend>
						<input
							value={temperature}
							onChange={this.handleChange} />

						<BoilingVerdict
							celsius={parseFloat(temperature)} />

					</fieldset>
				);
			}
		}

	// Dodwaniue drugiego inputa

		// Naszym kolejnym wymogiem jest, aby oprócz inputa do wpisywania temperatury w Celsjuszach, dostarczyć także drugi input, który przyjmie temperaturę w Fahrenheitach. Oba inputy powinny być ze sobą zsynchronizowane.
		// Zacznijmy od wyizolowania komponentu TemperatureInput z komponentu Calculator. Dodamy do niego nowy atrybut scale, który będzie mógł przyjmować wartość "c" lub "f":

			const scaleNames = {
				c: 'Celsjuszach',
				f: 'Fahrenheitach'
			};

			class TemperatureInput extends React.Component {
				constructor(props) {
					super(props);
					this.handleChange = this.handleChange.bind(this);
					this.state = {temperature: ''};
				}

				handleChange(e) {
					this.setState({temperature: e.target.value});
				}

				render() {
					const temperature = this.state.temperature;
					const scale = this.props.scale;
					return (
						<fieldset>
							<legend>Podaj temperaturę w {scaleNames[scale]}:</legend>
							<input value={temperature}
								   onChange={this.handleChange} />
						</fieldset>
					);
				}
			}

		// Zmieńmy komponent Calculator tak, by renderował dwa osobne inputy z temperaturą:

			class Calculator extends React.Component {
				render() {
					return (
						<div>
							<TemperatureInput scale="c" />
							<TemperatureInput scale="f" />
						</div>
					);
				}
			}

		// Mamy teraz dwa inputy, jednak jeśli podamy temperaturę w jednym z nich, drugi nie zostanie zaktualizowany. Jest to sprzeczne z naszymi wymogami: chcemy, by oba inputy były ze sobą zsynchronizowane.
		// Nie możemy też wyświetlić BoilingVerdict z poziomu komponentu Calculator. Spowodowane jest to faktem, iż Calculator nie ma dostępu do informacji o obecnej temperaturze, która schowana jest w TemperatureInput.

		// Pisanie funckji konwertujących
			// Na początek napiszmy dwie funkcje do konwertowania temperatury ze stopni Celsjusza na Fahrenheita i odwrotnie:
				function toCelsius(fahrenheit) {
					return (fahrenheit - 32) * 5 / 9;
				}

				function toFahrenheit(celsius) {
					return (celsius * 9 / 5) + 32;
				}

			// Obie te funkcje konwertują liczby. Napiszmy jeszcze jedną funkcję, która jako argumenty przyjmie ciąg znaków temperature oraz funkcję konwertującą,, a zwróci inny ciąg znaków. Użyjemy jej do wyliczenia wartości jednego inputa w oparciu o drugi.
			// Funkcja zwróci zaokrąglony do trzeciego miejsca po przecinku wynik lub pusty ciąg znaków, jeśli temperature jest nieprawidłowe.
				function tryConvert(temperature, convert) {
					const input = parseFloat(temperature);
					if (Number.isNaN(input)) {
						return '';
					}
					const output = convert(input);
					const rounded = Math.round(output * 1000) / 1000;
					return rounded.toString();
				}

			// Na przykład, tryConvert('abc', toCelcius) zwróci pusty ciąg znaków, natomiast tryConvert('10.22', toFahrenheit) zwróci '50.396'.

		// Wynoszenie stanu w góre
			// W Reakcie współdzielenie stanu komponentu można osiągnąć poprzez utworzenie stanu w najbliższym wspólnym przodku. Nazywa się to “wynoszeniem stanu w górę” (ang. lifting state up).
			// To jest lepiej wytłumaczone w poniższym filmiku, tam masz lepszy przykład:
				// https://www.youtube.com/watch?v=ZluNj0-NpNI

		// Wnioski ( z dokumentacji )
			// Wszelkie dane, które zmieniają się w apliakcji reactowej, powinny mieć swoje pojedyńcze "źródło prawdy". Na ogół stan dodaje się najpeirw do komponentu, który potrzebuje go podczas renderowania.
			// Następnie, jeśli inny komponent potrzebuje  komponent potrzebuje tych samych danych, możemy "wynieśc je w górę" do najbliższego wspólnego przodka. Zamiast próbować synchronizować stan między komponentami, lepiej polegać na przepływie danych "z góry na dół"

// Kompozycja a dziedziczenie
	// React posiada potężny model kompozycyjny, z którego zalecamy korzystać zamiast dziedziczenia, aby komponentów można było używać wielokrotnie.

		// Zawieranie


// Z JAKIEGOŚ KURSU (Chyba YouTubera z Polski)

// React Hooks 
// 	Nowa funkcja w React, która umożliwia wprowadzanie stanu do "functional component", wcześniej była tylko możliwość skorzystania ze stanu w class based components.
// 	Wcześniej jak chcieliśmy używać componentDidMount, ComponentDidUpdate czy setState, musieliśmy właśnie tworzyć class based components

// Redux
// 	Menadżer stanu aplikacji. Pożyteczny przy bardziej rozbudowanych aplikacjach

// 	Mamy jeden zbiorczy store, który kontroluje informacje o naszej aplikacji.

// 	To jak kompletny store w danym momencie wygląda, to jest stan naszej aplikacji

// 	Stan w redux jest tylko do odczytu, dlatego za każdym razem jak coś się zmienia w state, to my tworzymy nową wersję statu, a nie tworzymy nowego

// 	Zmiany, które zachodzą w naszym State, przechodzą przez Reducer. Reducer, to czysta funkcja, ktora nie zmienia już istniejących danych (masz o tym w kursie udemy)
// 		UWAGA! Reducer za każdym razem zwraca nam nowy stan, więc nie możemy "pogubić" reszty obiektu. Poniżej przykład

		import { createStore } from 'redux';

		const initialMovies = {
			listName: 'Favourite',
			movies: [
				'Rambo III',
				'Hakerzy',
				'Matrix'
			]
		}

		// Poniżej Reducer
		function movies(state = initialMovies, action) {
			switch (action.type) {
				case 'RESET':
					return {
						...state, // musimy uzyć tutaj operatora spread na state, po to żeby nie zgubić reszty obiektu (reszty stanu)
						movies: []
					}
				default:
					return state
			}
		}

		const store =  createStore(movies);
		// Dla celów demonstracyjnych zapsizemy store w window
		window.store = store;

		// W tym momencie jak w consoli przeglądarki wywołamy "window.dispatch({type: "RESET"});" to reducer zwróci taki store:
			listName: 'Favourite',
			movies: []
		// i dobrze, bo o to chodziło, bez użycia tego "...state", w akcji reset nowy stan byłby:
			movies: []
		// czyli zgubilibyśmy nasze listName: "Favourite"

		Dodatkowy trudniejszy przykłąd z dodanie filmu
		case: "ADD":
			return {
				...state,
				movies: [...state.movies, action.movie] // poniżej w tablicy movies napierw dodajemy aktualna tablice movies (...state.movies), a pozniej nowy film, ktory bedzie przekazany w akcji czyli (action.movie)
			}

		Dalej W CONSOLI "window.dispatch({type: "RESET", movie: 'Titanic'});"	

	Reducer, musi defaultowo zwracać state

	Akcje przekazane do naszego Reducera pozwalają zmieniać stan

	za pomocą dispatch przekazujemy akcję, w dokumentacji jest, że jest to jedyny sposób do zmiany State

	Debagowanie projektu redux - za pomocą REDUX-DEVTOOLS. REACT-DEVTOOLS
	W create store też trzeba jeden parametr dodać by widziec wszystkie te akcje i zainy state'a

	Poniżej więcej na temat łączenie reducerów (Przykład) - Troche tu sie zmieniło
	Pamietaj, ze teraz type akcji nie może być tylko ADD, tlyko ADD_MOVIE i ADD_ACTOR

		import { createStore, combineReducers } from 'redux';

		const initialMovies = {
			listName: 'Favourite',
			list: [
				'Rambo III',
				'Hakerzy',
				'Matrix'
			]
		}

		const InitialActors = {
			listName: 'Best',
			list: [
				'Tom Hanks', 'Julia Roberts', 'Angelina Jolie'
			]
		}

		// Poniżej Reducer
		function movies(state = initialMovies, action) {
			switch (action.type) {
				case 'RESET':
					return {
						...state, 
						list: []
					}
				case: "ADD_MOVIE":
					return {
					...state,
					list: [...state.list, action.item] 
				}
				default:
					return state
			}
		}

		// Poniżej Reducer nr 2
		function actors(state = initialActors, action) {
			switch (action.type) {
				case 'RESET':
					return {
						...state, 
						list: []
					}
				case: "ADD_ACTORS":
					return {
					...state,
					list: [...state.list, action.item] 
				}
				default:
					return state
			}
		}

		// Poniżej łączenie reducerów - w parametrze przekazujemy obiekt z naszymi reducerami :)
		const allReducers = combineReducers({movies, actiors})

		// Dodatkowo jeśli chcemy sobie nazwać drzewo inaczej niz nasza zmeinna to możemy:
		onst allReducers = combineReducers({filmy: movies, actiors})

		const store =  createStore(allReducers);

		// Poniżej o "Action creators" - Kreatory akcji

		// możemy zawsze dodać akcję za pomocą:
		store.dispatch({type: 'ADD_ACTOR', item: 'Cezary Pazura'});
		// Ten zapis powyżej jest dobry, ale jak mamy duzo akcji, to zeby sobie uprośić zycie robimy "action creators", bo niewygodne będzie pisanie ciągle "dispatch" itd.

		Poniżej Kreator akcji - kreator akcji to funckja, która opakowuje obiekt przekazywany do dispatch
		const addActor = item => ({type: 'ADD_ACTOR', item})
		store.dispatch(addActor('Brad Pitt'));

		Dodatkowo inny sposób na obługe actionCreators to "bindActionCreators"

		import { createStore, combineReducers, bindActionCreators } from 'redux';

		const actorsActions = bindActionCreators({add: addActor}, store.dispatch)
		actorsActions.add('Jan Frycz');

		Użycie Reduxa w naszej reactowej aplikacji:
		Najpeirw musimy w głównym pliku App.js lub index.js, dołączyć Providera
		import { Provider } from 'react-redux';

		Pozniej improtujemy naszego stora, ktroego lepiej trzymac  wosobnym pliku
		import store from './store'

		Później oplatamy naszą aplikację w <Provder> czyli będzie coś jak:

		 ReactDOM.render(
		 	<Provder store={store}>
		 		<app />
	 		</Provider>
		 ), getElementById('root'));

		 Żeby teraz użyć naszego strore w poszczególnych componentach, musimy do podłączyć do reduxa:
		 	- W danym componencie importować "connect"
		 		import { connect } from 'react-redux';
	 		- i na końću pliku conenct, ktory przyjmuje 2 parametry

	 		w mapStateToProps, mapujemy soibe elmenty ze stora do props w danym komponencie
	 			export default connect(mapstateToProps)(NaszKomponent)

			Przykład componentu poniżej

			import React from 'react'
			import { connect } from 'react-redux';

			const MoviesContainer = (props) =>
				<ul>
					{props.movies.list.map(movie => <li>{movie}</li>)}
				</ul>

			const mapStateToProps = state => ({
				movies. state.movies
			})

			export default connect(mapStateToProps, {})(MoviesContainer)

			Dispatch z poziomu React - wysylanie akcji z poziomu react
			