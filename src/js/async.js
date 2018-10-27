/**
 * 
 * Async methods in javascript
 * Follow-up: what if you can't use division?
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

})()


