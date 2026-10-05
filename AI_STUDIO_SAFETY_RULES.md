# QUY TẮC SỬA GAME AN TOÀN

## Mục tiêu
Sửa đúng yêu cầu nhưng không làm thay đổi các hệ thống đang hoạt động ngoài phạm vi công việc.

## Bắt buộc trước khi sửa
1. Chạy `npm run verify`. Nếu không PASS, dừng và báo lỗi có sẵn trước khi sửa.
2. Xác định chính xác file cần sửa và phụ thuộc trực tiếp của chúng.
3. Không refactor, đổi engine, đổi cấu trúc thư mục, đổi tên API/global/plugin, hoặc xóa asset nếu yêu cầu không bắt buộc.

## Trong khi sửa
- Thay đổi tối thiểu (minimal diff).
- Không sửa file không liên quan để "dọn code", "tối ưu" hoặc "hiện đại hóa".
- Giữ nguyên thứ tự plugin, đường dẫn và tên tài nguyên.
- Không thay đổi save schema cũ nếu chưa có migration tương thích.
- Không ghi đè logic gốc chỉ để giải quyết một lỗi cục bộ nếu có thể vá bằng plugin/lớp tương thích.

## Sau khi sửa
1. Chạy `npm run verify`.
2. Nếu bất kỳ regression suite nào FAIL: không báo hoàn thành. Hoàn tác phần gây regression hoặc sửa theo hướng tương thích.
3. Với tính năng mới, thêm regression test tái hiện yêu cầu/lỗi trước khi coi công việc hoàn thành.
4. Báo rõ danh sách file đã thay đổi và lý do từng file.

## Vùng nhạy cảm
`dist/game/js/rpg_*.js`, `dist/game/js/plugins.js`, dữ liệu JSON, save/load, combat, age/life-cycle, equipment/shop, immortal/NPC và asset paths có phụ thuộc chéo cao. Chỉ sửa khi yêu cầu thực sự liên quan.
