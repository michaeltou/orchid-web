






const xhr = new XMLHttpRequest();

xhr.addEventListener("loadend", () => {
    console.log(`${log.textContent}Finished with status: ${xhr.status}`);
});

xhr.open(
    "GET",
    "https://www.baidu.com/",
);
xhr.send();
console.log(`${log.textContent}Started XHR request\n`);



