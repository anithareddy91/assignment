function display(){
    var current = new Date();
    console.log(current.getHours()+ ":" +current.getMinutes()+ ":" +current.getSeconds());

}
setInterval(display,1000);
