import React from 'react';

import './YourRewardsHeader.scss';
import leftArrowImg from '../../../../assets/img/left_arrow.svg';
import { yourRewardLabel } from '../../../../models/constants';

const YourRewardsHeader = () => (
  <div className="your-rewards-label-wrapper">
    <img src={leftArrowImg} />
    <p>{yourRewardLabel}</p>
  </div>
);

export default YourRewardsHeader;
