import './FilterCurrency.scss';
import { resources } from '../../../../resources';

export function FilterCurrency() {
  return (
    <div className='filter-currency'>
        <p className='filter-currency__title'>{resources.currency}</p>
        <div className='filter-currency__value'>
            <div className='filter-currency__value-item active'>
                {resources.rub}
            </div>
            <div className='filter-currency__value-item'>
                {resources.usd}
            </div>
            <div className='filter-currency__value-item'>
                {resources.eur}
            </div>
        </div>
    </div>
  );
}