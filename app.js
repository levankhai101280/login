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

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Xử lý logic đăng nhập (kiểm tra với cơ sở dữ liệu hoặc mảng giả)
    if (username === 'admin' && password === 'password') {
        res.send('Đăng nhập thành công!');
    } else {
        res.send('Thông tin đăng nhập không chính xác!');
    }
});

// Lắng nghe cổng 3000
app.listen(3000, () => {
    console.log('Server đang chạy trên http://localhost:3000');
});
