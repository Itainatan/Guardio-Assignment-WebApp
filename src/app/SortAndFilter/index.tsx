import { Box, Button, Radio, TextField, Typography } from '@mui/material';
import { SortOrder } from '../constants';
import { useState } from 'react';
import { Props } from './types';

const SortAndFilter = ({ onSort, onFilter, sortValue, }: Props) => {
  const [filter, setFilter] = useState<string>('');

  return (
    <Box display="flex" columnGap={2}>
      <Box display="flex">
        <Box display="flex" alignItems='center'>
          <Typography>{SortOrder.Ascending.toUpperCase()}</Typography>
          <Radio
            checked={sortValue === SortOrder.Ascending}
            onChange={() => onSort(SortOrder.Ascending)}
          />
        </Box>
        <Box display="flex" alignItems='center'>
          <Typography>{SortOrder.Descending.toUpperCase()}</Typography>
          <Radio
            checked={sortValue === SortOrder.Descending}
            onChange={() => onSort(SortOrder.Descending)}
          />
        </Box>
      </Box>
      <Box>
        <TextField placeholder='filter by type..' onChange={(e) => setFilter(e.target.value)} value={filter} />
        <Button variant='outlined' sx={{ m: 1 }} onClick={() => onFilter(filter)}>Filter</Button>
        <Button variant='outlined' sx={{ m: 1 }} onClick={() => { setFilter(''); onFilter('') }}>Clear</Button>
      </Box>
    </Box>
  );
};

export default SortAndFilter;
