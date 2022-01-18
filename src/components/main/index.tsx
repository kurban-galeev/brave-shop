import React, { useEffect } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
// import ReactSlider from 'react-slider';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import {
  fetchAllItems,
  openDetailForm,
  pasteClothingInfo,
} from '../../store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IItems } from '../../models/IItems';
import { GlassMagnifier } from 'react-image-magnifiers';
import {
  TextLogo,
  Loading,
  Container,
  ContainerContants,
  ContainerContantsImage,
  ContantsImage,
  ContainerFilterAndSize,
  TitleContants,
  SignatureImage,
  PriceItems,
  ContainerTitleImage,
  ContainerTitleContants,
  ContainerSliderRange,
  RangeContainer,
} from './style';
import { Details } from '../details';
import { Filter } from '../filter';

export const MainForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const tabIndex = [0, 100];
  const ariaLabelGroupForHandles = ['Min Rating', 'Max Rating'];
  const maxRange = 'red';
  const minRange = 0;
  // const [];
  const { items, isLoading, error, isDetail, mainCategory, itemsForCart } =
    useAppSelector((state) => state.itemsReducers);
  useEffect(() => {
    if (mainCategory === 'all items') dispatch(fetchAllItems());
  }, [mainCategory, dispatch]);
  return (
    <Container>
      {isDetail && <Details />}
      <Header />
      <ContainerFilterAndSize>
        <Filter />
        {/* <Slider value={tabIndex[0]} /> */}
        <PriceItems>Price range</PriceItems>
        <ContainerSliderRange>
          <Range
            defaultValue={tabIndex}
            // className={RangeContainer}
            pushable={true}
            ariaLabelledByGroupForHandles={ariaLabelGroupForHandles}
          />
        </ContainerSliderRange>
        <PriceItems>Rating range</PriceItems>
        <ContainerSliderRange>
          <Range
            defaultValue={tabIndex}
            pushable={true}
            ariaLabelledByGroupForHandles={ariaLabelGroupForHandles}
          />
        </ContainerSliderRange>
      </ContainerFilterAndSize>
      <ContainerTitleContants>
        <TitleContants>The {mainCategory}</TitleContants>
      </ContainerTitleContants>
      <ContainerContants>
        {items &&
          items.map((element: IItems, index: number) => (
            <ContainerContantsImage
              key={index}
              onClick={() => {
                const same = itemsForCart.find((el) => el.id === element.id);
                // if same != 'undefa'
                if (same !== undefined) {
                  const obj = Object.assign({}, element, {
                    countItem: same.countItem,
                  });
                  dispatch(pasteClothingInfo(obj));
                  dispatch(openDetailForm());
                } else {
                  const obj = Object.assign({}, element, {
                    countItem: 1,
                  });
                  dispatch(pasteClothingInfo(obj));
                  dispatch(openDetailForm());
                }
              }}
            >
              <ContantsImage>
                <GlassMagnifier
                  imageSrc={element.image}
                  magnifierSize="40%"
                  allowOverflow={true}
                />
              </ContantsImage>
              <ContainerTitleImage>
                <SignatureImage>{element.title}</SignatureImage>
                <PriceItems>{element.price}RWF</PriceItems>
                <PriceItems>
                  Rating: {element.rating.rate} Count: {element.rating.count}
                </PriceItems>
              </ContainerTitleImage>
            </ContainerContantsImage>
          ))}
      </ContainerContants>
      <Footer />
      {isLoading && <Loading></Loading>}
      {error && <TextLogo>ERROR - {error}</TextLogo>}
    </Container>
  );
};
