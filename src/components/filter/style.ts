import styled from 'styled-components';
export const SliderInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;
export const SliderInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  height: 20px;
  width: 70px;
`;
export const SliderText = styled.p`
  font-family: Verdana;
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
    height: 3px;
  }
  &::-moz-range-track {
    -moz-appearance: none;
    height: 3px;
  }
  &::-ms-track {
    appearance: none;
    height: 3px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.7em;
    width: 1.7em;
    background-color: black;
    cursor: pointer;
    border-radius: 10px;
    pointer-events: auto;
    margin-top: -9px;
  }
`;
export const Track = styled.div`
  position: relative;
  width: 200px;
  height: 5px;
  background-color: #d5d5d5;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 5px;
`;
export const RangeColor = styled.div`
  background-color: #d5d5d5;
`;
