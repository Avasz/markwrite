function preview(textAreaObject){
  var text = textAreaObject.value;
  var processedText = processText(text);
  output.innerHTML = processedText;
  output_div.value = processedText;
}

function processText(text){
  var converter = new Showdown.converter();
  var html = converter.makeHtml(text);
  return html;
}
