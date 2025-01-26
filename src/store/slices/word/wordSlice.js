import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wordsBook: ["dog", "cat", "horse", "cow", "pig", "sheep", "goat", "rabbit", "mouse", "rat", "elephant", "giraffe", "zebra", "lion", "tiger", "bear", "wolf", "fox", "deer", "kangaroo", "koala", "monkey", "gorilla", "chimpanzee", "dolphin", "whale", "seal", "otter", "beaver", "squirrel", "hedgehog", "bat", "panda", "rhinoceros", "hippopotamus", "camel", "anteater", "sloth", "platypus", "armadillo","bird", "chicken", "duck", "goose", "turkey", "owl", "eagle", "hawk", "falcon", "parrot", "peacock", "penguin", "ostrich", "dove", "pigeon", "sparrow", "robin", "crow", "swan", "flamingo", "canary", "hummingbird", "kiwi","snake", "lizard", "turtle", "tortoise", "crocodile", "alligator", "chameleon", "iguana","fish", "shark", "whale", "dolphin", "salmon", "tuna", "cod", "trout", "goldfish", "clownfish","ant", "bee", "butterfly", "mosquito", "fly", "spider", "beetle", "worm", "grasshopper", "cockroach","jellyfish", "octopus", "squid", "crab", "lobster", "shrimp", "snail", "slug"],
    wordToGuess : "",
    letterRightGuessed: [],
    wordToShow : [],
    mistakes: 0,
    points: 0
}

export const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        getWordToGuess: (state,)=>{
            let pos = Math.floor(Math.random()*( Math.floor(state.wordsBook.length)));
            let newWord= state.wordsBook[pos];
            state.wordToGuess = newWord;
            let newEmptyWord = [];
            for (let i=0; i<newWord.length; i++) { newEmptyWord.push('-')};
            state.wordToShow = newEmptyWord;
        },
        checkLetterInWord: (state, action)=>{
            console.log(action.payload);
            let letter =action.payload;
            let wordToGuessUppercase = state.wordToGuess.toUpperCase();
            if ( wordToGuessUppercase.includes(letter)   &&   state.letterRightGuessed.includes(letter) )  {state.mistakes++};
            if (!wordToGuessUppercase.includes(letter))   {state.mistakes++};
            if ( wordToGuessUppercase.includes(letter)   &&   !state.letterRightGuessed.includes(letter) )  {
                            let positions = [];
                            for(let i=0; i<state.wordToGuess.length; i++) {
                                if (wordToGuessUppercase[i]==letter) positions.push(i);
                            }
                            let tempo = state.wordToShow; 
                            for(let i =0; i<positions.length; i++){

                                tempo[positions[i]] = letter;
                            };
                            state.wordToShow=tempo;
                            state.letterRightGuessed.push(letter);
            };
        },
        modifyPoints : (state,action) =>{
            state.points= state.points+action.payload;
            state.mistakes=0;
            state.wordToShow=[];
            state.letterRightGuessed= [];
            state.wordToGuess="";
        }
    }

})

export const { getWordToGuess, checkLetterInWord, modifyPoints} = wordSlice.actions;