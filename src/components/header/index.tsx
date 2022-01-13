import {
  ContainerHeader,
  ContainerLogo,
  LogoImage,
  TextLogo,
  ContainerImage,
  ImageMenu,
  ContainerCategories,
  TextCategories,
} from './style';
import { logoList, menuList } from '../constants';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  fetchFilterCategories,
  setMainCategory,
  fetchCategories,
} from '../../store/reducers/ActionCreators';
import { NextRouter, useRouter } from 'next/router';

const toUpperFirstCase = (itm: string) => {
  return itm[0].toUpperCase() + itm.slice(1);
};

export const Header: React.FC = () => {
  const router: NextRouter = useRouter();
  const dispatch = useAppDispatch();
  const { title } = useAppSelector((state) => state.itemsReducers);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <ContainerHeader>
      <ContainerLogo
        onClick={() => {
          router.push('/');
          dispatch(setMainCategory('all items'));
          dispatch(fetchFilterCategories('all items'));
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
                dispatch(setMainCategory(itm));
              }}
            >
              {toUpperFirstCase(itm)}
            </TextCategories>
          ))}
      </ContainerCategories>
      <ContainerImage>
        {menuList.map((element, index) => (
          <ImageMenu
            key={index}
            src={element.path}
            onClick={() => {
              router.push('/cart');
            }}
          />
        ))}
      </ContainerImage>
    </ContainerHeader>
  );
};
