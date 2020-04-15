import React, {useState} from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import lightIcon from '../../assets/moon1.svg'
import darkIcon from '../../assets/moon.svg'
// import '../../css/normalize.css'
// import '../../css/skeleton.css'

export const Layout = (props) => {
    const [dark, setDark] = useState(false)

    const handleMode = () => {
        if(dark){
            document.body.classList.add('dark');
        }else {
            document.body.classList.remove('dark');
        }
        setDark(!dark)
        console.log(dark);
        
    }

    return (
        <Auxiliary>
            <header className="header">
                <div className="container">
                    <nav className="row">
                        <div className="ten columns">
                            <h1>Where in the world?</h1> 
                        </div>
                        <div className="two columns switch" onClick={handleMode}>
                        {dark ? <img src={lightIcon} alt="light" className="mode lightBttn"/> : <img src={darkIcon} alt="light" className="mode darkBttn"/>}
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