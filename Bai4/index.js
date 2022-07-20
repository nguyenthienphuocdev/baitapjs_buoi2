function tinh() {
    // Đầu vào:
    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;


    // Xử lý:
    // convert string => number
    var tinhDienTich = number1 * number2;
    var tinhChuVi = (number1 + number2) * 2;

    var result = "Diện tích: " + tinhDienTich + " ; " + "Chu vi: " + tinhChuVi;
    // console.log(total);

    // Kết quả:
    document.getElementById("showInfoTotal").innerHTML = result;
}