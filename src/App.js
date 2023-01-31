import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error } from './pages'
import {
  Profile,
  SharedLayout,
  Projects,
  Certificates,
  Contact, 
  WorkExperience,
  Landing
} from './pages/dashboard'
import AppProvider from './context/appContext'



function App() {

  return (
    <BrowserRouter>
    <AppProvider>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='profile' element={<Profile />} />
          <Route index path='landing' element={<Landing />} />
          <Route path='projects' element={<Projects />} />
          <Route path='work-experience' element={<WorkExperience />} />
          <Route path='certificates' element={<Certificates />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
