import styled from 'styled-components';
export const Container = styled.section`
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
export const TextCategoriesLoading = styled(TextCategories)`
  font-size: 36px;
  line-height: 36px;
`;
export const ContainerContants = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(20% + 30px);
`;
export const ContainerContantsImage = styled.div`
  position: relative;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin: 15px 15px 0 0;
`;
export const ContantsImage = styled.img`
  margin: 15px 15px 60px 15px;
  width: 310px;
  height: 308px;
`;
export const ContainerFilterAndSize = styled.div`
  position: fixed;
  margin 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  width: 20%;
  height: 600px;
`;
export const TitleContants = styled.span`
  margin-top: 15px;
  margin-left: calc(20% + 30px);
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
`;
export const SignatureImage = styled.span`
  position: absolute;
  margin-left: 15px;
  margin-top 325px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
`;
