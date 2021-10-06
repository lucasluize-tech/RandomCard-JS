# Promises

Promise is a guarantee of a future value.
and can have 3 states : Pending , Resolved, Reject.

For each promise we can use .then and .catch methods.

## **.then:**

.then is a callback that runs if the promise is resolved , and has acces to the value.

## **.catch:**

.catch is a callback that runs if the promise is rejected, and typically has a reason.

---

## *Chaining Promises*:

```JavaScript
// using axios module
axios.get(url)
    .then(res => {
        return axios.get(res.data)
    })
    .then(res => {
        return axios.get(res.data)
    })
    .catch(err=> console.log(err))
```

As seeing in the code above, we can chain promises and use a single catch to grab any errors in between.

Very useful for readability , instead of nesting !

---

## *Creating a Promise:*

We use the "new" keyword and "Promise" with 2 parameters/arguments , resolve and reject.

```JavaScript
function MyAsyncFn(){
    return new Promise((resolve, reject) => {
        if {/*
        code to resolve
        */
            resolve()
        }else {
            reject()
        }
    }
}
``` 

---

## **Promises Methods**

*Promise.all(array)*: "big promise" that contains an array of promises. then, we can do something with the promises.

```JavaScript
let ArrayOfPromises = [];

for (i=1; i<5; i++){
    ArrayOfPromises.push(
        axios.get(`${url}/${i}`)
    )
}

Promise.all(ArrayOfPromises)
    .then(()=>{
        ArrayOfPromisess.forEach( item => console.log(item.data.name))     
    })
```

*Promise.race(Array)*: It will return the first promise to resolve from array of promises.

```JavaScript
Promise.all(ArrayOfPromises)
    .then(item => console.log(`${item.name} won the race!`)     
    })
```