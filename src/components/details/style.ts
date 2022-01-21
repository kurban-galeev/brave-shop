import styled from 'styled-components';
export const FormDetails = styled.form`
  position: fixed;
  top: calc(81px + 15px);
  left: 50px;
  right: 50px;
  height: 80vh;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: white;
  overflow-y: hidden;
  z-index: 2;
`;
export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
export const TitleImage = styled.h1`
  margin: 0;
  margin-bottom: 15px;
  font-family: Spline Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 35px;
`;
export const ContainerTitle = styled.div`
  position: absolute;
  top: 15px;
  left: 5vw;
  max-width: 50vw;
`;
export const PriceItems = styled.p`
  color: rgba(0, 0, 0, 0.65);
  font-family: Spline Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
`;
export const ContainerForImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60vw;
  height: 100%;
`;
export const ImageHeart = styled.img`
  position: absolute;
  left: 95%;
  bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export const ContainerDetails = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const TitleDescription = styled.p`
  margin-top: 35px;
  margin-right: 35px;
  font-family: Spline Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
export const TextDescription = styled(TitleDescription)`
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.65);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;
export const ContainerAddToCart = styled.div`
  bottom: 50px;
  position: absolute;
  display: flex;
  align-items: center;
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
export const ButtonAddToCart = styled.button`
  padding: 10px;
  background: #d90429;
  font-family: Spline Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  &:hover {
    background: #750017;
  }
`;
export const ImageMinus = styled.img`
  margin: 0 15px;
  &:hover {
    cursor: pointer;
  }
`;
export const ImageMain = styled.img`
  object-fit: contain;
  margin-top: 45px;
  align-items: center;
  height: 40vh;
`;
export const ContainerDescription = styled.div`
  position: relative;
  margin-left: 30px;
  width: 40vw;
  height: 100%;
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
