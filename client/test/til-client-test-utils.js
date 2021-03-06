import React from 'react'
import {Router} from 'react-router-dom'
import {render, wait, Simulate} from 'react-testing-library'
import {createMemoryHistory} from 'history'
import * as generate from 'til-shared/generate'

function renderWithRouter(ui, {route = '/', ...renderOptions} = {}) {
  const history = createMemoryHistory({initialEntries: [route]})
  const utils = render(<Router history={history}>{ui}</Router>, renderOptions)
  const finishLoading = () =>
    wait(() => expect(utils.queryByText('Loading')).toBeNull())
  return {
    ...utils,
    finishLoading,
    history,
  }
}

export {renderWithRouter, generate, render, wait, Simulate}
