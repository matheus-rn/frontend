import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import SearchIcon from '@material-ui/icons/Search';
import { Container, TextFieldHearder, TagSearch } from './styles';
import ButtonFormTool from '../ButtonFormTool';

export default function HeaderTools() {
  const [checked, setChecked] = useState(false);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <TagSearch>
        <TextFieldHearder
          margin="dense"
          id="toolSearch"
          label="Pesquisar"
          variant="outlined"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
        <Checkbox
          checked={checked}
          onChange={handleChange}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Typography component={'span'} color="textSecondary" gutterBottom>
          pesquisar por tag
        </Typography>
      </TagSearch>

      <ButtonFormTool />
    </Container>
  );
}
