import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ProjectCard } from './ProjectCard'

export function Projects() {
    const [projects, setProjects] = useState()
    console.log(projects)
    useEffect(() => {
        axios.get('http://localhost:5000/api/projects')
            .then(res => {
                setProjects(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div className='project-container'>
            {projects && projects.map(item => {
                return <ProjectCard item={item} />
            })}

        </div>
    )
}