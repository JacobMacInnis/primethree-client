import Results from '../results';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Results />', () => {
  it('Should render without crashing', () => {
    shallow(<Results />);
  });
});