//Fetch API é uma função que busca uma API, passando a url da mesma como argumento

fetch('https://api.github.com/users/GLira4k')
.then(response => response.json())
.then(data => fetch(data.repos_url))
.then(res => res.json())
.then(d => console.log(d))
.catch(err => console.log(err))

// Realizamos um encadeamento de promises uma dependente da outra e um catch pegando todos os erros