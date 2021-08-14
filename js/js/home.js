setInterval(() => {
    const date = new Date();
    document.getElementById("time").innerHTML = "";
    const month = (date.getMonth() + 1 >= 10) ? "" + date.getMonth() + 1 : "0"+ (date.getMonth() + 1);
    const sec = (Math.round(date.getSeconds()) >= 10) ? "" + Math.round(date.getSeconds()) : "0" + Math.round(date.getSeconds()) ;
    const min = (Math.round(date.getMinutes()) >= 10) ? "" + Math.round(date.getMinutes()) : "0" + Math.round(date.getMinutes()) ;
    const day = (date.getDate() >= 10) ? "" + date.getDate() : "0"+ (date.getDate()) ;
    document.getElementById("time").innerHTML += '<div id="item" >' + "<h1>" + day+ "/" + month +  "/" + date.getFullYear() +"</h1>" + "<br>" + "<h2>" + date.getHours() + ":" + min + ":" + sec + "</h2>" + "</div>";
}, 1000);