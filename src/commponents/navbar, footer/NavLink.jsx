import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './nav.css'







export default function NavLink () {

    const [ prevScrollY, setPrevScrolly ] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(true);

    

    useEffect(()=> {
        const updataScroll = () => {
        const currentScrollY = window.scrollY;

        if (prevScrollY < currentScrollY && scrollPosition) { //숨기는것
            setScrollPosition(false);
        }
        else if(prevScrollY > currentScrollY && !scrollPosition){ // 보이는 것
            setScrollPosition(true);
        }
        setPrevScrolly(currentScrollY);
    };

        window.addEventListener("scroll",updataScroll);

        return () => window.removeEventListener("scroll",updataScroll);
    },[prevScrollY, scrollPosition]);

    const header = scrollPosition ? "header-scorll" : "header-scorll2"




    return (
        <div>

            <header className={header}>
                <nav className='nav'>
                    <Link to ='/' style={{
                        textDecoration : "none", color: "white" , zIndex: 100, margin:"0px"
                    }} ><h3>BALENCIAGA</h3></Link>
                </nav>
                
                <ul className='menu'>
                    <Link to = '/lo' style={{
                        textDecoration : "none", color: "white"
                    }}>
                        <li>LOOKS</li>
                    </Link>
                    <Link to = '/fi' style={{
                        textDecoration : "none", color: "white"
                    }}>
                        <li>collection</li>
                    </Link>
                </ul>
            </header>

        </div>
    )
}