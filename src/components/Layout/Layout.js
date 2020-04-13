import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'
// import '../../css/normalize.css'
// import '../../css/skeleton.css'

export const Layout = (props) => {
    return (
        <Auxiliary>
            <header className="header">
                <div className="container">
                    <nav className="row">
                        <div className="ten columns">
                            <h1>Where in the world?</h1> 
                        </div>
                        <div className="two columns">
                        <i className="far fa-moon"></i>
                        <i className="fas fa-moon"></i>
                            Dark Mode
                        </div>
                    </nav>
                </div>
            </header>
            <main>
                {props.children}
            </main>
        </Auxiliary>
    )
}