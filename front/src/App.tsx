import Button from './components/Button/Button'
import Input from './components/Input/Input'
import { Link } from 'react-router-dom'

function App () {
  return (
    <>
      <Button>Click me</Button>
      <Button appearance={'big'}>Click me</Button>
      <Input placeholder={'Email'}/>
      <div>
        <Link to={'/'}>Menu</Link>
        <Link to={'/cart'}>Cart</Link>
      </div>
    </>
  )
}

export default App
