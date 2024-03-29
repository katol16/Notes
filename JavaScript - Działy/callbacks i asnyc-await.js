// CALLBACKS
	const posts = [
		{ title: 'Post One', body: 'This is post one' },
		{ title: 'Post Two', body: 'This is post two' }
	];

	function getPosts() {
		setTimeout(() => {
			let output = '';
			posts.forEach((post, index) => {
				output += `<li>${post.title}</li>`;
			});

			document.body.innerHTML = output;
		}, 1000)
	};

	function createPost(post, callback) {
		setTimeout(() => {
			posts.push(post);
			callback();
		}, 2000);
	}

	// TO poniżej wywołamy w callbacku, jako drugi parametr funckji createPost
	// getPosts();

	// Ponieważ stworzenie posta ma opóżnienie 2s, to nie zoabcyzmy go, bo getPosts czeka tylko 1s
	// dlatego w funkcji createPost, tworzymy callback
	createPost({ title: 'Post Three', body: 'Post three text'}, getPosts);

//  PROMISES
	const posts = [
		{ title: 'Post One', body: 'This is post one' },
		{ title: 'Post Two', body: 'This is post two' }
	];

	function getPosts() {
		setTimeout(() => {
			let output = '';
			posts.forEach((post, index) => {
				output += `<li>${post.title}</li>`;
			});

			document.body.innerHTML = output;
		}, 1000)
	};

	function createPost(post) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				posts.push(post);

				const error = false;

				if (!error) {
					resolve();
				} else {
					reject('Error: Something went wrong');
				}
			}, 2000);
		});
	}

	// createPost({ title: 'Post Three', body: 'Post three text'})
	// 	.then(getPosts)
	// 	.catch(err => console.log(err));

	// Poniżej przykład kiedy jest kilka promisów:

	// promise.all
	const promise1 = Promise.resolve('Hello World');
	const promise2 = 10;
	const promise3 = new Promise((resolve, reject) =>
			setTimeout(resolve, 2000, 'Goodbye')
		);
	// z fetchem jest troche inaczej, trzeba tutaj też dać "then", jak gdyby dwa razy wywołamy "then"
	const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json());

	Promise.all([promise1, promise2, promise3, promise4])
		.then(values => console.log(values));

// ASYNC AWAIT
	const posts = [
		{ title: 'Post One', body: 'This is post one' },
		{ title: 'Post Two', body: 'This is post two' }
	];

	function getPosts() {
		setTimeout(() => {
			let output = '';
			posts.forEach((post, index) => {
				output += `<li>${post.title}</li>`;
			});

			document.body.innerHTML = output;
		}, 1000)
	};

	function createPost(post) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				posts.push(post);

				const error = false;

				if (!error) {
					resolve();
				} else {
					reject('Error: Something went wrong');
				}
			}, 2000);
		});
	}

	async function init() {
		await createPost({ title: 'Post Three', body: 'Post three text'});

		getPosts();
	}

	init();


// JESZCZE RAZ ZRÓB TEN MATERIAŁ!!!