Đề 6: Ứng dụng Theo Dõi Nước uống (Water Tracker)

1. Thông tin Sinh viên
    Họ và Tên: Pham Minh Thang
    Mã Số Sinh Viên: 22IT273
    Lớp: 22SE1
    Trường: VKU

2. Mô tả Ứng dụng
+ Ứng dụng cho phép người dùng theo dõi lượng nước uống hàng ngày với các chức năng:
    Màn hình chính:
     - Hiển thị tổng số ml nước đã uống trong ngày.
     - Các nút cộng nhanh: +100ml, +200ml, +300ml.
     - Màn hình lịch sử:
+ Hiển thị danh sách chi tiết các lần uống (thời gian + dung lượng).
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c7c093e8-7824-486c-8696-9e2bce9142d3" />

3.Công nghệ sử dụng
    Frontend: React + TypeScript (Vite)
    Mobile: Capacitor
    Lưu trữ: @capacitor/preferences (để lưu tổng lượng nước và lịch sử).
    Native API: @capacitor/haptics (để rung khi thêm nước).
    Routing: react-router-dom

4. Hướng dẫn Cài đặt và Chạy
+ Yêu cầu Môi trường
    Node.js: Phiên bản 18.x trở lên.
    Android Studio: Phiên bản mới nhất (ví dụ: Iguana).
    Java JDK: Bắt buộc phải cài đặt và cấu hình JDK 17. Các phiên bản Java mới hơn (như 21) sẽ gây lỗi build với AGP 8.2.1.

Bước 1: Cài đặt Dependencies
    Mở terminal tại thư mục gốc của dự án và chạy:
        npm install

Bước 2: Chạy trên Web (Để test nhanh)
    Lệnh này sẽ khởi động server dev của Vite:
        npm run dev
    Mở trình duyệt và truy cập http://localhost:5173/ (hoặc cổng mà terminal hiển thị).

Bước 3: Chạy trên Thiết bị Android
    1.Build ứng dụng web:
        npm run build
    (Lệnh này sẽ tạo thư mục dist hoặc build chứa code web đã được tối ưu).

    2.Đồng bộ với Capacitor:
        npx cap sync
    (Lệnh này sao chép thư mục web build vào dự án android).

    3.Mở Android Studio:
        npx cap open android

    4.Build và Chạy trong Android Studio:
        Chờ Android Studio "Sync" Gradle xong.
        Kết nối thiết bị Android thật (đã bật USB Debugging) hoặc khởi động một Máy ảo (Emulator).
        Nhấn nút "Run" (▶) trong Android Studio để cài và chạy ứng dụng.
localhost
