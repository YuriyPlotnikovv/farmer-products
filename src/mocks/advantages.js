import advantageFirst from '../assets/advantage-1.svg';
import advantageSecond from '../assets/advantage-2.svg';
import advantageThird from '../assets/advantage-3.svg';
import advantageFourth from '../assets/advantage-4.svg';

const advantagesList = [
  {
    id: 0,
    image: advantageFirst,
    marker: 'Фермерские продукты',
    title: 'Еда намного вкуснее',
    isNegative: false,
    text: 'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
  },
  {
    id: 1,
    image: advantageSecond,
    marker: 'Магазинные продукты',
    title: 'Просроченные продукты',
    isNegative: true,
    text: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
  },
  {
    id: 2,
    image: advantageThird,
    marker: 'Фермерские продукты',
    title: 'Натуральные продукты',
    isNegative: false,
    text: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
  },
  {
    id: 3,
    image: advantageFourth,
    marker: 'Магазинные продукты',
    title: 'Некачественное мясо',
    isNegative: true,
    text: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
  },
];

export default advantagesList;
