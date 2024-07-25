setInterval(function(){
    const date = new Date().toTimeString();
    document.getElementById("display-date").innerText = date.split(' ')[0];
}, 1000);