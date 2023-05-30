function mostrar() {
  var numero = Number(window.prompt("Digite um número inteiro qualquer"))
  var antecessor = numero - 1
  var sucessor = numero + 1
  var resultado = window.alert(`Antes de ${numero}, temos o número ${antecessor}. \nDepois de ${numero}, temos o número ${sucessor}.`)

}