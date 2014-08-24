function buttonclick(button_id){
var textarea = document.getElementById("textarea");
var len = textarea.value.length;
var start = textarea.selectionStart;
var end = textarea.selectionEnd;
var sel = textarea.value.substring(start, end);
replace(button_id, len, start, end, sel);
}

function replace(button_id, len, start, end, sel){
	if (button_id=="bld")
		{
			var newword = '**' + sel + '**';
			$('#textarea').focus();



		}
	else if (button_id=="itl")
		{
			var newword = '*' + sel + '*';
			$('#textarea').focus();
 		}
	else if(button_id == "hdr"){
		var newword = '#' + sel;
		$('#textarea').focus();
	}
	else if(button_id == "img")
	{
		var newword = '![ ](  )';
		$('#textarea').focus();
	}
	else if(button_id == "uli")
	{
	var newword = '* ' + sel;
	$('#textarea').focus();
	}
	else if(button_id == "oli")
		{
			var newword = '1. ' + sel;
			$('#textarea').focus();
		}
		else if(button_id == "lnks")
			{
				var newword = '[' + sel + '](http://)';
				$('#textarea').focus();
			}
			else if(button_id == "blk")
				{
					var newword = '>' + sel;
					$('#textarea').focus();
				}

	else
		{
			alert("Error");
		}


textarea.value = textarea.value.substring(0,start) + newword + textarea.value.substring(end,len);
preview(textarea);

}


function viewashtml() {
var htmlString = $('#output').html();
$('#output').text( htmlString );
}

function night(){
	$('#textarea').css('background','#1D1F21');
	$('#textarea').css('color','#d3d4c0');
	$('#output').css('background', '#3a3a3a');
	$('#output').css('color', 'grey');



	$('.bar_class').css('color','white');
  $('#bar').css('background', '#2f2f2f');
	$('#bar ul > li').css('background', 'url("./style/images/separator_night.png") no-repeat scroll right center / 2px 80%');
	

$('section.principal > header').css('background-image', 'url("./style/images/dark_header.png")');


}

function day(){
	$('#textarea').css('background','white');
	$('#textarea').css('color','black');
	$('#output').css('background', '#f2f2f2');
	$('#output').css('color', '#3a3a3a');
	$('.bar_class').css('background','white');
	$('.bar_class').css('color','black');
  $('#bar').css('background', 'white');
	$('section.principal > header').css('background-image', 'url("./style/images/header.png")');
	$('#bar ul > li').css('background', 'url("./style/images/separator.png") no-repeat scroll right center / 2px 80%');





}
