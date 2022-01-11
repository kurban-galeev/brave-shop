import React, { useState, useEffect } from 'react';
import {
  fetchAllItems,
  fetchCategories,
  fetchFilterCategories,
  openDetailForm,
  pasteClothingInfo,
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
import { Details } from '../details';

const toUpperFirstCase = (itm: string) => {
  return itm[0].toUpperCase() + itm.slice(1);
};
const clearUrlFromAnchor = () => {
  window.history.pushState('', document.title, window.location.pathname);
};
// const handleClickOnLogo = () => {
//   addEventListener('click', ({ target }) => {
//     if (target) {
//       clearUrlFromAnchor();
//       window.location.reload();
//     }
//   });
// };
export const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, error, title, isDetail } = useAppSelector(
    (state) => state.itemsReducers
  );
  // const handleClick = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(isDetail);
  //   if (!target) {
  //     dispatch(closeDetailForm());
  //   } else {
  //     dispatch(openDetailForm());
  //   }
  // };
  // const [disable, setDisable] = useState<boolean>(false);
  const [categories, setCategories] = useState<string>('all items');
  useEffect(() => {
    dispatch(fetchAllItems());
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <Container

    // onClick={() => {
    //   // dispatch(itemsSlice.actions.detailCloseForm);
    //   dispatch(closeDetailForm());
    // }}
    >
      {isDetail && <Details />}
      <ContainerHeader>
        <ContainerLogo
          onClick={() => {
            clearUrlFromAnchor();
            window.location.reload();
          }}
        >
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
                // onChange={handleClick}
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
      <ContainerFilterAndSize
        onClick={() => {
          // dispatch(closeDetailForm());
        }}
      ></ContainerFilterAndSize>
      <ContainerTitleContants>
        <TitleContants>The {categories}</TitleContants>
      </ContainerTitleContants>
      <ContainerContants>
        {items &&
          items.map((element: IItems, index: number) => (
            <ContainerContantsImage
              key={index}
              onClick={() => {
                // setDisable(handleClick());
                // setDisable(true);
                // const arr = [];
                dispatch(pasteClothingInfo(element));
                dispatch(openDetailForm());
              }}
              // onChange={handleClick}
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
