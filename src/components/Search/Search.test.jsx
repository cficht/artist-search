import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search component', () => {
  it('renders Search', () => {
    const wrapper = shallow(<Search 
      artistText="The Beatles"
      artists={[]}
      handleChange={()=>{}}
      handleSubmit={()=>{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
