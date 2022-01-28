import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from '../components/menu';

export const Users = () => {

  const[data, setData] = useState([]);

  const getUsers = async () => {
    fetch("http://localhost/www/api_php/users/users.php")
    .then((response) => response.json())
    .then((responseJson) => (
      setData(responseJson.records)
    ));
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
      <div>
        <Menu />
        <h1 className='text-center mb-4'>Todos Usuários</h1>
        <Link to="/cad_user">
        <button className='btn btn-outline-primary'>Adicionar</button>
        </Link>
        <table className='table table-striped'>
          <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
          </thead>
          <tbody>
            {Object.values(data).map(users => (   
              <tr key={users.id} >
                  <td>{users.id}</td>
                  <td>{users.nome}</td>
                  <td>{users.email}</td>
                  <td>Ações</td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
  );
}
