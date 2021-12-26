import React from 'react'
import styles from './styles.module.css'

export const DisplayTwo = (props) => {
    return (
        <div className={styles.contentBox}>
            
               Name: {props.task.name}
               <br />
               Rating : {props.task.rating}
            
        </div>
    )
}
