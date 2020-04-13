import React from 'react'
import {Backdrop} from './Backdrop' 
import Auxiliary from '../hoc/Auxiliary'

export const Modal = ({children, showModal}) => {
    return (
        <Auxiliary>
            <Backdrop showModal={showModal}/>
            <div
                className="row"
                style={{
                    transform: showModal ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: showModal ? '1' : '0'
                }}
            >
                   {children}
            </div>
        </Auxiliary>

    )
}
