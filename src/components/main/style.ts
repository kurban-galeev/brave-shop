import styled from 'styled-components';
export const Container = styled.section`
  position: relative;
  margin: 0px;
`;
export const TextLogo = styled.p`
  margin-left: 8px;
  font-family: Spline Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: #000000;
`;
export const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: conic-gradient(from 360deg at 50% 50%, #999999, #6a6a6a, #3b3b3b);
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
  border-bottom: none;
  width: 20%;
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
  margin: 15px 15px 0 0;
  &:hover {
    cursor: pointer;
  }
`;
export const SignatureImage = styled.p`
  margin: 0;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
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
export const ContainerTitleImage = styled.div`
  margin: 15px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-end;
`;
export const ContainerSliderRange = styled.div`
  margin: 30px 15px;
`;
export const RangeContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
`;
