import React from 'react'
const p100 = "100%"

export default function Square({ black, children }) {
    const fill = black ? 'black' : 'white'
    const color = black ? 'white' : 'black'
    return <div style={{ backgroundColor: fill, color, width: p100, height: p100 }} >{children}</div>
}