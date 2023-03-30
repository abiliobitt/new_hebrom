import { FC, ReactElement } from 'react'
import {
  BrowserRouter, Route, Routes as Router
} from 'react-router-dom'
import Home from './containers/home'
import Unity from './containers/unity'

const Routes: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/unidade' element={<Unity />} />
      </Router>
    </BrowserRouter>
  )
}

export default Routes
