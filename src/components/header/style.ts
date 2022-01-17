import styled from 'styled-components';

export const ContainerHeader = styled.div`
  /* position: fixed; */
  z-index: 1;
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
export const ImageHeart = styled.img`
  margin-left: 30px;
  &:hover {
    cursor: pointer;
  }
`;
export const ImageCart = styled.img`
  margin-left: 30px;
  &:hover {
    cursor: pointer;
  }
`;
export const ImageUser = styled.img`
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
