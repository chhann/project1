import React, { useEffect, useState } from 'react' 
import './sq.css'
import { Parallax } from 'react-parallax'
import data from '../../api/data.json'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {SectionsContainer, Section} from 'react-fullpage';

export default function Square() {
    const [position, setPosition] = useState(0);
    const [datalists, setDatalists] = useState([]);
    const [datalists2, setDatealists2] =useState([]);
    
    const [slide, setSlide] = useState(0);
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const settings2 = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    // 두번재 스쿼드 이미지들
    useEffect (() => {
        let list = [];
        for(let i=0; i<11; i++) {
            let titleUrl = data[i].titleimgUrl
            list.push(titleUrl)
        }
        setDatalists(list)
    },[]);

    useEffect (() => {
        let list = [];
        for(let i=11; i<22; i++) {
            let titleUrl = data[i].titleimgUrl 
            list.push(titleUrl)
        }
        setDatealists2(list)
    },[]);
    
    
    // 두번째 스쿼드 이미지 슬라이드 기능 //

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setSlide(prevPosition => prevPosition - 500);
    //     }, 3000);

    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);
    // style={{transform: `translateX(${slide}px)`}}


    // 두번쨰 스쿼드 이미지 div
    const timgUrl = datalists.map ((it, idx) => (
        <div key={idx} >
                <img style={{ width: "360px" , height: "450px" }} src={it}  alt="" />
        </div>
    ))

    const timUrl2 = datalists2.map((it, idx) => (
        <div key={idx}>
            <img style={{ width: "360px" , height: "450px" }} src={it}  alt="" />
        </div>
    ))

    // 두번재 스쿼드 이미지들 끝 //




    console.log(window.scrollY)
    // 스퀘어 1 번 스크롤 일벤트
    function onScroll() {
        if (window.scrollY > 1700){
            setPosition(-(window.scrollY-1700)*2)
        
        }
        else {
            setPosition(0);
        }
        
    }

    // 스퀘어 1 번 스크롤 일벤트
    useEffect(()=> {
        window.addEventListener("scroll", onScroll);
        return()=> {
            window.removeEventListener("scroll", onScroll);
        };
    },[]);

    




    return (
        <div className='all'>
        
            <div className='sq-wrap'>
                <div>
                    <div className='test'>

                        <div className='one'>
                        <span>Han So Hee</span>
                        </div>

                        <div className='one-1'
                        style={{transform: `translateX(${position}px)`}}
                        >
                            
                        </div>
                    </div>
                </div>

                <div className='two'>
                    <Slider {...settings}>
                        {timgUrl}
                    </Slider>

                    <Slider {...settings2} className='two_1'>
                        {timUrl2}
                    </Slider>
                </div>

                <div className='tree'>
                    
                </div>

                <div className='four'>
                    <span className='four_1'>N Y C E</span> 
                </div>
            </div>
            <div className='nyc'>
                <h1>SPRING 23 – NYC SHOW</h1>

                    <div> The trading floor of the New York Stock Exchange serves as a runway for models whose identities are obscured by fetish bodysuits. Over this latex layer they wear the Spring 23 collection, a mix of ready-to-wear—the new Garde-Robe line, Eveningwear, and Balenciaga / adidas.</div>
                    <br />
                    <div> Garde Robe is made up of wardrobe staples in elevated cuts, sharp finishing, and luxe materials: wool, silk, gabardine, artisanal denim. Suiting, separates, and outerwear are pared down and redefined, without any branding other than bold silhouettes and precise tailoring with minimalist construction techniques. </div>
                    <br />
                    <div> Eveningwear is updated extra-formal attire: bodycon gowns, reconstructed tuxedos, floor-length silk trenches with trains. </div>
                    <br />
                    <div> A collaboration between Balenciaga and adidas recontextualizes elements of sportswear that have been a part of Balenciaga’s creative language. The line of ready-to-wear, shoes, bags, jewelry, and accessories are marked with a badge of sport or trefoil logo over the name Balenciaga in the lowercase adidas typeface. An exclusive release of selected signature pieces will be available to purchase only on balenciaga.com and at the Madison Avenue, New York Balenciaga store immediately following the show.</div>
            </div>
            
        </div>
    )
}
