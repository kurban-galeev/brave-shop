import { FormDetails, Container, ImageMain, ContainerForImage } from './style';
// import { itemsSlice } from '../../store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { closeDetailForm } from '../../store/reducers/ActionCreators';
// import { IItems } from '../../models/IItems';

export const Details: React.FC = () => {
  const dispatch = useAppDispatch();
  const { clothingInfo } = useAppSelector((state) => state.itemsReducers);
  return (
    <Container
      onClick={() => {
        dispatch(closeDetailForm());
      }}
    >
      {/* {isLoading && <Loading></Loading>} */}
      <FormDetails onClick={(e) => e.stopPropagation()}>
        {/* {clothingInfo &&
          clothingInfo.map((element: IItems, index: number) => ( */}
        <ContainerForImage>
          <ImageMain src={clothingInfo.image} />
        </ContainerForImage>
        {/* ))} */}
      </FormDetails>
      {/*  */}
    </Container>
  );
};
