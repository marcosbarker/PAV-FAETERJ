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

const url = "h"
const body = { name: "teste" }

fetch(url, {
  method: 'POST',
  body: JSON.stringify(body)
})
  .then((res) => res.json())
  .then((response) => console.log(response))


  const url = ""

fetch(url)
  .then(res => res.json())
  .then(resp => console.log(resp))*/


/*
const token = '';
fetch(':', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(resp => console.log(resp))*/

  var data = new FormData();
        data.append("nota", 5);
        data.append("token", "");
        fetch("",
            {
                method: "POST",
                body: data
            });
