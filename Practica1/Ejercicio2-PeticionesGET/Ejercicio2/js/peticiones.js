
//Me traigo el componente donde vamos a cargar los usuarios
const listUser = $("#list-users");
const pagination = $("#pagination");

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
    card.style.width = "10rem";

    const img = document.createElement('img');
    img.src = user.avatar;
    img.alt = "Error al cargar la imagen";
    img.classList.add('rounded-circle', 'mb-1'); 

    const name = document.createElement('p');
    name.classList.add("h6")
    name.textContent = user.first_name +" " +  user.last_name;

    //const email = document.createElement('p');
    //email.textContent = user.email;

    card.appendChild(img);
    card.appendChild(name);
    //card.appendChild(email);

    return card;
}

function disabledPage(pag){
    if(pag==1){
        $('#pag-1').addClass("disabled");
        $('#pag-2').removeClass("disabled")
    }else{
        $('#pag-2').addClass("disabled");
        $('#pag-1').removeClass("disabled")
    }
}


function getUsers(pag='1') {
    
    //Para mostrar el paginado
    if(pagination[0].style.display == "none"){
        pagination[0].style.display = "block";
    }

    disabledPage(pag);
    

    removeNode(listUser);
    "user strict";
    //Hago un peticion get
    $.get('https://reqres.in/api/users?page='+pag, function
    //En response queda el JSON
    (response){

        console.log(response);

        //Para cada elemento construyo
        $.each(response.data, function(index, elemento){
            listUser.append(
                createCardUser(elemento)
            );
        });
    });
}


