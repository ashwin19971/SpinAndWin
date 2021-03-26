import React from 'react';

import './SpeedIndicator.scss';
import speedArrow from '../../../../assets/img/speed_arrow.svg';
import speedMarker from '../../../../assets/img/speed_mark.svg';

const SpeedIndicator = () => (
  <div className='speed-indicator-wrapper'>
    <img src={speedArrow}/>
    <img src={speedMarker}/>
  </div>
);

export default SpeedIndicator;
