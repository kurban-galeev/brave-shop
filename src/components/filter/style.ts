import styled from 'styled-components';
export const SliderInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;
export const SliderLabels = styled(SliderInputs)`
  margin: 10px;
`;
export const SliderInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  height: 20px;
  width: 100px;
`;
export const SliderLabel = styled.label`
  font-family: Spline Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
export const SliderText = styled.p`
  display: flex;
  justify-content: center;
  font-family: Spline Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
export const SliderContainer = styled.div`
  margin: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  flex-direction: column;
  margin: 0;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  position: absolute;
  width: 100%;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: transparent;
  pointer-events: none;
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    /* height: 5px; */
  }
  &::-moz-range-track {
    -moz-appearance: none;
    /* height: 5px; */
    /* height: 1.5vw; */
  }
  &::-ms-track {
    appearance: none;
    /* height: 5px; */
    /* height: 1.5vw; */
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    background-color: #d90429;
    cursor: pointer;
    border-radius: 15px;
    pointer-events: auto;
    margin-top: -3.5px;
  }
`;
export const Container = styled.div``;
export const Track = styled.div`
  position: relative;
  width: calc(100% - 30px);
  height: 5px;
  background-color: #d5d5d5;
  margin: auto;
  top: 0;
  bottom: -7px;
  border-radius: 1.5vw;
`;
export const RangeColor = styled.div`
  background-color: #d5d5d5;
`;
