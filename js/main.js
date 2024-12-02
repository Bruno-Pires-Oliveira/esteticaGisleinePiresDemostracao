import {DataUser} from "./DataUser.js"

const dataUser = new DataUser()

document.getElementById("send").addEventListener("click",cadastrarUsuario)
function cadastrarUsuario(e){
    e.preventDefault()
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email")
    const telefone = document.getElementById("telefone").value
    const assunto = document.querySelector("select").value
    const mensagem = document.getElementById("mensagem").value 
    if(nome == "" || email == "" || telefone == "" ){
        alert("Preencha todos os campos")
    }else{
        dataUser.cadastrarUsuario(nome,email,telefone,assunto,mensagem)
        alert("Dados armazenados");
    }

  /* Aqui vai a funcionalidade de listar usuários */


  /* Aqui vai a funcionalidade de listar usuário pelo nome */
}