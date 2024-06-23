function updateSettings() {
    var isEnabled = document.getElementById('isEnabled').checked;
    var frameColor = document.getElementById('frameColor').value;
    var frameWidth = document.getElementById('frameWidth').value;
    var triggerUrl = document.getElementById('triggerUrl').value;

    chrome.storage.sync.set({ isEnabled, frameColor, frameWidth, triggerUrl });

}




function setInitialSettings() {
    // Definir valores iniciales
    const initialValues = {
        isEnabled: true,
        frameColor: '#FF0000', // Rojo como color predeterminado
        frameWidth: '5',       // Grosor de borde predeterminado
        triggerUrl: 'http://localhost/*' // URL predeterminada
    };

    // Guardar valores iniciales en chrome.storage
    chrome.storage.sync.set(initialValues, function () {
        console.log('Valores iniciales establecidos.');
        initSettings(); // Llama a initSettings después de establecer los valores
    });
}

function initSettings() {
    chrome.storage.sync.get(['isEnabled', 'frameColor', 'frameWidth', 'triggerUrl'], function (items) {
        if (items.isEnabled === undefined && items.frameColor === undefined && items.frameWidth === undefined && items.triggerUrl === undefined) {
            setInitialSettings();
        } else {
            document.getElementById('isEnabled').checked = items.isEnabled;
            document.getElementById('frameColor').value = items.frameColor;
            document.getElementById('frameWidth').value = items.frameWidth;
            document.getElementById('triggerUrl').value = items.triggerUrl;
        }
    });
}







document.addEventListener('DOMContentLoaded', function () {
    
    initSettings();
    
    const inputs = document.querySelectorAll('.option');
    inputs.forEach(input => {
        input.addEventListener('input', updateSettings);
    });
});

