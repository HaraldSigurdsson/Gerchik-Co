$(document).ready(function(){
    
    var user = false;
    var account = false;
    var tables = false;

    function createUser() {
    	var name = $('#inputName').val();
    	var mail = $('#inputMail').val();
    	var address = $('#inputAddress').val();

    	if (name == '' || mail == '' || address == '') {
    		
    		alert("FILL IN THE FORM PLEASE!!!");

    		return;

    	} else if(user == false && name != '' && mail != '' && address != '') {
    		user = true;
    		$("#saveMessage").show().delay("slow").fadeIn();
    		$(".user-form-wrapper").hide("slow");
    		$(".account-form-wrapper").show("slow");
    	 	return;
    	} else if(user == true) {
    		alert("CREATE ACCOUNT!!!");
    	}
    }


    function createAccount() {
	    
	    var email = $('#inputMailTwo').val();
	    var accountValue = $('#inputAccount').val();

	    if (email == '' || accountValue == '') {
    		
    		alert("FILL IN THE FORM PLEASE!!!");

    		return;

    	}else if(account == false) {
    		account = true;
    		user = true;
    		$("#saveMessageTwo").show().delay("slow").fadeIn();
    		$(".user-form-wrapper").hide("slow");
    		$(".account-form-wrapper").show("slow");
    		window.setTimeout('location.reload()', 2000);
    		return;
    	}
    }

 
    function showUsers() {

    	if(user == true){
			alert("CREATE ACCOUNT!!!");
			return;
    	}

    	if(tables == false) {
    		tables =true;
    		$(".table-wrapper").show("slow");	
    	}else if (tables == true) {
    		tables =false;
    		$(".table-wrapper").hide("slow");	
        }
        
    }

    $("#createUserFirst").click(function(){
    		
     	createUser();
 
    });

     $("#createUserSecond").click(function(){
    	
     	createUser(); 
 
    });

    $("#createAccountFirst").click(function(){
        createAccount();
    });

     $("#createAccountSecond").click(function(){
        createAccount();
    });

    $("#showUsersFirst").click(function(){

        showUsers();

    });

});