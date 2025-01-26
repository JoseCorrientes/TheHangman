import { useDispatch, useSelector } from "react-redux"
import { modifyPoints } from "../../store/slices/word/wordSlice";


function Message() {

   const dispatch=useDispatch(); 
   const {mistakes, wordToShow, wordToGuess}=useSelector(state=>state.word) 
   

  return (
    <>
        { mistakes<7 && !wordToShow.includes('-') &&
        <div className="px-30 flex flex-row justify-center items-center m-6 border border-white w-auto h-30 bg-green-600 text-2xl font-bold" >¡ You Win !

            <span className="ml-4 px-4 m-1 flex flex-row justify-center items-center w-auto h-10 rounded-xl bg-blue-500 text-white font-normal hover:bg-blue-800 hover:cursor-pointer"
                onClick={()=>dispatch(modifyPoints(+10))}
            > OK</span>
            
        </div>
        }

        { mistakes>6 &&
        <div className="px-30 flex flex-row flex-wrap justify-center items-center m-6 border border-white w-auto h-30 bg-red-700 text-2xl font-bold" >
            
            <div className=" flex flex-row w-full items-center justify-center">
                <p className="text-2xl font-bold">
                ¡ You Lost!
                </p>
                <span className="ml-4 px-4 m-1 flex flex-row justify-center items-center w-auto h-10 rounded-xl bg-blue-500 text-white font-normal hover:bg-blue-800 hover:cursor-pointer"
                    onClick={()=>dispatch(modifyPoints(-10))}  
                > OK</span>
            </div>

            <p>The Word was: <span className="ml-4 text-3xl text-gray-400"> {wordToGuess}</span> </p>
            
        </div>
        }

    </>
  )
}

export default Message
