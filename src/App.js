import logo from './logo.svg'
import './App.css'
import Card2 from './components/Card/Card2'
// import Card2 from './components/Card2/Card2'

const HotelFactory = (title) => ({
  title: 'Hotel 1',
  details: 'Details',
  tag: 'New',
  price: '$1240/night',
  rating: '4.88'
})
function App() {
  console.log("🚀 ~ file: App.js ~ line 13 ~ HotelFactory ~ HotelFactory", HotelFactory())
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card2 hotel={HotelFactory()} />
        <Card2 hotel={HotelFactory()} />
        <Card2 hotel={HotelFactory()} />
        <Card2 hotel={HotelFactory()} />
      </div>
    </div>
  )
}

export default App
