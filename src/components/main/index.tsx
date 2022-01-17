import React, { useEffect } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
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
} from './style';
import { Details } from '../details';

export const MainForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, error, isDetail, mainCategory, itemsForCart } =
    useAppSelector((state) => state.itemsReducers);
  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);
  return (
    <Container>
      {isDetail && <Details />}
      <Header />
      <ContainerFilterAndSize></ContainerFilterAndSize>
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
