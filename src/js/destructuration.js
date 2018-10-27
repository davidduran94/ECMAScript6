const URL_BASE = 'https://yts.am/api/v2/';

async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
 
// entra a los elementos de la respuesta y los asigna en la constate
// que está después de los dos puntos
const { data:{movies : pelis} } = await getData(`${URL_BASE}list_movies.json?genre=action`);

