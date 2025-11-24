// makes it possible to display selected pokemon in the middle of the body
const body = document.querySelectorAll("p")

// make the drop down display pokemon names

  window.onload = async () => {
    // get a list of all the pokemon

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1302`) 
    const data = await response.json()


    // for each pokemon get the name of the pokemon from json and create an option in the select with the value and name of that pokemon
    data.results.forEach(pokemon => {

    // use the url of each pokemon and use it to isolate the id
    // splits the url everywhere there is a forward slash into strings e.g "https", "", "pokeapi.co", "api"... whenever there is an ending slash or double forward slashes it returns empty strings (thats not good)
    // filter(Boolean) removes all empty strings and pop selects the last string which is conveniently the id
    const id = pokemon.url.split("/").filter(Boolean).pop();
    
    // for each pokemon in the list get its name
    // create the option that will later be used and set the value and the text content to the name of the pokemon
    let pokemonOption = new Option(pokemon.name, id)

    // append the options to the select
    pokemonSelect = document.getElementById("pokemonSelect")
    pokemonSelect.append(pokemonOption)

    pokemonSelect.classList.add("show")
    pokemonName.classList.add("show")

});
  }


async function getPokemon() {
    const pokemonName = pokemonSelect.value
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`) 
    try {

        if (!response.ok) {
            throw new Error ("That Pokemon Is Not On The List")
        }

        const data = await response.json()
        const data2 = await response2.json()
        const pokemonImg = document.getElementById("pokemonSprite")
        const pokemonSprite = data.sprites.front_default

        console.log(data)

        pokemonImg.classList.remove("show")

        setTimeout(() => {
        pokemonImg.src = pokemonSprite
        pokemonImg.classList.add("show")
        }, 50)
        

        // to get all that ui based on the pokemon's types and stuff im gonna copy everything from the other function

        // the variable 'type' is representing the name of the first type of each pokemon
        let type = data.types[0].type.name
        // variable type2 is representing the name of the second type of a pokemon
        let type2 = data.types[1] ? data.types[1].type.name : null;

        

        // 4 pokemon moves for every pokemon
        let move1 = document.getElementById("move1")
        let move2 = document.getElementById("move2")
        let move3 = document.getElementById("move3")
        let move4 = document.getElementById("move4")
        
        // making it display moves
        move1.textContent = data.moves[0].move.name
        move2.textContent = data.moves[1].move.name
        move3.textContent = data.moves[2].move.name
        move4.textContent = data.moves[3].move.name
        
        setTimeout(() => move1.classList.remove("show"))
        setTimeout(() => move2.classList.remove("show"))
        setTimeout(() => move3.classList.remove("show"))
        setTimeout(() => move4.classList.remove("show"))
        
        void move1.offsetWidth

        setTimeout(() => move1.classList.add("show"), 35)
        setTimeout(() => move2.classList.add("show"), 70)
        setTimeout(() => move3.classList.add("show"), 140)
        setTimeout(() => move4.classList.add("show"), 210)


        // Getting where the logo will be and making it big enough
        let typeLogo = document.getElementById("typeLogo");
        let typeLogo2 = document.getElementById("typeLogo2")
        typeLogo.style.maxWidth = "100px"
        typeLogo2.style.maxWidth = "100px"


        // adding flavour text
        let flavourText = document.getElementById("flavourText")
        // replace was used to remove some weird formatting with a space
        flavourText.style.opacity = 0;

        setTimeout(() => {
            flavourText.textContent = data2.flavor_text_entries[0].flavor_text.replace(/[\f\n]/g, " ")

            flavourText.style.transition = "opacity 0.3s ease"
            flavourText.style.opacity = 1
        }, 300)
        
        

        // making a switch case that changes the logo depending on what type the current pokemon is
        typeLogo.classList.remove("show")


        setTimeout(() => {

        switch(type) {

            case ("normal"):
                typeLogo.src = "Type/Normal.png"
                break;

            case ("fire"):
                typeLogo.src = "Type/Fire.png"
                break;

            case ("water"):
                typeLogo.src = "Type/Water.png"
                break;
            
            case ("grass"):
                typeLogo.src = "Type/Grass.png"
                break;
            
            case ("electric"):
                typeLogo.src = "Type/Electric.png"
                break;

            case ("ice"):
                typeLogo.src = "Type/Ice.png"
                break;    
            
            case ("fighting"):
                typeLogo.src = "Type/Fight.png"
                break;
            
            case ("poison"):
                typeLogo.src = "Type/Poison.png"
                break;
            
            case ("ground"):
                typeLogo.src = "Type/Ground.png"
                break;

            case ("flying"):
                typeLogo.src = "Type/Flying.png"
                break;
            
            case ("psychic"):
                typeLogo.src = "Type/Psychic.png"
                break;

            case ("bug"):
                typeLogo.src = "Type/Bug.png"
                break;
            
            case ("rock"):
                typeLogo.src = "Type/Rock.png"
                break;
            
            case ("ghost"):
                typeLogo.src = "Type/Ghost.png"
                break;
            
            case ("dragon"):
                typeLogo.src = "Type/Dragon.png";
                break;
            
            case ("dark"):
                typeLogo.src = "Type/Dark.png"
                break;
            
            case ("steel"):
                typeLogo.src = "Type/Steel.png";
                break;
            
            case("fairy"):
                typeLogo.src = "Type/Fairy.png"
                break;

        } 

        typeLogo.classList.add("show")
    }, 300)
            if (type2) {
            typeLogo2.classList.remove("show")


            setTimeout(() => {

            switch(type2) {
            case ("normal"):
                typeLogo2.src = "Type/Normal.png"
                break;

            case ("fire"):
                typeLogo2.src = "Type/Fire.png"
                break;

            case ("water"):
                typeLogo2.src = "Type/Water.png"
                break;
            
            case ("grass"):
                typeLogo2.src = "Type/Grass.png"
                break;
            
            case ("electric"):
                typeLogo2.src = "Type/Electric.png"
                break;

            case ("ice"):
                typeLogo2.src = "Type/Ice.png"
                break;    
            
            case ("fighting"):
                typeLogo2.src = "Type/Fight.png"
                break;
            
            case ("poison"):
                typeLogo2.src = "Type/Poison.png"
                break;
            
            case ("ground"):
                typeLogo2.src = "Type/Ground.png"
                break;

            case ("flying"):
                typeLogo2.src = "Type/Flying.png"
                break;
            
            case ("psychic"):
                typeLogo2.src = "Type/Psychic.png"
                break;

            case ("bug"):
                typeLogo2.src = "Type/Bug.png"
                break;
            
            case ("rock"):
                typeLogo2.src = "Type/Rock.png"
                break;
            
            case ("ghost"):
                typeLogo2.src = "Type/Ghost.png"
                break;
            
            case ("dragon"):
                typeLogo2.src = "Type/Dragon.png";
                break;
            
            case ("dark"):
                typeLogo2.src = "Type/Dark.png"
                break;
            
            case ("steel"):
                typeLogo2.src = "Type/Steel.png";
                break;
            
            case("fairy"):
                typeLogo2.src = "Type/Fairy.png"
                break;
        }
            typeLogo2.classList.add("show")
            }, 300) } 
                else {
                typeLogo2.src = "";
                typeLogo.style.display = "block"
            }

            

        // depending on what type the chosen pokemon is, the background colour of the moves will change
        // excuse it being called body, i didnt want to change it, would take too long
        body.forEach(body => {
            switch (type) {

            case ("normal"):
                body.style.backgroundColor = "gray"
                break;

            case ("fire"):
                body.style.backgroundColor = "red"
                break;

            case ("water"):
                body.style.backgroundColor = "blue"
                break;
            
            case ("grass"):
                body.style.backgroundColor = "green"
                break;
            
            case ("electric"):
                body.style.backgroundColor = "Yellow"
                break;

            case ("ice"):
                body.style.backgroundColor = "aquamarine"
                break;    
            
            case ("fighting"):
                body.style.backgroundColor = "brown"
                break;
            
            case ("poison"):
                body.style.backgroundColor = "purple"
                break;
            
            case ("ground"):
                body.style.backgroundColor = "saddlebrown"
                break;

            case ("flying"):
                body.style.backgroundColor = "cadetblue"
                break;
            
            case ("psychic"):
                body.style.backgroundColor = "pink"
                break;

            case ("bug"):
                body.style.backgroundColor = "forestgreen"
                break;
            
            case ("rock"):
                body.style.backgroundColor = "peru"
                break;
            
            case ("ghost"):
                body.style.backgroundColor = "violet"
                break;
            
            case ("dragon"):
                body.style.backgroundColor = "coral";
                break;
            
            case ("dark"):
                body.style.backgroundColor = "darkgray"
                break;
            
            case ("steel"):
                body.style.backgroundColor = "gray";
                break;
            
            case("fairy"):
                body.style.backgroundColor = "pink"
                break;
        }
        });
    
    }


    catch {
        console.error(error)
    }

}



