import React from "react"

export const Restart = () => {
    return (
        <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 h-12 w-36"
            onClick={() => window.location.reload(false)}
        >
         RESTART
        </button>
    )
}