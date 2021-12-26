import React from 'react'
import { DisplayTwo } from './DisplayTwo'


export const Display = (props) => {
    return (
        <div className="container">
            
            {
            props.tasks.map((task) => {
                return <DisplayTwo task={task} />
                
            })
            }
        </div>
    )
}
