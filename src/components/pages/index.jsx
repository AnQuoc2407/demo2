import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox() {
    const[color, setColor] = useState('pink');
    return (
        <div 
        className="color-box"
        style={{backgroundColor: color}}
        >
            Color box
        </div>
    );
}

export default ColorBox;