export default function Header() {
  return (
    <header className='header-container'>
      <img
        src='/img/logo.png'
        alt='logo'
        style={{ width: '55px', height: '30px' }}
      />
      <span>COZ Shopping</span>
      <img
        src='/img/hambugger.png'
        alt='hamburger menu'
        style={{ width: '34px', height: '24px' }}
      />
    </header>
  );
}
