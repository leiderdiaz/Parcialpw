$(document).ready(function () {
   var i=1;
     $('#gustosbutton').click(function(){
        var gusto = document.getElementById("gustos").value;
        if(gusto!==""){
        var fila = '<tr id="row'+i+'"><td>'+gusto+'</td><td>' + "0" + '</td><td> <button type="button" id="'+i+'" class="btn">editar</button> </td></tr>';
        $("#tablagustos").append(fila);
        i++
        console.log(i);
        }
     });
     $('#form2').on('click', '.btn', function(){
        texto = '<br> Pulse aceptar para guardar los cambios o cancelar para anularlos'
        $("#form2").append(texto);
        botones = '<div class="btn-group"><input id="aceptar" type="submit" value="Aceptar"/><button id="cancelar" type="button">Cancelar</button></div>'
        $("#form2").append(botones);
        var button_id = $(this).attr("id");
        console.log(button_id);
        var row = '#row' + button_id + '';
        var gustovalue = $(row).find("td:first").html();
        $(row).replaceWith('<tr><td> <input id="gusto" name="gusto" type="text" value='+gustovalue+'> </td><td> <input id="porcentaje" name="porcentaje" type="number" value=0> </td><td>en edicion</td></tr>');
        $('#aceptar').click(function(){
        
        })
    })
});