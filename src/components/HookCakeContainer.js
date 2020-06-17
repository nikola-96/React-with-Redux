import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HookCakeContainer() {
    const numberOfCakes = useSelector(state => state.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of Cakes - {numberOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer
