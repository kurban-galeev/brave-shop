import React, { useEffect } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import 'rc-slider/assets/index.css';
import {
  fetchAllItems,
  openDetailForm,
  pasteClothingInfo,
  getFirstAndLastValuePrice,
  getFirstAndLastValueRating,
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
} from './style';
import { Details } from '../details';
import { Filter } from '../filter';

export const MainForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    items,
    isLoading,
    error,
    isDetail,
    mainCategory,
    itemsForCart,
    firstValuePrice,
    lastValuePrice,
    firstValueRating,
    lastValueRating,
  } = useAppSelector((state) => state.itemsReducers);
  // const newItems = items.filter((element) => {
  //   lastValuePrice > element.price;
  //   element.price >= firstValuePrice;
  //   lastValueRating >= element.rating.rate;
  //   element.rating.rate >= firstValueRating;

  // });
  console.log(items);
  console.log(
    firstValuePrice,
    lastValuePrice,
    firstValueRating,
    lastValueRating
  );
  useEffect(() => {
    dispatch(getFirstAndLastValuePrice());
    dispatch(getFirstAndLastValueRating());
    if (mainCategory === 'all items') dispatch(fetchAllItems());
  }, [mainCategory, dispatch]);

  return (
    <Container>
      {isDetail && <Details />}
      <Header />
      <ContainerFilterAndSize>
        <Filter />
      </ContainerFilterAndSize>
      <ContainerTitleContants>
        <TitleContants>The {mainCategory}</TitleContants>
      </ContainerTitleContants>
      <ContainerContants>
        {items &&
          items
            .filter((elem: IItems) => {
              // elem.rating.rate != Number(firstValueRating);
              elem.price >= firstValuePrice;
              lastValueRating >= elem.rating.rate;
              elem.rating.rate >= firstValueRating;
            })
            .map((element: IItems, index: number) => (
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
