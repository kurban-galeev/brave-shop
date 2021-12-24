import styled from 'styled-components';

export const StyledContainerHeader = styled.section`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledContainerLogo = styled.div`
  margin-left: 64px;
`;
export const StyledLogoImage = styled.img``;

export const StyledTextLogo = styled.text`
  margin-left: 8px;
  font-family: Spline Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: #000000;
`;
export const StyledContainerImage = styled.div`
  margin-right: 64px;
`;
export const StyledImageMenu = styled.img`
  margin-left: 30px;
`;
export const StyledContainerCategories = styled.div``;
export const StyledTextCategories = styled.text`
  margin-left: 8px;
  font-family: Spline Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
`;
export const StyledTextCategoriesLoading = styled(StyledTextCategories)`
  font-size: 36px;
  line-height: 36px;
`;
