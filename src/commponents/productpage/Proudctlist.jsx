import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import data from '../../api/data.json'
import Slider from "react-slick"
import './proudctlistcss.css'

export default function Proudctlist() {

    const [detailImages, setDetailImages] = useState([]);

    const location = useLocation()
    // 룩 페이지에서 들고온 클릭한 사진의 id값
    // console.log(location.state.productid)

    const productNo = location.state.productid-1;
    let productdetailImagesId = data[productNo].detailImages
    // 클릭한 사진 id값 -1 = data 배열 index 값 
    //                      ([{id:1},{id:2},{id:3}]) 
    //                          0       1       2
    
    


    // 상품 이미지 붙이는
    useEffect(()=> {
        setDetailImages(productdetailImagesId)
    },[])
    
    const detailImagesbox = detailImages.map((it, idx) => (
        <div key={idx}>
            <img style={{ width: "750px" }} src={it}/>
        </div>
    ))

    const detailImagesbox2 = detailImages.map((it, idx) => (
        <div key={idx} className='insecondimg'>
            <img style={{ width: "100px" }} src={it} />
        </div>
    ))


    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);
    
    
    









    return (
        <div>
            <div className='gridchang'>
                <div className='imgs'>
                    <div className='firstimg'>
                        <Slider asNavFor={nav2} ref={slider1}>
                            {detailImagesbox}
                        </Slider>
                    </div>

                    <div className='secondimg'>
                    <Slider
                        asNavFor={nav1}
                        ref={slider2}
                        slidesToShow={5}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        {detailImagesbox2}
                    </Slider>
                    </div>
                </div>

                <div className='inpo'>
                    설명
                </div>
            </div>





        </div>
    )
}  
