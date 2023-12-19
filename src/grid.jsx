import React from "react";
import idleGrid from "./idleGrid"
import { Exemple } from "./game";


export const Grid = () => (
    <div className="m-10 grid grid-col-3">
      <Exemple/>
        {
          idleGrid.map((row, index) => {
            return (
              <div key={index} className="flex justify-center items-center">
                {row.map((bloc, index) => {
                  return (
                    <div key={index} className="w-12 h-12 border-solid border border-black">
                      
                    </div>
                  )
                })}
              </div>
            )
          })
        }
      
    </div>
)

