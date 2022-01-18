import {
  ContainerHeader,
  ContainerLogo,
  LogoImage,
  TextLogo,
  ContainerImage,
  ImageHeart,
  ImageCart,
  ImageUser,
  ContainerCategories,
  TextCategories,
} from './style';
import { logoList } from '../constants';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  fetchFilterCategories,
  setMainCategory,
  fetchCategories,
} from '../../store/reducers/ActionCreators';
import { NextRouter, useRouter } from 'next/router';
import { ContantsImage } from '../main/style';

const toUpperFirstCase = (itm: string) => {
  return itm[0].toUpperCase() + itm.slice(1);
};

export const Header: React.FC = () => {
  const router: NextRouter = useRouter();
  const dispatch = useAppDispatch();
  const { title, statusCart, statusHeart } = useAppSelector(
    (state) => state.itemsReducers
  );
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <ContainerHeader>
      <ContainerLogo
        onClick={() => {
          dispatch(setMainCategory('all items'));
          dispatch(fetchFilterCategories('all items'));
          router.push('/');
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
                router.push('/');
                console.log(itm, '- itm');
                dispatch(fetchFilterCategories(itm));
                dispatch(setMainCategory(itm));
              }}
            >
              {toUpperFirstCase(itm)}
            </TextCategories>
          ))}
      </ContainerCategories>
      <ContainerImage>
        <ImageCart
          src={statusCart}
          onClick={() => {
            router.push('/cart');
          }}
        />
        <ImageHeart
          src={statusHeart}
          onClick={() => {
            dispatch(setMainCategory('all items'));
            dispatch(fetchFilterCategories('all items'));
            router.push('/');
          }}
        />
        <ImageUser
          src="/header/user.svg"
          onClick={() => {
            dispatch(setMainCategory('all items'));
            dispatch(fetchFilterCategories('all items'));
            router.push('/');
          }}
        />
      </ContainerImage>
    </ContainerHeader>
  );
};
