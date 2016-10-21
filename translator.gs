// respond to HTTP GET request
function doGet(request) {
  return respond(request);
}

// create response to request
function respond(request) { 
  
  // construct response object
  const response = {
    translation: translate(request.parameter.input, request.parameter.source, request.parameter.target)
  };
 
  // return json response
  return ContentService.createTextOutput(JSON.stringify(response)).
    setMimeType(ContentService.MimeType.JSON);
}

// get Google translation
function translate(inputText, sourceLanguage, targetLanguage) {
  return LanguageApp.translate(inputText, sourceLanguage, targetLanguage);
}
