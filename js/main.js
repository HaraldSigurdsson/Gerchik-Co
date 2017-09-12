$(document).ready(function(){
    
    $("#createUser").click(function(){
        $("#createUser").hide();
    });


    $("#createAccount").click(function(){
        $(".user-form-wrapper").hide("slow");
        var accountForm =  '<div class="account-form-wrapper">' +
						   '<form>' +
						   '<div class="form-group">' +
						   '<label class="form-data" for="inputEmail">Email</label>' + 
						   ' <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email...">' +
						   '</div>' +
						   '<div class="form-group">' +
						   '<label class="form-data" for="inputPassword">Account</label>' +
						   '<input type="password" class="form-control" id="inputPassword" placeholder="Enter your account....">' +
						   '</div>' +
						   '<button id="createUser" type="button" class="btn-lg btn-primary">Create User</button>' +
						   '<button id="createAccount" type="button" class="btn-lg btn-warning">Create Account</button>' +
						   '<button id="showUsers" type="button" class="btn-lg btn-primary">Show Users</button>' +
						   '</form>' +
						   '</div>';
        $("#forms-box").append(accountForm);
    });

    $("#showUsers").click(function(){
        $(".user-form-wrapper").hide("slow");
        $(".account-form-wrapper").hide("slow");
        var usersTable =  '<div class="accounts-table">' +
							   '<table>' +
								   '<tr>' +
									   	'<th>Name</th>' +
									   	'<th>Email</th>' +
									   	'<th>Address</th>' +
									   	'<th>accounts</th>' +
									   	'<th>Date added</th>' +
								   '<tr>' +
								   '<tr>' +
									   	'<td>User1</td>' +
									   	'<td>1@test.com</td>' +
									   	'<td>USA</td>' +
									   	'<td>1</td>' +
									   	'<td>2016-08-01</td>' +
								   '<tr>' +
							   	   '<tr>' +
									   	'<td>User2</td>' +
									   	'<td>2@test.com</td>' +
									   	'<td>Europe</td>' +
									   	'<td>98</td>' +
									   	'<td>2016-08-01</td>' +
								   '<tr>' +
								   '<tr>' +
									   	'<td>User3</td>' +
									   	'<td>3@test.com</td>' +
									   	'<td>Europe</td>' +
									   	'<td>2</td>' +
									   	'<td>2016-08-01</td>' +
								   '<tr>'
							   '</table>'
						   '</div>';
        $("#forms-box").append(usersTable);
    });

});