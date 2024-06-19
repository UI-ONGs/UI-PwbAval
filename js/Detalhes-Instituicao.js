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

document.addEventListener('DOMContentLoaded', () => {
    const commentsContainer = document.getElementById('commentsContainer');
    const sortRecentButton = document.getElementById('sortRecent');
    const sortLikedButton = document.getElementById('sortLiked');
    const commentForm = document.getElementById('commentForm');
    const nameInput = localStorage.getItem("username");
    console.log(nameInput);
    const commentInput = document.getElementById('comment');
    const commentsModal = document.getElementById('commentsModal');
    const openCommentsButton = document.getElementById('openComments');
    const closeCommentsButton = document.getElementById('closeComments');

    const defaultComments = [
        {
            name: "Alice",
            text: "Este é um ótimo artigo!",
            likes: 5,
            date: new Date('2023-06-16T12:30:00')
        },
        {
            name: "Bob",
            text: "Eu não concordo com o ponto de vista.",
            likes: 3,
            date: new Date('2023-06-17T09:00:00')
        },
        {
            name: "Charlie",
            text: "Muito bem escrito!",
            likes: 8,
            date: new Date('2023-06-18T14:45:00')
        }
    ];

    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments'));
        if (comments === null) {
            saveComments(defaultComments);
            return defaultComments.map(comment => ({
                ...comment,
                date: new Date(comment.date)
            }));
        }
        return comments.map(comment => ({
            ...comment,
            date: new Date(comment.date)
        }));
    }

    function saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    function displayComments(comments) {
        commentsContainer.innerHTML = '';
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            
            const authorDiv = document.createElement('div');
            authorDiv.classList.add('author');
            authorDiv.textContent = comment.name;
            
            const dateDiv = document.createElement('div');
            dateDiv.classList.add('date');
            dateDiv.textContent = comment.date.toLocaleString();
            
            const textDiv = document.createElement('div');
            textDiv.classList.add('text');
            textDiv.textContent = comment.text;
            
            const likesDiv = document.createElement('div');
            likesDiv.classList.add('likes');
            likesDiv.textContent = `Likes: ${comment.likes}`;
            
            commentDiv.appendChild(authorDiv);
            commentDiv.appendChild(dateDiv);
            commentDiv.appendChild(textDiv);
            commentDiv.appendChild(likesDiv);
            
            commentsContainer.appendChild(commentDiv);
        });
    }

    function addComment(name, text) {
        if (!name) {
            alert("Por favor, defina um nome de usuário nas configurações.");
            return;
        }
        const comments = loadComments();
        const newComment = {
            name: name,
            text: text,
            likes: 0,
            date: new Date()
        };
        comments.unshift(newComment);
        saveComments(comments);
        displayComments(comments);
    }

    sortRecentButton.addEventListener('click', () => {
        const comments = loadComments();
        const sortedComments = comments.sort((a, b) => b.date - a.date);
        displayComments(sortedComments);
    });

    sortLikedButton.addEventListener('click', () => {
        const comments = loadComments();
        const sortedComments = comments.sort((a, b) => b.likes - a.likes);
        displayComments(sortedComments);
    });

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const text = commentInput.value;
        addComment(nameInput, text);
        commentInput.value = '';
    });

    openCommentsButton.addEventListener('click', () => {
        commentsModal.showModal();
    });

    closeCommentsButton.addEventListener('click', () => {
        commentsModal.close();
    });

    // Fechar modal ao clicar fora do container
    commentsModal.addEventListener('click', (event) => {
        if (event.target === commentsModal) {
            commentsModal.close();
        }
    });

    // Exibe os comentários inicialmente ordenados por data (mais recentes primeiro)
    const initialSortedComments = loadComments().sort((a, b) => b.date - a.date);
    displayComments(initialSortedComments);
});
