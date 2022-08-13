

function createUser(){

    //Crea un objeto con los datos del input
    const user = {
        name: document.getElementById('name').value,
        job: document.getElementById('job').value
    };
    

    $.post('https://reqres.in/api/users', user,function(response){
        console.log(response);
        
        document.getElementById('response-name').innerHTML = response.name;
        document.getElementById('response-job').innerHTML = response.job;
        document.getElementById('response-id').innerHTML = response.id;
        document.getElementById('response-createAt').innerHTML = response.createAt;

    });

    const response_card = $('#response-card');

    if(response_card[0].style.display == 'none'){
        response_card[0].style.display = 'block';
    }

}