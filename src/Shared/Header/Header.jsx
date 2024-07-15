import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mb-3' src={logo} alt="" />
            <p className='font-light mb-2'>Journalism With Fear or Favour</p>
            <p className='border-b-2'>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;