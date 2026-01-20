const cardConteudo = document.querySelector('.conteudo');
const cardAgradecimento = document.querySelector('.agradecimento');
const form = document.querySelector('.form');
const avaliacoes = document.getElementsByName('rating');
const valor = document.getElementById('rating-value');    

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let avaliacaoSelecionada;
    for(let i = 0; i < avaliacoes.length; i++) {
        if(avaliacoes[i].checked) {
            avaliacaoSelecionada = avaliacoes[i].value;
            cardConteudo.classList.add('hidden');
            cardAgradecimento.classList.remove('hidden');
            valor.textContent = avaliacaoSelecionada;
            break;
        }
    }
})