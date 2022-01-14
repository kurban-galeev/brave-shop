import { Header } from '../header';
import { Footer } from '../footer';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { IClothingInfo } from '../../models/IClothingInfo';
// import {
//   fetchFilterCategories,
//   setMainCategory,
//   fetchCategories,
// } from '../../store/reducers/ActionCreators';
import {
  Container,
  TitleCart,
  ContainerCart,
  NameItem,
  ContainerItem,
  ContainerImage,
  ImageItem,
  ImageMinus,
  InputCountItems,
  ContainerInput,
  PriceText,
  ContainerDescriptionItem,
} from './style';
import { pasteCountItem } from '../../store/reducers/ActionCreators';
const handleInputArray = (Array: IClothingInfo[]) => {
  // Array.filter((element) => Array.map());
};
export const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { itemsForCart } = useAppSelector((state) => state.itemsReducers);
  console.log(itemsForCart);
  // const [countItemm, setCountItem] = useState(1);
  const handleChangeCount = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const countValue = target.value;
    // if (Number(countValue) <= count && Number(countValue) > 0) {
    //   dispatch(pasteCountItem(Number(countValue)));
    // }
    if (Number(countValue) > 0) {
      dispatch(pasteCountItem(Number(countValue)));
    }
  };

  const handleAddingCount = (count: number, countValue: number) => {
    if (countValue < count) {
      dispatch(pasteCountItem(Number(countValue) + 1));
    }
  };
  const handleDecCount = (countValue: number) => {
    if (countValue > 1) {
      dispatch(pasteCountItem(Number(countValue) - 1));
    }
  };
  return (
    <Container>
      <Header />
      <ContainerCart>
        <TitleCart>Your shopping cart</TitleCart>
        {itemsForCart.map((element, index: number) => (
          <ContainerItem key={index}>
            <ContainerInput>
              <ContainerImage>
                <ImageItem src={element.image} />
              </ContainerImage>
              <ContainerDescriptionItem>
                <NameItem>{element.title}</NameItem>
                <PriceText>{element.price}RWF</PriceText>
              </ContainerDescriptionItem>
            </ContainerInput>
            <ContainerInput>
              <ImageMinus
                src="/details/minus.svg"
                onClick={() => {
                  console.log(element.countItem);
                  handleDecCount(element.countItem);
                }}
              />
              <InputCountItems
                required={true}
                type="number"
                min="1"
                max="999"
                value={element.countItem}
                onChange={handleChangeCount}
              />
              <ImageMinus
                src="/details/plus.svg"
                onClick={() => {
                  handleAddingCount(element.rating.count, element.countItem);
                }}
              />
              <NameItem>{element.price}RWF</NameItem>
            </ContainerInput>
          </ContainerItem>
        ))}
      </ContainerCart>
      <Footer />
    </Container>
  );
};
