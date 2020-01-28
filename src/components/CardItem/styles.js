import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 50vw;
`;

export const CardTool = styled(Card)``;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
`;

export const TitleCard = styled(Typography)`
  padding-left: 5px;
`;

export const BoxCard = styled(Box)`
  font-weight: bold;
  font-size: 20px;
`;

export const FooterCard = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 7px;
`;
