// Função para buscar os dados do sessionStorage e atualizar a página
document.addEventListener('DOMContentLoaded', function () {
    // Recupera os dados do sessionStorage
    const nome = sessionStorage.getItem('ongNome');
    const categoria = sessionStorage.getItem('ongCategoria');
    const descricao = sessionStorage.getItem('ongDescricao');
    const endereco = sessionStorage.getItem('ongEndereco');
    const instagram = sessionStorage.getItem('ongInstagram');
    const facebook = sessionStorage.getItem('ongFacebook');
    const telefone = sessionStorage.getItem('ongTelefone');
    const email = sessionStorage.getItem('ongEmail');

    // Atualiza os elementos da página com os dados recuperados
    document.getElementById('nome-ong').textContent = nome;
    document.getElementById('categoria-ong').textContent = categoria;
    document.getElementById('descricao-ong').textContent = descricao;
    document.getElementById('endereco-ong').textContent = endereco;
    document.getElementById('instagram-link').href = instagram;
    document.getElementById('facebook-link').href = facebook;
    document.getElementById('telefone-link').href = `tel:${telefone}`;
    document.getElementById('email-link').href = `mailto:${email}`;
});
