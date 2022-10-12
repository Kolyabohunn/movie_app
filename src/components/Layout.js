import { Outlet, Link } from 'react-router-dom';
function Layout() {
  return (
    <div>
      <header
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <Link to="/">Home</Link>
        <Link
          style={{ marginLeft: '15px' }}
          to={{
            pathname: 'about',
          }}
        >
          About
        </Link>
      </header>
      <Outlet />
      <footer>Layout 2022</footer>
    </div>
  );
}
export default Layout;
