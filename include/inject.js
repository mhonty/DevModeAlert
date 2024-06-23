console.log('%c DevModeAlert (Info) ', 'padding:2px;border-radius:20px;color:#000;background:#00bcd4', '\n => La extensión se ha cargado correctamente');


function convertWildcardToRegex(wildcard) {
    const escapedString = wildcard.replace(/[-\/\\^$+?.()|[\]{}]/g, '\\$&');
    const regexString = escapedString
        .replace(/\\\*/g, '.*') 
        .replace(/\\\?/g, '.');  
    return new RegExp(regexString);
}

function updateBorder() {
    chrome.storage.sync.get(['isEnabled', 'frameColor', 'frameWidth', 'triggerUrl'], function (items) {
        console.log(items)
        if (items.isEnabled && items.triggerUrl) {
            console.log(items.triggerUrl)
            var regex = convertWildcardToRegex(items.triggerUrl);
            if (regex.test(window.location.href)) {
                console.log("coincide")
                document.body.style.border = `${items.frameWidth}px solid ${items.frameColor}`;
            } else {
                document.body.style.border = 'none';
            }
        } else {
            document.body.style.border = 'none';
        }
    });
}
updateBorder();

chrome.storage.onChanged.addListener(function (changes, namespace) {
    updateBorder();
});
