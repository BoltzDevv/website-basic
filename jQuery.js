document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cpf = document.getElementById('cpf').value;
    const idade = document.getElementById('idade').value;
  
    console.log(`Nome: ${nome} \nSobrenome: ${sobrenome} \nCPF: ${cpf} \nIdade: ${idade}`)
});