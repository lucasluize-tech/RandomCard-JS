# ASYNC & AWAIT

Let's remember that javaScript is a Synchronus language, which means that code is read and executed line by line.

You can declare any Function a **async** function and they will always return a promise.
Inside an **async** function we can write code that looks synchronus.

Whenever we use **await** inside of an **async** function, it pauses the execution of the async function until the promise resolve and extracts the value, then the code continues.

```JavaScript
async Function getStarWarsData(){
    let movieData = await axios.get(
        "https://swapi.co/api/films/
    )
    
    console.log(movieData.data)
    // >> {count:...}
}
```

Also we can use async methods in created Objects.

---

## *Handling errors*

Simple try/catch.

```JavaScript
async function getData(){
    try{
        res = await axios.get(url)
    }catch(e){
        console.log("this data does not exist", e)
    }
}
```

## *Making paralel requests*

Making parallel requests improves the time that it takes to get a response.

```JavaScript
async function catchInParallel(){
    let item =  await Promise.all([
        axios.get(`${url}/1`)
        axios.get(`${url}/2`)
        axios.get(`${url}/3`)
    ])
}

// OR

async function catchParallel(){
    let Promise1 = axios.get(`${url}/1`)
    let Promise2 = axios.get(`${url}/2`)
    let Promise3 = axios.get(`${url}/3`)
    
    let i1= await Promise1
    let i2= await Promise2
    let i3= await Promise3
}