async function findPokemon() {
    // pokemon name is what was searched in the input bar
    let pokemonName = document.getElementById("pokemonName").value
    // uses pokemon name to search for the pokemon then runs the try, catch
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
    try {


        // if there was a problem finding a pokemon with such a name:
        if (!response.ok) {
            throw new Error ("could not find pokemon")
        }
        // converting response from server into json so it can be used for a console.log and for sprites
        const data = await response.json()
        const data2 = await response2.json()
        console.log(data)
        
        // assigning the pokemon sprite element to an image in html so that that image will display the sprite of said pokemon
        let pokemonSprite = document.getElementById("pokemonSprite")
        // image of the pokemon will be default front facing sprite
        let pokemonImg = data.sprites.front_default
        // the source of the image that will be displayed in html will be the actual sprite that was gotten directly from json
        pokemonSprite.classList.remove("show")
        pokemonSprite.src = pokemonImg
        setTimeout(() => {
            pokemonSprite.classList.add("show")
        }, 300)

        // the variable 'type' is representing the name of the first type of each pokemon
        let type = data.types[0].type.name
        // variable type2 is representing the name of the second type of a pokemon
        let type2 = data.types[1] ? data.types[1].type.name : null;

        

        // 4 pokemon moves for every pokemon
        let move1 = document.getElementById("move1")
        let move2 = document.getElementById("move2")
        let move3 = document.getElementById("move3")
        let move4 = document.getElementById("move4")

        // making it display moves
        move1.classList.remove("show")
        move2.classList.remove("show")
        move3.classList.remove("show")
        move4.classList.remove("show")

        setTimeout(() => {

            move1.textContent = data.moves[0].move.name
            move2.textContent = data.moves[1].move.name
            move3.textContent = data.moves[2].move.name
            move4.textContent = data.moves[3].move.name
            
            move1.classList.add("show")
            move2.classList.add("show")
            move3.classList.add("show")
            move4.classList.add("show") 
        }, 300)


        let flavourText = document.getElementById("flavourText")
        flavourText.style.opacity = 0;

        setTimeout(() => {
            flavourText.textContent = data2.flavor_text_entries[0].flavor_text.replace(/[\f\n]/g, " ")

            flavourText.style.transition = "opacity 0.3s ease"
            flavourText.style.opacity = 1
        }, 300)


        // Getting where the logo will be and making it big enough
        let typeLogo = document.getElementById("typeLogo");
        let typeLogo2 = document.getElementById("typeLogo2")
        typeLogo.style.maxWidth = "100px"
        typeLogo2.style.maxWidth = "100px"

        // making a switch case that changes the logo depending on what type the current pokemon is

        typeLogo.classList.remove("show")

        setTimeout(() => {
        
        switch(type) {
            case ("normal"):
                typeLogo.src = "Type/Normal.png"
                break;

            case ("fire"):
                typeLogo.src = "Type/Fire.png"
                break;

            case ("water"):
                typeLogo.src = "Type/Water.png"
                break;
            
            case ("grass"):
                typeLogo.src = "Type/Grass.png"
                break;
            
            case ("electric"):
                typeLogo.src = "Type/Electric.png"
                break;

            case ("ice"):
                typeLogo.src = "Type/Ice.png"
                break;    
            
            case ("fighting"):
                typeLogo.src = "Type/Fight.png"
                break;
            
            case ("poison"):
                typeLogo.src = "Type/Poison.png"
                break;
            
            case ("ground"):
                typeLogo.src = "Type/Ground.png"
                break;

            case ("flying"):
                typeLogo.src = "Type/Flying.png"
                break;
            
            case ("psychic"):
                typeLogo.src = "Type/Psychic.png"
                break;

            case ("bug"):
                typeLogo.src = "Type/Bug.png"
                break;
            
            case ("rock"):
                typeLogo.src = "Type/Rock.png"
                break;
            
            case ("ghost"):
                typeLogo.src = "Type/Ghost.png"
                break;
            
            case ("dragon"):
                typeLogo.src = "Type/Dragon.png";
                break;
            
            case ("dark"):
                typeLogo.src = "Type/Dark.png"
                break;
            
            case ("steel"):
                typeLogo.src = "Type/Steel.png";
                break;
            
            case("fairy"):
                typeLogo.src = "Type/Fairy.png"
                break;
        }
            typeLogo.classList.add("show")
        }, 300)

            if (type2) {
                typeLogo2.classList.remove("show")
                setTimeout(() => {

                
            switch(type2) {
            case ("normal"):
                typeLogo2.src = "Type/Normal.png"
                break;

            case ("fire"):
                typeLogo2.src = "Type/Fire.png"
                break;

            case ("water"):
                typeLogo2.src = "Type/Water.png"
                break;
            
            case ("grass"):
                typeLogo2.src = "Type/Grass.png"
                break;
            
            case ("electric"):
                typeLogo2.src = "Type/Electric.png"
                break;

            case ("ice"):
                typeLogo2.src = "Type/Ice.png"
                break;    
            
            case ("fighting"):
                typeLogo2.src = "Type/Fight.png"
                break;
            
            case ("poison"):
                typeLogo2.src = "Type/Poison.png"
                break;
            
            case ("ground"):
                typeLogo2.src = "Type/Ground.png"
                break;

            case ("flying"):
                typeLogo2.src = "Type/Flying.png"
                break;
            
            case ("psychic"):
                typeLogo2.src = "Type/Psychic.png"
                break;

            case ("bug"):
                typeLogo2.src = "Type/Bug.png"
                break;
            
            case ("rock"):
                typeLogo2.src = "Type/Rock.png"
                break;
            
            case ("ghost"):
                typeLogo2.src = "Type/Ghost.png"
                break;
            
            case ("dragon"):
                typeLogo2.src = "Type/Dragon.png";
                break;
            
            case ("dark"):
                typeLogo2.src = "Type/Dark.png"
                break;
            
            case ("steel"):
                typeLogo2.src = "Type/Steel.png";
                break;
            
            case("fairy"):
                typeLogo2.src = "Type/Fairy.png"
                break;
        }
        typeLogo2.classList.add("show")
    }, 300)
            }   else {
                typeLogo2.src = "";
                typeLogo.style.display = "block"
            }

            

        // depending on what type the chosen pokemon is, the background colour of the moves will change
        // excuse it being called body, i didnt want to change it, would take too long
        body.forEach(body => {
            switch (type) {

            case ("normal"):
                body.style.backgroundColor = "gray"
                break;

            case ("fire"):
                body.style.backgroundColor = "red"
                break;

            case ("water"):
                body.style.backgroundColor = "blue"
                break;
            
            case ("grass"):
                body.style.backgroundColor = "green"
                break;
            
            case ("electric"):
                body.style.backgroundColor = "Yellow"
                break;

            case ("ice"):
                body.style.backgroundColor = "aquamarine"
                break;    
            
            case ("fighting"):
                body.style.backgroundColor = "brown"
                break;
            
            case ("poison"):
                body.style.backgroundColor = "purple"
                break;
            
            case ("ground"):
                body.style.backgroundColor = "saddlebrown"
                break;

            case ("flying"):
                body.style.backgroundColor = "cadetblue"
                break;
            
            case ("psychic"):
                body.style.backgroundColor = "pink"
                break;

            case ("bug"):
                body.style.backgroundColor = "forestgreen"
                break;
            
            case ("rock"):
                body.style.backgroundColor = "peru"
                break;
            
            case ("ghost"):
                body.style.backgroundColor = "violet"
                break;
            
            case ("dragon"):
                body.style.backgroundColor = "coral";
                break;
            
            case ("dark"):
                body.style.backgroundColor = "darkgray"
                break;
            
            case ("steel"):
                body.style.backgroundColor = "gray";
                break;
            
            case("fairy"):
                body.style.backgroundColor = "pink"
                break;
        }
        });

    }
    // logs the error I threw earlier if the pokemon is not found or some other error occurs
    catch(error) {
        console.error(error)
    }
}

// my function for filtering the list of pokemon based on type
// async function filterType() {
//     // search the selected type and make a list of all the pokemon in that list
//     let type = document.getElementById("type").value
//     const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
//     const data = await response.json()

//     try {
//         if (!response.ok) {
//             throw new Error ("This type doesnt exist")
//         }

//         if (type === "1") {
//             console.log(data.pokemon)

//             data.pokemon.forEach(pokemon => {
//                 let url = await fetch(pokemon.pokemon.url)
//                 let data = await url.json()

//                 console.log(url)
//             });
//         }
//     }

//     catch(error) {
//         console.error(error)
//     }
// }
