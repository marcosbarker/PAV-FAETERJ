/*const url = "https://api.github.com/users/nodejs"

fetch(url)
  .then(res => res.json())
  .then(resp => console.log(resp))



const url = "https://api.github.com/gists"
const body = { name: "teste" }

fetch(url, {
  method: 'POST',
  body: JSON.stringify(body)
})
  .then((res) => res.json())
  .then((response) => console.log(response))

const url = "http://elfcorreia.com.br/avaliacao.php"
const body = { name: "teste" }

fetch(url, {
  method: 'POST',
  body: JSON.stringify(body)
})
  .then((res) => res.json())
  .then((response) => console.log(response))


  const url = "http://elfcorreia.com.br/avaliacao.php"

fetch(url)
  .then(res => res.json())
  .then(resp => console.log(resp))*/


/*
const token = '657fa81518b92e32633abd2252faafc1';
fetch('http://elfcorreia.com.br/avaliacao.php', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(resp => console.log(resp))*/

  var data = new FormData();
        data.append("nota", 5);
        data.append("token", "abc123");
        fetch("http://elfcorreia.com.br/avaliacao.php",
            {
                method: "POST",
                body: data
            });
