/**
 * Importa a classe Formulario
 * @requires Formulario
 */
import { Formulario } from "./Formulario.js";
/**
 * Classe responsável por armazenar os usuários
 */
class DataUser {
  /**
   * Construtor da classe DataUser
   */
  constructor() {
    /**
     * Atributo lista de usuários
     * @type {array}
     */
    this.listaUsuario = [];
  }
  /**
   * Cadastra um novo usu rio
   * @param {string} nome - Nome do usuário
   * @param {string} email - Email do usuário
   * @param {string} telefone - Telefone do usuário
   * @param {string} assunto - Assunto do formulário
   * @param {string} mensagem - Mensagem do formulário
   */
  cadastrarUsuario(nome, email, telefone, assunto, mensagem) {
    const newUser = new Formulario(nome, email, telefone, assunto, mensagem)
    this.listaUsuario.push(newUser)
    console.log("Cadastro realizado com sucesso");
    
  }
  /**
   * Retorna a lista de usuários
   * @returns {array} - Lista de usuários
   */
  listarUsuario(){
    return this.listaUsuario
  }
  /**
   * Procura um usuário pelo nome
   * @param {string} nome - Nome do usuário
   * @returns {object} - Usuário encontrado
   */
  procurarUsuarioPorNome(nome){
    return this.listaUsuario.find((usuario => usuario.nome ===nome))
  }
}
/**
 * Exporta a classe DataUser
 * @exports DataUser
 */
export { DataUser };

