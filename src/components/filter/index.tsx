import {
  SliderContainer,
  SliderText,
  Track,
  Slider,
  SliderInputs,
  SliderInput,
  SliderLabels,
  SliderLabel,
  Container,
} from './style';
import { useState } from 'react';
import {
  getFirstAndLastValuePrice,
  getFirstAndLastValueRating,
  firstValuePriceChanging,
  lastValuePriceChanging,
} from '../../store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import Slider, { Range } from 'rc-slider';
// import { redirect } from 'next/dist/server/api-utils';
export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { firstValuePrice, lastValuePrice, firstValueRating, lastValueRating } =
    useAppSelector((state) => state.itemsReducers);
  // const firtsPrice = firstValuePrice;

  // const [firstPrice, setFirstPrice] = useState(firstValuePrice);
  // const [lastPrice, setLastRating] = useState(lastValuePrice);
  // useEffect(() => {
  //   dispatch(getFirstAndLastValuePrice());
  // }, [dispatch]);
  return (
    <Container>
      <SliderContainer>
        <SliderText>Price range</SliderText>
        <Track>
          <Slider
            value={firstValuePrice}
            type={'range'}
            step={0.1}
            // max={}
            min={firstValuePrice}
            max={lastValuePrice}
            onChange={(e) => {
              dispatch(firstValuePriceChanging(Number(e.target.value)));
            }}
          />
          <Slider
            value={lastValuePrice}
            min={firstValuePrice}
            max={lastValuePrice}
            type={'range'}
            onChange={(e) => {
              dispatch(lastValuePriceChanging(Number(e.target.value)));
            }}
          />
        </Track>
        <SliderInputs>
          <SliderInput
            value={firstValuePrice}
            onChange={(e) => {
              dispatch(firstValuePriceChanging(Number(e.target.value)));
            }}
          />
          <SliderInput
            value={lastValuePrice}
            onChange={(e) => {
              dispatch(lastValuePriceChanging(Number(e.target.value)));
            }}
          />
        </SliderInputs>
      </SliderContainer>
      <SliderContainer>
        <SliderText>Rating range</SliderText>
        <Track>
          <Slider
            value={firstValueRating}
            type={'range'}
            min={firstValueRating}
            max={lastValueRating}
          />
          <Slider
            value={lastValueRating}
            type={'range'}
            max={lastValueRating}
          />
        </Track>
        <SliderLabels>
          <SliderLabel>{firstValueRating}</SliderLabel>
          <SliderLabel>{lastValueRating}</SliderLabel>
        </SliderLabels>
      </SliderContainer>
    </Container>
  );
};
