import {
  ContainerFooter,
  ContainterTheContacts,
  ContainerImageFooter,
  ImageMenu,
  PriceItems,
} from './style';
import { IFooter } from '../../models/IFooter';
import { footerList } from '../constants';
export const Footer: React.FC = () => {
  return (
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
  );
};
