import { App } from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('Should render without crashing', () => {
    shallow(<App />);
  });
});