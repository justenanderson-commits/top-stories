const getData = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=qdzUOJvzYbD8ApRSohFZAYGA2SPANyRT')
    .then(response => {
      if(!response.ok) { 
        throw new Error('Couldn\'t reach the server')
      }
        return response.json()
      })
      .catch(error => {
        console.log('Error message: ', error)
      })
}

export default getData