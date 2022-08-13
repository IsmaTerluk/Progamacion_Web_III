
//Metodo que elimina las tarjetas
function removeNode(parent){
    //Elimino los hijos
    while(parent[0].firstChild){
        parent[0].removeChild(parent[0].firstChild);
    }
}

//Metodo que crea las tarjetas
function createCardUser(user){
    

    const card = document.createElement('div');
    card.classList.add('container','text-center','mb-3','card-user');
    card.style.width = "15rem";

    const img = document.createElement('img');
    img.src = user.avatar;
    img.alt = "Error al cargar la imagen";
    img.classList.add('rounded-circle'); 

    const name = document.createElement('p');
    name.classList.add("h6")
    name.textContent = user.first_name +" " +  user.last_name;

    const email = document.createElement('p');
    email.textContent = user.email;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(email);


    return card;
}


function getSocio() {
    //Capturamos el numero de socio
    const number = document.getElementById('nro').value.trim();
   
    "user strict";
    //Hago un peticion get
    $.get('https://reqres.in/api/users/'+number, function
    //En response queda el JSON
    (response){

        const user = $("#user");
        removeNode(user);
        user.append(createCardUser(response.data));
       
    });
}


