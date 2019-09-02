// Component Lifecycle
    // componentWillMount - immediately before initial rendering -> ZDEPRECJONOWANY!
    // componentDidMount - immediately after initial rendering
    // componentWillReceiveProps - when component receives new props
    // shouldComponentUpdate (return false to prevent rendering!) - before rendering, after receiving new props or state
    // coponentWillUpdate - before rendering, after receiving new props or state
    // componentDidUpdate - After component's updates are flushed to DOM
    // componentWillUnmount - immediately before removing component from DOM

    // componentWillMount -> Czyli komponent się zamontuje -> ZDEPRECJONOWANY! because it is not safe for async rendering!
    componentWillMount() {
        console.log("component will mount");
    }

    // componentDidMount -> czyli komponent się już zamontował
    componentDidMount() {
        console.log("component did mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("should component update", nextProps, nextState);
        return true; // -> jeśli chcemy by się wykonał
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }


    // Dobry materiał:
    // https://www.youtube.com/watch?v=kVyrzn29QPk

    // INITAL RENDERING

    // UWAGA! Konstruktor jest meisjcem w któ©ym należy inicjować stan komponentu

    // Jeśli tworzymy nromalny class based component, to na początku wywoła się constructor.
    // Możesz to sprawdzić za pomocą console.log();
    // Następnie jak mamy componentWillMount i componentDidMount oraz render, które musimy mieć, to kolejność będzie taka:
        // 1. constructor
        // 2. componentWillMount
        // 3. render
        // 4. componentDidMount

    // Jeśli natomiast wewnątrz naszego komponentu bedziemy mieli jakiś component dziecko, to będzie:
        // 1. parent component constructor
        // 2. parent component will mount
        // 3. parent component render
        // 4. child component constructor
        // 5. child component will mount
        // 6. child component render
        // 7. child component did mount
        // 8. parent componetn did mount

    // RERENDERING COMPONENT (When state or props changes, or forced rerendering)

