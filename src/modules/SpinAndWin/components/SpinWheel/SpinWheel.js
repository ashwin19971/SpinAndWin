import React from 'react';

import './SpinWheel.scss';
import tip from '../../../../assets/img/tip.png';
import square from '../../../../assets/img/square.png';
import Circle from '../../../../components/Circle/Circle';
import { rewards, spinLabel } from '../../../../models/constants';
import { createMarkup } from '../../../../utils/createMarkup';

const SpinWheel = () => (
  <div className='wheel-wrapper'>
    <div className='tip'>
      <img src={square} />
      <img src={tip} />
    </div>
    <ul className='circle'>
      {rewards.map((reward, index) => (
        <li key={index}>
          <div className="text">
            <Circle className="left-circle" />
            <p dangerouslySetInnerHTML={createMarkup(reward)} />
            <Circle className="right-circle" />
          </div>
        </li>
      ))}
    </ul>
    <div className='wheel-center'>{spinLabel}</div>
  </div>
);

export default SpinWheel;
