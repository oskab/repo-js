$(document).ready(function () {
    console.log('hello');
     $('#formLogin').submit(function(){
            var pass = $('#txtPassword').val();
            var username = $('.form-control').val();
       
            $.ajax({ 
                type: "POST",
                data : username+';'+pass
                url: "/eproc4/hello", 
                success: function(data){
                  console.log(data)
                }
            });
       
     })
});
