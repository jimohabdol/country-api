import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'

export const Layout = (props) => {
    return (
        <Auxiliary>
            <div>
            nav, modal 
            </div>
            <main>
                {props.children}
            </main>
        </Auxiliary>
    )
}