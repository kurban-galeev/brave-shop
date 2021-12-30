import React, { useState, useEffect } from 'react';
import {
  fetchAllItems,
  fetchCategories,
  fetchFilterCategories,
} from '../../store/reducers/ActionCreators';
import { logoList, menuList } from './constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IItems } from '../../models/IItems';
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
} from './style';

const toUpperFirstCase = (itm: string) => {
  return itm[0].toUpperCase() + itm.slice(1);
};
export const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, error, title } = useAppSelector(
    (state) => state.itemsReducers
  );
  const [categories, setCategories] = useState<string>('All items');
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
      <TitleContants>The {categories}</TitleContants>
      <ContainerContants>
        {items &&
          items.map((element: IItems, index: number) => (
            <ContainerContantsImage key={index}>
              <ContantsImage src={element.image} />
              <ContainerTitleImage>
                <SignatureImage>{element.title}</SignatureImage>
                <PriceItems>{element.price}RWF</PriceItems>
              </ContainerTitleImage>
            </ContainerContantsImage>
          ))}
      </ContainerContants>
      {isLoading && <Loading></Loading>}
      {error && <TextLogo>ERROR - {error}</TextLogo>}
      <ContainerFooter></ContainerFooter>
    </Container>
  );
};
