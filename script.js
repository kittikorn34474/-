// เพิ่ม JavaScript สำหรับการโต้ตอบกับผู้ใช้ (Optional)
document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio ของ KITTIKORN พร้อมแล้ว!');
    
// แสดงปีปัจจุบัน (โค้ดเดิมที่ต้องมี)
document.getElementById("year").textContent = new Date().getFullYear();

// โค้ดสำหรับสั่งเปลี่ยนหน้าเมื่อคลิกปุ่ม
document.getElementById("btnGoToProject").addEventListener("click", function() {
    // ใส่ชื่อไฟล์หรือ URL ของหน้าเว็บที่ต้องการให้ลิงก์ไป
    window.location.href = "project-detail.html"; 
});
