import './App.css'
import Item from './component/Item'
import logo from "./assets/logo.png"
import content from './data/content'

function App() {

  return (
    <div className='App'>
    <img src={logo} alt='logo'/>
     <h2>เครื่องมือพัฒนาเว็บ</h2>
     <p>PugunDev</p>
     {content.map((data)=>{
      return <Item key={data.id} {...data}/>
     })}
    </div>
  )
}

export default App
