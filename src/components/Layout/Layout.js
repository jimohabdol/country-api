import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'

export const Layout = (props) => {
    return (
        <Auxiliary>
            <nav>
                <div>
                    <h1>Where in the world?</h1> 
                </div>
                <div>
                <i class="far fa-moon"></i>
                <i class="fas fa-moon"></i>
                    Dark Mode
                </div>
            </nav>
            <main>
                {props.children}
            </main>
        </Auxiliary>
    )
}