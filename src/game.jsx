import React from "react";
import { useState, useEffect } from "react";



const PLAYER_A = "❌"




export const Exemple = () => {

    const [PLAYER_1, setPLAYER_1] = useState(false);
  
    const showCross = () => { 
        setPLAYER_1(true)

    }

  return (
    <div>
      <button className="border w-12 h-12" onClick={showCross}></button>
        {PLAYER_1 && <div className="text-3xl">{PLAYER_A}</div>}
    </div>
  )

  }