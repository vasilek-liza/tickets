import { CustomButton } from "../../../common/CustomButton/CustomButtom";
import { InfoAboutFlight } from "../InfoAboutFlight/InfoAboutFlight";
import { Stops } from "../Stops/Stops";
import './Ticket.scss';
import { resources } from '../../../../resources';

export function Ticket({data}) {
  
  function getCurrency(data) {
		return (
      <>
        {resources.buy} <br></br> за {Math.trunc(data.price / 1000) + " " + (data.price % 1000 ? data.price % 1000 : "000")} ₽
      </>
    )
	}

  return (
    <div className="ticket">
      <div className="ticket__side-content">
        <img src="./img/turkish_airlines.png" alt={data.carrier}></img>
        <CustomButton getText = {() => getCurrency(data)}/>
      </div>

      <div className="ticket__content">
        <div className="ticket__content-departure">
          <InfoAboutFlight 
            name={data.origin_name}
            time={data.departure_time}
            date={data.departure_date}
            destination={data.origin}
          />
        </div>
        <Stops data={data}/>
        <div className="ticket__content-arrival">
          <InfoAboutFlight 
            name={data.destination_name}
            time={data.arrival_time}
            date={data.arrival_date}
            destination={data.destination}
          />
        </div>
      </div>
    </div>
  );
}