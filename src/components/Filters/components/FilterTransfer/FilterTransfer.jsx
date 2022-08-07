import './FilterTransfer.scss';
import { useState } from "react";
import { resources } from '../../../../resources';
import { useDispatch } from 'react-redux';
import { toggleStops, StopEnum, toggleAllStops} from "../../../../store/slices/TicketsSlice";
import { CustomCheckbox } from '../../../common/CustomCheckbox/CustomCheckbox';

export function FilterTransfer() {
    const dispatch = useDispatch();
    const [checkedAll, setCheckedAll] = useState(true);
    const [checkedWithoutStops, setCheckedWithoutStops] = useState(false);
    const [checkedOneStop, setCheckedOneStop] = useState(false);
    const [checkedTwoStops, setCheckedTwoStops] = useState(false);
    const [checkedThreeStops, setCcheckedThreeStops] = useState(false);

    function allStops() {
		setCheckedAll(!checkedAll);
        setCheckedWithoutStops(false);
        setCheckedTwoStops(false);
        setCcheckedThreeStops(false);
        setCheckedOneStop(false);
        dispatch(toggleAllStops());
	}

    function selectionStops(checked, setToggle, toggle) {
		setCheckedAll(false);
        setToggle(!checked); 
        dispatch(toggleStops(toggle));
	}

    return (
        <div className='filter-transfer'>
            <p className='filter-transfer__title'>{resources.numberOfTransfers}</p>
            <div className='filter-transfer__items'>
                <CustomCheckbox 
                    onClick={allStops} 
                    checked={checkedAll} 
                    text={resources.all}
                />
                <CustomCheckbox 
                    onClick={()=> selectionStops(checkedWithoutStops, setCheckedWithoutStops, StopEnum.None)} 
                    checked={checkedWithoutStops} 
                    text={resources.withoutTransfers}
                />
                <CustomCheckbox 
                    onClick={()=> selectionStops(checkedOneStop, setCheckedOneStop, StopEnum.One)} 
                    checked={checkedOneStop} 
                    text={resources.oneTransplant}
                />
                <CustomCheckbox 
                    onClick={()=> selectionStops(checkedTwoStops, setCheckedTwoStops, StopEnum.Two)} 
                    checked={checkedTwoStops} 
                    text={resources.twoTransplants}
                />
                <CustomCheckbox 
                    onClick={()=> selectionStops(checkedThreeStops, setCcheckedThreeStops, StopEnum.Three)} 
                    checked={checkedThreeStops} 
                    text={resources.threeTransplants}
                />
            </div>
      </div>
    );
  }