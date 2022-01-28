import React from 'react'
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className='menu mt5'>
        <Link to="/users" className='menu-item'>
            <button className='btn btn-outline-success'>Usuários</button>
        </Link>
        <Link to="/product" className='menu-item'>
            <button className='btn btn-outline-success'>Produto</button>
        </Link>
    </div>
  );
}
