import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [screenSizeWidth, setScreenSizeWidth] = useState(window.innerWidth)
    const width = () => {
        setScreenSizeWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', width)
        return () => {
            window.removeEventListener('resize', width)
        }
    }, [])



    const [screenSizeHeight, setScreenSizeHeight] = useState(window.innerHeight)
    const height = () => {
        setScreenSizeHeight(window.innerHeight)
    }
    useEffect(() => {
        window.addEventListener('resize', height)
        return () => {
            window.removeEventListener('resize', height)
        }
    }, [])

    return (
        <div className='center'>
            <h1>The Width Of Your Screen is :{screenSizeWidth}</h1>
            <h1>The Height of Your Screen is:{screenSizeHeight}</h1>
        </div>
    )
}
