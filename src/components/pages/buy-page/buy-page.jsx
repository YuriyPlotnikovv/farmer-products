import { SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';

import Button from '../../ui/button/button';
import Title, { TitleLevel, TitleSize } from '../../ui/title/title';
import ProductCard from '../../blocks/product-card/product-card';
import CheckboxList from '../../blocks/products-list/products-list';

import {
  BuyPageStyled,
  LeftColumn,
  ProductsSelect,
  ProductsStyled,
  OrderStyled,
  FormStyled,
  InputAdressStyled,
  PriceStyled,
  PriceTitle,
  PriceDescription,
} from './style';

export default function BuyPage({ products }) {
  const [adress, setAdress] = useState('');
  const onChange = (evt, setChange) => setChange(evt.target.value);
  const isButtonEnabled = adress;

  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  return (
    <BuyPageStyled>
      <LeftColumn>
        <ProductsSelect>
          <Title level={TitleLevel.H2} size={TitleSize.EXTRA_SMALL}>
            Выберите продукты
          </Title>
          <CheckboxList name={'select-products'}
            options={products.map((product) => ({ value: product.id, title: product.title }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          />
        </ProductsSelect>

        <OrderStyled>
          <FormStyled>
            <Title level={TitleLevel.H2} size={TitleSize.EXTRA_SMALL}>
              Сделать заказ
            </Title>
            <InputAdressStyled value={adress} onChange={(e) => onChange(e, setAdress)} placeholder='Введите адрес доставки' />
            <PriceStyled>
              <PriceTitle>Цена</PriceTitle>
              <PriceDescription>1000 руб.</PriceDescription>
            </PriceStyled>
            <Button disabled={!isButtonEnabled}>Купить</Button>
          </FormStyled>
        </OrderStyled>
      </LeftColumn>
      <ProductsStyled
          onSwiper={setSwiperRef}
          spaceBetween={12}
          direction='vertical'
          slidesPerView='auto'
          scrollbar={{ draggable: true }}
          mousewheel
          modules={[Pagination, Scrollbar, Mousewheel]}
          pagination={{
            type: 'fanction',
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} title={product.title} />
            </SwiperSlide>
          ))}
      </ProductsStyled>

    </BuyPageStyled>
  );
}
