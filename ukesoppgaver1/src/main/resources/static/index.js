/*Oppgave 1
Lag en HTML-knapp som kaller en JavaScript-funksjon som viser "Hei verden"
på en blank side via "document.write". Bruk hendelsen "onClick" på knappen.*/
function helloWorld(){
    document.write("Hello world!");
// we take the page and write hello world all over it
    //we need a function to dynamically overriting the entire page
}

/*Oppgave 2
Gjør om oppgave 1 til å vise en "alert"-boks når knappen trykkes.*/
function helloAlert(){
    alert("Hello world!")
//this function is opening an alert
}

/*Oppgave 3
Lag et input-felt i en HTML-side. Lag et JavaScript som leser dataene fra input-feltet når
det er endringer i feltet (hendelsen "onChange") og som skriver disse dataene ut på en blank
side med "document.write". Funksjonen som kalles ved "onChange" skal ta en inn-parameter,
som er verdien av input-feltet.*/
function toNewPage(inputText){
    //in parameter is called inputText
    //we are going to clear the page and write again
    document.write(inputText);
    //The function recieves value of in parameter from here
}
/*Oppgave 4
Endre oppgave 3 ved å legge ut en "pop-up/alert"-boks som skal inneholde teksten fra input-feltet.*/
// We can use the sam name for the in parameter because they are scope limited
function toAlert(inputText){
    alert(inputText);
}

/*Oppgave 5
Utvid oppgave 4 med å skrive informasjonen fra input-feltet til "console.log".
Sjekk at dataene blir skrevet til loggen.*/
function toConsole(inputText){
    console.log(inputText);
    //Check console with shift+cmd+C
}

/*************** Ekstraoppgaver ********************/
/*Oppgave 6
Utvid oppgave 3 ved å gi et farge til teksten som vises på blank side.*/
function toNewPageColor(inputText){
    /*fontcolor is not best practice anymore*/
    //document.write(inputText.fontcolor("red"));
    //Probably better way:
    document.write(inputText);
    //We are not coloring the input text, but the entire document
    document.body.style.color ="red";
}

/*Oppgave 7
Utvid oppgave 4 ved å vise input i alert boks i store bokstaver.*/
function toUpperCaseAlert(inputText){
    alert(inputText.toUpperCase());
}

/*Oppgave 8
Lag et knapp som skriver tall “1” til console (bruk console.log) hver gang den trykkes.*/
function showOne(){
    console.log(1);
}

/*Oppgave 9
Utvid oppgave 8 slik at den skriver til console antall ganger knapp ble trykket. (Tell opp fra 1)*/
//Several ways to do it
// We can do it with global variables (not scope limited), avaliable anywhere
let clicks = 0;
function showNrOfClicks(){
    clicks++;
    console.log(clicks);
}

/*Oppgave 10
Endre oppgave 9 ved å legge til en melding til console slik at den viser
"Du har trykket på knappen X ganger" (hvor X er antall ganger knappen ble trykket på).*/
//Two ways; first fancy, new way:
let clicksWithString = 0;
function nrOfClicksWithString(){
    clicksWithString++;
    console.log(`This is the fancy version: ${clicksWithString}`);
    console.log("This is the not so fancy version: " + clicksWithString);
}