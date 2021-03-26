import React from 'react';

import { 
  spinMsgTitle,
  spinMsgInstruction,
  haveQuestionLabel,
  getHelpLabel
} from '../../../../models/constants';
import './GetHelp.scss';

const GetHelp = () => (
  <>
    <div className='spin-wheel-message-wrapper'>
      <p className='spin-title'>{spinMsgTitle}</p>
      <p className='spin-description'>{spinMsgInstruction}</p>
    </div>
    <div className='get-help-wrapper'>
      {haveQuestionLabel} <a>{getHelpLabel}</a>
    </div>
  </>
);

export default GetHelp;
