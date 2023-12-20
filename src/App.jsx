import React from "react"
import { Grid } from "./grid"

const App = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-600 to-red-600 h-screen">
          <div>
            <h1 className="py-5 text-6xl text-center text-white font-bold">Tic Tac</h1>
        </div>
        <div className="flex justify-center">
          <Grid/>
        </div>
        </div>
    )
}

export default App