import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { ButtonPanel } from './components/LetterButtons'
import { WordBox}  from './components/WordBox';
import { useEffect } from 'react';
import { getWordToGuess } from './store/slices/word/wordSlice';
import Message from './components/Message/Message';

import image0 from "./assets/ahorcado0.jpg";
import image1 from "./assets/ahorcado1.jpg";
import image2 from "./assets/ahorcado2.jpg";
import image3 from "./assets/ahorcado3.jpg";
import image4 from "./assets/ahorcado4.jpg";
import image5 from "./assets/ahorcado5.jpg";
import image6 from "./assets/ahorcado6.jpg";
import image7 from "./assets/ahorcado7.jpg";




function App() {

    const dispatch = useDispatch();
    const {wordToGuess, mistakes, points, wordToShow} = useSelector(state=>state.word)
    
    let imagen = "image"+0;


    useEffect(()=>{
        if (wordToGuess==="")  dispatch(getWordToGuess());
    },[wordToGuess])
  
        

  return (
    <div
        className='flex flex-col justify-start items-center w-screen h-screen bg-blue-500'
    >

        <div className='flex flex-row justify-evenly items-center w-100 h-auto'>
            <p className='text-white text-2xl '>The Hangman</p>
            <div className='p-0 flex flex-row w-40 h-auto  justify-end'>
                <p className='text-2xl text-gray-600 mr-2'>Score: </p>
                <p className='flex flex-row justify-center items-center text-3xl font-bold text-gray-600'>{points}</p>
            </div>
        </div>
    
      <WordBox/>  
      <Message/>
      {(mistakes<7 && wordToShow.includes('-') || mistakes>7) &&
        <ButtonPanel/>
      }  
        <div className='mt-4'>
            <img className=" w-60 h-60" 
                src={(mistakes==0)?image0:
                    (mistakes==1)?image1:
                    (mistakes==2)?image2:
                    (mistakes==3)?image3:
                    (mistakes==4)?image4:
                    (mistakes==5)?image5:
                    (mistakes==6)?image6:
                    image7
                }
                alt="imagen del patibulo"
            />
        </div>


    </div>
  )
}

export default App
