import React, {useState } from 'react'
import { Link } from 'react-router-dom'

export const UserCadastrar = () => {

    const[user, setUser] = useState({
        titulo: '',
        descricao: ''
    });

    // const [status, setStatus] = useState({
    //     type: '',
    //     mensagem: ''
    // })

    const valorInput = e => setUser({ ...user, [e.target.name]: e.target.value});

    const cadUser = async e => {
        e.preventDefault();
        // console.log(user.titulo)
        // console.log(user.desricao)

        await fetch("http://localhost/www/api_php/users/cadUser.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.erro){
                // setStatus({
                //     type: 'erro',
                //     mensagem: responseJson.mensagem
                // })
            }else{
                // setStatus({
                //     type: 'success',
                //     mensagem: responseJson.mensagem
                // })
            }
        }).catch(() => {
            // setStatus({
            //     type: 'erro',
            //     mensagem: 'user não cadastrado :( erro!'
            // })
        })
    }
    function voltar(){
        window.location.href ='/'
    }
  return (
      <form onSubmit={cadUser}>
        <div className='jumbotron'>
            <h1 className='display-5 text-center'>Novo Usuário</h1>
            <Link to="/">
                <button className='btn btn-outline-success'>Listar users</button>
            </Link>
        </div>
        <div className='col'>
            <label>Nome</label>
            <input text="text" id='' className='form-control' name="nome" onChange={valorInput} />
        </div>
        <div className='col'>
            <label>Email</label>
            <input text="text" id='' className='form-control' name="email" onChange={valorInput}/>
        </div>
        <div className='col'>
            <label>Senha</label>
            <input text="text" id='' className='form-control' name="senha" onChange={valorInput}/>
        </div>

        <button type='submit' className='btn btn-outline-primary mt-3' onClick={voltar}>Cadastrar</button>
        
      </form>
  );
}
