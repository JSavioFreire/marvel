import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'

import Header from './components/header/header'

import { MarvelContextProvider } from "./context/contexApi"

import { GlobalStyle, theme } from "./globalStyled/Global"
import { ThemeProvider } from "styled-components"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <MarvelContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <div className='margin'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MarvelContextProvider>
    </ThemeProvider>
  )
}

export default App
