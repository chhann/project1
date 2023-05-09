import React from 'react'
import data from '../api/data.json'

function Test() {
    let list = data.map((dd)=>
    <div>
        <img style={{width:"100px"}} src={dd.img}/>
    </div>
    );


    return (
        <div style={{display:"flex", justifyContent:"space-betwenn"}}>
            {list}
        </div>
    )
}

export default Test