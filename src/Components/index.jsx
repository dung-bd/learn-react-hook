import React, {useState} from "react"

function getRandomColor(){
    const indexColor = ['deeppink' ,'black',' blue', 'yellow','green']
    const randomColor = Math.trunc(Math.random * 5)
    return indexColor[randomColor]
}
function ColorBox(){
    const[color, setColor] = useState(()=>{
        const initColor = localStorage.getItem('color-box') || 'deeppink'
        return initColor
    })
    function handleBoxClick(){
        const newColor = getRandomColor()
        setColor(newColor)
        localStorage.setItem('box-color', newColor)
    }
    return(
        <div className="color-box" style={{backgroundColor: color}} onClick={handleBoxClick}>
            ColorBox
        </div>
    )
}