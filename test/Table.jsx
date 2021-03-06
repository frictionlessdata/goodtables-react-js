import React from 'react'
import {assert} from 'chai'
import {shallow} from 'enzyme'
import Table from '../src/Table.jsx'
const report = require('../data/report.json')

// Tests

describe('Table', () => {
  it('should render', () => {
    const result = shallow(<Table table={report.tables[0]} />)
    assert(result.contains('data/invalid.csv'))
  })
})
