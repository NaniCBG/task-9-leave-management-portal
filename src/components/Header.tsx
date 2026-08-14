function Header() {
  return (
    <header className="top-header">

      <button className="menu-button">
        ☰
      </button>

      <div className="search-area">

        <button className="candidate-button">
          All Candidates
          <span>⌄</span>
        </button>

        <div className="search-box">
          <span>Search...</span>
          <strong>⌕</strong>
        </div>

      </div>

      <div className="header-icons">
        <span className="notification blue">♟</span>
        <span className="notification yellow">⚒</span>
        <span className="notification green">✉</span>
      </div>

    </header>
  );
}

export default Header;