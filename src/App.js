import logo from './logo.svg'
import './App.css'
import Card2 from './components/Card/Card2'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import { Grid } from '@mui/material'
// import Card2 from './components/Card2/Card2'

const HotelFactory = (title) => ({
  title: 'Hotel 1',
  details: 'Details',
  tag: 'New',
  price: '$1240/night',
  rating: '4.88',
})

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Grid container spacing={2} m={4}>
                <Grid item>
                  <Card2 hotel={HotelFactory()} />
                </Grid>
                <Grid item>
                  <Card2 hotel={HotelFactory()} />
                </Grid>
                <Grid item>
                  <Card2 hotel={HotelFactory()} />
                </Grid>
                <Grid item>
                  <Card2 hotel={HotelFactory()} />
                </Grid>
                <Grid item>
                  <Card2 hotel={HotelFactory()} />
                </Grid>
              </Grid>
            }
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
