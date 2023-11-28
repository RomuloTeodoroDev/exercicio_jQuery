$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        $(document).ready(function (){
            $('#button').click(
                function(){
                    const nomeTarefa = $('#nome-tarefa').val()
                    const novaTarefa = $('ul')
                    $('<li>' + nomeTarefa + '</li>').appendTo(novaTarefa)
                    $(novaTarefa).appendTo('ul')
                    $('#nome-tarefa').val('')
                })
                
            $('ul').on('click', 'li', function(){
                $(this).toggleClass('checked')                  
                })
            })
        }             
    )          
})   


