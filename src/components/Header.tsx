const Header = () => {
  return (
    <header className="bg-indigo-600 text-white py-2">
      <div className="container">
        <div className="header-middle flex justify-between items-center">
          <div className="logo text-3xl">User Management</div>
          <nav>
            <ul className="flex gap-x-3">
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <a href="/">Customer</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
