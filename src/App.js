import React from 'react'
import './App.css'
import Banner from './components/Banner'
import DataGrid from './components/DataGrid'
import SearchForm from './components/SearchForm'

const App = () => {
  return (
    <>
      <Banner />
      <SearchForm />
      <DataGrid />
    </>
  )
}

export default App