document.querySelector('#saisi-button').style.backgroundColor="blue";
document.querySelector('#best-button').style.backgroundColor="green";
document.querySelector('#low-button').style.backgroundColor="red";
document.querySelector('#saisi-button').style.cssText=
    `
    background-color : blue;
    color : white;
    `
document.querySelector('#best-button').style.cssText=
    `
    background-color : green;
    color : white;
    `
document.querySelector('#low-button').style.cssText=
    `
    background-color : red;
    color : white;
    `
document.querySelector('#moy-button').style.cssText=
    `
    background-color : grey;
    color : white;
    `


    const ListNotes = document.querySelector("#list-notes");

    let nbNotes = 0,
        noteMax = 0,
        noteMin = 20,
        moyNotes = 0; 

nbNotes = Number(prompt("Combien de notes allez vous saisir ? : "));
        
    
    for( let i = 1; i <= nbNotes ; i++ ) {

    let noteTmp = Number(prompt("Veuillez saisir la note : "));

        moyNotes += noteTmp;

     if(noteTmp > noteMax)
        noteMax = noteTmp;

    if(noteTmp < noteMin)
        noteMin = noteTmp

        ListNotes.innerHTML += `<li> En note ${i}, vous avez saisi ${noteTmp}/20.</li>`;
    }

    const NoteSaisi = document.querySelector("#note-saisi");

    NoteSaisi.innerHTML += `La série contient ${nbNotes} notes :`
    
    const EnsembleNotes = document.querySelector("#ensemble-notes");

    EnsembleNotes.innerHTML += `Sur l'ensemble des ${nbNotes} notes :`

    const Moyenne = document.querySelector("#moy-note");
    const Best = document.querySelector("#low-note");
    const Low = document.querySelector("#best-note");

    moyNotes = Math.round(moyNotes/nbNotes);

    Low.innerHTML += `La note la plus basse est ${noteMin}/20`
    Best.innerHTML += `La meilleure note est ${noteMax}/20`
    Moyenne.innerHTML += `La moyenne est ${moyNotes}/20`



