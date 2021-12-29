import React, { useState, useEffect, useCallback } from 'react';
// import { NextRouter, useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
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

const getСategoriesAPI = async (categorie = ''): Promise<Array<string[]>> => {
  let categorieDefault = '';
  if (categorie === 'All items') {
    const responce = await fetch(
      `https://fakestoreapi.com/products/categories/${categorieDefault}`
    );
    return responce.json();
  }
  categorieDefault = categorie;
  const responce = await fetch(
    `https://fakestoreapi.com/products/categories/${categorieDefault}`
  );
  return responce.json();
};
export const getAllItemsAPI = async (): Promise<IItemsState> => {
  const responce = await fetch('https://fakestoreapi.com/products');
  const data = await responce.json();
  return data;
};
const toUpperFirstCase = (itm: string) => {
  return itm[0].toUpperCase() + itm.slice(1);
};

export interface ICategories {
  categorie: Array<string>;
}
type title = {
  title: string;
};
type items = {
  items: massive[];
};
export interface ICategoriesState {
  title: title;
}
export interface IItemsState {
  items: items;
  // category: string;
}
export interface massive {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
export const Main: React.FC = () => {
  // const router: NextRouter = useRouter();
  const dispatch = useDispatch();
  const categorie = useSelector((state: ICategoriesState) => state.title.title);
  const allitems = useSelector((state: IItemsState) => state.items.items);
  console.log(allitems);
  const getCat = (titleCategories: string) => {
    dispatch({ type: 'SET_CATEGORIE', title: titleCategories });
  };
  const setAllItems = useCallback(
    (arrayItems: IItemsState) => {
      dispatch({ type: 'SET_ALLITEMS', items: arrayItems });
    },
    [dispatch]
  );
  const handleClickOnCaregorie = useCallback(
    (category: string) => {
      console.log(category);
      dispatch({
        type: 'SET_ITEMS_FOR_CATEGORIE',
        items: category,
        // allItems: getAllItemsAPI().then((data) => setAllItems(data)),
      });
    },
    [dispatch]
  );

  const [categories, setCategories] = useState<any | null>(null);
  // const [items, setItems] = useState<any>(null);
  // const [title, setTitle] = useState<any>(categorie);
  // useEffect(() => {
  //   // getAllItemss(Array.from(getAllItems()));
  //   getAllItems().then((element) => setItems(element));
  // }, []);
  useEffect(() => {
    getAllItemsAPI().then((data) => setAllItems(data));
  }, [setAllItems]);

  useEffect(() => {
    getСategoriesAPI().then((elements) => setCategories(elements));
  }, []);
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
                  getCat(toUpperFirstCase(itm));
                  handleClickOnCaregorie(itm);
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
      <TitleContants>{categorie}</TitleContants>
      <ContainerContants>
        {allitems.length >= 1 ? (
          allitems.map((element: massive, index: number) => (
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
