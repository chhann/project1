import React, { useEffect, useState } from 'react'

import './vidi.css'
//import vidividi from 'vidieo/balentest1.mp4'



export default function Video() {
    



    return (
        <div>
            
            <div className='bg'>
                <video width='100%' className='video' autoPlay loop muted playsInline>
                    <source
                        src={'vidieo/balentest1.mp4'}
                        type='video/mp4'/>
                </video>
                <div className='logo'>
                    <p>
                        Balenciaga <br></br>X <br/> Adidas
                    </p>
                </div>
            </div>

        </div>
    )
}
