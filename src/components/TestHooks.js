import React, { useState, useEffect } from 'react'

const TestHooks = () => {
    // Declaración de una variable de estado que llamaremos "count"
    const [manzanas, setManzanas] = useState(0)
    const [uvas, setUvas] = useState(0)

    useEffect(() => {
        document.title = `🍎${manzanas} 🍇${uvas}`
        return () => {
            const winner = manzanas > uvas ? `🍎` : `🍇`
            document.title = `${winner} wins!`
        }
    }, [manzanas, uvas])

    return (
        <React.Fragment>
            <div>
                <p>You clicked {manzanas} times for apples</p>
                <button onClick={() => setManzanas(manzanas + 1)}>
                    apple
                </button>
            </div>
            <div>
                <p>You clicked {uvas} times for grappes</p>
                <button onClick={() => setUvas(uvas + 1)}>
                    grappe
                </button>
            </div>
            <p>{`🍎${manzanas} 🍇${uvas}`}</p>
        </React.Fragment>
    )
}

export default TestHooks