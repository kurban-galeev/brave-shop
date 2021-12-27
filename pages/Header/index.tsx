import React, { useState, useEffect } from 'react';
// import { getEnabledCategories } from 'trace_events';
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

const getСategories = async (): Promise<string[]> => {
  const responce = await fetch('https://fakestoreapi.com/products/categories');
  return responce.json();
};
export const Header: React.FC = () => {
  const [categories, setCategories] = useState<any>(null);

  useEffect(() => {
    getСategories().then((elements) => setCategories(elements));
  }, [categories]);
  return (
    <StyledContainerHeader>
      <StyledContainerLogo>
        <StyledLogoImage src={logoList.pathLogo} />
        <StyledTextLogo>{logoList.textLogo}</StyledTextLogo>
      </StyledContainerLogo>
      <StyledContainerCategories>
        {categories ? (
          categories.map((itm: string, index: number) => (
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
