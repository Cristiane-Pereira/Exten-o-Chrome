// window.onload = function (){
//     console.log("Injetado na Página");
// }

chrome.runtime.sendMessage("get-variable", (response) => {
    console.log(response);
});