import { useDispatch } from "react-redux"
import { checkLetterInWord } from "../../store/slices/word/wordSlice"


function LeterButton({value}) {
    const dispatch = useDispatch();

  return (
    <div className=" m-1 flex flex-row justify-center items-center w-10 h-10 rounded-xl bg-blue-500 text-white hover:bg-blue-800 hover:text-yellow-400 hover:text-3xl hover:font-bold  hover:cursor-pointer"
        onClick={()=>dispatch(checkLetterInWord(value))}
    >
      <p >{value}</p>
      
      
    </div>
  )
}

export default LeterButton
