import React from 'react';
import './info.css';
import logo from '../../logo.svg';

const Info = () => {
    return (
        <div className='info-container'>
            <div className='person-info'>
                <img src={logo} alt="" />
                <div>
                    <h3>MD. Jahid Hasan</h3>
                    <p><small>sydney,colombia</small></p>
                </div>
            </div>
            <div className='bmi-info'>
                <div>
                    <p><strong>75</strong><small>kg</small></p>
                    <p>weight</p>
                </div>
                <div>
                    <p><strong>75</strong><small>kg</small></p>
                    <p>weight</p>
                </div>
                <div>
                    <p><strong>75</strong><small>kg</small></p>
                    <p>weight</p>
                </div>
            </div>
            <h2>Add a break</h2>
            <div className='break-info'>
                <p>10s</p>
                <p>15s</p>
                <p>20s</p>
                <p>25s</p>
                <p>30s</p>
            </div>
            <div className='exercise-info'>
                <h3>Exercise Details</h3>
                <div style={{display:'flex', justifyContent: 'space-between',backgroundColor: '#F2F4FA',padding: '0px 12px'}}>
                    <h4>Exercise Time</h4>
                    <h4>0<span>seconds</span></h4>
                </div>
                <div style={{display:'flex', justifyContent: 'space-between',backgroundColor: '#F2F4FA',padding: '0px 12px'}}>
                    <h4>Break Time</h4>
                    <h4>0<span>seconds</span></h4>
                </div>
            </div>
            <button>Activity Completed</button>
        </div>
    );
};

export default Info;