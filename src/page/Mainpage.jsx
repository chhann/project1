import React from 'react'

import Video from '../commponents/videos/Video';
import Slider from '../commponents/slider/Slider';
import Square from '../commponents/square/Square';
import {SectionsContainer, Section} from 'react-fullpage';

export default function mainpage() {
    let options = {
        anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    };
    
    return (
        <div>
            
                <section>
                    <Video/>
                </section>
                <section>
                    <Slider/>
                </section>
                <section>
                    <Square/>
                </section>
            
        </div>
    )
}
