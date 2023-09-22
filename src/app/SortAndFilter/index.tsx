import { Box, Button, TextField } from '@mui/material';
import { SortOrder } from '../constants';
import { useState } from 'react';

const SortAndFilter = ({ onSort, onFilter }: { onSort: (order: SortOrder) => void; onFilter: (order: string) => void; }) => {
  const [filter, setFilter] = useState<string>('');

  return (
    <Box display="flex">
      <Button variant='contained' sx={{ m: 1 }} onClick={() => onSort(SortOrder.Ascending)}>Sort Ascending</Button>
      <Button variant='contained' sx={{ m: 1 }} onClick={() => onSort(SortOrder.Descending)}>Sort Descending</Button>

      <Box>
        <TextField placeholder='filter by type..' onChange={(e) => setFilter(e.target.value)} value={filter} />
        <Button variant='outlined' sx={{ m: 1 }} onClick={() => onFilter(filter)}>Filter</Button>
        <Button variant='outlined' sx={{ m: 1 }} onClick={() => { setFilter(''); onFilter('') }}>Clear</Button>
      </Box>
    </Box>
  );
};

export default SortAndFilter;
