import React from 'react'
import './App.css'
import DataGrid from './components/DataGrid'
import Banner from './components/Banner'
import SearchForm from './components/SearchForm'
import Footer from './components/Footer'


const App = () => {

    return (
        <>
            <Banner />
            <DataGrid />
            <Footer />
        </>
    )
}

export default App