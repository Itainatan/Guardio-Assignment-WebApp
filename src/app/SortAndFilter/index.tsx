import { Button } from '@mui/material';
import { SortOrder } from '../constants';

const SortAndFilter = ({ onSort }: { onSort: (order: SortOrder) => void; }) => {
  return (
    <div>
      <Button variant='contained' sx={{ m: 1 }} onClick={() => onSort(SortOrder.Ascending)}>Sort Ascending</Button>
      <Button variant='contained' sx={{ m: 1 }} onClick={() => onSort(SortOrder.Descending)}>Sort Descending</Button>
    </div>
  );
};

export default SortAndFilter;
