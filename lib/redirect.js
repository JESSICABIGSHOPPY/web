var a=localStorage.getItem("osname"), b=localStorage.getItem("browser");
switch (a){
    case 'Windows':
        {
                if (b == 'Firefox')
                {
                    setTimeout(function(){
                        window.location.href = 'firefox.html';
                    }, 500);
                }
                else if (b == 'Chrome')
                {
                    setTimeout(function(){
                        window.location.href = 'chrome.html';
                    }, 500);
                }
                break; 
        }
    case 'Linux':
        {
                if (b == 'Firefox')
                {
                    setTimeout(function(){
                        window.location.href = 'firefox.html';
                    }, 500);
                }
                else if (b == 'Chrome')
                {
                    setTimeout(function(){
                        window.location.href = 'chrome.html';
                    }, 500);
                }
                break; 
        }
    case 'Macintosh':
        {
                if (b == 'Firefox')
                {
                    setTimeout(function(){
                        window.location.href = 'firefox.html';
                    }, 500);
                }
                else if (b == 'Chrome')
                {
                    setTimeout(function(){
                        window.location.href = 'chrome.html';
                    }, 500);
                }
                break; 
        }
    case 'Android':
        {
            if (b == 'Firefox')
            {
                setTimeout(function(){
                    window.location.href = 'firefox_and.html';
                }, 500);
            }
            else if (b == 'Chrome')
            {
                setTimeout(function(){
                    window.location.href = 'chrome_and.html';
                }, 500);
            }
            break;
        } 
    case 'iPhone':
            {
                if (b == 'Firefox')
                {
                    setTimeout(function(){
                        window.location.href = 'firefox_iOS.html';
                    }, 500);
                }
                else if (b == 'Chrome')
                {
                    setTimeout(function(){
                        window.location.href = 'chrome_iOS.html';
                    }, 500);
                }
                else if (b == 'Safari')
                {
                    setTimeout(function(){
                        window.location.href = 'safari_iOS.html';
                    }, 500);
                }
                break;
            } 
}
