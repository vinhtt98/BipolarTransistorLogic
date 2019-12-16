$(document).ready(function() {
    $('*').css('font-size', 20);

    // 1. Sử dụng not:
    // $('div:not(.class01)').css('background-color', 'red');

    // 2. lấy các thành phần con của thành phần hiện tại:
    // $('div > *:not(p)').css('background-color', 'yellow');

    // 3. chọn element có tên, class và id riêng biệt:
    // $('div.class01#content1').css('background-color', 'green');

    // 4. chọn kết quả đầu tiên trong các kết quả chọn được (tương tự với last):
    // $('div:first').css('background-color', 'blue');
    
    // 5. chọn các phần tử con trong phần tử cha:
    // $('div p').css('background-color', 'red');
    // $('.class01 h1').css('background-color', 'yellow');

    // 6. chọn thành phần b thỏa mãn b có họ hàng liền ngay trước là a:
    // $('h1 + p').css('background-color', 'blue');

    // 7. chọn thành phần b thỏa mãn b có họ hàng trước là a:
    // $('h1 ~ p').css('background-color', 'blue');

    // 8. chọn nhiều thành phần:
    // $('h1, h2, h3').css('background-color', 'yellow');

    // 9. chọn các thành phần có số thứ tự là lẻ. tương tự với chẵn (even):
    // $('p:odd').css('background-color', 'yellow');

    // 10. chọn 2 thành phần đầu tiên:
    // $('p:lt(2)').css('background-color','red');
});