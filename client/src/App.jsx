import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, SignIn, SignUp, Profile, About } from './pages/index';
import {Header} from './components/';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/path' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App