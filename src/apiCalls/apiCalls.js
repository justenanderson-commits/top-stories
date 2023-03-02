const getData = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=qdzUOJvzYbD8ApRSohFZAYGA2SPANyRT')
    .then(response => response.json())
}

export default getData