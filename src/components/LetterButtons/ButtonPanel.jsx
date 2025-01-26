import LeterButton from "./LetterButton";

export function ButtonPanel() {

    const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


  return (
    <div className="p-5 flex flex-row flex-wrap w-80 h-80 justify-center items-center text-white border-2 border-white bg-blue-300">

        {letter.map((letter) => <LeterButton key={letter} value={letter}/>)}
        
    </div>
  )
}

