function callback(v){
	var actk=v.accessToken;
	var rftk=v.refreshToken;
	alert(actk);
	alert(rftk);
	//alert('test');
}
window.wallet["getMDToken"]('{"successCallbackJS":"callback", "failCallbackJS":""}');
callback();
