import axios from "axios"

// Requisição GET com Fetch
// async function getDadosFetch() {
//   let response = fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(data => data.json())
//     .then(posts => posts)
//     .catch(err => console.log(err))

//   return response
// }

// let posts = await getDadosFetch()
// console.log(posts)

//Requisição POST com Fetch
// let data = {
//   title: 'Meu Título',
//   body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
//   userId: 1,
// }

// async function postDadosFetch() {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "post",
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(data)
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

// postDadosFetch()

//Requisição GET com Axios
// async function getDadosAxios() {
//   let response = axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.data)
//     .catch(err => console.log(err))
  
//     return response
// }

// let posts = await getDadosAxios()
// console.log(posts)

//Requisição POST com Axios
let data = {
  title: 'Meu Título',
  body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  userId: 1,
}

function postDadosAxios() {
  axios.post("https://jsonplaceholder.typicode.com/posts", data)
    .then(response => console.log(response.data))
}

postDadosAxios()
