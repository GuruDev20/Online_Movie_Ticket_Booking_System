import React from 'react';
import hcss from '../Header/Header.module.css';
function Header() {
  return (
    <div className={hcss['headeer']}>
      <h1 className={hcss['header-title']}>Movies Mania...</h1>
      <div className={hcss['divider']}></div>
    </div>
  );
}

export default Header;
