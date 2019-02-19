let nameUser 
let myForm = document.getElementById('form-welcome'), 
    divWelcome = document.getElementById('welcome'), 
    divSelectGame = document.getElementById('select-game'), 
    userName = document.getElementById('user_name'), 
    gameOne = document.getElementById('game_one'), 
    gameTwo = document.getElementById('game_two'),
    formGameOne = document.getElementById('form-game_one'), 
    formGameTwo = document.getElementById('form-game_two'), 
    respuestaOne = document.getElementById('respuesta'),
    respuestaTwo = document.getElementById('respuesta_game_two')

    // Formulario de bienvenida
    myForm.addEventListener('submit' , (e => {
    e.preventDefault();// Prevenir el evento por default de un formulario
    nameUser = e.target.name.value;  
    divWelcome.style.display = 'none'  
    divSelectGame.style.display = 'block' 
    userName.textContent = nameUser   
}));

 //formulario para seleccionar el juego 
 const game = game => {
    divSelectGame.style.display='none'
     if (game == 1) {
        gameOne.style.display='block'
     }
     else {
        gameTwo.style.display='block'
     }  
 }

 //formulario del primer juego
 formGameOne.addEventListener('submit' , e => {
     e.preventDefault();
    
     let responseOne = e.target.question_one.value, 
     responseTwo = e.target.question_two.value, 
     responseThree = e.target.question_three.value;
    
    let respuesta1 = validarRespuesta(responseOne, 2),
    respuesta2 = validarRespuesta(responseTwo, 1),
    respuesta3 = validarRespuesta(responseThree, 3);

    respuestaOne.innerHTML  = `
    ${respuesta1} <br>
    ${respuesta2} <br>
    ${respuesta3} <br>
    <input type="button" onclick="volver()" style="
      width: 50%;
      height: 10%;
      margin: auto;
      padding: 8px;
      border-radius: 8px 8px;
    " value="Volver a seleccionar tu juego">
   `
 });

//formulario del segundo juego
 formGameTwo.addEventListener('submit' , e => {
    e.preventDefault()
   
    let responseOne = e.target.question_one.value, 
    responseTwo = e.target.question_two.value, 
    responseThree = e.target.question_three.value;
   
   let respuesta1 = validarRespuesta(responseOne, 3),
   respuesta2 = validarRespuesta(responseTwo, 1),
   respuesta3 = validarRespuesta(responseThree, 2);

   respuestaTwo.innerHTML  = `
   ${respuesta1} <br>
   ${respuesta2} <br>
   ${respuesta3} <br>

   <input type="button" id="btn-reset" onclick="volver()" style="
   width: 50%;
   height: 10%;
   margin: auto;
   padding: 8px;
   border-radius: 8px 8px;
 " value="Volver a seleccionar tu juego">
  `
   });

   //validar reespuesta
const validarRespuesta = (numeroMarcado, numeroCorrecto) => {
   let response = '';
  if (numeroMarcado == numeroCorrecto ) {
      response = `La respuesta  es correcta `
  }else {
      response =`La respuesta  es incorrecta `
  }
  return response;
}

//retornar
const volver = () => {
    divSelectGame.style.display = 'block' 
    gameOne.style.display = 'none' 
    gameTwo.style.display = 'none' 
    respuestaOne.textContent =''
    respuestaTwo.textContent =''
 }