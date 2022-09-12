$(document).ready(function () {
    
    $('#formLogin').submit(function(){
           
           var pass = $('#txtPassword').val();
           var username = $('.form-control').val();
           alert('login');
           console.log(pass);
           
           $.ajax({ 
               type: "POST",
               data : username+';'+pass,
               url: "/eproc4/hello", 
               success: function(data){
                 console.log(data)
               }
           });
      
    })
});
