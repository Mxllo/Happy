function addPhotoField(){
    const container = document.querySelector('#images');
    const fieldsContainer = document.querySelectorAll('.new-upload'); //talvez new-upload
    const newFieldContainer = fieldsContainer[(fieldsContainer.length - 1)].cloneNode(true)//clone node true copia o container inteiro;
    if(newFieldContainer.children[0].value == "")
        return alert("Insira uma imagem antes de mais!")
    else{
    newFieldContainer.children[0].value = "";
    container.appendChild(newFieldContainer);
    }
}

function deleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');
    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value="";
        return 
    }
    span.parentNode.remove();
}

function toggleSelect(event){
    const button = event.currentTarget;
    if(button.className == "active")
        return;
    else{
        document.querySelectorAll('.button-select button')
        .forEach((x) => x.classList.remove("active"));
        button.className="active";
    }

    document.querySelector('[name="open_on_weekends"').value = button.dataset.value;
}

