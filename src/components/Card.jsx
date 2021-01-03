import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  display: flex;
  margin: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  overflow-y: hidden;
  height: 220px;
  width: 500px;
`;

const Image = styled.img`
  height: 230px;
  width: 220px;
`;
const Button = styled.button`
  width: 120px;
  border-radius: 15px;
  height: 30px;
`;

const Describe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
function Card(props) {
  return (
    <CardDiv>
      <Image src='https://www.picclickimg.com/d/l400/pict/114323583735_/3%E2%80%9D-Sticker-D20-Nerd-Critical-Hit-RPG-Table.jpg' />
      <Describe>
        <div>
          <h1>Soiées JDR</h1>
          <h3>Tout les jeudi soir, au café Le villageoi, à partir de 19h !</h3>
        </div>
        <Button>Inscris toi !</Button>
      </Describe>
    </CardDiv>
  );
}

export default Card;
