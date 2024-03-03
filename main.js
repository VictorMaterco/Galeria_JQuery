$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li></li>');
        console.log(enderecoDaNovaImagem)
        console.log(novoItem)
        
        
        $(`<img scr="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        console.log(enderecoDaNovaImagem)
        console.log(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        console.log(enderecoDaNovaImagem)
        console.log(novoItem)

        $(novoItem).appendTo('ul');
        $('#endereco-imagem-nova').val('');
    })
})
