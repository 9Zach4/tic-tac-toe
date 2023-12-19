import React from "react"
import { useState, useEffect } from "react"



const PLAYER_A = "❌"
const PLAYER_B = "⭕"




 const FirstPlayer = () => {

    const [PLAYER_1, setPLAYER_1] = useState(false);
  
    const showCross = () => { 
        setPLAYER_1(true)
    }

    return (
      <div>
        <button className="w-12 h-12" onClick={showCross}>
          {PLAYER_1 && <div className="text-3xl">{PLAYER_A}</div>}
        </button>
      </div>
    )
}



 const SecondPlayer = () => { 
    
        const [PLAYER_2, setPLAYER_2] = useState(false);
    
        const showCircle = () => { 
            setPLAYER_2(true)
        }
    
        return (
        <div>
            <button className="w-12 h-12" onClick={showCircle}>
            {PLAYER_2 && <div className="text-3xl">{PLAYER_B}</div>}
            </button>
        </div>
        )
    }


    // const PlayerActive = () => {
    //     const [isPlayerActive, setIsPlayerActive] = useState(false)
   

    //     useEffect(() => {
    //         setIsPlayerActive(!isPlayerActive)
    //     }, [!isPlayerActive])

    //     return(
    //         <div>
    //             {isPlayerActive onClick ? FirstPlayer() : SecondPlayer()}
    //         </div>
    //     )
    // }
    // export default PlayerActive
    