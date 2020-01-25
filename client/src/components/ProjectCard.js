import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Actions } from './Actions'

export function ProjectCard(props) {
    const [toggle, setToggle] = useState(false)
    const [actions, setActions] = useState()
    const { id, name, description, completed } = props.item
    console.log(actions)
    useEffect(() => {
        axios.get(`http://localhost:5000/api/projects/${id}`)
            .then(res => {
                setActions(res.data.actions)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div className='card-container'>
            <h3> {name} </h3>
            <p>Description: {description}  </p>
            <h5>Completed: {completed ? 'yes' : 'no'}  </h5>
            {

            !toggle ? 
                <button onClick={() => setToggle(!toggle)}>Actions</button> :
                actions && actions.map(item => {
                    return <Actions item={item} setToggle={setToggle} toggle={toggle} />
                })
            }
            {toggle && <button onClick={() => setToggle(!toggle)}>Close</button>}
        </div>
    )
}