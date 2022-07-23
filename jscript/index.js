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

const gridDisplay = document.getElementById("grid")
const scoreDisplay = document.querySelector("#result")
const livesDisplay = document.querySelector("#lives")
const message = document.querySelector('#message')
const buttondisplay= document.querySelector('.button-div')


let score = 0
let lives = 8
let chosenCardId = []
let chosenCard = []
let cardWon = []

cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)

function createBoard(){
   for(i=0; i<cardArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'svg/blank.svg')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
   }

}
createBoard()

function flipCard(){
    const cardId = this.getAttribute('data-id')
    chosenCardId.push(cardId)
    chosenCard.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img )
    console.log(chosenCard)
    console.log(chosenCardId)
    if(chosenCard.length === 2){
        setTimeout(checkMatch, 600)
    }
    
}

function checkMatch(){
    const cards = document.querySelectorAll('img')
    if( chosenCardId[0] === chosenCardId[1]){
        chosenCard.pop()
        chosenCard.push(chosenCard[0].toUpperCase())
    }

    if(chosenCard[0] === chosenCard[1]){
        
        cards[chosenCardId[0]].setAttribute('src','flipImage/done.png')
        cards[chosenCardId[1]].setAttribute('src','flipImage/done.png')
        cards[chosenCardId[0]].removeEventListener('click', flipCard)
        cards[chosenCardId[1]].removeEventListener('click', flipCard)
        score = score + 1
        scoreDisplay.innerHTML = score
        message.innerHTML = " you found a match"
        cardWon.push(chosenCard)
        console.log(cardWon)
       

    } 
    if(chosenCard[0] !== chosenCard[1]){
        cards[chosenCardId[0]].setAttribute('src','svg/blank.svg')
        cards[chosenCardId[1]].setAttribute('src','svg/blank.svg')
       while( score > 0){
        score = score -1
       }
       lives = lives - 1
       scoreDisplay.innerHTML = score
       livesDisplay.innerHTML = lives

       message.innerHTML = "not a match"
    }
    if (cardWon.length === cardArray.length/2){
        message.innerHTML = `you found them all, your score is: ${score}`

    }
    chosenCard = []
    chosenCardId = []
    checklives()
   
}
 function checklives(){
    if(lives === 0){
        gridDisplay.setAttribute('style', 'display: none')
        message.innerHTML ="game over"
        const button = document.createElement('button')
        button.setAttribute("type", "button")
        button.setAttribute("id", "button")
        buttondisplay.appendChild(button)
        button.innerHTML = "Play Again"
        
    }

 }

 buttondisplay.addEventListener('click', () =>{

    document.location.reload()
 })