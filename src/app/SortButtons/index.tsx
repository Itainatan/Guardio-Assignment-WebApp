import { Button } from '@mui/material';
import { SortOrder } from '../constants';

const SortButtons = ({ onSort, order }: { onSort: (order: SortOrder) => void; order: SortOrder }) => {
  const handleSort = (order: SortOrder) => {
    onSort(order);
  };

  return (
    <div>
      <Button variant='contained' sx={{ m: 1 }} onClick={() => handleSort(SortOrder.Ascending)}>Sort Ascending</Button>
      <Button variant='contained' sx={{ m: 1 }} onClick={() => handleSort(SortOrder.Descending)}>Sort Descending</Button>
    </div>
  );
};

export default SortButtons;
