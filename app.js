$(document).ready(function(){

	var salaryCounter = 0;
	var totalSalary = "<h2>The total salary equals $" + salaryCounter + ".</h2>";
	$("#salary-counter").append(totalSalary);

	$("form").on("submit", function(event){
		event.preventDefault();

//strip values off of form
		var $inputs = $(".myInputs input");
		var values = {};

		$inputs.each(function(){
			values[this.name] = $(this).val();
		});

//make new variable to append onto ul each time form is submitted
		var newName = "<li>Name: " + values.firstName + " " + values.lastName + "</li>"; 
		var employeeNumber = "<li>Employee Number: " + values.employeeNumber + "</li>";
		var jobTitle = "<li>Title: " + values.jobTitle + "</li>";
		var salary = "<li>$" + values.baseSalary + "</li>";
		var removeButton = "<button class='remove'>Remove this employee!</button>";

		//determine review score and review score associated color
		var reviewScore = parseInt(values.lastReviewScore);
		switch(reviewScore){
			case 1:
			var lastReviewScore = "<li id='review' class='red'>Last Review Score: " + values.lastReviewScore + "</li>";
			break;

			case 2:
			lastReviewScore = "<li id='review' class='red'>Last Review Score: " + values.lastReviewScore + "</li>";
			break;

			case 3:
			lastReviewScore = "<li id='review' class='orange'>Last Review Score: " + values.lastReviewScore + "</li>";
			break;

			case 4:
			lastReviewScore = "<li id='review' class='green'>Last Review Score: " + values.lastReviewScore + "</li>";
			break;

			case 5:
			lastReviewScore = "<li id='review' class='green'>Last Review Score: " + values.lastReviewScore + "</li>";
			break;
		}	
//set employee message and append
		var employeeMessage = "<ul>" + newName + employeeNumber +jobTitle + lastReviewScore + salary + removeButton + "</ul>";
		$(".employee-info").append(employeeMessage);

//incriment salary counter
		salaryCounter += parseInt(values.baseSalary);

//created functionality for remove button
		$(".remove").on("click", function(){
			$(this).closest("ul").remove();
			salaryCounter -= parseInt($(this).closest("ul").children("li").last().val());
		});

	});

	$(".reset").on('click', function(event){
		event.preventDefault();
		$(this).closest('form').find("input[type=text]").val("");
	});

});

