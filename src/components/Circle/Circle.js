import React from 'react';
import { string } from 'prop-types';

import './Circle.scss';

const Circle = ({ className }) => <i className={className}></i>;

Circle.propTypes = {
  className: string
}

Circle.defaultProps = {
  className: ''
}

export default Circle;
