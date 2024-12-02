const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Cấu hình body-parser để nhận dữ liệu từ form
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình thư mục chứa các tệp tĩnh (CSS, hình ảnh, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình EJS làm engine để render HTML
app.set('view engine', 'ejs');

// Định nghĩa route cho trang đăng nhập
app.get('/', (req, res) => {
    res.render('index');
});

// Xử lý logic đăng nhập
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Kiểm tra với thông tin đăng nhập giả (hoặc cơ sở dữ liệu thực tế)
    if (username === 'admin' && password === 'password') {
        res.send('Đăng nhập thành công!');
    } else {
        res.send('Thông tin đăng nhập không chính xác!');
    }
});

// Lắng nghe cổng. Nếu có biến môi trường PORT (khi triển khai trên Render, Heroku, v.v.), sử dụng nó, nếu không sử dụng 3000.
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server đang chạy trên http://localhost:${port}`);
});
