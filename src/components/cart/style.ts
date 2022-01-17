import styled from 'styled-components';
export const Container = styled.section`
  position: relative;
  margin: 0px;
`;
export const ContainerCartAndSum = styled.div`
  display: flex;
`;
export const TitleCart = styled.p`
  font-family: Spline Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
`;
export const ContainerCart = styled.div`
  margin-left: 64px;
  min-height: 60vh;
`;
export const ContainerItem = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 60vw;
  height: 130px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;
export const NameItem = styled.p`
  margin: 0 15px;
  font-family: Spline Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  max-width: 20vw;
  text-overflow: ellipsis;
  max-height: 100px;
  overflow: hidden;
`;
export const PriceText = styled(NameItem)`
  color: rgba(0, 0, 0, 0.65);
  font-size: 16px;
  line-height: 24px;
`;
export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 15px;
  height: 100px;
  width: 100px;
`;
export const ContainerDescriptionItem = styled.div``;
export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
`;
export const ImageItem = styled.img`
  height: 100px;
  max-width: 100px;
  object-fit: contain;
`;
export const ImageMinus = styled.img`
  margin: 0 15px;
  &:hover {
    cursor: pointer;
  }
`;
export const InputCountItems = styled.input`
  padding: 10px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border-radius: 8px;
  font-family: Spline Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
export const ContainerSummary = styled.div`
  margin-left: 15px;
`;
export const ContainerSubTotal = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  margin-left: 24px;
`;
export const TitleSummary = styled(NameItem)`
  line-height: 24px;
  margin: 24px;
`;
export const TextOrder = styled(NameItem)`
  margin: 0;
`;
