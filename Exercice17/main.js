let chiens = [
    {
        nom: "Bernie",
        age: 7,
        race: "Pinscher"
    },
    {
        nom: "Rex",
        age: 4,
        race: "Teckel"
    }
];


const select = document.getElementById('dog-select');

const btn = document.getElementById('btn-submit');

const output = document.getElementById('selectOutput');

// console.log(select);
// console.log(btn);
// console.log(output);


chiens.forEach(chien => {
    select.innerHTML += `<option value="${chiens.indexOf(chien)+1}"> ${chien.nom} </option> `;
});



// let options = "`<option value='' disabled selected> Veuillez sélectionnez un chien </option>`";


// select.innerHTML = options;

// const IndexChien = document.getElementById('index-chien');

// IndexChien.innerHTML += `<p> L'ID de votre chien est </p> `;

// const nomInput = document.querySelector('#nom');
// const ageInput = document.querySelector('#age');
// const raceInput = document.querySelector('#race');

// const nom = nomInput.value;
// const age = ageInput.value;
// const race = raceInput.value;

// const newDog = { 
//                     nom: nom,
//                     age: ageInput,
//                     race: race
//                 };

// chiens.push(newDog);



// const form = document.getElementById('form');

// form.addEventListener('change', (chiens) => {
//     
// })

// console.log(form);

// const ListChiens = document.getElementById("chiens");

// ListChiens.addEventListener("change", () => {

// })