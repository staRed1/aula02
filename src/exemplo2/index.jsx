import { useEffect, useState } from "react";

export default function App() {
  
  const [listaUsuarios, setUsuarios] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
      const respostaUsuario = await fetch('https://jsonplaceholder.typicode.com/todos');
      const dadosUsuario = await respostaUsuario.json();
      setUsuarios(dadosUsuario);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {Usuarios.map( usuario => (
          <li key={usuario.userId}>
          <h2>{usuario.title}</h2>
          <p>{usuario.completed}</p>
        </li>
        ))}
      </ul>
    </>
  );
}
