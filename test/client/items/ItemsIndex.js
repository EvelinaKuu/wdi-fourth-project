/* global describe, it, beforeEach, before, after, afterEach */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Promise from 'bluebird';
import Axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import ItemsIndex from '../../../src/components/items/ItemsIndex';

const itemData = [{
  id: 1,
  title: 'Levis jeans, size 26',
  image: '/assets/images/items/jeans-1.png',
  price: 15,
  category: 'Jeans',
  description: 'Light blue jeans, never used, bought wrong size.'
}, {
  title: 'Ankle boots, size 7',
  image: '/assets/images/items/ankle-boots-raid.png',
  price: 20,
  category: 'Shoes',
  description: 'Leather Raid ankle boots, used just a couple of times, like new.'
}];
describe('ItemsIndex tests', () => {
  let wrapper = null;
  let promise = null;

  before(done => {
    promise = Promise.resolve({ data: itemData });
    sinon.stub(Axios, 'get').returns(promise);
    done();
  });

  after(done => {
    Axios.get.restore();
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter>
        <ItemsIndex />
      </MemoryRouter>
    );

    done();
  });

  it('should display links to show pages', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.image-tile a').length).to.eq(2);
      expect(wrapper.find({ href: '/items/1' }).length).to.eq(1);
      expect(wrapper.find({ href: '/items/2' }).length).to.eq(1);
      done();
    });
  });

  it('should display the correct images', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find({ src: 'jeans.jpg' }).length).to.eq(1);
      expect(wrapper.find({ src: 'converse.jpg' }).length).to.eq(1);
      done();
    });
  });
  it('should display the add item button when logged in', done => {
    window.localStorage.setItem('token', 'FAKETOKEN');
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('a.main-button').length).to.eq(1);
      window.localStorage.removeItem('token');
      done();
    });
  });
  it('should not display the add item button when not logged in', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('a.main-button').length).to.eq(0);
      done();
    });
  });
});
