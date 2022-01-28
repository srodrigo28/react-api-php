import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../components/menu';

export const Products = () => {

  const[data, setData] = useState([]);

  const getProdutos = async () => {
    fetch("http://localhost/www/api_php/products/products.php")
    .then((response) => response.json())
    .then((responseJson) => (
      setData(responseJson.records)
    ))
  }

  useEffect(() => {
    getProdutos();
  }, [])

  return (

    <div>
      <Menu />
        <h1 className='text-center mb-4'>Todos Produtos</h1>
        <Link to="/cad_product">
          <button className='btn btn-outline-primary'>Adicionar</button>
        </Link>
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
    </div>
     
  );
}
