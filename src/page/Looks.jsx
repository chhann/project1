// import React, { useState } from 'react'
// import ModelList from '../api/model.json'
// import './lookscss.css'

// export default function Looks() {


//     const [modelList, setModelList] = useState(ModelList);

//     const hand = (e)=> {
//         let target = e.currentTarget;
//         let list = target.dataset.no
//         console.log(target)
//     }

//     console.log(modelList)
//     const list = modelList.map((md)=> 
//             <div key={md.modelNo} data-no={md.modelNo}>
//                 <img style={{width:"350px"}} src={md.imgUrl}
//                 ></img>
//             </div>
//     )
//     return ( 
//         <div>
//             <div onClick={hand}
//             className='look'
//             >
//                 <h1 style={{color:"white"}}>LOOKS</h1>
//                 <div className='list'>
//                     {list}
//                 </div>
//             </div>

//             <div>
//                 <button>more</button>
//             </div>
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react'
import ModelList from '../api/model.json'
import './lookscss.css'
import { useNavigate } from 'react-router-dom';
import ScrollAnimate from 'react-scroll-fade-animation';

export default function Looks() {

    const [modelList, setModelList] = useState([]);
    const [displayedList, setDisplayedList] = useState([]);
    const [displayedIndex, setDisplayedIndex] = useState(8);

    const [scrollWidth, setScrollWhidth] = useState()

    const navigate = useNavigate();

    useEffect(() => {
        setModelList(ModelList);
        setDisplayedList(ModelList.slice(0, 8));
    }, []);


    // 띠 스크롤 이벤트
//     useEffect(()=>{
    
//         // 스크롤 이벤트
//         const pTag1 = document.querySelector('.first-parallel')
//         const pTag2 = document.querySelector('.second-parallel')
//         const pTag3 = document.querySelector('.tree-parallel')

//         const textArr1 = 'BALENCIAHA X ADIDAS BALENCIAHA BALENCIAHA X ADIDAS BALENCIAHA BALENCIAHA X ADIDAS BALENCIAHA BALENCIAHA X ADIDAS BALENCIAHA'.split("")
//         const textArr2 = 'ADIDAS X BALENCIAHA ADIDAS X BALENCIAHA ADIDAS X BALENCIAHA ADIDAS X BALENCIAHA ADIDAS X BALENCIAHA ADIDAS X BALENCIAHA'.split("")
//         const textArr3 = 'BALENCIAHA X ADIDAS BALENCIAHA BALENCIAHA X ADIDAS BALENCIAHA BALENCIAHA X ADIDAS BALENCIAHA BALENCIAHA X ADIDAS BALENCIAHA'.split("")

//         function initTexts(element, textArray) {
//             textArray.push(...textArray)
//             for(let i = 0; i < textArray.length; i++) {
//                 element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
//             }
//         }


//         initTexts(pTag1, textArr1)
//         initTexts(pTag2, textArr2)
//         initTexts(pTag3, textArr3)
        

//         let count1 = 0
//         let count2 = 0
//         let count3 = 0

    
//         function marqueeText(count, element, direction) {
//             if (count > element.scrollWidth / 2) {
//                 element.style.transform = `translateX(0)`
//                 count = 0
//             }
            
    
//             element.style.transform = `translateX(${count * direction}px)`
//             return count
//         }


//         function animate() {
//             count1++
//             count2++
//             count3++
    
//             count1 = marqueeText(count1, pTag1, -1)
//             count2 = marqueeText(count2, pTag2, 1)
//             count3 = marqueeText(count2, pTag3, -1)
//             window.requestAnimationFrame(animate)
//         }
        

//         animate()

//     //     window.addEventListener('scroll', () => {
//     //         count1 =+ 15
//     //         count2 =+ 15
//     //         count3 =+ 15
//     // })
// }, [])
// 띠 스크롤 이벤트 끝


    // more버튼 누르면 8 페이지 더 추가
    const handleMoreClick = () => {
        const newIndex =    displayedIndex + 8;
        setDisplayedIndex(newIndex);
        setDisplayedList(modelList.slice(0, newIndex));
    };


    // 페이지 눌러서 모델창 뜨게하는 클릭장치
    const handleImageClick = (e , listdata, modalNo) => {
        let target = e.currentTarget;
        let list = target.dataset.no;
        

        navigate(`/lo/${list}`, {state: {itemlist : listdata, modelno : modalNo} })
        // console.dir(e.target)
        // console.log(list);
    };

    // 모델리스트 가져와서 화면에 출력하는 값
    const list = displayedList.map((md) => (
        <div key={md.modelNo}>
            <ScrollAnimate path={'bottom-bounce'}>
                <img style={{ width: "350px" }} src={md.imgUrl}  data-no={md.modelNo} onClick={(e) => {handleImageClick(e, md.list, md.modelNo)}}></img>
            </ScrollAnimate>
        </div>
    ));
    
    




    return (
        
    <div>
        {/* 뒤에 배경 띠 */}
        {/* <div className='backtea'>
            <div className='cover'>
                <div className='first-parallel'></div>
            </div>
            <div className='cover'>
                <div className='second-parallel'></div>
            </div>
            <div className='cover'>
                <div className='tree-parallel'></div>
            </div>
        </div> */}
        
        {/* 모델 사진들 */}
        <div className='liskbox'>
            <div className='look'>
                <h1 className='name' style={{ color: "white" }}>LOOKS</h1>
                <div className='list'>
                    {list}
                </div>
            </div>

            {/* // more 버튼 */}
            {
            displayedList.length === modelList.length ? null :
            <div>
                <button onClick={handleMoreClick}
                className='button'
                >
                <span>MORE</span> 
                </button>
            </div>
            }
        </div>
            
    </div>
    )
}














