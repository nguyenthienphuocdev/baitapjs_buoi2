function quyDoiTien() {
    // Đầu vào:
    var number1 = document.getElementById("number1").value * 1;

    // Xử lý:
    // convert string => number
    var total = number1 * 23500;
    var result = "Quy đổi tiền: " + total + "VNĐ";
    // console.log(total);

    // Kết quả:
    document.getElementById("showInfoTotal").innerHTML = result;
}