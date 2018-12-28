import Instructions from '../instructions';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Instructions />', () => {
  it('Should render without crashing', () => {
    shallow(<Instructions />);
  });
});