import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50vw;
`;

export const HearderSearch = styled.div`
  display: flex;
`;

export const TextFieldHearder = styled(TextField)`
  display: flex;
  width: 16vw;
`;

export const TagSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
