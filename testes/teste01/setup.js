function Avaliar(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("avaliacao.html");
  url = url[0];

  var s1 = document.getElementById("s1").src;
  var s2 = document.getElementById("s2").src;
  var s3 = document.getElementById("s3").src;
  var s4 = document.getElementById("s4").src;
  var s5 = document.getElementById("s5").src;
  var avaliacao = 0;

  if (estrela == 5) {
      if (s5 == url + "https://urless.in/GkzRb") {
          document.getElementById("s1").src = "https://urless.in/vDJ8l";
          document.getElementById("s2").src = "https://urless.in/vDJ8l";
          document.getElementById("s3").src = "https://urless.in/vDJ8l";
          document.getElementById("s4").src = "https://urless.in/vDJ8l";
          document.getElementById("s5").src = "https://urless.in/vDJ8l";
          avaliacao = 5;
      } else {
          document.getElementById("s1").src = "https://urless.in/vDJ8l";
          document.getElementById("s2").src = "https://urless.in/vDJ8l";
          document.getElementById("s3").src = "https://urless.in/vDJ8l";
          document.getElementById("s4").src = "https://urless.in/vDJ8l";
          document.getElementById("s5").src = "https://urless.in/GkzRb";
          avaliacao = 4;
      }
  }

  //ESTRELA 4
  if (estrela == 4) {
      if (s4 == url + "https://urless.in/GkzRb") {
          document.getElementById("s1").src = "https://urless.in/vDJ8l";
          document.getElementById("s2").src = "https://urless.in/vDJ8l";
          document.getElementById("s3").src = "https://urless.in/vDJ8l";
          document.getElementById("s4").src = "https://urless.in/vDJ8l";
          document.getElementById("s5").src = "https://urless.in/GkzRb";
          avaliacao = 4;
      } else {
          document.getElementById("s1").src = "https://urless.in/vDJ8l";
          document.getElementById("s2").src = "https://urless.in/vDJ8l";
          document.getElementById("s3").src = "https://urless.in/vDJ8l";
          document.getElementById("s4").src = "https://urless.in/GkzRb";
          document.getElementById("s5").src = "https://urless.in/GkzRb";
          avaliacao = 3;
      }
  }

  //ESTRELA 3
  if (estrela == 3) {
      if (s3 == url + "https://urless.in/GkzRb") {
          document.getElementById("s1").src = "https://urless.in/vDJ8l";
          document.getElementById("s2").src = "https://urless.in/vDJ8l";
          document.getElementById("s3").src = "https://urless.in/vDJ8l";
          document.getElementById("s4").src = "https://urless.in/GkzRb";
          document.getElementById("s5").src = "https://urless.in/GkzRb";
          avaliacao = 3;
      } else {
          document.getElementById("s1").src = "https://urless.in/vDJ8l";
          document.getElementById("s2").src = "https://urless.in/vDJ8l";
          document.getElementById("s3").src = "https://urless.in/GkzRb";
          document.getElementById("s4").src = "https://urless.in/GkzRb";
          document.getElementById("s5").src = "https://urless.in/GkzRb";
          avaliacao = 2;
      }
  }

  //ESTRELA 2
  if (estrela == 2) {
      if (s2 == url + "https://urless.in/GkzRb") {
        document.getElementById("s2").src = "https://urless.in/vDJ8l";
        avaliacao = 2;
      } else {
          document.getElementById("s1").src = "https://urless.in/vDJ8l";
          document.getElementById("s2").src = "https://urless.in/GkzRb";
          document.getElementById("s3").src = "https://urless.in/GkzRb";
          document.getElementById("s4").src = "https://urless.in/GkzRb";
          document.getElementById("s5").src = "https://urless.in/GkzRb";
          avaliacao = 1;
      }
  }

  //ESTRELA 1
  if (estrela == 1) {
      if (s1 == url + "https://urless.in/GkzRb") {
          document.getElementById("s1").src = "https://urless.in/vDJ8l";
          document.getElementById("s2").src = "https://urless.in/GkzRb";
          document.getElementById("s3").src = "https://urless.in/GkzRb";
          document.getElementById("s4").src = "https://urless.in/GkzRb";
          document.getElementById("s5").src = "https://urless.in/GkzRb";
          avaliacao = 1;
      } else {
          document.getElementById("s1").src = "https://urless.in/GkzRb";
          document.getElementById("s2").src = "https://urless.in/GkzRb";
          document.getElementById("s3").src = "https://urless.in/GkzRb";
          document.getElementById("s4").src = "https://urless.in/GkzRb";
          document.getElementById("s5").src = "https://urless.in/GkzRb";
          avaliacao = 0;
      }
  }
/*
  document.getElementById('rating').innerHTML = avaliacao;
  var data = new FormData();
  data.append("nota", avaliacao );
  data.append("token", "657fa81518b92e32633abd2252faafc1");
  fetch("http://elfcorreia.com.br/avaliacao.php",
      {
          method: "POST",
          body: data
      });
*/

}