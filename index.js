function register() {
    //variáveis que salvam o prompt do HTML
    const email = document.getElementById('register-email').value;
    const senha = document.getElementById('register-senha').value;
    const nome = document.getElementById('register-nome').value;

    //recuperam os dados de cadastro do localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //registra o email e a senha no nosso banco de dados local
    if (nome != "" && email != "" && senha != "") {
        users.push({ nome, email, senha });
        localStorage.setItem('users', JSON.stringify(users));

        //salva a lista atualizada de usuários no localStorage
        document.getElementById('result').innerHTML = 'Cadastro bem-sucedido';
    } else {
        document.getElementById('result').innerHTML = 'Cadastro mal-sucedido, algo está faltando';
    }
}

function login() {
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    //verifica se o email e senha corresponde a um usuário existente
    const user = users.find(u => u.email === email && u.email != "" && u.senha === senha && u.senha != "");

    if (user) {
        document.getElementById('result').innerHTML = 'Login bem-sucedido';
        localStorage.setItem(email, senha);
        window.location.href = "./index.html";
        return true
    } else {
        document.getElementById('result').innerHTML = 'Login falhou';
        return false
    }
}