import { useState } from 'react';
import {
  TitleStyle,
  Styledcontainer,
  LogoImg,
  Hambugger,
  LeftBox,
  DropdownMenuItem,
  DropdownMenu,
  MenuIcon,
} from '../styled/style';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [name, setName] = useState('안진혁');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const updateName = () => {
    /** 이름을 업데이트 할 경우가 생긴다면 호출시킬 수 있게 */
    const userName = '안진혁';
    setName(userName);
  };
  return (
    <Styledcontainer>
      <LeftBox>
        <LogoImg src='/img/logo.svg' alt='logo' />
        <TitleStyle>COZ Shopping</TitleStyle>
      </LeftBox>
      <Hambugger
        src='/img/hambugger.svg'
        alt='hamburger menu'
        onClick={toggleDropdown}
      />
      <DropdownMenu open={dropdownOpen}>
        <DropdownMenuItem>{`${name} 님 환영합니다!`}</DropdownMenuItem>
        <DropdownMenuItem>
          <MenuIcon src='/img/itemIcon.svg' alt='상품리스트 아이콘' />
          상품리스트 페이지
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MenuIcon src='/img/bookmark.svg' alt='북마크 아이콘' />
          북마크 페이지
        </DropdownMenuItem>
      </DropdownMenu>
    </Styledcontainer>
  );
}
