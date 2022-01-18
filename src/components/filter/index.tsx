import {
  SliderContainer,
  SliderText,
  Track,
  // Slider,
  SliderInputs,
  SliderInput,
  RangeColor,
} from './style';
import Slider, { Range } from 'rc-slider';
import { redirect } from 'next/dist/server/api-utils';
export const Filter: React.FC = () => {
  return (
    <SliderContainer>
      <SliderText>Price range</SliderText>
      <Range
        railStyle={{ backgroundColor: '#d5d5d5' }}
        dotStyle={{ backgroundColor: '#d5d5d5' }}
        activeDotStyle={{ backgroundColor: '#d5d5d5' }}
      />
      {/* trackStyle={{ background-color: 'black' }} */}
      {/* <Slider
          // value={firstSliderValue}
          type={'range'}
          min={0}
          max={1000}
        />
        <Slider
          // value={secondSliderValue}
          type={'range'}
          max={1000}
        /> */}
      <SliderInputs>
        <SliderInput
        // value={firstSliderValue}
        />
        <SliderInput
        // value={secondSliderValue}
        />
      </SliderInputs>
    </SliderContainer>
  );
};
