let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let mostrarFilmes = document.querySelector("#mostrar-filme");
let listaFilmes =  document.querySelector("#lista-filmes");
/** */


/** */
btnBuscarFilme.onclick = () =>{
   if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=81b79755&s="+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=>resp.json())
        .then((resp)=>{
            resp.Search.forEach((item)=>{
                console.log(item);
                let filme=new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null
                );
                filmes.push(filme);
            });
            listarFilmes(filmes)
        })
    }
    mostrarFilmes.styledisplay = "none";
   
    return false;
}


let detalhesFilme = async (id) =>{
    console.log(id)
    fetch("http://www.omdbapi.com/?apikey=81b79755&i="+id)
    .then((resp)=>resp.json())
    .then((resp)=>{
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        );
        console.log(filme.getCardDetalhes());
        mostrarFilmes.style.display = 'flex';
        mostrarFilmes.appendChild(filme.getCardDetalhes());


    });


    document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());


    document.querySelector("#btnFechar").onclick = () =>{
        document.querySelector("#lista-filmes").style.display = "flex";
        document.querySelector("#mostrar-filme").innerHTML="";
        document.querySelector("#mostrar-filme").style.display="none";
    }


   document.querySelector("#btnSalvar").onclick = ()=>{
        salvarFilme(filme);
    }


    document.querySelector("#lista-filmes").style.display="none";
    document.querySelector("mostrar-filmes").style.display="flex";
   
    let filmesString = localStorage.getItem('filmesFavoritos');
    let filmes = null;


    if(filmesString){
        filmes= JSON.parse(filmesString);
        filmes.push(filme);
    }
   
    else{
        filmes=[filme];
    }


    filmes = JSON.stringify(filmes);


    localStorage.setItem("filmesFavoritos",filmes);


   
    document.querySelector("#btnFilmeFavorito").onclick = () => {
        filmesFavorito(filme);
    }


    let navFavoritos = document.querySelector("#nav-favoritos");
}


let listarFilmes = async (filmes) => {
    listaFilmes.style.display = 'flex';
    listaFilmes.innerHTML = "";
     console.log(listaFilmes);


    if(filmes.length > 0){
        filmes.forEach(async(filme)=>{
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick= async()=>{
                listaFilmes.style.display = 'none';
                detalhesFilme(filme.id);
            }
        })
     }
}
