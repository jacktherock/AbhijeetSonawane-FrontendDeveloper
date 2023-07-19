import React from 'react'
import './App.css'
import DataGrid from './components/DataGrid'
import Banner from './components/Banner'
import Footer from './components/Footer'


const App = () => {

    return (
        <div>
            <Banner />
            <DataGrid />
            <Footer />
        </div>
    )
}

export default App