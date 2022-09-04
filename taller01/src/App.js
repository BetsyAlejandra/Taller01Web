import './App.css';
import { Diseño } from './Diseño';
import { Comparador } from './components/Comparador';
import { Convertidor } from './components/Convertidor';
import { Impares } from './components/Impares';
import { PreciodeLlamada } from './components/Llamadas';
import { Saludo  } from './components/Saludo';


function App() {
  return (
    <>
    <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Diseño />} />
                    <Route path='/Comparador' element={<Comparador />} />
                    <Route path='/Convertidor' element={<Convertidor />} />
                    <Route path='/Impares' element={<Impares />} />
                    <Route path='/PreciodeLlamada' element={<PreciodeLlamada />} />
                    <Route path='/Saludo' element={<Saludo />} />
                </Routes>
            </BrowserRouter></>
  )
}

export default App;
