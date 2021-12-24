import React, { useState } from 'react';
import { logoList, menuList } from './constants';
import {
  StyledContainerHeader,
  StyledContainerLogo,
  StyledLogoImage,
  StyledTextLogo,
  StyledContainerImage,
  StyledImageMenu,
  StyledContainerCategories,
  StyledTextCategories,
  StyledTextCategoriesLoading,
} from './style';
// const emulationServer = async () => {
//   const response = await fetch(urlHandlePayment);
//   if (response.status !== 500) {
//     if (confirm('Оплата успешна!')) {
//       router.push('/');
//     }
//   } else {
//     alert('Что то пошло не так.\nПопробуйте снова через некоторое время');
//   }
const getСategories = async (): Promise<string[]> => {
  const responce = await fetch('https://fakestoreapi.com/products/categories');
  return responce.json();
};

export const Header: React.FC = () => {
  const [categories, setCategories] = useState<any>(null);

  fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((elements) => setCategories(elements));

  return (
    <StyledContainerHeader>
      <StyledContainerLogo>
        <StyledLogoImage src={logoList.pathLogo} />
        <StyledTextLogo>{logoList.textLogo}</StyledTextLogo>
      </StyledContainerLogo>
      <StyledContainerCategories>
        {categories ? (
          categories.map((itm: any, index: number) => (
            <StyledTextCategories key={index}>{itm}</StyledTextCategories>
          ))
        ) : (
          <StyledTextCategoriesLoading>Loading</StyledTextCategoriesLoading>
        )}
      </StyledContainerCategories>
      <StyledContainerImage>
        {menuList.map((element, index) => (
          <StyledImageMenu key={index} src={element.path} />
        ))}
      </StyledContainerImage>
    </StyledContainerHeader>
  );
};
