function tong() {
    // Đầu vào:
    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;

    // console.log(number1);
    // console.log(number2);

    // Xử lý:
    // convert string => number
    // number1 = parseInt(number1);
    // number2 = parseInt(number2);
    var total = number1 * number2;
    var result = "Tổng tiền lương: " + total;
    // console.log(total);

    // Kết quả:
    document.getElementById("showInfoTotal").innerHTML = result;
}