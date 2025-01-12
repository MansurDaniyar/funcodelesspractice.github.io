import './App.css'
import Card from './Card/Card.jsx'
import Button from './Button/Button.jsx'
function App() {

  return (
    <div className='container'>
    <div className='buttons-container'>
      <Button/>
    </div>
    <div className='cards-container'>
      <Card />
    </div>
    </div>
  )
}

export default App
