/*Oppgave
Det skal lages et personregister hvor det legges inn personer i
et array i JavaScript. Disse personene skal opprettes i scriptet,
legges inn i arrayet og så listes ut i en HTML-tabell via en
<div> i <body>. Dette skal gjøres når en knapp trykkes.

Personobjektene som skal legges inn er JavaScript-objekter som
skal inneholde følgende nøkkel/verdi-par: Navn, adresse og
telefonnummer.*/

function visPersonRegister() {
    //Jeg oppretter et tomt array
    const personRegister = [];
    //Jeg legger inn en person i arrayet
    const person1 = {
        navn: "Line Jensen",
        adresse: "Askerveien 82",
        telefonnr: "12334455"
    };
    personRegister.push(person1);

    const person2 = {
        navn: "Frida von Hafenbrädl",
        adresse: "Seljeveien 37",
        telefonnr: "45491588"
    };
    personRegister.push(person2);
    const person3 = {
        navn: "Audun Vo",
        adresse: "Seljeveien 37",
        telefonnr: "482343289"
    };
    personRegister.push(person3);
    //skriv ut
    //th = table row
    let ut = "<table><tr>" +
        //th = table header cell
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
        "</tr>";
    for (let p of personRegister) {
        ut += "<tr>";
        //td = table data cell
        ut += "<td>" + p.navn + "</td><td>" + p.adresse + "</td><td>" + p.telefonnr + "</td>";
        ut += "</tr>";
    }
    ut += "</table>";
    document.getElementById("personRegister").innerHTML = ut;

    //Dette er en funksjon som skal brukes for å sortere arrayet etter navn
    function compare(a,b){
        if (a.navn < b.navn){
            return -1;
        }
        if (a.navn > b.navn){
            return 1;
        }
        return 0;
    }
    //Kommer navnet før i alfabetet, får det em større verdi

    /*Jeg oppretter en ny variabel som heter personRegisterSortert.
    Denne blir satt til samme verdi som personRegister, altså det
    samme arrayet med de samme objektene. Jeg sorterer etter funksjonen
    compare*/
    personRegisterSortert = personRegister.sort(compare);
    ut+="<br /><br />";
    ut+="Sortert:<br />";

    //Jeg lager en ny tabell for de sorterte
    ut += "<table><tr>" +
        "<th>Navn</th>" + "<th>Adresse</th>" + "<th>Telefonnr</th>" +
        "</tr>";

    //Jeg må bruke en løkke for å skrive dem ut i sortert rekkefølge
    let teller = 0;
    for (let p of personRegisterSortert){
        if(teller % 2 == 0){
            ut+="<tr>";
            ut+="<td>"+p.navn+"</td><td>"+p.adresse+"</td><td>"+p.telefonnr+"</td>";
            ut+="</tr>";
        } else {
            ut+="<tr>";
            ut+="<td><strong>"+p.navn+"</strong></td><td><strong>"+p.adresse+
                "</strong></td><td><strong>"+p.telefonnr+"</strong></td>";
            ut+="</tr>";
        }
        teller++;
    }
    ut+="</table>";
    document.getElementById("personRegister").innerHTML = ut;
}