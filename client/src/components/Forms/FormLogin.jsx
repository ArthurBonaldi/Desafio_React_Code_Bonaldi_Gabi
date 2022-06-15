import React from 'react'
import './FormLogin.css'

export function FormLogin() {
  return (
    <>
        <h1 className='titulo'>Entre na área administrativa</h1>    
        <div class="form-container">
        <form class="register-form">
            <input
            id="email"
            class="form-field"
            type="text"
            placeholder="Email"
            name="email"
            />
            <input
            id="senha"
            class="form-field"
            type="password"
            placeholder="Senha"
            name="senha"
            />
            <button class="form-field" type="submit">
            Logar
            </button>
        </form>
        </div>
    </>
  );
}