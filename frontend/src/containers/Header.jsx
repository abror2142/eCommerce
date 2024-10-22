import Card from "../components/Card/Card";
import NavBar from "../components/Navbar/NavBar";
import "cities";


function successFunction(position) {
    console.log(position)
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log('Your latitude is :'+lat+' and longitude is '+long);
}

function Header() {
 
   
    return (
        <> 
            <NavBar />
            <Card />
        </>
    )
}

export default Header