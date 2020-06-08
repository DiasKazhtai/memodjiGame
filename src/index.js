import './scss/index.scss'

const gridWrapper = document.querySelector('.grid-wrapper')

const animals = ['cat', 'dog', 'frog', 'monkey', 'pig', 'snake',
                 'cat', 'dog', 'frog', 'monkey', 'pig', 'snake']

const animaClassForTarget = document.querySelectorAll('.grid-item') 

function shuffleAnimals (){
   return  animals.sort(() => Math.random() - 0.5)
    
}
const shuffledArray = shuffleAnimals ()
animaClassForTarget.forEach((elem)=>{
    // elem.classList.add(shuffleAnimals[0].toString())
}) 

gridWrapper.addEventListener('click', event => {
    if(event.target.classList.contains('active')){
        event.target.classList.add('closed')
        event.target.classList.remove('active')
    }else {
        event.target.classList.add('active')
        event.target.classList.remove('closed')
    }
    
})