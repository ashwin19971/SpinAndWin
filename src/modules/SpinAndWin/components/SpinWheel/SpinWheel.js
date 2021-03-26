import React, { useState } from 'react';

import './SpinWheel.scss';
import tip from '../../../../assets/img/tip.png';
import square from '../../../../assets/img/square.png';
import Circle from '../../../../components/Circle/Circle';
import { rewards, spinLabel } from '../../../../models/constants';
import { createMarkup } from '../../../../utils/createMarkup';

const SpinWheel = () => {

  const [isWheelRotating, setWheelState] = useState(false);
  const [wheelAngle, setWheelAngle] = useState(0);

  const startRotation = () => {
    if (!isWheelRotating) {
      setWheelState(true);
      setTimeout(
        () => {
          setWheelState(false)
        },
        Math.floor(Math.random() * 5000) + 100
      );
    }
  };

  const onWheel = e => {
    if (e.nativeEvent.wheelDelta > 0) {
      setWheelAngle((wheelAngle+9)%360);
    } else {
      setWheelAngle((wheelAngle-9)%360);
    }
    console.log(wheelAngle, 'wheelAngle');
  };

  return (
    <div
      className='wheel-wrapper'
      onWheel={(e) => onWheel(e)}
    >
      <div className='tip'>
        <img src={square} />
        <img src={tip} />
      </div>
      <ul
        onClick={() => startRotation()}
        className={`circle start-rotate ${!isWheelRotating ? 'stop-rotate' : ''}`}
        style={{ transform: `rotate(${wheelAngle}deg)` }}
      >
        {rewards.map((reward, index) => (
          <li key={index} index={index}>
            <div className="text">
              <Circle className="left-circle" />
              <p dangerouslySetInnerHTML={createMarkup(reward)} />
              <Circle className="right-circle" />
            </div>
          </li>
        ))}
      </ul>
      <div
        className='wheel-center'
        onClick={() => startRotation()}
      >{spinLabel}</div>
    </div>
  );
};

export default SpinWheel;
