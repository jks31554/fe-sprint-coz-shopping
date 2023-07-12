import { styled } from 'styled-components';

//Header

export const TitleStyle = styled.span`
  font-family: 'Intel';
  font-weight: 700;
  font-size: 2rem;
  padding-left: 12px;
  cursor: pointer;
`;

export const Styledcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  width: 100%;
  height: 80px;
  padding: 0 76px;
  position: sticky;
  top: 0;
  box-sizing: border-box;
  z-index: 10;

  box-shadow: 0 8px 8px #0002;
`;

export const LeftBox = styled.div`
  border: 0;
`;

export const DropdownMenu = styled.div`
  width: 200px;
  height: 172px;
  position: absolute;
  top: 80%;
  right: 3%;
  flex-direction: column;
  background-color: white;
  border: 1px solid #ccc;
  padding: 0 0 10px 0;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  transform: translateY(${(props) => (props.open ? '0' : '-10px')});
  transition: opacity 0.3s ease, transform 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
`;

export const DropdownMenuItem = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #0002;
  align-items: center; // 수직 정렬

  padding: 20px 0 20px 24px;
  cursor: pointer;
  &:last-child {
    border-bottom: 0;
    box-sizing: content-box;
    border-radius: 0 0 12px 12px;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const LogoImg = styled.img`
  cursor: pointer;
  width: 55px;
  height: 30px;
`;

export const Hambugger = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 34px;
  height: 24px;
`;

export const MenuIcon = styled.img`
  margin-right: 8px; // 오른쪽 마진 추가
  width: 20px;
  height: 20px;
`;

// Main ------------------------------------------------------------
export const MainContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Pbox = styled.div`
  width: 260px;
  height: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const ProductTitle = styled.h4`
  text-align: left;
  font-family: 'Intel';
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  top: 15vh;
  left: 12vw;
`;
export const cotentTitle = styled.h4`
  font-family: 'Intel';
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px;
  height: 150%;
`;
export const MainImg = styled.img`
  width: 260px;
  height: 210px;
  object-fit: cover;
  cursor: pointer;
`;
export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 210px;
`;
// Main종료 ------------------------------------------------------------

// Footer
export const FooterContainer = styled.div`
  display: inline-block;
  padding: 29px 1% 29px;
  border-top: 1px solid #ccc;
  font-family: 'Intel';
  font-size: 12px;
  color: #888;
  text-align: center;
`;
export const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterInfo = styled.span`
  &::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 10px;
    margin: 0 8px;
    background: #ccc;
  }
  &:last-child::after {
    display: none;
  }
`;
export const MailBox = styled.div`
  display: inline-block;
`;
export const FooterMail = styled.span`
  font-family: 'Intel';
`;
