import { useState } from 'react';

export default function ContactForm() {
  // 1. TẤT CẢ các Hook (useState) phải đặt ở ngay đầu và BÊN TRONG component
  const [form, setForm] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // 2. Các hàm xử lý sự kiện cũng nằm BÊN TRONG component
  function update(e) {
    const { name, value } = e.target;
    setForm((old) => ({ ...old, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) {
      next.name = 'Chưa nhập họ tên';
    }
    if (!form.email.includes('@')) {
      next.email = 'Email chưa hợp lệ';
    }
    setErrors(next);
    setSent(Object.keys(next).length === 0);
  }

  // 3. Chỉ có MỘT khối return duy nhất để trả về toàn bộ giao diện form
  return (
    <form className="contact" onSubmit={submit} noValidate>
      <label htmlFor="name">Họ tên</label>
      <input 
        id="name" 
        name="name"
        value={form.name} 
        onChange={update} 
      />
      {errors.name && (
        <p className="error">{errors.name}</p>
      )}

      <label htmlFor="email">Email</label>
      <input 
        id="email" 
        name="email" 
        type="email"
        value={form.email} 
        onChange={update} 
      />
      {errors.email && (
        <p className="error">{errors.email}</p>
      )}

      <button className="button">Gửi</button>
      {sent && <p className="ok">Đã gửi. Cảm ơn bạn!</p>}
    </form>
  );
}