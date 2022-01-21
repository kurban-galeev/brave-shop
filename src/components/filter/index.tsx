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
import { IClothingInfo } from '../../models/IClothingInfo';
import { useState, useEffect } from 'react';
import {
  firstValuePriceChanging,
  lastValuePriceChanging,
  firstValueRatingChanging,
  lastValueRatingChanging,
} from '../../store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import Slider, { Range } from 'rc-slider';
// import { redirect } from 'next/dist/server/api-utils';
const getFirstAndLastPrice = (Array: IClothingInfo[]) => {
  const maxPrice = Math.max(
    ...Object.values([...Array]).map((elem) => elem.price)
  );
  const minPrice = Math.min(
    ...Object.values([...Array]).map((elem) => elem.price)
  );
  return { maxPrice, minPrice };
};
const getFirstAndLastRating = (Array: IClothingInfo[]) => {
  const maxRating = Math.max(
    ...Object.values([...Array]).map((elem) => elem.rating.rate)
  );
  const minRating = Math.min(
    ...Object.values([...Array]).map((elem) => elem.rating.rate)
  );
  return { maxRating, minRating };
};
export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    firstValuePrice,
    lastValuePrice,
    firstValueRating,
    lastValueRating,
    items,
  } = useAppSelector((state) => state.itemsReducers);
  // const firtsPrice = firstValuePrice;
  // dispatch(getFirstAndLastValuePrice());
  // dispatch(getFirstAndLastValueRating());
  // const [value, setValue] = useState(firstValuePrice);
  const { minPrice, maxPrice } = getFirstAndLastPrice(items);
  const { minRating, maxRating } = getFirstAndLastRating(items);

  // const [firstPrice, setFirstPrice] = useState(firstValuePrice);
  // const [lastPrice, setLastRating] = useState(lastValuePrice);
  useEffect(() => {
    dispatch(firstValuePriceChanging(minPrice));
    dispatch(lastValuePriceChanging(maxPrice));
    dispatch(firstValueRatingChanging(minRating));
    dispatch(lastValueRatingChanging(maxRating));
  }, [dispatch, minPrice, maxPrice, minRating, maxRating]);
  return (
    <Container>
      <SliderContainer>
        <SliderText>Price range</SliderText>
        <Track>
          <Slider
            value={firstValuePrice}
            type={'range'}
            step={10.99}
            min={minPrice}
            max={maxPrice}
            onChange={(e) => {
              dispatch(firstValuePriceChanging(Number(e.target.value)));
            }}
          />
          <Slider
            max={maxPrice}
            value={lastValuePrice}
            // min={minPrice}
            type={'range'}
            step={10.99}
            onChange={(e) => {
              dispatch(lastValuePriceChanging(Number(e.target.value)));
            }}
          />
        </Track>
        <SliderInputs>
          <SliderInput
            value={firstValuePrice}
            type="number"
            min={minPrice}
            max={maxPrice}
            step={10.99}
            onChange={(e) => {
              dispatch(firstValuePriceChanging(Number(e.target.value)));
            }}
          />
          <SliderInput
            type="number"
            step={10.99}
            min={minPrice}
            max={maxPrice}
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
            step={0.2}
            min={minRating}
            max={maxRating}
            onChange={(e) => {
              dispatch(firstValueRatingChanging(Number(e.target.value)));
            }}
          />
          <Slider
            value={lastValueRating}
            type={'range'}
            step={0.2}
            max={maxRating}
            onChange={(e) => {
              dispatch(lastValueRatingChanging(Number(e.target.value)));
            }}
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
