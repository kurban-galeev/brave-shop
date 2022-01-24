import { Header } from '../header';
import { Footer } from '../footer';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { IClothingInfo } from '../../models/IInterfaces';
import {
  Container,
  ContainerCartAndSum,
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
  ContainerSummary,
  TitleSummary,
  ContainerSubTotal,
  TextOrder,
  ButtonSubmit,
} from './style';
import { pasteCountItem } from '../../store/reducers/ActionCreators';
import { NextRouter, useRouter } from 'next/router';

const getSumPriceItem = (price: number, count: number) => {
  return (price * count).toFixed(2);
};
const getTotalSumItem = (array: IClothingInfo[]) => {
  let sum = 0;
  array.map((element) => {
    sum += element.countItem * element.price;
  });
  return sum.toFixed(2);
};
export const Cart: React.FC = () => {
  const router: NextRouter = useRouter();
  const dispatch = useAppDispatch();
  const { itemsForCart } = useAppSelector((state) => state.itemsReducers);
  const handleChangeCount = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number,
    count: number
  ) => {
    const countValue = target.value;
    if (Number(countValue) > 0 && Number(countValue) <= count) {
      dispatch(pasteCountItem({ count: Number(countValue), index: index }));
    }
  };

  const handleAddingCount = (
    count: number,
    countValue: number,
    index: number
  ) => {
    if (countValue < count) {
      dispatch(pasteCountItem({ count: Number(countValue) + 1, index: index }));
    }
  };
  const handleDecCount = (countValue: number, index: number) => {
    if (countValue > 1) {
      dispatch(pasteCountItem({ count: Number(countValue) - 1, index: index }));
    }
  };
  return (
    <Container>
      <Header />
      <ContainerCartAndSum>
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
                    handleDecCount(element.countItem, index);
                  }}
                />
                <InputCountItems
                  required={true}
                  type="number"
                  min="1"
                  max="999"
                  value={element.countItem}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    handleChangeCount(event, index, element.rating.count);
                  }}
                />
                <ImageMinus
                  src="/details/plus.svg"
                  onClick={() => {
                    handleAddingCount(
                      element.rating.count,
                      element.countItem,
                      index
                    );
                  }}
                />
                <NameItem>
                  {getSumPriceItem(element.price, element.countItem)}RWF
                </NameItem>
              </ContainerInput>
            </ContainerItem>
          ))}
        </ContainerCart>
        <ContainerSummary>
          <TitleSummary>Order summary</TitleSummary>
          <ContainerSubTotal>
            <PriceText>Sub total:</PriceText>
            {itemsForCart.map((element, index: number) => (
              <TextOrder key={index}>
                {element.countItem} x {element.price}RWF:{' '}
                {getSumPriceItem(element.price, element.countItem)}RWF
              </TextOrder>
            ))}
            <PriceText>Delivery free:</PriceText>
          </ContainerSubTotal>
          <TitleSummary>
            Total sum: {getTotalSumItem(itemsForCart)}RWF
          </TitleSummary>
          <ButtonSubmit
            onClick={() => {
              router.push('/');
            }}
          >
            Proceed to checkout
          </ButtonSubmit>
        </ContainerSummary>
      </ContainerCartAndSum>
      <Footer />
    </Container>
  );
};
