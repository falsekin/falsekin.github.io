function getMDToken(successCallbackJS, failCallbackJS){
        alert('test1');
        var func = window[successCallbackJS] || eval(successCallbackJS);
        if (!window.wallet || !window.wallet.getMDToken) return false;
        try {
            window.wallet.getMDToken(JSON.stringify({
                "successCallbackJS": successCallbackJS,
                "failCallbackJS": failCallbackJS
            }));
        }catch (e){
        }
        alert(JSON.stringify(successCallbackJS));
        alert('test552');
    }
getMDToken();

function callback(v){
	var actk=v.accessToken;
	var rftk=v.refreshToken;
	alert(actk);
	alert(rftk);
	alert('test');
}
window.wallet["getMDToken"]('{"successCallbackJS":"callback", "failCallbackJS":""}');
callback();
