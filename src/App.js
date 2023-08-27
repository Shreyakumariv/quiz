import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import JsHome from './Component/Home/Home'
import Output from './Component/Output/Output'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/*' element={<JsHome />} />
          <Route path='/output' element={<Output />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App