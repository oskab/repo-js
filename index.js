$(document).ready(function () {
    
     client();
     $('#formLogins').submit(function(){
           var pass = $('#txtPasswords').val();
           var username = $('.form-control').val();
           //alert('login');
           console.log(pass);
           alert(username+" "+pass);
           
           $.ajax({ 
               type: "POST",
               data : username+';'+pass,
               url: "/eproc4/hello", 
               success: function(data){
                 console.log(data)
               }
           });
         
            if(pass!=null) {
                var aesUtil = new AesUtil(256, 1000);
                var cipherPass = aesUtil.encrypt('bf584200f292c11d8f834fbde4286fb6', '9877320e85217219c2ec46a9d69ee4b5', '0746540b4223dba1581d0ac469c66819f14ed806309b0d60431ca53de4ae4ee4', pass);
                var cipherClient = aesUtil.encrypt('bf584200f292c11d8f834fbde4286fb6', '9877320e85217219c2ec46a9d69ee4b5', '0746540b4223dba1581d0ac469c66819f14ed806309b0d60431ca53de4ae4ee4', client());
                $('#passw').val(cipherPass);
                $('#clientInfo').val(cipherClient);
            }
        });
		 $("#main2").css({"top": "9vh"});
		 setTimeout(function () {
			 $('#txtPasswords').focus();
		 }, 500);
    });
    
    
   
});
