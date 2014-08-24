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
			$('#header_drop').hide();
			$('#textarea').focus();
		}
	else if (button_id=="itl")
		{
			var newword = '*' + sel + '*';
			$('#header_drop').hide();
			$('#textarea').focus();
 		}
	else if(button_id == "hdr1")
		{
			var newword = '#' + sel;
			$('#textarea').focus();
		}
	else if(button_id == "hdr2")
		{
			var newword = '##' + sel;
			$('#textarea').focus();
		}
	else if(button_id == "hdr3")
		{
			var newword = '###' + sel;
			$('#textarea').focus();
		}
	else if(button_id == "hdr4")
		{
			var newword = '####' + sel;
			$('#textarea').focus();
		}
	else if(button_id == "hdr5")
		{
			var newword = '#####' + sel;
			$('#textarea').focus();
		}
	else if(button_id == "hdr6")
		{
			var newword = '######' + sel;
			$('#textarea').focus();
		}
	else if(button_id == "img")
		{
			var newword = '![ ](  )';
			$('#header_drop').hide();
			$('#textarea').focus();
		}
	else if(button_id == "uli")
		{
			var newword = '* ' + sel;
			$('#header_drop').hide();
			$('#textarea').focus();
		}
	else if(button_id == "oli")
		{
			var newword = '1. ' + sel;
			$('#header_drop').hide();
			$('#textarea').focus();
		}
	else if(button_id == "lnks")
		{
			var newword = '[' + sel + '](http://)';
			$('#header_drop').hide();
			$('#textarea').focus();
		}
	else if(button_id == "blk")
		{
			var newword = '>' + sel;
			$('#header_drop').hide();
			$('#textarea').focus();
		}
	else if(button_id == "cdblk")
		{
			var newword = '     ' + sel + '     ';
			$('#header_drop').hide();
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
  $('#bar').removeClass('barc');
	$('#bar').addClass('blink');
	$('section.principal > header').css('background-image', 'url("./style/images/dark_header.png")');
	$('#bld').addClass('icon_night');
	$('#itl').addClass('icon_night');
	$('#hdr').addClass('icon_night');
	$('#blk').addClass('icon_night');
	$('#lnks').addClass('icon_night ');
	$('#cdblk').addClass('icon_night');
	$('#img').addClass('icon_night');
	$('#uli').addClass('icon_night');
	$('#oli').addClass('icon_night');
	$('.dh').addClass('dh_night');
	$('#header_drop').addClass('dh_night');
	$('#container').css('background','black');
	$('#container').css('color','grey');

}

function day(){
	$('#textarea').css('background','');
	$('#textarea').css('color','');
	$('#output').css('background', '');
	$('#output').css('color', '');
	$('.bar_class').css('background','');
	$('.bar_class').css('color','');
  $('#bar').css('background', '');
	$('section.principal > header').css('background-image', '');
	$('#bar ul > li').css('background', '');
	$('#bld').removeClass('icon_night');
	$('#itl').removeClass('icon_night');
	$('#hdr').removeClass('icon_night');
	$('#blk').removeClass('icon_night');
	$('#lnks').removeClass('icon_night ');
	$('#cdblk').removeClass('icon_night');
	$('#img').removeClass('icon_night');
	$('#uli').removeClass('icon_night');
	$('#oli').removeClass('icon_night');
	$('#bar ul').removeClass('blink');
	$('#bld').addClass('icon');
	$('#itl').addClass('icon');
	$('#hdr').addClass('icon');
	$('#blk').addClass('icon');
	$('#lnks').addClass('icon');
	$('#cdblk').addClass('icon');
	$('#img').addClass('icon');
	$('#uli').addClass('icon');
	$('#oli').addClass('icon');
	$('#bar').removeClass('blink');
	$('#bar').addClass('barc');
	$('.dh').removeClass('dh_night');
	$('#container').css('background','white');
	$('#container').css('color','black');
}
