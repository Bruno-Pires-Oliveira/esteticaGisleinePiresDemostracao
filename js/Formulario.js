/**
 * Classe Formulario representa os dados de um formulário de contato.
 */
class Formulario {
  /**
   * Cria uma instância de Formulario.
   * @param {string} nome - Nome do usuário.
   * @param {string} email - Email do usuário.
   * @param {string} telefone - Telefone do usuário.
   * @param {string} assunto - Assunto da mensagem.
   * @param {string} mensagem - Conteúdo da mensagem.
   */
  constructor(nome, email, telefone, assunto, mensagem) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.assunto = assunto;
    this.mensagem = mensagem;
  }
}

export { Formulario };

