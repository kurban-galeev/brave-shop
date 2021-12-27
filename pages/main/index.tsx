import React, { useState, useEffect } from 'react';
// import { getEnabledCategories } from 'trace_events';
import { logoList, menuList } from './constants';
import {
  ContainerHeader,
  ContainerLogo,
  LogoImage,
  TextLogo,
  ContainerImage,
  ImageMenu,
  ContainerCategories,
  TextCategories,
  TextCategoriesLoading,
  Container,
  ContainerContants,
  ContainerContantsImage,
  ContantsImage,
  ContainerFilterAndSize,
  TitleContants,
  SignatureImage,
} from './style';

const getСategories = async (categorie = ''): Promise<string[]> => {
  const responce = await fetch(
    `https://fakestoreapi.com/products/categories/${categorie}`
  );
  return responce.json();
};
const getAllItems = async (): Promise<string[]> => {
  const responce = await fetch('https://fakestoreapi.com/products');
  // const array = await Array.from(responce.json());
  // return array.unshift('All items');
  return responce.json();
};
const toUpperFirstCase = (itm: string) => {
  return itm[0].toUpperCase() + itm.slice(1);
};
// const handleClickOnCaregorie = (categories, item) => {
//   item.map((element) => {
//     if (categories === element.)
//   })
// };
export const MainForm: React.FC = () => {
  const [categories, setCategories] = useState<any>(null);
  const [item, setItems] = useState<any>(null);
  const [title, setTitle] = useState<any>('All items');
  useEffect(() => {
    getAllItems().then((element) => setItems(element));
  }, []);
  useEffect(() => {
    getСategories().then((elements) => setCategories(elements));
  }, []);
  // useEffect(() => {}, [categories]);
  return (
    <Container>
      <ContainerHeader>
        <ContainerLogo>
          <LogoImage src={logoList.pathLogo} />
          <TextLogo>{logoList.textLogo}</TextLogo>
        </ContainerLogo>
        <ContainerCategories>
          {categories ? (
            categories.map((itm: string, index: number) => (
              <TextCategories
                key={index}
                onClick={() => {
                  setTitle(toUpperFirstCase(itm));
                  // handleClickOnCaregorie(itm, );
                }}
              >
                {toUpperFirstCase(itm)}
              </TextCategories>
            ))
          ) : (
            <TextCategoriesLoading>Loading</TextCategoriesLoading>
          )}
        </ContainerCategories>
        <ContainerImage>
          {menuList.map((element, index) => (
            <ImageMenu key={index} src={element.path} />
          ))}
        </ContainerImage>
      </ContainerHeader>
      <ContainerFilterAndSize></ContainerFilterAndSize>
      <TitleContants>{title}</TitleContants>
      <ContainerContants>
        {item ? (
          item.map((element: any, index: number) => (
            <ContainerContantsImage key={index}>
              <ContantsImage src={element.image} />
              <SignatureImage>{element.title}</SignatureImage>
            </ContainerContantsImage>
          ))
        ) : (
          <TextCategoriesLoading>Loading</TextCategoriesLoading>
        )}
      </ContainerContants>
    </Container>
  );
};
