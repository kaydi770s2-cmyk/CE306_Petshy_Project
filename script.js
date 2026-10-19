// รอให้หน้า HTML โหลดเสร็จสมบูรณ์ก่อนเริ่มทำงาน
document.addEventListener('DOMContentLoaded', function () {
  const bookingForm = document.getElementById('bookingForm');
  const successBox = document.getElementById('successBox');

  if (bookingForm && successBox) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault(); // ป้องกันไม่ให้หน้าเว็บรีเฟรช

      // ดึงค่าจากฟอร์ม
      const userName = document.getElementById('userName')?.value || '-';
      const userPhone = document.getElementById('userPhone')?.value || '-';
      const bookDate = document.getElementById('bookDate')?.value || '-';
      const bookTime = document.getElementById('bookTime')?.value || '-';
      const guestCount = document.getElementById('guestCount')?.value || '-';

      // นำค่าไปใส่ในกล่องสรุปผล
      if (document.getElementById('resName')) document.getElementById('resName').textContent = userName;
      if (document.getElementById('resPhone')) document.getElementById('resPhone').textContent = userPhone;
      if (document.getElementById('resDate')) document.getElementById('resDate').textContent = bookDate;
      if (document.getElementById('resTime')) document.getElementById('resTime').textContent = bookTime;
      if (document.getElementById('resGuest')) document.getElementById('resGuest').textContent = guestCount;

      // ซ่อนฟอร์ม แล้วเปิดแสดงกล่องจองเรียบร้อยแล้ว
      bookingForm.style.display = 'none';
      successBox.style.display = 'block';
    });
  }
});