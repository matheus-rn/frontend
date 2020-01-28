import React from 'react';

import Button from '@material-ui/core/Button';

import SearchIcon from '@material-ui/icons/Search';
import { Container, TextFieldHearder } from './styles';

export default function HeaderTools() {
  return (
    <Container>
      <div>
        <TextFieldHearder
          margin="dense"
          id="toolSearch"
          label="Pesquisar"
          variant="outlined"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
      </div>

      <Button variant="outlined" color="secondary" size="small">
        Remover
      </Button>
    </Container>
  );
}
