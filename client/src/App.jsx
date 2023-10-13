import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, SignIn, SignUp, Profile, About } from './pages/index';
import {Header, PrivateRoute} from './components/';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute />} >
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App