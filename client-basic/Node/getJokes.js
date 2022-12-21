import axios from 'axios';

const defVar = "Programming,Pun,Christmas"

export function getJoke(numberOfJokes, category = defVar) {
    return axios.get(`https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw&amount=${numberOfJokes}`)
        .then((response) => {
            response.data.jokes.forEach(element => {
                if (element.type === "twopart") {
                    console.log(element.setup + "/n");
                    console.log(element.delivery);
                } else {
                    console.log(element.joke);
                }
            })
        }
        )
}
