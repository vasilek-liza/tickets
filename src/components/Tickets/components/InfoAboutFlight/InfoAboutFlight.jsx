import { GetDate } from './GetDate';
import './InfoAboutFlight.scss';

export  function InfoAboutFlight({time, name, destination, date}) {
  return (
    <>
      <div className="ticket__content-time">
        {time}
      </div>
      <div className="ticket__content-city">
        {destination}, {name}
      </div>
      <div className="ticket__content-date">
        <GetDate date={date} />
      </div>
    </>
  );
}