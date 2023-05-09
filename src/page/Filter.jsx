import React, { useEffect, useState } from 'react'
import data from '../api/data.json'

export default function Filter() {

    const [dataAccessory, setDataAccessory] = useState([]);
    const [dataList, setDataList] =useState(data);
    const [renderList, setRenderList] = useState([])

   useEffect(() => {
    let list = dataList.map((tmp, idx) =>
        <div style={{color : 'white'}} key={idx}>
            <img style={{width:"300px"}} src={tmp.titleimgUrl} alt="" />
        </div>
    )
    setRenderList(list)
   }, [dataList]);

   function selectCategory(cate) {
        let list = data.filter((tmp) => tmp.kategory === cate);
        setDataList(list);
        console.log(dataList);
    }



    return (
        <div style={{marginTop:"100px"}}>
        
            <div>accessory</div>
                
            <div>bag</div>

            <h1 style={{color : 'white'}} >collection</h1>
            
            <button onClick={() => {selectCategory('accessory')}}>
                accessory
            </button>

            <button onClick={() => {selectCategory('bag')}}>
                bag
            </button>

            <button onClick={() => {selectCategory('top')}}>
                top
            </button>

            <button onClick={() => {selectCategory('pants')}}>
                pants
            </button>

            <button onClick={() => {selectCategory('shoes')}}>
                shoes
            </button>
            
            <button onClick={() => {selectCategory('jacket')}}>
                jacket
            </button>

            
            <div>
                {renderList}
            </div>

            

        </div>
    )
}
