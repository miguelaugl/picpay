import React from 'react';

import { Container, Option, Title, Img } from './styles';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [
  {
    key: String(Math.random()),
    bgColor: '#172c4a',
    title: 'Pague suas contas sem sair de casa',
    img: img8,
  },
  {
    key: String(Math.random()),
    bgColor: '#6a0159',
    title: 'Pague suas contas sem sair de casa',
    img: img9,
  },
  {
    key: String(Math.random()),
    bgColor: '#4139c8',
    title: 'Pague suas contas sem sair de casa',
    img: img10,
  },
  {
    key: String(Math.random()),
    bgColor: '#00ab4b',
    title: 'Pague suas contas sem sair de casa',
    img: img11,
  },
  {
    key: String(Math.random()),
    bgColor: '#ba2f76',
    title: 'Pague suas contas sem sair de casa',
    img: img12,
  },
];

export default function Tips() {
  return (
    <Container>
      {items.map(item => 
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>

          <Img source={item.img} />
        </Option>
      )}
    </Container>
  );
};