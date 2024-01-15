const petName = document.getElementById('petName')
const ownerName = document.getElementById('ownerName')
const speciesType = document.getElementById('speciesType')
const breedType = document.getElementById('breedType')

const saveButton = document.querySelector('form button')

const contacts = [] 

class animalSchedule {
  constructor(_petName, _ownerName, _speciesType, _breedType) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.speciesType = _speciesType
    this.breedType = _breedType
  }

}

const fillAnimalSchedule = function () {

    const row = document.getElementById('animalSchedule')
    row.innerHTML = ''
    contacts.forEach((animalSchedule) => {
      const newCol = document.createElement('div')
      newCol.classList.add('col') 
      newCol.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${animalSchedule.petName}</h5>
                  <h5 class="card-title2"> ${animalSchedule.ownerName}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${animalSchedule.speciesType}</h6>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${animalSchedule.breedType}</h6>
              </div>
          </div>
          `
      row.appendChild(newCol)
    })
  
    petName.value = ''
    ownerName.value = ''
    speciesType.value = ''
    breedType.value = ''
  }

  const formReference = document.getElementsByTagName('form')[0]
  formReference.addEventListener('submit', function (e) {
    e.preventDefault() 
  
    const animalCard = new animalSchedule(
      petName.value,
      ownerName.value,
      speciesType.value,
      breedType.value
    )
  
    console.log('SCHEDA ANIMALE CREATA', animalCard)
    contacts.push(animalCard)
    fillAnimalSchedule()
  })



