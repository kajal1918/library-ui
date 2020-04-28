import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { getLibrary } from './api/LibraryApi';

configure({ adapter: new Adapter() });

jest.mock('./api/LibraryApi');

test('should fetch library', () => {
  const users = [{name: 'Bob'}];
  const resp = [{library_Id: 1, name: 'name1', type: 'type1'}];
  getLibrary.mockResolvedValue(resp);
});

