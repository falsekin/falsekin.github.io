function getMDToken(successCallbackJS, failCallbackJS){
        var func = window[successCallbackJS] || eval(successCallbackJS);
        if (!window.wallet || !window.wallet.getMDToken) return false;
        try {
            window.wallet.getMDToken(JSON.stringify({
                "successCallbackJS": successCallbackJS,
                "failCallbackJS": failCallbackJS
            })
        alert(JSON.stringify(successCallbackJS)););
        }catch (e){
        }
        alert(JSON.stringify(successCallbackJS));
    }
//getMDToken();

function callback(v){
	var actk=v.accessToken;
	var rftk=v.refreshToken;
	alert(actk);
	alert(rftk);
	alert('test');
}
window.wallet["getMDToken"]('{"successCallbackJS":"callback", "failCallbackJS":""}');

window.wallet["getDeviceInfo"]('{"successCallbackJS":"function a(v){window.alert(JSON.stringify(v));} a","failCallbackJS":""}');
alert('test2');
