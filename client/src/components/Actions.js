import React from 'react'

export function Actions(props) {
    const { description, notes, completed } = props.item
    return(
        <div style={{
            backgroundColor: 'white',
            width: '70%',
            textAlign: 'center',
            marginBottom: '20px',
            boxShadow: '2px 2px 5px black',
        }}>
            <h5>Description</h5>
            <p> {description} </p>
            <h5>Notes</h5>
            <p> {notes} </p>
            <h5>Completed: {completed? 'Yes' : 'No'} </h5>
            
        </div>
    )
}