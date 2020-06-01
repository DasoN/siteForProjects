import React, {useEffect, useState} from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";

import Header from './component/header'
import Main from './component/main'
import ProjectPage from './component/projectPage'
import axios from "axios";

export default function App() {
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
        <Router>
                <Header />
            <div className = "container" >
                <Route exact path = "/" >
                    <Main />
                </Route>
                    {state.projects.map(el => <Route key={el._id} path={`/project/${el.idProj}`}><ProjectPage title={el.title} minDisc={el.minDisc} disc={el.disc}/></Route>)}
            </div>
        </Router>
    );
}