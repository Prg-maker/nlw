

//create map
const map = L.map('mapid').setView([-27.2206972,-49.6561779], 15);

//create and add titleLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29, 68]
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name = lat]').value = lat;
    document.querySelector('[name = lng]').value = lng;

    marker && map.removeLayer(marker)

    marker= L.marker([lat, lng], {icon}).addTo(map)
})
function addPhotoFild(){
    //pegar o container de fotos #image
    const container = document.querySelector('#images');

    //pegar o container para duplicar #new-image
    const fieldsContainer = document.querySelectorAll('.new-upload') 
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    //verificar se o campo esta fazio, se sim, nao adicionar ao container de fotos
    const input =newFieldContainer.children[0]
    if(input.value == ""){
        return 
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value=""

    //adicinar o clone ao container de images
    container.appendChild(newFieldContainer)


}
function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload') 
    
    if(fieldsContainer.length <  2){
        //limpar o valor do campo 
        span.parentNode.children[0].value=""
        return
    }

    //deletar o campo
    span.parentNode.remove();
   
    
}

//select yes or no
function toggleSelect(event){

    //retirar a class .active(dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach((button) =>{
        button.classList.remove('active')
    })

    
    //colocar a class .active(botao clicado)
    const button= event.currentTarget
    button.classList.add('active')

     //atualizar o meu hidden com o valor selecionado
    const  input = document.querySelector('[name = open_on_weekends]')

    input.value = button.dataset.value
    
    //verificar se é sim ou nao
    


   
    
   
    //pegar o botao clicar
    



    
} 
function validate(event){

    //validar se lat e lng estao preenchidas
    const needsLatAndLngs =false;
    if(needsLatAndLngs){
        event.preventDefault()
        alert('Seleciona um ponto no mapa')
    }
   
}



//create map
/*const map = L.map('mapid').setView([-27.2206972,-49.6561779], 15);

//create and add titleLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29, 68]
    
})
//create popup overlay
let marker;
//create and add markers
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value=lat;
    document.querySelector('[name=lng]').value=lng;
    
    //remover icon 
    marker && map.removeLayer(marker)
    //add icon layer
    mark = L.marker([lat , lng], {icon})
    addTo(map)
})

//adicionar o campo de fotos
function addPhotoFild(){
    //pegar o container de fotos #image
    const container = document.querySelector('#images');

    //pegar o container para duplicar #new-image
    const fieldsContainer = document.querySelectorAll('.new-upload') 
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    //verificar se o campo esta fazio, se sim, nao adicionar ao container de fotos
    const input =newFieldContainer.children[0]
    if(input.value == ""){
        return 
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value=""

    //adicinar o clone ao container de images
    container.appendChild(newFieldContainer)


}
function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload') 
    
    if(fieldsContainer.length <  2){
        //limpar o valor do campo 
        span.parentNode.children[0].value=""
        return
    }

    //deletar o campo
    span.parentNode.remove();
   
    
}

//select yes or no
function toggleSelect(event){

    //retirar a class .active(dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach((button) =>{
        button.classList.remove('active')
    })

    
    //colocar a class .active(botao clicado)
    const button= event.currentTarget
    button.classList.add('active')

     //atualizar o meu hidden com o valor selecionado
    const  input = document.querySelector('[name = open_on_weekends]')

    input.value = button.dataset.value
    
    //verificar se é sim ou nao
    


   
    
   
    //pegar o botao clicar
    


} 
*/

