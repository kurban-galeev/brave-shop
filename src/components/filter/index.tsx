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
import { useEffect } from 'react';
import {
  firstValuePriceChanging,
  lastValuePriceChanging,
  firstValueRatingChanging,
  lastValueRatingChanging,
  firstValueCountChanging,
  lastValueCountChanging,
} from '../../store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AppDispatch } from '../../store/store';
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
const getFirstAndLastCount = (Array: IClothingInfo[]) => {
  const maxCount = Math.max(
    ...Object.values([...Array]).map((elem) => elem.rating.count)
  );
  const minCount = Math.min(
    ...Object.values([...Array]).map((elem) => elem.rating.count)
  );
  return { maxCount, minCount };
};

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    firstValuePrice,
    lastValuePrice,
    firstValueRating,
    lastValueRating,
    firstValueCount,
    lastValueCount,
    items,
  } = useAppSelector((state) => state.itemsReducers);

  const { minPrice, maxPrice } = getFirstAndLastPrice(items);
  const { minRating, maxRating } = getFirstAndLastRating(items);
  const { minCount, maxCount } = getFirstAndLastCount(items);

  // const handleChangeLastCount = (
  //   { target }: React.ChangeEvent<HTMLInputElement>,
  //   count: number
  // ) => {
  //   const countValue = target.value;
  //   if (Number(countValue) >= count) {
  //     dispatch(lastValueCountChanging(Number(countValue)));
  //   }
  // };
  const handleChangeFirst = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    count: number,
    func: (countValue: number) => (dispatch: AppDispatch) => Promise<void>
  ) => {
    const countValue = target.value;
    if (Number(countValue) <= count) {
      dispatch(func(Number(countValue)));
    }
  };
  const handleChangeLast = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    count: number,
    func: (countValue: number) => (dispatch: AppDispatch) => Promise<void>
  ) => {
    const countValue = target.value;
    if (Number(countValue) >= count) {
      dispatch(func(Number(countValue)));
    }
  };

  useEffect(() => {
    dispatch(firstValuePriceChanging(minPrice));
    dispatch(lastValuePriceChanging(maxPrice));
    dispatch(firstValueRatingChanging(minRating));
    dispatch(lastValueRatingChanging(maxRating));
    dispatch(firstValueCountChanging(minCount));
    dispatch(lastValueCountChanging(maxCount));
  }, [dispatch, minPrice, maxPrice, minRating, maxRating, minCount, maxCount]);
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
              handleChangeFirst(e, lastValuePrice, firstValuePriceChanging);
            }}
          />
          <Slider
            max={maxPrice}
            value={lastValuePrice}
            type={'range'}
            step={10.99}
            onChange={(e) => {
              handleChangeLast(e, firstValuePrice, lastValuePriceChanging);
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
              handleChangeFirst(e, lastValuePrice, firstValuePriceChanging);
            }}
          />
          <SliderInput
            type="number"
            step={10.99}
            min={minPrice}
            max={maxPrice}
            value={lastValuePrice}
            onChange={(e) => {
              handleChangeLast(e, firstValuePrice, lastValuePriceChanging);
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
              handleChangeFirst(e, lastValueRating, firstValueRatingChanging);
            }}
          />
          <Slider
            value={lastValueRating}
            type={'range'}
            step={0.2}
            max={maxRating}
            onChange={(e) => {
              handleChangeLast(e, firstValueRating, lastValueRatingChanging);
            }}
          />
        </Track>
        <SliderLabels>
          <SliderLabel>{firstValueRating}</SliderLabel>
          <SliderLabel>{lastValueRating}</SliderLabel>
        </SliderLabels>
      </SliderContainer>
      <SliderContainer>
        <SliderText>Count range</SliderText>
        <Track>
          <Slider
            value={firstValueCount}
            type={'range'}
            step={1}
            min={minCount}
            max={maxCount}
            onChange={(e) => {
              handleChangeFirst(e, lastValueCount, firstValueCountChanging);
            }}
          />
          <Slider
            value={lastValueCount}
            type={'range'}
            step={1}
            max={maxCount}
            onChange={(e) => {
              handleChangeLast(e, firstValueCount, lastValueCountChanging);
            }}
          />
        </Track>
        <SliderLabels>
          <SliderLabel>{firstValueCount}</SliderLabel>
          <SliderLabel>{lastValueCount}</SliderLabel>
        </SliderLabels>
      </SliderContainer>
    </Container>
  );
};
