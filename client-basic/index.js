/*
  Declarations:

  Const & Let

  const = constant: Is a value that is immutable (can't be changed)
  let = (old syntax was "var") This is a variable, this is mutable meaning that the value can change

  const myAge = 25 < Declaration value (can also be anything)
        ^
   Declaration name
  (Can be anything)
 */

/*
    Basic data types:
    const number = 1 // number
    const string = 'Hello' // String (Characters)
    const object = {
       key: 'value'
    } // Object
    const array = [1, 'hello', { age: 25 }] // Array (Can contain any of the ones above)
 */

const firstString = 'Nice' // String

const firstNumber = 1 // Number

const person = {
    age: 25,
    name: 'Leo',
    role: 'frontend developer'
} // Object

const firstArray = [1, 2, 3] // Array

/*
  Functions:

  Functions are used to execute certain code when called
  A function takes "parameters" These are values that you pass in to the function in order to access them inside of it
  The parameters can be empty

  function myFunction(params) {
    ...
  }
  -----
  OR
  -----
  const myFunction = (params) => { ... }
           ^         ^               ^
     Function name   Parameters     Content
  (can be anything) (What data you    (Inside the brackets you define what the function executes and returns)
                     pass in to your
                     function,
                     can be empty!)

  const myFunction = (message) => {
    console.log(message)
  }

  The function above will return another function (console.log) which will display the message you pass in to the params
  myFunction('hello') => Will output 'Hello'

  const myFunction = (message) => {
     return 'hello' + message
  }
  The function above will return a new string with 'hello' + message
  myFunction('Leo') => will return a string 'Hello Leo'
 */

const checkAge = (age, name) => {
    switch (name) {
        case 'Leo':
            return false
        case 'Raymond':
            return true
        case 'Andrei':
            return true
    }
}

const isOverLimit = checkAge(20, 'Leo') // true

if(isOverLimit) {
    console.log('Can go to systemet')
} else {
    console.log('Buy soda')
}


/*
  Asynchronous functions:
  Looks the same as regular functions but the execution differs.

  const myAsyncFunction = async (params) => {
     // Some async operation
  }

  By Asynchronous we mean that we do something which is not instant (synchronous), for example getting data from a server
  This will take some time and we want to indicate to our function that its not done executing before we get the data

  const fetchDataFromServer = async (params) => {
     // Get data from server
  }

  When we call our async function it will return us a "promise" object
  The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

  const myAsyncFunction = async() => {
    try {
        const data = await fetchDataFromServer()
        // When using try/catch everything below the async operation will be executed only if it succeeds
        // If it returns an error the "catch" block will be executed
        return 'success'
    } catch(e) {
            ^
        // Error object returned from server

      return 'error'
    }
  }
  -----
  or
  -----
  const myAsyncFunction = async() => {
     return fetchDataFromServer()
             .then(() => {
               return 'success'
             })
             .catch(e => {
               return 'error'
             })
  }
 */
