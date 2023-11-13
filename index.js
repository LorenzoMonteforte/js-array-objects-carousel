/* Array images */
const images = [
    {
        image: 'images/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'images/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'images/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'images/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'images/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
/* funzione mostraImmagini */
function mostraImmagini(i){
    const info = document.getElementById("info");
    info.innerHTML = "";

    const immagine = document.createElement("img");
    immagine.src = images[i].image;
    info.appendChild(immagine);

    const div = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = images[i].title;
    div.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = images[i].text;
    div.appendChild(p);

    info.appendChild(div);
}
mostraImmagini(0);
/* Inizializza variabile scorrimento immagini */
let i = 0;
/* Btn avanti click */
const avanti = document.getElementById("avanti");
avanti.addEventListener("click", function(){
    if(i < (images.length-1)){
        i++;
        mostraImmagini(i);
    }
});
/* Btn indietro click */
const indietro = document.getElementById("indietro");
indietro.addEventListener("click", function(){
    if(i > 0){
        i--;
        mostraImmagini(i);
    }
});