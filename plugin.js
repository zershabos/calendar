$(document).ready(function () {
	var getDaysInMonth = function(month,year) {
	 return new Date(year, month,0).getDate();
	};
	var d = new Date();
	var month   = d.getMonth();
	var day     = d.getDate();
	var year    = d.getFullYear();
	var numbers = getDaysInMonth(month,year);
	for (var i = 1; i <= numbers;i++) {
		var classname = '';
		if(i == day)
		{
			classname = 'today';
		}
		else if(i>day)
		{
			classname = 'waiting';
		}
		var block = "<div class='col-sm-2'><div class='day "+classname+"'>"+i+"</div></div>"
		$( ".alldays" ).append(block);
	}
	$(".today").click(function(){
		$.getJSON('http://quotes.stormconsultancy.co.uk/random.json', function(data) {
    		$(".details").text(data.quote);
    		$( ".alertbox" ).slideDown( "slow", function() {});
		});
	});
	$(".waiting").click(function(){
		$(".details").text("wait for it wait ");
    	$( ".alertbox" ).slideDown( "slow", function() {});
	});
	$(".exit").click(function(){
		$( ".alertbox" ).slideUp( "slow", function() {
		
	 	});
	});
});
