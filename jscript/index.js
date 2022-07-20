const cardArray=[

    //match1(images)
    {
        name: 'bread',
        img: 'flipImage/bread.png',
    },
    {
        name: 'coffee',
        img: 'flipImage/coffee.png',
    },
    {
        name: 'cupcake',
        img: 'flipImage/cupcake.png',
    },
    {
        name: 'fries',
        img: 'flipImage/fries.png',
    },
    {
        name: 'ice-cream',
        img: 'flipImage/ice-cream.png',
    },

    {
        name: 'pizza',
        img: 'flipImage/pizza.png',
    },


    //match2(images)
    {
        name: 'bread',
        img: 'flipImage/bread.png',
    },
    {
        name: 'coffee',
        img: 'flipImage/coffee.png',
    },
    {
        name: 'cupcake',
        img: 'flipImage/cupcake.png',
    },
    {
        name: 'fries',
        img: 'flipImage/fries.png',
    },
    {
        name: 'ice-cream',
        img: 'flipImage/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'flipImage/pizza.png',
    }
]

cardArray.sort(() => 0.5- Math.random())

const gridDisplay=document.querySelector('#grid')
const message= document.querySelector('#message')
const score = document.querySelector('#result')
const live= document.querySelector('#lives')

let liveDisplay= 5
let chosenCard=[]
let chosenCardId=[]
let cardsWon=[]

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
      const card= document.createElement('img')
       card.setAttribute('src', 'svg/pixar2.svg')
       card.setAttribute('data-id', i)
       card.addEventListener("click", flipCard)
       gridDisplay.appendChild(card)

    }
    

    
}

createBoard()  


function checkLives() {
 
    if(liveDisplay===0){
        
    /* for(let i=0; i<chosenCard.length; i++){
         chosenCard[i].setAttribute('src', 'svg/pixar2.svg') 
           } */     
           
     const card= document.querySelectorAll('img')
     score.innerHTML = ""
     liveDisplay= 5
     message.innerHTML= "game over"   
     card[chosenCard[i]].setAttribute('src', 'svg/pixar2.svg')
     
 }
}





function checkMatch(){

    const cards= document.querySelectorAll('img')
    const optionOneId=chosenCardId[0]
    const optionTwoId=chosenCardId[1]
    
    
     if(chosenCard[0]===chosenCard[1]){
        message.innerHTML= "You've Got a match!"

        cards[optionOneId].setAttribute('src', 'flipImage/done.png')
        cards[optionTwoId].setAttribute('src', 'flipImage/done.png')

        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)

        cardsWon.push(chosenCard)
        score.innerHTML= cardsWon.length

     } 
     
     else
     
     {
        cards[optionOneId].setAttribute('src', 'svg/pixar2.svg')
        cards[optionTwoId].setAttribute('src', 'svg/pixar2.svg')
        message.innerHTML= "Ops, not match"

        liveDisplay = liveDisplay-1
        live.innerHTML=  liveDisplay
        checkLives()

     }

     if(optionOneId ===optionTwoId){
        message.innerHTML= "You have click the same Card"

        cards[optionOneId].addEventListener('click', flipCard)
        cards[optionTwoId].addEventListener('click', flipCard)

        
        cards[optionOneId].setAttribute('src', 'svg/pixar2.svg')
        cards[optionTwoId].setAttribute('src', 'svg/pixar2.svg')

        
        cardsWon.pop(chosenCard)
        score.innerHTML= cardsWon.length

        
        liveDisplay = liveDisplay-1
        live.innerHTML=  liveDisplay
        checkLives()
        
    }
    
     chosenCard=[]
     chosenCardId=[]

     if(cardsWon.length===cardArray.length/2){

        message.innerHTML= "congratulations! it's done"
        score.innerHTML= "max score!"

     }

     
    
}

function flipCard(){

const cardId= this.getAttribute('data-id')
chosenCard.push(cardArray[cardId].name)
chosenCardId.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
 

if(chosenCard.length ===2){

    setTimeout( checkMatch, 600)
}
}


