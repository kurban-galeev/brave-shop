import styled from 'styled-components';
export const FormDetails = styled.form`
  position: fixed;
  top: calc(81px + 15px);
  left: 15px;
  right: 15px;
  height: 70vh;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: white;
  overflow-y: hidden;
  z-index: 1;
`;
export const Container = styled.div`
  /* display: flex; */
  /* background-color: black; */
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  /* &:hover {
    cursor: pointer;
  } */
  /* filter: blur(2px); */
`;
export const ContainerForImage = styled.div`
  height: 60vh;
`;
export const ImageMain = styled.img`
  object-fit: cover;
  /* width: 100%; */
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
