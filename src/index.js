import './scss/index.scss'

const gridWrapper = document.querySelector('.grid-wrapper')
const animalItem = document.querySelector('.animal-item')
const animaClassForTarget = document.querySelectorAll('.grid-item') 

const store = {
    cards: [],
    same: false,
    notSameCards :[]
}
const animals = ['cat', 'dog', 'frog', 'monkey', 'pig', 'snake',
                 'cat', 'dog', 'frog', 'monkey', 'pig', 'snake']

function clean (){
   return store.cards.forEach((elem)=>{
        store.cards = []
    })
}

function shuffleAnimals (){
   return  animals.sort(() => Math.random() - 0.5)
}


const shuffledAnimals = shuffleAnimals ()


animaClassForTarget.forEach((elem, index) => {
    elem.setAttribute('data-id', index)
    elem.setAttribute('data-type', shuffledAnimals[index])
})  

gridWrapper.addEventListener('click', event => {
    if(!event.target.classList.contains('grid-wrapper') ){
        const currentAnimal = event.target
        store.notSameCards.forEach((elem)=>{
            elem.style = "pointer-events: auto"
            elem.classList.add('closed')
            elem.classList.remove('active')
            elem.classList.remove(elem.dataset.type)
            if(store.notSameCards.length == 2){
                store.notSameCards = []
            }
        })
        if(currentAnimal.classList.contains('active')){
            currentAnimal.classList.add('closed')
            currentAnimal.classList.remove('active')
            currentAnimal.classList.remove(shuffledAnimals[currentAnimal.dataset.id])
            
        }else {
            currentAnimal.classList.add('active')
            currentAnimal.classList.remove('closed')
            currentAnimal.classList.add(shuffledAnimals[currentAnimal.dataset.id])
            store.cards.push(currentAnimal)
            if(store.cards.length == 2){
                const [firsAnimal, secondAnimal] = store.cards
                if(firsAnimal.dataset.type == secondAnimal.dataset.type){
                    firsAnimal.style = "background-color:green"
                    secondAnimal.style = "background-color:green"
                    firsAnimal.style = "pointer-events: none"
                    secondAnimal.style = "pointer-events: none"
                }else {
                    store.notSameCards.push(firsAnimal)
                    store.notSameCards.push(secondAnimal)
                    firsAnimal.style = "background-color:red"
                    secondAnimal.style = "background-color:red"
                    firsAnimal.style = "pointer-events: none"
                    secondAnimal.style = "pointer-events: none"
                }
                clean()
            }
        }
    }
})