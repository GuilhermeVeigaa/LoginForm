function mostrarOcultarSenha() {
    let senha = document.getElementsById("senha");
    if (senha.type == "password") {
        senha.type = "text";
    } else {
        senha.type = "password"
    }
}