   function Avaliar(estrela) {

        var url = window.location;
        url = url.toString()
        url = url.split("index.html");
        url = url[0];

        var s1 = document.getElementById("s1").src;
        var s2 = document.getElementById("s2").src;
        var s3 = document.getElementById("s3").src;
        var s4 = document.getElementById("s4").src;
        var s5 = document.getElementById("s5").src;
        var avaliacao = 0;

        if (estrela == 5){        
            if (s5 == url + "assets/vazia.png") {
                document.getElementById("s1").src = "assets/cheia.png";
                document.getElementById("s2").src = "assets/cheia.png";
                document.getElementById("s3").src = "assets/cheia.png";
                document.getElementById("s4").src = "assets/cheia.png";
                document.getElementById("s5").src = "assets/cheia.png";
                avaliacao = 5;
            } else {
                document.getElementById("s1").src = "assets/cheia.png";
                document.getElementById("s2").src = "assets/cheia.png";
                document.getElementById("s3").src = "assets/cheia.png";
                document.getElementById("s4").src = "assets/cheia.png";
                document.getElementById("s5").src = "assets/vazia.png";
                avaliacao = 4;
            }
         }       
        
        if (estrela == 4){  
            if (s4 == url + "assets/vazia.png") {
                document.getElementById("s1").src = "assets/cheia.png";
                document.getElementById("s2").src = "assets/cheia.png";
                document.getElementById("s3").src = "assets/cheia.png";
                document.getElementById("s4").src = "assets/cheia.png";
                document.getElementById("s5").src = "assets/vazia.png";
                avaliacao = 4;
            } else {
                document.getElementById("s1").src = "assets/cheia.png";
                document.getElementById("s2").src = "assets/cheia.png";
                document.getElementById("s3").src = "assets/cheia.png";
                document.getElementById("s4").src = "assets/vazia.png";
                document.getElementById("s5").src = "assets/vazia.png";
                avaliacao = 3;
            }
        }

        if (estrela == 3){  
            if (s3 == url + "assets/vazia.png") {
                document.getElementById("s1").src = "assets/cheia.png";
                document.getElementById("s2").src = "assets/cheia.png";
                document.getElementById("s3").src = "assets/cheia.png";
                document.getElementById("s4").src = "assets/vazia.png";
                document.getElementById("s5").src = "assets/vazia.png";
                avaliacao = 3;
            } else {
                document.getElementById("s1").src = "assets/cheia.png";
                document.getElementById("s2").src = "assets/cheia.png";
                document.getElementById("s3").src = "assets/vazia.png";
                document.getElementById("s4").src = "assets/vazia.png";
                document.getElementById("s5").src = "assets/vazia.png";
                avaliacao = 2;
            }
        }        
        
        if (estrela == 2){  
            if (s2 == url + "assets/vazia.png") {
                document.getElementById("s1").src = "assets/cheia.png";
                document.getElementById("s2").src = "assets/cheia.png";
                document.getElementById("s3").src = "assets/vazia.png";
                document.getElementById("s4").src = "assets/vazia.png";
                document.getElementById("s5").src = "assets/vazia.png";
                avaliacao = 2;
            } else {
                document.getElementById("s1").src = "assets/cheia.png";
                document.getElementById("s2").src = "assets/vazia.png";
                document.getElementById("s3").src = "assets/vazia.png";
                document.getElementById("s4").src = "assets/vazia.png";
                document.getElementById("s5").src = "assets/vazia.png";
                avaliacao = 1;
            }
        }        
        
        if (estrela == 1){  
            if (s1 == url + "assets/vazia.png") {
                document.getElementById("s1").src = "assets/cheia.png";
                document.getElementById("s2").src = "assets/vazia.png";
                document.getElementById("s3").src = "assets/vazia.png";
                document.getElementById("s4").src = "assets/vazia.png";
                document.getElementById("s5").src = "assets/vazia.png";
                avaliacao = 1;
            } else {
                document.getElementById("s1").src = "assets/vazia.png";
                document.getElementById("s2").src = "assets/vazia.png";
                document.getElementById("s3").src = "assets/vazia.png";
                document.getElementById("s4").src = "assets/vazia.png";
                document.getElementById("s5").src = "assets/vazia.png";
                avaliacao = 0;
            }
        }
         
    var data = new FormData();
    data.append("nota", avaliacao );
    data.append("token", "<TOKEM-AQUI>");
    fetch("<LINK-DB>",
        {
            method: "POST",
            body: data
        });
    
     setTimeout(function(){
     window.location.reload(1);
    }, 5000);    
}