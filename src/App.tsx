import { Suspense } from 'react'
import './App.css'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import type { TechnologiesType } from './types/types'
import Technologies from './components/Technologies'
import { Footer } from './components/Footer'

const promiseTechnologiesData = async (): Promise<TechnologiesType[]> => {
  const response = await fetch("../data.json")
  const data = await response.json()
  return data;
}

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>

      <Suspense fallback={<div>Loading...</div>}>

          <Technologies promiseTechnologies = {promiseTechnologiesData()} ></Technologies>

      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
