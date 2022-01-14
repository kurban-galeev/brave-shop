import {
  FormDetails,
  Container,
  ContainerForImage,
  TitleImage,
  ImageMain,
  PriceItems,
  ContainerTitle,
  ImageHeart,
  ContainerDescription,
  ContainerDetails,
  TitleDescription,
  TextDescription,
  ContainerAddToCart,
  InputCountItems,
  ButtonAddToCart,
  ImageMinus,
} from './style';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  closeDetailForm,
  pasteItemsForCart,
  editStatusCart,
  editStatusHeart,
  pasteCountItem,
} from '../../store/reducers/ActionCreators';
import { menuList } from '../constants';
import { useState } from 'react';

// import { NextRouter, useRouter } from 'next/router';
// const router: NextRouter = useRouter();
const returnPathImageHeart = () => {
  return menuList.filter((element) => element.name === 'heart');
};

export const Details: React.FC = () => {
  // const router: NextRouter = useRouter();
  const dispatch = useAppDispatch();
  const { clothingInfo } = useAppSelector((state) => state.itemsReducers);
  const pathImageHeart = returnPathImageHeart();
  const [countItem, setCountItem] = useState(1);
  console.log(clothingInfo);
  const handleChangeCount = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const countValue = target.value;
    if (
      Number(countValue) <= clothingInfo.rating.count &&
      Number(countValue) > 0
    ) {
      setCountItem(Number(countValue));
    }
  };
  const handleAddingCount = () => {
    if (countItem < clothingInfo.rating.count) {
      setCountItem(countItem + 1);
    }
  };
  const handleDecCount = () => {
    if (countItem > 1) {
      setCountItem(countItem - 1);
    }
  };

  // const handle;
  return (
    <Container
      onClick={() => {
        dispatch(closeDetailForm());
      }}
    >
      <FormDetails onClick={(e) => e.stopPropagation()}>
        <ContainerDetails>
          <ContainerForImage>
            <ContainerTitle>
              <TitleImage>{clothingInfo.title}</TitleImage>
              <PriceItems>Price: {clothingInfo.price}RWF</PriceItems>
              {pathImageHeart.map((elem, index: number) => (
                <ImageHeart
                  key={index}
                  src={elem.path}
                  onClick={() => {
                    dispatch(editStatusHeart('/header/heartRed.svg'));
                  }}
                />
              ))}
            </ContainerTitle>
            <ImageMain src={clothingInfo.image} />
          </ContainerForImage>
          <ContainerDescription>
            <TitleDescription>Description</TitleDescription>
            <TextDescription>{clothingInfo.description}</TextDescription>
            <TitleDescription>
              Rating: {clothingInfo.rating.rate} Count:{' '}
              {clothingInfo.rating.count}
            </TitleDescription>
            <ContainerAddToCart>
              <ImageMinus
                src="/details/minus.svg"
                onClick={() => {
                  handleDecCount();
                }}
              />
              <InputCountItems
                required={true}
                type="number"
                min="1"
                max="999"
                value={countItem}
                onChange={handleChangeCount}
              />
              <ImageMinus
                src="/details/plus.svg"
                onClick={() => {
                  handleAddingCount();
                }}
              />
              <ButtonAddToCart
                type="button"
                onClick={() => {
                  const count = { countItem: countItem };
                  const obj = Object.assign({}, clothingInfo, count);
                  // obj.id = clothingInfo.id;
                  // clothingInfo.countItem = countItem;
                  // obj.countItem = countItem;
                  // (countItem element.id)
                  dispatch(pasteCountItem(countItem));
                  dispatch(pasteItemsForCart(obj));
                  dispatch(editStatusCart('/header/shoppingCartRed.svg'));
                }}
              >
                Add to Cart
              </ButtonAddToCart>
            </ContainerAddToCart>
          </ContainerDescription>
        </ContainerDetails>
      </FormDetails>
    </Container>
  );
};
