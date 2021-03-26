import React from 'react';

import './SpinAndWin.scss';
import GetHelp from '../components/GetHelp/GetHelp';
import YourRewardsHeader from '../components/YourRewardsHeader/YourRewardsHeader';
import SpinWheel from '../components/SpinWheel/SpinWheel';
import SpeedIndicator from '../components/SpeedIndicator/SpeedIndicator';

const SpinAndWin = () => (
  <div className="spin-and-win-wrapper">
    <YourRewardsHeader/>
    <SpinWheel />
    <SpeedIndicator />
    <GetHelp />
  </div>
);

export default SpinAndWin;
