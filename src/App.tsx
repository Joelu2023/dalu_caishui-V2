import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Cooperation } from './pages/Cooperation'
import { Home } from './pages/Home'
import { Lectures } from './pages/Lectures'
import { NotFound } from './pages/NotFound'
import { Research } from './pages/Research'
import { Services } from './pages/Services'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="research" element={<Research />} />
          <Route path="lectures" element={<Lectures />} />
          <Route path="cooperation" element={<Cooperation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
