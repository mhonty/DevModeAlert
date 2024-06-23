console.log('%c DevModeAlert (Info) ', 'padding:2px;border-radius:20px;color:#000;background:#00bcd4', '\n => La extensión se ha cargado correctamente');

// document.body.style.border = "5px solid red";
chrome.storage.sync.get(['isEnabled', 'frameColor', 'frameWidth', 'triggerUrl'], function (items) {
    document.body.style.border = `${items.frameWidth}px solid ${items.frameColor}`;
    if (items.isEnabled && items.triggerUrl) {
            var regex = new RegExp(items.triggerUrl.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
            if (regex.test(window.location.href)) {
            document.body.style.border = `${items.frameWidth}px solid ${items.frameColor}`;
        } else {
            document.body.style.border = 'none';
        }
    }
});

function convertWildcardToRegex(wildcard) {
    const escapedString = wildcard.replace(/[-\/\\^$+?.()|[\]{}]/g, '\\$&');
    const regexString = escapedString
        .replace(/\\\*/g, '.*') 
        .replace(/\\\?/g, '.');  
    return new RegExp(regexString);
}

function updateBorder() {
    chrome.storage.sync.get(['isEnabled', 'frameColor', 'frameWidth', 'triggerUrl'], function (items) {
        if (items.isEnabled && items.triggerUrl) {
            console.log(items.triggerUrl)
            var regex = convertWildcardToRegex(items.triggerUrl);
            if (regex.test(window.location.href)) {
                document.body.style.border = `${items.frameWidth}px solid ${items.frameColor}`;
            } else {
                document.body.style.border = 'none';
            }
        } else {
            document.body.style.border = 'none';
        }
    });
}

function updateBorder() {
    chrome.storage.sync.get(['isEnabled', 'frameColor', 'frameWidth', 'triggerUrl'], function (items) {

        console.log('%c AlfredGestPanel (Info) ', 'padding:2px;border-radius:20px;color:#fff;background:#00bcd4', '\n => Se actualiza el borde');


        document.body.style.border = `${items.frameWidth}px solid ${items.frameColor}`;
        if (items.isEnabled && items.triggerUrl) {
            var regex = new RegExp(items.triggerUrl.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
            if (regex.test(window.location.href)) {
                document.body.style.border = `${items.frameWidth}px solid ${items.frameColor}`;
            } else {
                document.body.style.border = 'none';
            }
        }
    });
}

chrome.storage.onChanged.addListener(function (changes, namespace) {

    console.log('%c AlfredGestPanel (Info) ', 'padding:2px;border-radius:20px;color:#fff;background:#00bcd4', '\n => El storaje ha cambiado');

    for (var key in changes) {
        if (['isEnabled', 'frameColor', 'frameWidth', 'triggerUrl'].includes(key)) {
            updateBorder();
            break;
        }
    }
});
