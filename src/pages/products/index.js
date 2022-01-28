import React, {useState, useEffect } from 'react'

export const Products = () => {

  const[data, setData] = useState([]);

  const getProdutos = async () => {
    fetch("http://localhost/www/api_php/index.php")
    .then((response) => response.json())
    .then((responseJson) => (
      setData(responseJson.records)
    ))
  }

  useEffect(() => {
    getProdutos();
  }, [])

  return (
      <table className='table table-striped'>
        <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
        </thead>
        <tbody>
          {Object.values(data).map(produto => (   
            <tr key={produto.id} >
                <td>{produto.id}</td>
                <td>{produto.titulo}</td>
                <td>{produto.descricao}</td>
                <td>Ações</td>
            </tr>
            ))}
        </tbody>
      </table>
  );
}
