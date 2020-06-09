import './scss/index.scss'

const gridWrapper = document.querySelector('.grid-wrapper')
const animalItem = document.querySelector('.animal-item')
const animaClassForTarget = document.querySelectorAll('.grid-item') 

const animals = ['cat', 'dog', 'frog', 'monkey', 'pig', 'snake',
                 'cat', 'dog', 'frog', 'monkey', 'pig', 'snake']

function shuffleAnimals (){
   return  animals.sort(() => Math.random() - 0.5)
}
const shuffledAnimals = shuffleAnimals ()


animaClassForTarget.forEach((elem, index) => {
    elem.setAttribute('data-id', index)
})  

gridWrapper.addEventListener('click', event => {
        const currentAnimal = event.target
        if(currentAnimal.classList.contains('active')){
            currentAnimal.classList.add('closed')
            currentAnimal.classList.remove('active')
            currentAnimal.classList.remove(shuffledAnimals[currentAnimal.dataset.id])
            
        }else {
            currentAnimal.classList.add('active')
            currentAnimal.classList.remove('closed')
            currentAnimal.classList.add(shuffledAnimals[currentAnimal.dataset.id])
        }
})