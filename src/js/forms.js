// FormData va a abstraerr todos los valores de los
// elementos del formulario que cuenten con un atributo 'name'
// asignado y los va a setear en un objeto de tipo FormData.
$form = document.querySelector("form");
const data = new FormData($form);

//retorna el valor del elemento con el atributo name="nombre"
data.get("nombre");

//setea el valor avengers en la key pelicula 
data.set("pelicula", "avengers");


//reemplazar html dentro de un elemento
let name = "David Duram"
let container = document.querySelector("div.clase");
container.innerHTML = `<p>${name}</p>`;

