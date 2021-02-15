setInterval(() => {
    d = new Date();
    hours = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    rotateH = 30 * hours + min/2;
    rotateM = 6*min;
    rotateS = 6*sec;

    hour.style.transform = `rotate(${rotateH}deg)`;
    minute.style.transform = `rotate(${rotateM}deg)`;
    second.style.transform = `rotate(${rotateS}deg)`;

},1000);