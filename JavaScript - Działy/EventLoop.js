JavaScript:
    - synchronous
    - blocking
    - single threaded

    Synchroninczny, znaczy, ze robi jedną rzecz na raz, czyli zacznie wkonywać jedną funkcję
    i dopóki jej nie skończy, nie wywoła następnej, będzie BLOKOWAŁ działanie nastepnych fukncji

    Pamiętaj, że tu chodzi o sam JavaScript

    Możesz sprawdzić to blokowanie wpisując w konsole
        while(true) {
            console.log("Don't stop till you get enough")
        }
    Po wpisaniu tego nie będziesz mógl na nic kliknąć, aż w końcu przeglądarka się zawiesi, luz wyrzuci bład

    Co zrobić aby zaradzić tmeu blokowaniu? Tu do pomocy przychodzi asynchronicznny JS
    Poniżej jak to działa i teoria
        Asynchroniocnzosc to wykonywnaie wielu operacji w tym samym czasie

        Kilka asynchronicznych rozwiązań w JS:
            - callbacks
            - promises
            - async/await

    Zobacz jak działa EVENT LOOP na orazku w eventloop.png i evenloop2.png

        Browser APIs
            Przykłady:
                - setTimeout
                - DOM events
                - geo location
                - XMLHttpRequest object

    EventLoop -> Nasłuchuje STACK i TASK QUEUE, jeśli STACK jest pusty to wrzuca pierwsze zadanie z QUEUE
