import React from "react"
import { Grid } from "./grid"
import { Restart }  from "./button"

const App = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-600 to-red-600 h-screen">
          <div>
            <h1 className="py-5 text-6xl text-center text-white font-bold">Tic Tac Toe</h1>
        </div>
        <div className="flex justify-center flex-col items-center">
          <Grid />
          <Restart />          
        </div>
        </div>
    )
}

export default App