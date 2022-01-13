import styled from 'styled-components';
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
export const ImageMenu = styled.img`
  margin-left: 30px;
  &:hover {
    cursor: pointer;
  }
`;
export const ColorText = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.65);
`;
export const PriceItems = styled(ColorText)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
