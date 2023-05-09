import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import data from '../api/data.json'
import data2 from '../api/model.json'
import { useNavigate } from 'react-router-dom';

import './modalcss.css'


export default function Modal() {
    const location = useLocation()
    const [itemList, setItemlist] = useState([]);
    const [modelObj, setModelObj] = useState({})

    const navigate = useNavigate();

    

    let array = []
    let dataNoList = location.state.itemlist;
    let modelIdx = location.state.modelno -1;
    console.log(dataNoList)
    useEffect(() => {
        for(let i = 0; i < dataNoList.length; i++) {
            let idx = dataNoList[i] -1;
            let item = data[idx];
            array.push(item);
        }
        setItemlist(array);
    },[])

    useEffect(() => {
        let data = data2[modelIdx];
        setModelObj(data);
    },[]);

    console.log(itemList)

    // const modallist = data2.map(item => item.list);
    // console.log(modallist)

    // 네비게이트를 이용하여 모델의리스트값 전달 받음   location.state

    //     location.state.forEach((id)=> {
    //         const item = data.filter((it)=>(it.id = id))
    //         array.push(item)
    //     })
    
    // console.log(itemList)


    const handleImageClick = (e) => {
    let target = e.target.dataset.id

        navigate('/prlist', {state:{productid : target}})
        // console.dir(e.target)
    
    };
    // onClick={handleImageClick()



    // 상품 사진, 가격들 출력
    
    const itlist = itemList.map((it) => (       
        <div key={it.id} className='border'>
            <img style={{ width: "400px" }} src={it.titleimgUrl} data-id={it.id} onClick={handleImageClick}/>
            <p>{it.name}</p>
            <p>{it.price}</p>  
        </div>
    ))
    console.log(itemList)
    

    return (
        <div className='all'>

            <div className='imgpan'>
                
                <img className='titleimg' style={{width : '600px'}} src={modelObj.imgUrl} />
                <hr />
                <p>ITEM</p>
                <hr />
                
                <div className='proutimg'>
                    {itlist}
                </div>

            </div>

        </div>
    )
}
