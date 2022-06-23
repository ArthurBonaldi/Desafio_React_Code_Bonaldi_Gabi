import React from 'react'
import './Forms.css'

export function FormCadMarca() {
  return (
    <>
        <h1 className='titulo'>Cadastrar Marca</h1>
        <div class="form-container">
        <form class="register-form">
            <input
            id="nome_marca"
            class="form-field"
            type="text"
            placeholder="Nome da marca"
            name="nome_marca"
            />
            <input 
            id="fotos"
            class="form-field"
            type="file"
            placeholder="Preço: R$00,00"
            name="imagem[]"
            />
            <button class="form-field" type="submit">
            Cadastrar
            </button>
        </form>
        </div>
    </>
  );
}