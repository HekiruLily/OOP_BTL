public class Main {
    public static void main(String[] args) {
        // Tạo một đối tượng Admin với username là "admin" và password là "1234"
        Admin admin = new Admin("admin", "1234");

        // Bạn có thể thêm các thao tác khác với admin ở đây, ví dụ:
        System.out.println("admin: username: " + admin.getUsername());
    }
}