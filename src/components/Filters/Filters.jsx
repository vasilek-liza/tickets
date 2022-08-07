import { FilterCurrency } from './components/FilterCurrency/FilterCurrency';
import './Filters.scss';
import { FilterTransfer } from './components/FilterTransfer/FilterTransfer';

export function Filters() {
  return (
    <div className='filters'>
      <FilterCurrency />
      <FilterTransfer />
    </div>
  );
}