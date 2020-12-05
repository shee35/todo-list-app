//checking list
$("ul").on("click","li", function(){
  $(this).toggleClass("completed");
});

//click to delete
$("ul").on("click","span",function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
})

$("input[type = 'text'").keypress(function(event){
    if(event.which == 13)
    {
        //extract typed text
        let newtodo = $(this).val();
        $(this).val("");
        //append new li
        $("ul").append("<li>"+"<span><i class='fa fa-trash'></i></span> "+ newtodo + "</li>");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
})