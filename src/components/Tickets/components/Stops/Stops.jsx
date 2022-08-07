import { resources } from '../../../../resources';
import './Stops.scss';

export function Stops({data}) {
  return (
    <div className="stops">
        <div className="stops__content-route">
          <p className="stops__content-route__text">
            {data.stops === 0 ? `${resources.withoutTransfers}`:
              (data.stops === 1) ? `${resources.oneTransplant}`:
              (data.stops === 2 || data.stops === 3) ? `${data.stops} пересадки`: ``
            }
          </p>
          <div className="stops__content-route__stop">
            <span className="icon icon-line"/>
            <span className="icon icon-plane"/>
          </div>
        </div>
    </div>
  );
}