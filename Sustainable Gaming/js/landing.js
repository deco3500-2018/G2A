$(document).ready(function(){
	
	var pin = '0000';
	
	$('h3').click(function(){
		$('#pinBox').show();
	});
	
	$('#cancel').click(function(){
		$('#pinBox').hide();
		$('input').val("");
	});
	
	$('#continue').click(function(){
		if($('input').val() == pin){
			window.location.href="admin_tasks.html";
		}else{
			$('input').css('border', 'solid 1px red');
		}
	});
	
	$('.icon').click(function(){
		window.location.href="child_tasks.html";
	});
});