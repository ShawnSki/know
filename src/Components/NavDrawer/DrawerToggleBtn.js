import React from 'react';
import './DrawerToggleBtn.css';

const DrawerToggleBtn = (props) => {
        return (
            <div>
                <button className='toggleBtn' onClick={props.handleDrawerToggle}>
                    <div className='toggleBtnLine' />
                    <div className='toggleBtnLine' />
                    <div className='toggleBtnLine' />
                </button>
            </div>
        )
}

export default DrawerToggleBtn;