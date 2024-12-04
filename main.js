$(document).ready(function(){
    $('#bto-novaimg' ).click(function(){
        $('form').slideDown();
    })
    $('#bto-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
    })
   $('#bto-adicionar').click(function(){     
    const enderecoDaNovaImagem = $(`#input-url`).val();
    const novoItem = $(`<li style="display: block"></li>`);
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
    $(` 
        <div id="link-fotos" class="link-fto" >
            <a  href="${enderecoDaNovaImagem}" >Ver imagem original</a>
        </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('#input-url').val('');
    })
})
