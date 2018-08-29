async function load(){
    async function getData(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    const dataActionList = await getData('');
    console.log(dataActionList);

    //trae por ID
    const home = document.getElementById("modal");
    //trae un array con elementos co la clase
    const home1 = document.getElementsByClassName("class");
    //trae array elementos por tag
    const home2 = document.getElementsByTagName("div");
    //query selector es una combinacion de todos y en este caso solo trae el primero 
    const home3 = document.querySelector(".modal");
    // trae TODOS lo elementos que coincidan con el query
    const home4 = document.querySelectorAll(".modal");


    const $actionContainer = document.querySelector("#action");
    const $dramaContainer = document.querySelector("#drama");
    const $animationContainer = document.querySelector("#animation");

    const $modal = document.querySelector("#modal");
    const $overlay = document.querySelector("#overlay");
    const $hideModal = document.querySelector("#hide-modal");

    const $modalImage = $modal.querySelector("img");
    const $modalTitle = $modal.querySelector("h1");
    const $modalDescription = $modal.querySelector("p");
    
}