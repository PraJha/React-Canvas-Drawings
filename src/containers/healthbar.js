import React, { useRef, useEffect } from 'react'

const Canvas = props => {
    const canvasRef = useRef(null)
    // eslint-disable-next-line
    const draw = ctx => {
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20, 0, 2 * Math.PI)
        ctx.fill()
    }

    useEffect(() => {

        const canvas = canvasRef.current
        console.log("canvas " + canvas)
        canvas.width = 1000;
        canvas.height = 200;
        const context = canvas.getContext('2d')

        //Our draw come here
        draw(context)
    }, [draw])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas