import { useEffect, useState } from "react";
import {Card} from "./components/Card"

function App() {
  const [numero, setNumero] = useState(0);
  const[lista, setLista] = useState([])

  // const incrementar = () => {
  //   setNumero(numero + 10);
  //   console.log("aumentou + 10");
  // };

  // //  sempre é usado na renderização e para chamadas de api
  // useEffect(() => {
  //   console.log("renderizou");
  // });

  // // com o array de dependencias[], é onde insiro as variáveis que serão observadas para realizar ações
  // useEffect(() => {
  //   if (numero === 50) console.log("renderizou 2");
  // }, [numero]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setLista(data.splice(0,10));
      });
  },[]);

  return (
    <>
      {/* <h1>{`contador: ${numero}`}</h1>
      <button onClick={incrementar}>+10</button> */}

      <div className="container">
      <h1>Album de fotos</h1>

<div className="row row-cols-1 row-cols-md-6 g-4">
  {lista.map(foto =><Card title={foto.id} text= {foto.title} imagem={foto.thumbnailUrl}/>)}
    
        </div>
  </div>

      
    </>
  );
}

export default App;
