import PrimeInput from '../prime-input';
import React from 'react';
import { shallow } from 'enzyme';

describe('<PrimeInput />', () => {
  it('Should render without crashing', () => {
    shallow(<PrimeInput />);
  });
});