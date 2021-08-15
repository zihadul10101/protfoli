import React from 'react';
import Typical from 'react-typical'

const HeaderAnimation = () => {
    return (
        <Typical
        steps={['JavaScript Lover', 1000, 'Font-End Developer!', 1000,'MERN Stack',1000]}
        loop={Infinity}
        wrapper="p"
      />
    );
};

export default HeaderAnimation;