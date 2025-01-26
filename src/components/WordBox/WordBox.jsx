import { useSelector } from "react-redux"

export function WordBox() {

  const {wordToShow, mistakes } = useSelector(state=>state.word);
    

  return (
    <>
    { wordToShow.includes('-') && mistakes<7 &&
    <div className="px-30 flex flex-row justify-center items-center m-6 border border-white w-auto h-30 bg-blue-300">
        <span className="flex flex-row text-5xl font-bold">{wordToShow.join(' ')}</span>
    </div>
    }
    { wordToShow.includes('-') && mistakes>6 &&
    <div className="px-30 flex flex-row justify-center items-center m-6 border border-white w-auto h-30 bg-red-700">
        <span className="flex flex-row text-5xl font-bold">{wordToShow.join(' ')}</span>
    </div>
    }
    { !wordToShow.includes('-') &&
    <div className="px-30 flex flex-row justify-center items-center m-6 border border-white w-auto h-30 bg-green-600">
        <span className="flex flex-row text-5xl font-bold">{wordToShow.join(' ')}</span>
    </div>
    }
    </>
  )
}

