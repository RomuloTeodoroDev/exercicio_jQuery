$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        $('#button').click(
            function(){
                const nomeTarefa = $('#nome-tarefa').val()
                const novaTarefa = $('ul')
                $('<li>' + nomeTarefa + '</li>').appendTo(novaTarefa)
                $(novaTarefa).appendTo('ul')
                $('#nome-tarefa').val('')
                $(novaTarefa).on('click', 'li', function(){
                    $(this).toggleClass('checked')                  
                })
            })
        }             
    )          
})   


