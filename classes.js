
class Ator {
    constructor(id, nome){
        this.nome = nome
        this.id = id
    }
}


class Diretor {
    constructor(id, nome){
        this.nome = nome
        this.id = id
    }
}


class Filme {
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.cartaz = cartaz;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.avaliacao = avaliacao;
        this.btnDetalhes = null;
    }


    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
    }
   
    getBtnDetalhes = () => {
        return this.btnDetalhes;
    }
   
    getCardDetalhes = () => {
        let cardDetalhes = document.createElement('div');
        cardDetalhes.setAttribute("class","cardDetalhes");
       
        let imgDetalhes = document.createElement("img");
        imgDetalhes.setAttribute("class","card-img-detalhes");
        imgDetalhes.setAttribute("src",this.cartaz);


        let cardBodyDetalhes = document.createElement("div");
        cardBodyDetalhes.setAttribute("class","card-body-detalhes");
       
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
   
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        let divDetalhes = document.createElement("div");
       
        let divAno = document.createElement("div");
        let divGenero = document.createElement("div");
        let divDuracao = document.createElement("div");
        let divDirecao = document.createElement("div");
        let divElenco = document.createElement("div");
        let divAvaliacao = document.createElement("div");
        let divSinopse = document.createElement("div");
       
        divDetalhes.appendChild(divAno);
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divDuracao);
        divDetalhes.appendChild(divDirecao);
        divDetalhes.appendChild(divElenco);
        divDetalhes.appendChild(divAvaliacao);
        divDetalhes.appendChild(divSinopse);


        divAno.appendChild(document.createTextNode(this.ano));
        divGenero.appendChild(document.createTextNode(this.genero));
        divDuracao.appendChild(document.createTextNode(this.duraca));
        divDirecao.appendChild(document.createTextNode(this.direcao));
        divElenco.appendChild(document.createTextNode(this.elenco));
        divAvaliacao.appendChild(document.createTextNode(this.avaliacao));
        divSinopse.appendChild(document.createTextNode(this.sinopse));
       
       
        cardDetalhes.appendChild(imgDetalhes);
        cardDetalhes.appendChild(cardBodyDetalhes);


        cardBodyDetalhes.appendChild(hCardTitle);
        cardBodyDetalhes.appendChild(divDetalhes)


        let btnFechar = document.createElement("button");
        btnFechar.setAttribute("id","btn-fechar");
        btnFechar.appendChild(document.createTextNode("Fechar"));


        let btnSalvar = document.createElement("button");
        btnSalvar.setAttribute("id","btn-salvar");
        btnFechar.appendChild(document.createTextNode("Salvar"));


        return cardDetalhes;
    }  


    getCard = () => {
        let card = document.createElement("div")
        card.setAttribute("class", "card")


        let imgCartaz = document.createElement("img")
        imgCartaz.setAttribute("class", "card-img-topz")
        imgCartaz.setAttribute("src", this.cartaz)


        let hCardTitle = document.createElement("h5")
        hCardTitle.setAttribute("class", "card-title")


        let cardBody = document.createElement("div")
        cardBody.setAttribute("class", "card-body")




        let divGenero = document.createElement("div")
        let divAnoProducao = document.createElement("div")
        let divClassificacao = document.createElement("div")
        let divDetalhes = document.createElement("div")


        divDetalhes.appendChild(divAnoProducao);
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divClassificacao);
        divAnoProducao.appendChild(document.createTextNode(this.ano));


        card.appendChild(imgCartaz);
        card.appendChild(cardBody);


        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
       
        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());
        return card;
    }

}
/** */



