import React, {useEffect, useState} from "react";
import axios from 'axios'
import {Link} from "react-router-dom";

export default Main

function Main(){
    const [state, setState] = useState({
        projects : []
    })

    useEffect(()=>{
        axios.get('http://localhost:5000/')
            .then(res => {
                setState({
                    projects: res.data
                })
            })
    })
    return (
        <ul className="list-group">
            {state.projects.map(proj => <li className="list-group-item" key={proj._id}>
                <h2>{proj.title}</h2>
                    <div class="card-body">
                        <h5>{proj.minDisc}</h5>
                        <small>Data</small>
                        </div>
                <Link class="btn btn-primary" to={`/project/${proj.idProj}`}>Learn more...</Link>
            </li>)}
        </ul>
    )
}