import './Tickets.scss';
import { Ticket } from './components/Ticket/Ticket';
import { useSelector } from 'react-redux';

export  function Tickets() {
  const {visibleTickets} = useSelector(state => state.ticketsReducer);
  return (
    <div className="tickets">
      {visibleTickets.map((item, idx)=> {
        return (
          <Ticket data={item} key={idx}/>
        )
      })}
    </div>
  );
}
