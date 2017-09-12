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
							   '<table class="table table-striped">' +
								   '<tr>' +
									   	'<th>Name</th>' +
									   	'<th>Email</th>' +
									   	'<th>Address</th>' +
									   	'<th>Accounts</th>' +
									   	'<th>Date added</th>' +
								   '<tr>' +
								   '<tr>' +
									   	'<td class="success">User1</td>' +
									   	'<td class="success">1@test.com</td>' +
									   	'<td class="success">USA</td>' +
									   	'<td class="success">1</td>' +
									   	'<td class="success">2016-08-01</td>' +
								   '<tr>' +
							   	   '<tr>' +
									   	'<td class="danger">User2</td>' +
									   	'<td class="danger">2@test.com</td>' +
									   	'<td class="danger">Europe</td>' +
									   	'<td class="danger">98</td>' +
									   	'<td class="danger">2016-08-01</td>' +
								   '<tr>' +
								   '<tr>' +
									   	'<td class="success">User3</td>' +
									   	'<td class="success">3@test.com</td>' +
									   	'<td class="success">Europe</td>' +
									   	'<td class="success">2</td>' +
									   	'<td class="success">2016-08-01</td>' +
								   '<tr>' + 
								   '<tr>' +
									   	'<td class="danger">User2</td>' +
									   	'<td class="danger">2@test.com</td>' +
									   	'<td class="danger">Europe</td>' +
									   	'<td class="danger">98</td>' +
									   	'<td class="danger">2016-08-01</td>' +
								   '<tr>' +
								   '<tr>' +
									   	'<td class="success">User3</td>' +
									   	'<td class="success">3@test.com</td>' +
									   	'<td class="success">Europe</td>' +
									   	'<td class="success">2</td>' +
									   	'<td class="success">2016-08-01</td>' +
								   '<tr>'
							   '</table>'
						   '</div>';
        $("#forms-box").append(usersTable);
    });

});