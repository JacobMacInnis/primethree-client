import { ResultsContainer } from '../results-container';
import React from 'react';
import { shallow } from 'enzyme';

describe('<ResultsContainer />', () => {
  it('Should render without crashing', () => {
    shallow(<ResultsContainer />);
  });
});