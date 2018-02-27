/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ItemsForm from '../../../src/components/items/ItemsForm';

describe('ItemsForm tests', () => {

  describe('ItemsForm tests', () => {
    it('should render two imput fields and one select', done => {
      const props = {
        item: {
          title: '',
          image: '',
          category: '',
          description: ''
        },
        errors: {}
      };

      const wrapper = shallow(<ItemsForm {...props} />);
    });
});

});
