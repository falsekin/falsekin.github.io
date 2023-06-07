function getMDToken(successCallbackJS, failCallbackJS){
        alert(JSON.stringify(successCallbackJS));
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
        alert('test2');
        alert('test3');
    }
getMDToken();
