
import "react-datepicker/dist/react-datepicker.css";
import Calender from '../Calender/Calender';
import './Departure.css'


const Departure = () => {

    return (
        <div>
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <lebel className='fs-4 ms-2  fw-light'>Departure</lebel>
            <Calender></Calender>
        </div>

    );

};

export default Departure;