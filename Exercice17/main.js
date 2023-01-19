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


const refreshDogSelect = () => {
    select.innerHTML = `<option value="0"> Sélectionnez un chien </option>`;
    chiens.forEach(chien => {
        select.innerHTML += `<option value="${chiens.indexOf(chien)+1}"> ${chien.nom} </option> `;
    });
}


select.addEventListener('change', () => {
    let dogId = select.value;
    if(dogId != 0) {
    output.textContent = `Vous avez séléctionné le chien avec l'ID : ${dogId}`;
    } else {
        output.textContent = "";
    }
})

btn.addEventListener('click', () => {
    let dogName = document.querySelector('#dog-name').value;
    let dogBreed = document.querySelector('#dog-breed').value;
    let dogAge = Number(document.querySelector('#dog-age').value);

    chiens.push({
        nom : dogName,
        age: dogAge,
        race: dogBreed
    })
    refreshDogSelect();
    output.textContent = "";
})


refreshDogSelect();