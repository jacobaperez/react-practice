import React from 'react';
import Search from '../Search';
import { shallow } from 'enzyme';
import ShowCard from '../ShowCard';
import preload from '../../data.json';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount fo shows based on search term', () => {
  const component = shallow(<Search />);
  const searchWord = 'black';
  component.find('input').simulate('change', { target: { value: searchWord } });
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  );
  expect(component.find(ShowCard).length).toEqual(showCount.length);
});
