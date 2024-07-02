# Warframe Promo Code Auto-Apply Script
## Vấn đề
- Là 1 người chơi đến với Warframe ở thời điểm năm 2024 tức đã hơn 11 năm kể từ khi game ra mắt, tôi đã phải đối mặt với đống nội dung, kiến thức đồ sộ của tựa game này
- Trong số đó các promo code có thể được nhập cũng nhiều không kém, mà việc nhập tay từng promode code kia thì có lẽ là tôi vào game để đi nốt starchart còn hơn nên tôi đã tạo ra script này để đỡ khổ sở hơn :v

## Mô tả
Đây là script tự động điền và gửi mã khuyến mãi trên trang Warframe. Script này sử dụng Tampermonkey để tự động hóa quá trình nhập mã khuyến mãi từ danh sách có sẵn và xử lý việc chuyển hướng sau khi gửi thành công.

## Yêu cầu
- Tampermonkey: Một extension quản lý userscript, có sẵn cho các trình duyệt như Chrome, Firefox, Safari, và Microsoft Edge.

## Cài đặt

### 1. Cài đặt Tampermonkey
- Truy cập trang web Tampermonkey [Tampermonkey](https://www.tampermonkey.net/).
- Tải và cài đặt Tampermonkey cho trình duyệt của bạn.

### 2. Cài đặt Script
- Mở Tampermonkey từ trình duyệt của bạn.
- Tạo một script mới.
- Sao chép và dán nội dung của tệp `auto-apply.js` từ repository này vào script mới.
- Thêm danh sách mã khuyến mãi vào đầu script, ví dụ:
   ```javascript
    var codes = [
        'Codoma', 'WealWest', 'ThePanda', 'xBocchanVTx', 'PyrrhicSerenity', 'Akari', 'Carchara', 'Light_Micke', 'Nononom12',
        // ... thêm các mã khác vào đây
    ];
- Lưu và kích hoạt đoạn script trong Tampermonkey

## Sử dụng
- Truy cập trang đích [Warframe promocode](https://www.warframe.com/promocode) và script sẽ tự động chạy
