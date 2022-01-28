import React, {useState } from 'react'
import { Link } from 'react-router-dom'

export const ProductsCadastrar = () => {

    const[produto, setProduto] = useState({
        titulo: '',
        descricao: ''
    });

    // const [status, setStatus] = useState({
    //     type: '',
    //     mensagem: ''
    // })

    const valorInput = e => setProduto({ ...produto, [e.target.name]: e.target.value});

    const cadProduto = async e => {
        e.preventDefault();
        // console.log(produto.titulo)
        // console.log(produto.desricao)

        await fetch("http://localhost/www/api_php/products/cadProduto.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({produto})
        })
        .then((response) => response.json())
        .then((responseJson) => {
            // if(responseJson.erro){
            //     setStatus({
            //         type: 'erro',
            //         mensagem: responseJson.mensagem
            //     })
            // }else{
            //     setStatus({
            //         type: 'success',
            //         mensagem: responseJson.mensagem
            //     })
            // }
        }).catch(() => {
            // setStatus({
            //     type: 'erro',
            //     mensagem: 'Produto não cadastrado :( erro!'
            // })
        })
    }
    function voltar(){
        window.location.href ='/'
    }

  return (
      <form onSubmit={cadProduto}>
        <div className='jumbotron'>
            <h1 className='display-5 text-center'>Novo Produto</h1>
            <Link to="/">
                <button className='btn btn-outline-success'>Listar Produtos</button>
            </Link>
        </div>
        <div className='col'>
            <label>Titulo</label>
            <input text="text" id='' className='form-control' name="titulo" onChange={valorInput} />
        </div>
        <div className='col'>
            <label>Descrição</label>
            <input text="text" id='' className='form-control' name="descricao" onChange={valorInput}/>
        </div>

        <button type='submit' className='btn btn-outline-primary mt-3' onClick={voltar}>Cadastrar</button>
        
      </form>
  );
}
