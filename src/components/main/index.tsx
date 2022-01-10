import React, { useState, useEffect } from 'react';
import {
  fetchAllItems,
  fetchCategories,
  fetchFilterCategories,
} from '../../store/reducers/ActionCreators';
import { logoList, menuList, footerList } from './constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IItems } from '../../models/IItems';
import { IFooter } from '../../models/IFooter';
import { GlassMagnifier } from 'react-image-magnifiers';
import {
  ContainerHeader,
  ContainerLogo,
  LogoImage,
  TextLogo,
  ContainerImage,
  ImageMenu,
  ContainerCategories,
  TextCategories,
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
  ContainerFooter,
  ContainterTheContacts,
  ContainerImageFooter,
  ContainerTitleContants,
} from './style';

const toUpperFirstCase = (itm: string) => {
  return itm[0].toUpperCase() + itm.slice(1);
};
export const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, error, title } = useAppSelector(
    (state) => state.itemsReducers
  );
  const [categories, setCategories] = useState<string>('all items');
  useEffect(() => {
    dispatch(fetchAllItems());
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <Container>
      <ContainerHeader>
        <ContainerLogo>
          <LogoImage src={logoList.pathLogo} />
          <TextLogo>{logoList.textLogo}</TextLogo>
        </ContainerLogo>
        <ContainerCategories>
          {title &&
            title.map((itm: string, index: number) => (
              <TextCategories
                key={index}
                onClick={() => {
                  dispatch(fetchFilterCategories(itm));
                  setCategories(itm);
                }}
              >
                {toUpperFirstCase(itm)}
              </TextCategories>
            ))}
        </ContainerCategories>
        <ContainerImage>
          {menuList.map((element, index) => (
            <ImageMenu key={index} src={element.path} />
          ))}
        </ContainerImage>
      </ContainerHeader>
      <ContainerFilterAndSize></ContainerFilterAndSize>
      <ContainerTitleContants>
        <TitleContants>The {categories}</TitleContants>
      </ContainerTitleContants>
      <ContainerContants>
        {items &&
          items.map((element: IItems, index: number) => (
            <ContainerContantsImage key={index}>
              <ContantsImage>
                <GlassMagnifier
                  imageSrc={element.image}
                  magnifierSize="40%"
                  allowOverflow={true}
                  style={{
                    height: '100%',
                  }}
                />
              </ContantsImage>
              <ContainerTitleImage>
                <SignatureImage>{element.title}</SignatureImage>
                <PriceItems>{element.price}RWF</PriceItems>
              </ContainerTitleImage>
            </ContainerContantsImage>
          ))}
      </ContainerContants>

      <ContainerFooter>
        <ContainterTheContacts>
          <ContainerImageFooter>
            <PriceItems>Don’t missout on once-in-a-while-deals:</PriceItems>
            {footerList.map((element: IFooter, index: number) => (
              <ImageMenu src={element.path} key={index} />
            ))}
          </ContainerImageFooter>
          <PriceItems>Support line: +250 788 467 808</PriceItems>
        </ContainterTheContacts>
        <ContainterTheContacts>
          <PriceItems>Copyright 2021 © Sneaker City ltd</PriceItems>
        </ContainterTheContacts>
      </ContainerFooter>
      {isLoading && <Loading></Loading>}
      {error && <TextLogo>ERROR - {error}</TextLogo>}
    </Container>
  );
};
