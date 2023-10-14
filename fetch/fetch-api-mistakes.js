import fetch from "node-fetch";

try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/dsfsdfdsfsdfsdf')
    if(res.status === 200) {
        const bulbasaur = await res.json();
        console.log(bulbasaur)
    }
    else {
        throw new Error(`We got a status ${res.status}. ${res.url} is incorrect.`)
    }
    
}

catch (error) {
    console.log(error)
}