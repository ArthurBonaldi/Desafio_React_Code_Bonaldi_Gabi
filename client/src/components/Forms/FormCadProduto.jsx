import React from 'react'
import './Forms.css'

export function FormCadProduto() {
  return (
    <>
        <div class="form-container">
        <form class="register-form">
            <input
            id="nome_produto"
            class="form-field"
            type="text"
            placeholder="Nome do produto"
            name="nome_produto"
            />
            <textarea
            id="descricao"
            class="form-field"
            type="text"
            placeholder="Descrição"
            name="descricao"
            />
            <input
            id="preco"
            class="form-field"
            type="text"
            placeholder="Preço: R$00,00"
            name="preco"
            />
            <select name='marca' 
            class="form-field">
                <option 
                class="form-field"
                value="" 
                selected>
                    Escolha uma categoria
                </option>
                <option 
                class="form-field"
                value="marca1"> Marca 1
                </option>
            </select>
            <input multiple
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