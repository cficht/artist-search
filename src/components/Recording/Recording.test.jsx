import React from 'react';
import { shallow } from 'enzyme';
import Recording from './Recording';

describe('Recording component', () => {
  it('renders Recording', () => {
    const wrapper = shallow(<Recording 
      artist="The Beatles"
      recording="Please Please Me"
      lyrics="Oh yeah" />);
    expect(wrapper).toMatchSnapshot();
  });
});
