import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import {
  Container,
  CardTool,
  HeaderCard,
  TitleCard,
  BoxCard,
  FooterCard,
} from './styles';

export default function CardItem() {
  return (
    <Container>
      <CardTool>
        <HeaderCard>
          <TitleCard component={'span'}>
            <BoxCard>Titulo</BoxCard>
          </TitleCard>
          <Button variant="outlined" color="secondary" size="small">
            Remover
          </Button>
        </HeaderCard>
        <CardContent>
          <Typography component={'span'} color="textSecondary" gutterBottom>
            Word of the Dahhy dddddddddddddddddddddd dddddddddddddddddd
            dddddddddd dddddddddddddddddddddddd
          </Typography>
        </CardContent>
        <FooterCard>
          <Button variant="outlined" color="secondary" size="small">
            Remover
          </Button>
          <Button variant="outlined" color="secondary" size="small">
            Remover
          </Button>
        </FooterCard>
      </CardTool>
    </Container>
  );
}
