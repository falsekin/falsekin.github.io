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
getMDToken();
