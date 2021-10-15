/*-------------------------------------------Evento de click .hamburguer*/
    document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
    );



/*----------------------------------------------------- Btn #next #prev*/
    var bg1       = document.getElementById("bg1")
    var content01 = document.getElementById('focus01')
    var content02 = document.getElementById('focus02')
    
/*---------Woman*/
    function NextWoman() {
        bg1.style.backgroundImage = "url('img/woman02.jpg')"
        content01.style.display   = "none"
        content02.style.display   = "block"
    }
    function PrevWoman() {
        bg1.style.backgroundImage = "url('img/woman01.jpg')"
        content01.style.display   = "block"
        content02.style.display   = "none"
    }
    
/*---------Men*/
    function NextMen() {
        bg1.style.backgroundImage = "url('img/Men02.jpg')"
        content01.style.display   = "none"
        content02.style.display   = "block"
    }
    function PrevMen() {
        bg1.style.backgroundImage = "url('img/Men01.jpg')"
        content01.style.display   = "block"
        content02.style.display   = "none"
    }
    
/*------Shoes*/
    function NextShoes() {
        bg1.style.backgroundImage = "url('img/shoes02.jpg')"
        content01.style.display   = "none"
        content02.style.display   = "block"
    }
    function PrevShoes() {
        bg1.style.backgroundImage = "url('img/shoes01.jpg')"
        content01.style.display   = "block"
        content02.style.display   = "none"
    }

/*-----Brand*/
    function NextBrand() {
        bg1.style.backgroundImage = "url('img/brand02.jpg')"
        content01.style.display   = "none"
        content02.style.display   = "block"
    }
    function PrevBrand() {
        bg1.style.backgroundImage = "url('img/brand01.jpg')"
        content01.style.display   = "block"
        content02.style.display   = "none"
    }



/*---------------------------------------------------- main .cart .size*/
    var size01 = document.getElementById("size-01")
    var size02 = document.getElementById("size-02")
    var size03 = document.getElementById("size-03")

/*---- .size #size-01 S*/
    function sz01(){
        if(size01.clicked = size01.style.background = "#e67e34"){
            size01.style.color      = 'white'
            size02.style.color      = 'black'
            size02.style.background = 'none'
            size03.style.color      = 'black'
            size03.style.background = 'none'
        }
    }

/*--- .size #size-02 M*/
    function sz02(){
        if(size02.clicked = size02.style.background = "#e67e34"){
            size02.style.color      = 'white'
            size01.style.color      = 'black'
            size01.style.background = 'none'
            size03.style.color      = 'black'
            size03.style.background = 'none'
        }
    }

/*-- .size #size-03 G*/
    function sz03(){
        if(size03.clicked = size03.style.background = "#e67e34"){
            size03.style.color      = 'white'
            size01.style.color      = 'black'
            size01.style.background = 'none'
            size02.style.color      = 'black'
            size02.style.background = 'none'
        }
    }



/*-------------------------------------------------- main .cart .amount*/
    var intensCarrinho = 0;
    intensCarrinho = parseInt(intensCarrinho);

    document.getElementById("menos").addEventListener('click', subtrair);
    document.getElementById("mais").addEventListener('click', somar);

/*---- .amount #mais*/
    function somar() {
        var i = document.getElementById("contador").innerHTML = intensCarrinho;
        if(intensCarrinho == 9){
            window.alert("carrinho cheio!", intensCarrinho);
            document.getElementById("contador").innerHTML = intensCarrinho;              
        } else {
            i++;
            intensCarrinho = i;
            document.getElementById("contador").innerHTML = intensCarrinho;
        }
    }

/*-- .amount #menos*/
    function subtrair() {
        var i = document.getElementById("contador").innerHTML = intensCarrinho;  
        if(intensCarrinho == 0){  
            window.alert("carrinho vazio!", intensCarrinho);
            document.getElementById("contador").innerHTML = intensCarrinho;  
        } else {
            i--;
            intensCarrinho = i;
            document.getElementById("contador").innerHTML = intensCarrinho;
        }
    }
/*----------------------------------------------------------------------*/