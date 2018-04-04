/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ItemsForm from '../../../src/components/items/ItemsForm';

describe('ItemsForm tests', () => {

  describe('ItemsForm tests', () => {
    it('should render four input fields and one select', done => {
      const props = {
        item: {
          title: '',
          price: '',
          category: '',
          description: '',
          image: ''
        },
        errors: {}
      };

      const wrapper = shallow(<ItemsForm {...props} />);
      expect(wrapper.find('input').length).to.equal(4);
      expect(wrapper.find('select').length).to.equal(1);
    });
  });

  it('should populate the form', done => {
    const props = {
      item: {
        title: '',
        price: '',
        category: '',
        description: '',
        image: ''
      },
      errors: {}
    };

    const wrapper = shallow(<ItemsForm {...props} />);
    expect(wrapper.find({ value: 'title' }).length).to.equal(1);
    expect(wrapper.find({ value: 'price' }).length).to.equal(1);
    expect(wrapper.find({ value: 'category' }).length).to.equal(1);
    expect(wrapper.find({ value: 'description' }).length).to.equal(1);
    expect(wrapper.find({ value: 'image' }).length).to.equal(1);


    done();
  });

  it('should correctly display errors', done => {
    const props = {
      item: {
        title: '',
        price: '',
        category: '',
        description: '',
        image: ''
      },
      errors: {
        title: 'Title is required',
        price: 'Price is required',
        category: 'Category is required',
        description: 'Description is required',
        image: 'Image is required'
      }
    };
    const wrapper = shallow(<ItemsForm {...props} />);
    expect(wrapper.find('div.form-group.has-error').length).to.equal(5);
    expect(wrapper.find('small.has-error').length).to.equal(5);
    done();
  });

});
