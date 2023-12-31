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
/* Funzione mostraThumbnails */
const thumbnailsImg = [];
function mostraThumbnails(){
    const thumbnailsContainer = document.getElementById("thumbnailsContainer");
    for(let index=0; index<images.length; index++){
        const immagine = document.createElement("img");
        immagine.src = images[index].image;
        immagine.style.opacity = "0.5";
        if(index == 0){
            immagine.style.opacity = "1";
        }
        thumbnailsImg.push(immagine);
        thumbnailsContainer.appendChild(immagine);
    }
}
mostraThumbnails();
/* Funzione nascondiOpacitaAvanti */
function nascondiOpacitaAvanti(i){
    if(i == 0){
        thumbnailsImg[(images.length-1)].style.opacity = "0.5";
        thumbnailsImg[i].style.opacity = "1";
    }else{
        thumbnailsImg[(i-1)].style.opacity = "0.5";
        thumbnailsImg[i].style.opacity = "1";
    }
}
/* Funzione nascondiOpacitaIndietro */
function nascondiOpacitaIndietro(i){
    if(i == (images.length-1)){
        thumbnailsImg[0].style.opacity = "0.5";
        thumbnailsImg[(images.length-1)].style.opacity = "1";
    }else{
        thumbnailsImg[(i+1)].style.opacity = "0.5";
        thumbnailsImg[i].style.opacity = "1";
    }
}
/* Inizializza variabile scorrimento immagini */
let i = 0;
/* Btn avanti click */
const avanti = document.getElementById("avanti");
avanti.addEventListener("click", function(){
    clearInterval(autoPlay);
    clearInterval(autInd);
    i++;
    if(i == images.length){
        i = 0;
    }
    mostraImmagini(i);
    nascondiOpacitaAvanti(i);
});
/* Btn indietro click */
const indietro = document.getElementById("indietro");
indietro.addEventListener("click", function(){
    clearInterval(autoPlay);
    clearInterval(autInd);
    i--;
    if(i == -1){
        i = (images.length-1);
    }
    mostraImmagini(i);
    nascondiOpacitaIndietro(i);
});
/* Funzione funAutoPlay */
let autoPlay;
function funAutoPlay(){
    autoPlay = setInterval(function(){
        i++;
        if(i == images.length){
            i = 0;
        }
        mostraImmagini(i);
        nascondiOpacitaAvanti(i);
    }, 3000);
}
funAutoPlay();
/* Riproduzione automatica in avanti */
const ripAutAva = document.getElementById("ripAutAva");
ripAutAva.addEventListener("click", function(){
    clearInterval(autoPlay);
    clearInterval(autInd);
    funAutoPlay();
});
/* Riproduzione automatica all'indietro */
let autInd;
function funAutInd(){
    autInd = setInterval(function(){
        i--;
        if(i == -1){
            i = (images.length-1);
        }
        mostraImmagini(i);
        nascondiOpacitaIndietro(i);
    }, 3000)
}
const ripAutInd = document.getElementById("ripAutInd");
ripAutInd.addEventListener("click", function(){
    clearInterval(autoPlay);
    funAutInd();
})
/* Stop */
const stop = document.getElementById("stop");
stop.addEventListener("click", function(){
    clearInterval(autoPlay);
    clearInterval(autInd);
})