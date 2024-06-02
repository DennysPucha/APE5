import './App.css'
import { automata } from './components/machine'
import { verificarPalabra } from './utils/utils'
import { useState} from 'react';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

function App() {
  const [word, setWord] = useState('')

  const schema = yup.object().shape({
    word: yup.string().required('Campo requerido').matches(/^[a-c]*$/, 'Solo se permiten letras a, b y c')
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const isAccepted = verificarPalabra(word, automata);

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Autómata de ejemplo</h1>
      <p>Alfabeto: "a,b,c"</p>
      <div>
        <form onSubmit={handleSubmit((data) => { setWord(data.word) })}>
          <input type="text" {...register('word')} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:"1em" }}>
            <button type="submit">Verificar</button>
          </div>
        </form>
        {errors.word && <p style={{ color: "red" }}>{errors.word.message}</p>}
      </div>
      
      <p style={{ color: isAccepted ? 'green' : 'red' }}>La palabra {word} {isAccepted ? 'es' : 'no es'} aceptada por el autómata</p>
    </div>
  )
}

export default App
