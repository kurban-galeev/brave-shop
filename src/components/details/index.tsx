import {
  FormDetails,
  Container,
  Loading,
  ImageMain,
  ContainerForImage,
} from './style';
// import { itemsSlice } from '../../store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { closeDetailForm } from '../../store/reducers/ActionCreators';
import { IItems } from '../../models/IItems';

export const Details: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading } = useAppSelector((state) => state.itemsReducers);
  return (
    <Container
      onClick={() => {
        dispatch(closeDetailForm());
      }}
    >
      {isLoading && <Loading></Loading>}
      <FormDetails onClick={(e) => e.stopPropagation()}>
        {items &&
          items.map((element: IItems, index: number) => (
            <ContainerForImage key={index}>
              <ImageMain src={element.image} />
            </ContainerForImage>
          ))}
      </FormDetails>
      {/*  */}
    </Container>
  );
};
