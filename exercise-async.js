// PART ONE

// 1 - Make a request , get json.

let n = 42
const url = 'http://numbersapi.com/'

async function getNum(){
    let num = await axios.get(`${url}${n}?json`)
    return console.log(num.data.text)
} 

getNum()


// 2 - Multiple Numbers in a single request.

const multipleNumbers = async function (){
    let nums = await axios.get(`${url}${n}..${n+3}?json`)
    return console.log(nums.data)
}

// this is a very strange object to work with
// Numbers are keys but the object is not iterable. How to grab the text?
multipleNumbers()


// 3 - multiple requests for 4 numbers

async function get4NumberFacts(){
    let nums = [];
    
    for (i=0; i<4;i++){
        m =Math.floor(Math.random()*n)
        nums.push(await axios.get(`${url}${m}?json`))
    }
    
    for (let item of nums){
        $('.card').append(`<p style="color:black">${item.data.text}</p>`)
    }
}

get4NumberFacts()


// PART TWO

// 1 - Make a request to get single from new deck.

const deckapi = "https://deckofcardsapi.com/api/deck"

const getCardFromNewDeck = async ()=>{
    const res = await axios.get(`${deckapi}/new/draw/?count=1`)
    return console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    }

getCardFromNewDeck()

// 2 - Get cards from the same deck and display the card.
const deck = await axios.get(`${deckapi}/new/shuffle/?deck_count=1`)

const getCardFromSameDeck = async ()=>{
    const draw = await axios.get(`${deckapi}/${deck.data.deck_id}/draw/?count=1`)
    $('.card').append(
        $('<img>', {
                src: draw.data.cards[0].image
        })
    )
    
    if (draw.data.remaining === 0) $('#getcard').remove();
}


$("#getcard").on('click', getCardFromSameDeck)