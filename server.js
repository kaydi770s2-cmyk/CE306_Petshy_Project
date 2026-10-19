const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// อ่านข้อมูลจาก From
app.use(express.urlencoded({extended: true}));
app.use(express.json);

// สั่งให้ node ดึงไฟล์จาก HTML, CSS, JS จาก Frontend มาแสดงผล
app.use(express.static(__dirname));

// สร้าง API สำหรับข้อมูลการจองคิว
app.post('/api/booking', (req, res) => {
    const bookingData = req.body;
    console.log('ข้อมูลการจองที่ได้รับหน้าเว็บ:', bookingData);

    // ในอนาคต ตรงนี้คือจุดเขียนคำสั่งให้บันทึกลง Database (MySQL/MongoDB)

    res.json({ status: 'success', message: 'บันทึกข้อมูลการจองเรียบร้อยแล้ว!' });
});

// เริมรัน Server
app.listen(PORT, () => {
    console.log(`Server Petshy กำลังทำงานที่ https://localhost:${PORT}`);
});