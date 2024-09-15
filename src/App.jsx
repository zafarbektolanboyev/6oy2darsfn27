import './App.css';
import React from 'react';
import Card from './components/Card'
import data from './assets/data.json'

function App() {
  return (
    <div className='Container'>
      {
        data.length && data.map((el, index) =>{
          return <Card key = {index} data = {el}></Card>
        })                  
      }
    </div>
  )
}
export default App
