import React from 'react'

export default function(props){
    return (
        <div className="">
            <h1>{props.title}</h1>
            <div className="container card-body">
                <h3 className="card-text">{props.minDisc}</h3>
                <span className="card-text">{props.disc}</span>
                <hr/>
                <h4>Data: 02.10.2020</h4>
            </div>

        </div>
    )
}