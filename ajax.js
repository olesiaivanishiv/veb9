function sendRequest(a, b) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `/math?paramA=${encodeURIComponent(a)}&paramB=${encodeURIComponent(b)}`);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            let textParam = new URLSearchParams(window.location.search).get('text');
            let textBeforeResult = textParam ? `${textParam}` : ''; 
            printStr(`${textBeforeResult}${xhr.responseText}`);
        } else {
            printStr(`Error: ${xhr.status}`);
        }
    };

    // Відправка запиту
    xhr.send();
}

sendRequest(1, 2);
sendRequest(3, 4);
sendRequest(5, 6);
