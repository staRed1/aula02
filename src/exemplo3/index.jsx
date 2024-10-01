import { useEffect, useState } from "react";

export default function App() {
  
  const [listaUser,setUser] = useState([]);

  useEffect(() => { 

    const  buscarUser  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dadosUser = await resposta.json();
        setUser(dadosUser)
      }
    //complete o código
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {
            //complete o código
        }
      </ul>
    </>
  );
}
