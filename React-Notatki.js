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
						
		// 	The above two components are equivalent from React's point of view.

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



React Hooks 
	Nowa funkcja w React, która umożliwia wprowadzanie stanu do "functional component", wcześniej była tylko możliwość skorzystania ze stanu w class based components.
	Wcześniej jak chcieliśmy używać componentDidMount, ComponentDidUpdate czy setState, musieliśmy właśnie tworzyć class based components

Redux
	Menadżer stanu aplikacji. Pożyteczny przy bardziej rozbudowanych aplikacjach

	Mamy jeden zbiorczy store, który kontroluje informacje o naszej aplikacji.

	To jak kompletny store w danym momencie wygląda, to jest stan naszej aplikacji

	Stan w redux jest tylko do odczytu, dlatego za każdym razem jak coś się zmienia w state, to my tworzymy nową wersję statu, a nie tworzymy nowego

	Zmiany, które zachodzą w naszym State, przechodzą przez Reducer. Reducer, to czysta funkcja, ktora nie zmienia już istniejących danych (masz o tym w kursie udemy)
		UWAGA! Reducer za każdym razem zwraca nam nowy stan, więc nie możemy "pogubić" reszty obiektu. Poniżej przykład

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
			