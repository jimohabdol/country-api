import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import '../../css/normalize.css'
import '../../css/skeleton.css'

export const Layout = (props) => {
    return (
        <Auxiliary>
            <div>
                <nav className="row">
                    <div className="six columns">
                        <h1>Where in the world?</h1> 
                    </div>
                    <div className="six columns">
                    <i className="far fa-moon"></i>
                    <i className="fas fa-moon"></i>
                        Dark Mode
                    </div>
                </nav>
            </div>
            <main>
                {props.children}
                hello
            </main>
        </Auxiliary>
    )
}