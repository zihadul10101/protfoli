import React from 'react';
import Typical from 'react-typical'

const HeaderAnimation = () => {
    return (
        <Typical className="text-white"
        steps={['JavaScript Lover', 2000, 'Font-End Developer!', 1000,'MERN Stack',2000]}
        loop={Infinity}
        wrapper="p"
      />
    );
};

export default HeaderAnimation;