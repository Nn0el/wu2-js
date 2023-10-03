export function setupPractice(element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/

  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  // kod för att visa vad du lärt dig om variabler och typer
  let varsAndTypes = 'varsAndTypes'
  let x = 0
  console.log(varsAndTypes, typeof (varsAndTypes))
}

function operators(element) {
  // kod för att visa vad du lärt dig om operatorer
  let x = 0
  console.log('operators ===  ', x === 1)
}

function controlStructures(element) {
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  let controlStructures = 'controlStructures'
  let x = 0
  while (x < 5) {
    console.log(x)
    x++
  }
  console.log(controlStructures, controlStructures ? 'if' : 'loopar')
}

function arraysAndObjects(element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  const arrej = [11, 22, 33, 44]
  console.log(arrej[2])
  console.log(['arrays', { and: 'objects' }])
}


function domAndEvents(element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  let x = 0
  Knapp.addEventListener('click', () => {
    x++
    console.log(x)
  }
  )




}

function domManipulation(element, Big, ) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'dom manipulation, ändra och lägg till element'
  Monkey.addEventListener('click', () => {
    console.log('apa')
    element.classList
    element.classList.add('.Big')
    //element.classList.toggle('.Big')
    //element.classList.remove('.Big')
  
 
  })
  Monkey2.addEventListener('click', () => {
    
  })
}


// element.classList.add('.big') element.classList.toggle element.classList.remove8) .hidden