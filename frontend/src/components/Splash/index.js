import './Splash.css'
import About from '../About'
function Splash(){
    return(
        <div className='splash'>
            <div className='welcome-card'>

                <img src='https://i.imgur.com/pzI55QL.png' alt='logo'></img>
                <a href='/home' className='explore-button'>
                <div className='button-text'>

                    Explore Listings
                    </div>

                </a>

            </div>
        </div>
    )
}
export default Splash;
