import React, { useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import './Slider.css'
import model from '../../api/model.json'

export default function Slider() {
    const [datalists, setDatalists] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let list = [];
        for(let i=0; i<11; i++) {
            let titleUrl = model[i]
            list.push(titleUrl)
        }
        setDatalists(list)
    },[])
    console.log(datalists)
    
    const handleImageClick = (e , listdata, modalNo) => {
        let target = e.currentTarget;
        let list = target.dataset.no;
        

        navigate(`/lo/${list}`, {state: {itemlist : listdata, modelno : modalNo} })
    };


    const timUrl = datalists.map((it) => (
        <li key={it.modelNo}
        style=
        {{backgroundImage: `url(${it.imgUrl})`}}
        data-no={it.modelNo} onClick={(e) => {handleImageClick(e, it.list, it.modelNo)}}
        >
        
        </li>
    ))

    console.log(timUrl)

    // const imgUrl = datalists.map((it,idx)=> (

    // ))

    return (
        <div className='all'>

            <div className='collection'>
            <span className='looks'>BALENCIAGA / ADIDAS Spring 2023 Collection</span>
            </div>

            <div className='booxs'>
                <div className='boxs ainma'>
                    <ul>

                        {timUrl}

                    </ul>

                    <ul>

                        {timUrl}

                    </ul> 
                </div>
            </div>

        </div>
    )
}
