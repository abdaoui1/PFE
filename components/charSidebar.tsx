// components/Sidebar.tsx
export default function Sidebar() {
  return (
    <aside style={{
      width: '240px',
      height: '100vh',
      background: '#333',
      color: '#fff',
      padding: '20px'
    }}>
      <h2>Admin Panel</h2>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="/admin/dashboard" style={{ color: '#fff' }}>Dashboard</a></li>
          <li><a href="/admin/users" style={{ color: '#fff' }}>Users</a></li>
          <li><a href="/admin/settings" style={{ color: '#fff' }}>Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
}
