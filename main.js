
let textRad = document.querySelector("#textid"); //input
let köButton = document.querySelector("#köknapp"); //button
let vipButton = document.querySelector("#vipknapp"); //button
let checkIn = document.querySelector("#checkinknapp"); //Button
let ordning = document.querySelector("#listan"); // ol
let innehåll = document.querySelector("#innehåll"); //div


let köLista = []; //en tom array som fylls i av EventListener.
let para = document.createElement("p"); //Skapar ett p element i js. denn blir en child till variabeln Ordning.

para.innerHTML = "<strong> There’s currently no people standing in line. </strong>" //sätter en innerHTML för att kunna använda html taggar.
ordning.appendChild(para); //här appendar vi barnet för att göra den synlig på hemsidan.

köButton.addEventListener("click",() => { //vi skapar en EventListener på knappen köknapp(<-- html id) vi vill att den ska göra nånting när man clickar.
    if (textRad.value === ""){ //om vi clickar och textraden/inputen är Tom...
        alert("Please, enter the Forename and Surname of the passenger!") // ...poppar en alert fram på skrämen 

    } else if (köLista.includes(textRad.value.toLowerCase())) { //om vi clickar och texten vi skrivit in redan finns i arrayen oavsett om du skrivit i Upper/lowercase...
        alert("The person is already in queue!") // ...så poppar en denna alert upp på skärmen..
    }

    else { //annars så pushar vi in en string som användaren skrivit in och läser den i lowercase.
    köLista.push(textRad.value.toLowerCase()); 
    let person = document.createElement("li"); //list element, dvs person
    person.innerText=textRad.value; // list elementets text är inputens value, dvs användarens imatning
    ordning.appendChild(person); //ording är en numrerad lista där vi appendar list elementen till sidan.
    textRad.value =""; // vi tömmer inputfältet för nästa inmatning.
    console.log(köLista); //loggar arrayen
    para.innerHTML = ""; //Vi tar bort p taggen vi skapade, för nu är inte kön tom längre.
    } 
})

vipButton.addEventListener("click",() => { //Vi säter en evenlistener på knappen <button id="vipknapp"> och vi vill att det ska hända något när vi clickar.
    if (textRad.value === ""){ //om vi clickar och textraden/inputen är Tom...
        alert("Please, enter the Forename and Surname of the passenger!") // ...poppar en alert fram på skrämen
    
    } else if (köLista.includes(textRad.value.toLowerCase())) { //om vi clickar och texten vi skrivit in redan finns i arrayen oavsett om du skrivit i Upper/lowercase...
        alert("The person is already in queue!")// ...så poppar en denna alert upp på skärmen..
    
    } else {
    köLista.unshift(textRad.value.toLowerCase());
    let person = document.createElement("li"); //list element, dvs person
    person.innerText=textRad.value; // list elementets text är inputens value, dvs användarens imatning
    ordning.prepend(person); //ording är en numrerad lista där vi appendar list elementen till sidan.
    textRad.value =""; // vi tömmer inputfältet för nästa inmatning.
    console.log(köLista); // loggar arrayen
    para.innerHTML = ""; //Vi tar bort p taggen vi skapade, för nu är inte kön tom längre.
    }
})

checkIn.addEventListener("click", (e) => { //Vi säter en evenlistener på sista knappen <button id="checkinknapp"> och vi vill att det ska hända något när vi clickar.
    let syskonBarn = e.target.nextElementSibling.firstChild;
    
    if (syskonBarn === null) { //Om vi försöker checka in en person som inte har ett namn och Om Syskonbarn(listelement i ol listan) får värdet null.
        para.innerHTML = "<strong> There’s currently no people standing in line. </strong>" //sätter en innerHTML för att kunna använda html taggar.
        ordning.appendChild(para); // lägger till en <p> som vi skapat med js. denna synns bara om interna variabeln syskonBarn får värdet null.
    
    } else {
    syskonBarn.remove(); //Om det inte är null så tar vi bort ett li element
    köLista.shift(); //vi tar även bort index 0 i arrayen.
    }   
})
console.log(köLista);
console.log(textRad);