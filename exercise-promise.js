// PART ONE

// 1 - Make a request , get json.

let n = 42
const url = 'http://numbersapi.com/'

const request = ()=>{
    return axios.get(`${url}${n}?json`)
} 
console.log(request())



// 2 - Multiple Numbers in a single request.

const multipleNumbers = ()=>{
    return axios.get(`${url}${n}..${n+3}`)
}

console.log(multipleNumbers())


// 3 - multiple requests for 4 numbers
const allNumbers = [];
for (i=42; i<46; i++){
    allNumbers.push(
        axios.get(`${url}${i}?json`)
    )
}

function get4NumberFacts(){
    Promise.all(allNumbers)
    .then((res)=>{
    for(item of res){
        $('#list').append(`<li>${item.data.text}<li>`)
    }
})
}

const deckapi = "https://deckofcardsapi.com/api/deck"

// PART TWO

// 1 - Make a request to get single from new deck.
const getCardFromNewDeck = ()=>{
    axios.get(`${deckapi}/new/draw/?count=1`)
    .then(res=>{
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    })
}

const getCardFromSameDeck = ()=>{
        axios.get(`${deckapi}/new/shuffle/?deck_count=1`)
        .then(res=>{
            return axios.get(`${deckapi}/${res.data.deck_id}/draw/?count=1`)
        })
        .then(res=>{
            $('.card').append(
                $('<img>', {
                    src: res.data.cards[0].image
                })
            )
            if (data.remaining === 0) $('#getcard').remove();
        })
}

$("#getcard").on('click', getCardFromSameDeck)