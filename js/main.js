const buscador = document.querySelector(".buscador");
const boton = document.querySelector(".buscar");
const resultado = document.querySelector(".resultado");

const apiKey = "1lnZj6zhoFpnAGgplWyHlUFLL1HCA7m5"; 



boton.addEventListener("click", ()=> {
    resultado.innerHTML = "";
    const url =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${buscador.value}&limit=9`;
    const peticion = fetch(url);
    peticion 
    .then((response)=>{
        return response.json();
    }) 
    .then((response) => {
    response.data.forEach(item => {
        const urlImg = item.images.original.url;
        const img = document.createElement("img");
        img.src = urlImg;
        resultado.appendChild(img);
        })
    });
})
