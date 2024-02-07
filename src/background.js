// chrome.runtime.onInstalled.addListener(function () {
//   chrome.tabs.create({
//     url: "https://www.google.com.br",
//   });
// });

var paraEnviar = "Testando comunicação";

chrome.runtime.onMessage.addListener((message, send, sendResponse) => {
    if (message === 'get-variable') {
        sendResponse(paraEnviar);
    }
})
