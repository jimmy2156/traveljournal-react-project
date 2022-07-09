import Japan from "../images/japan.png";
import Locationlogo from "../images/loc.png"


function Main(props) {
    return (
        <div className="main">
            <div className="card1">
            <img src={props.img} className="countryimg" alt="japan" />
            <div className="locationlogo">
            <img src={Locationlogo} className="logo1"/>
            <div className="countryname">{props.countryName}</div>
            <a href="#" className="link1">View on Google Maps</a></div>
            <h1 className="title1">{props.mountainName}</h1>
            <h3 className="dates">{props.date}</h3>
            <p className="para">{props.paragraph}</p>

            </div>
        </div>
    )
}
export default Main