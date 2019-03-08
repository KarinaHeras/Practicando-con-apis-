function getData(url){
    return fetch(url).then(data=>data.json())
      .then(data=>data)
}


/*
La funcion starPaint
hace una llamada a la url que se le dé
y pinta el resultado en un sitio dado con la palabra element que se le haya pasado
*/

async function starPaint(endPoint, whereToPaint, element){
  const data = await getData(endPoint)
  console.log(data)
  whereToPaint.innerHTML += `<p class = "${element}">
  Name of the ${element}: ${data.name}
  </p>

  ` 
  const residents = data.residents
  residents.forEach(residentUrl => {
    starPaint(residentUrl, whereToPaint, 'Citizen')
  });


}

const url ='https://swapi.co/api/planets/1/' 

const planetRepresentation = document.querySelector('#planet')

starPaint(url, planetRepresentation, 'Planet')
