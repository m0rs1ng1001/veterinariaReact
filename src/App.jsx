import Header from "./components/Header"
import  {Formulario}  from "./components/Formulario"

function App() {
 

  return (
    <div className="container mx-auto mt-20 ">
        <Header/>
      <div className="mt-12 md:flex flex-row">
          <Formulario/>
        
      </div>
    </div>
  )
}

export default App
