import React from 'react';
import { shallow } from 'enzyme';
import Release from './Release';

describe('Release component', () => {
  it('renders Release', () => {
    const wrapper = shallow(<Release 
      artistName="The Beatles"
      recordings={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
