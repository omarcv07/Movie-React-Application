import React, {useState} from 'react';
import * as Icon from 'react-feather';
import './index.css';


const ScrollArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <Icon.ArrowUp size={25} className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}/>
    );
}

export default ScrollArrow;