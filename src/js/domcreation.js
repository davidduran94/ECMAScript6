/**
 * 
 * Selectors in javascript
 * Follow-up: Platzi
 * 
*/


//accion 
//terror
//animación

(async function load(){

    async function getData(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    function videoItemTemplate(movie) {
        return (
          `<div class="primaryPlaylistItem">
            <div class="primaryPlaylistItem-image">
              <img src="${movie.medium_title_src}">
            </div>
            <h4 class="primaryPlaylistItem-title">
              ${movie.title}
            </h4>
          </div>`
        )
      }

    //con async await
    const dataResponse = await getData('https://yts.am/api/v2/list_movies.json?genre=action');
    console.log('actionlist', dataResponse); 

    const dataResponseAnime = await getData('https://yts.am/api/v2/list_movies.json?genre=animation');
    console.log('animationlist', dataResponseAnime); 

    // con promesas
    const dataResponseDrama =  getData('https://yts.am/api/v2/list_movies.json?genre=drama')
        .then(function(data){
            console.log('terrorlist', data);
        });

    
    const $actionContainer = document.querySelector("#action");
    const $dramaContainer = document.querySelector("#drama");
    const $animationContainer = document.querySelector("#animation");

    const $modal = document.querySelector("#modal");
    const $overlay = document.querySelector("#overlay");
    const $hideModal = document.querySelector("#hide-modal");

    const $modalImage = $modal.querySelector("img");
    const $modalTitle = $modal.querySelector("h1");
    const $modalDescription = $modal.querySelector("p");
    
    //se renderiza al dom el texto


    //eventos

    const $buttonEvento = document.querySelector("h1");
    $buttonEvento.addEventListener("click", () => {
      console.log("h1 clickeado");
    });


    $formData = document.querySelector("form");
    $formData.addEventListener("submit", (event) =>{
      event.preventDefault();
      console.log(event);
    });


})()


