function tinhTong() {
    // Đầu vào:
    var number1 = document.getElementById("number1").value * 1;


    // Xử lý:
    // convert string => number
    var hangChuc = Math.floor(number1 / 10);
    var hangDV = number1 % 10;
    var total = hangChuc + hangDV;
    var result = "Tính tổng: " + total;
    // console.log(total);

    // Kết quả:
    document.getElementById("showInfoTotal").innerHTML = result;
}