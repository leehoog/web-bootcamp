async function handleClick() {
    try {
        const jokes = await getJoke();
        console.log(jokes)
        renderJokes(jokes)
    } catch (e) {
        console.log('Oh no error!: ', e.message)
    }
}
function getJoke() {
    return fetch('https://v2.jokeapi.dev/joke/Programming,Pun,Christmas?blacklistFlags=nsfw&amount=2')
        .then((response) => response.json())
        .then((data) => {
            //process data if you want
            console.log(data.jokes)
            console.log('Do something!')
            return data.jokes
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            console.log('Nicely done!')
        });
}

async function getJoke2() {
    try {
        const jsonResponse = await fetch('https://v2.jokeapi.dev/joke/Programming,Pun,Christmas?blacklistFlags=nsfw&amount=2')
            .then((response) => response.json());
        console.log(jsonResponse)
        console.log('Do something!')
        return jsonResponse;
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Nicely done!')
    }
    // .then((response) => response.json())
    // .then((data) => {
    //     //process data if you want
    //     return data
    // })
}

function getJoke3(isError) {
    return new Promise((resolve, reject) => {
        if (isError) {
            reject(new Error('There is an error'));
        }
        resolve({
            data: 'Success',
        })
    })
        .then(console.log)
        .catch(console.log)
        .finally(() => {
            console.log('Nicely done!')
        });
}

function renderJokes(newJokes) {
    newJokes.forEach(renderJoke);
}

function renderJoke(newJoke) {
    const div = document.createElement("div");
    if (newJoke.type === "twopart") {
        div.innerHTML =
            `        
            <div class="content-wrapper" id="joke-${newJoke.id}">
                <div class="setup">
                    <p>${newJoke.setup}</p>
                </div>
                <div class="delivery">
                    <p>${newJoke.delivery}</p>
                </div>
            </div>
        `
    }

    if (newJoke.type === "single") {
        div.innerHTML =
            `        
            <div class="content-wrapper" id="joke-${newJoke.id}">
                <div class="delivery">
                    <p>${newJoke.joke}</p>
                </div>
            </div>
        `
    }



    const mainWrapper = document.getElementById("container");
    mainWrapper.appendChild(div)


}