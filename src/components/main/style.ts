import styled from 'styled-components';
export const Container = styled.section`
  position: relative;
  margin: 0px;
`;
export const ContainerHeader = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerLogo = styled.div`
  margin-left: 64px;
  &:hover {
    cursor: pointer;
  }
`;
export const LogoImage = styled.img``;

export const TextLogo = styled.text`
  margin-left: 8px;
  font-family: Spline Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: #000000;
`;
export const ContainerImage = styled.div`
  margin-right: 64px;
`;
export const ImageMenu = styled.img`
  margin-left: 30px;
  &:hover {
    cursor: pointer;
  }
`;
export const ContainerCategories = styled.div``;

export const TextCategories = styled.span`
  margin-left: 16px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  &:hover {
    border-bottom: 2px solid #000000;
    cursor: pointer;
  }
`;
export const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: conic-gradient(from 360deg at 50% 50%, #999999, #6a6a6a, #3b3b3b);
  /* border-color: #fff transparent transparent transparent; */
  animation: rotating 1s linear infinite;
  }
  &:before {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    background: white;
  }

  @keyframes rotating {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;
export const ContainerContants = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-height: 600px;
  margin-left: calc(20% + 30px);
`;

export const ContainerFilterAndSize = styled.div`
  position: fixed;
  margin 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  width: 20%;
  height: 600px;
`;
export const ContainerTitleContants = styled.div`
  margin-top: 15px;
  margin-left: calc(20% + 30px);
`;
export const TitleContants = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
`;
export const ContantsImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 15px;
  /* object-fit: ; */
  width: 210px;
  height: 100%;
`;
export const ContainerContantsImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 317px;
  min-width: 316px;
  max-height: 570px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin: 15px 15px 0 0;
  &:hover {
    cursor: pointer;
  }
`;
export const SignatureImage = styled.text`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
`;
export const ColorText = styled.text`
  color: rgba(0, 0, 0, 0.65);
`;
export const PriceItems = styled(ColorText)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
export const ContainerTitleImage = styled.div`
  margin: 15px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-end;
  /* align-items: flex-start; */
`;
export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;
  margin-right: 60px;
  margin-left: calc(20% + 30px);
  border-top: 1px solid rgba(0, 0, 0, 0.15);
`;
export const ContainterTheContacts = styled.div`
  margin: 32px 0;
`;
export const ContainerImageFooter = styled.div`
  display: flex;
  align-items: center;
`;
