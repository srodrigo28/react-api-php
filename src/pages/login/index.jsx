import React, {useState } from 'react'

import './login.css'

export const Login = () => {

	const[login, setLogin] = useState({
        user: '',
        senha: ''
    });
	
	const valorInput = e => setLogin({ ...login, [e.target.name]: e.target.value});

	function entrar(){
		let admin = "admin";
		let senha = "123";

		if(admin === login.user && senha === login.senha){
			console.log('Parabéns!')
			console.log(login.user, login.senha)
			window.location.href ='/user'

		}else{
			console.log(login.user, login.senha)
			console.log('usuário ou senha inválidos')
		}
	}

  return (

    <div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Login</h3>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" className="form-control" placeholder="Usuário" name='user' onChange={valorInput} />
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="Senha" name='senha'  onChange={valorInput} />
					</div>
					<div className="form-group">
						<input  onClick={entrar} type="button" value="Login" className="btn btn-outline-primary w-100"/>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
  );
}
