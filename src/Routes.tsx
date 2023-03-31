import { FC, ReactElement } from 'react'
import {
  BrowserRouter, Route, Routes as Router
} from 'react-router-dom'
import ContentPage from './containers/contentPage'
import Home from './containers/home'
import Unity from './containers/unity'

const Routes: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/unidade' element={<Unity />} />
        <Route path='/conteudo/*' element={<ContentPage />} />
      </Router>
    </BrowserRouter>
  )
}

export default Routes
