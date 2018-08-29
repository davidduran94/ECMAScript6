console.log("hola mundo");
const nocambia = "este valor no cambia en el tiempo";
let cambia = "este valor si cambia con el tiempo";

const getUser = new Promise(function(todoBien, todoMal){
  //set intervalq ue s eejecuta cada ciertto tiermpo
  //setTimeOut se ejecuta una vez en cierto tiempo
  setTimeout(function(){
    //se ejecuta luego de 3 segundos
    todoMal("no hay usuarios");
  }, 3000);
});

const getUser = new Promise(function(todoBien, todoMal){
  fetch('https://randomuser.me/api/').then(function(response){
    return response.json();
  })
  .then(function (user){
    console.log(user);
  })
  .catch(function() {
    console.log("algo fallo");
  })
});


getUser.then(function(){
  console.log("todo esdta bien en la vida");
})
.catch(function(message){
  console.log(message);
});

Promise.all([getUser, getUser2]); // ejecuta varias promesas 


function cons(a, b){
  
}