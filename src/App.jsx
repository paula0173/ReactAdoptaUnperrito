import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import CardsPerros from './components/CardsPerros'
import Footer from './components/Footer'
import Header from './components/Header'

function App() { 

  return (
    <>
     <Header titulo = "Adopta un perrito" />
     <div className='grid-container'>
     <CardsPerros imagen= "./src/assets/puppy-1.jpg" titulo ="Bartolo" 
            texto = "Lleno de energia y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece" raza="Husky" color="success"/>
     <CardsPerros imagen= "./src/assets/puppy-2.jpg" titulo ="Pardo" 
           texto = "Jugueton, amigable y se lleva bien con niños y otrs animales. ¡Haz de perlita tu mejor amiga!"  raza="Bobtaid" color="primary"  />
     <CardsPerros imagen= "./src/assets/puppy-3.jpg" titulo ="Gohan" 
          texto = "Un perro de tamaño mediano con un corazon gigante.  ¡Hazlo parte de tu familia hoy mismo!"  raza="Shard" color="warning"  />
     <CardsPerros imagen= "./src/assets/puppy-4.jpg" titulo ="Prince" 
          texto = "Compañero ideal y cariñoso que adora los mimos y abrazos. ¡Ayudalo a encontrar una familia!"  raza="Beagle" color="danger"  />
     </div>
     <Footer />
   
    </>
  ) 
}

export default App
