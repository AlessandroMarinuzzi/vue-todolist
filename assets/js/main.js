/**
 * Create una todo list usando VueJS. Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS. Se non sapere che fare, di seguito trovate uno screenshot.
Funzionalitá:
La nostra todo list avrá alcune tasks di default predefinite
L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
Inoltre L'utente vuole poter modificare una task giá inserita
ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri. */

const root = new Vue({
    el: "#root",

    data: {
        newMovie: "",
        movies: [
            "Hereditary, regia di Ari Aster",
            "Ex-Machina, regia di Alex Garland",
            "Interferenze, regia di Ryan Eslinger"
        ]
    },

    methods:{
        addMovie(){
            if(this.newMovie.length >= 1){
            this.movies.push(this.newMovie),
            this.newMovie = ""
            }
        },

        removeMovie(index){
            this.movies.splice(index, 1)
        },

    
    }

});

document.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        root.addMovie()
    }
})