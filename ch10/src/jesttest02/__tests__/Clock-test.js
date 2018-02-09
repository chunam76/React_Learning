'use strict';

import React from 'react';


import Clock from '../Clock';
import renderer from 'react-test-renderer';

// useFakeTimers을 사용하여 고정된 시간을 지정 => 결과가 항상 동일하게 나오게끔
jest.useFakeTimers();
Date.now = jest.fn(() => 1482363367071);
it('renders correctly', () => {
  const tree = renderer.create(
    <Clock />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
