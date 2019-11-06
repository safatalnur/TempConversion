function myFunction() {
    let x;
    let y;
    x = (document.getElementById("value-temp").value-32)*(5/9);
    y = (document.getElementById("value-temp").value-32)*(5/9)+283.15;
    document.getElementById("ret-temp").innerHTML = x.toFixed(2);
    document.getElementById("ret-kelvin").innerHTML = y.toFixed(2);
}