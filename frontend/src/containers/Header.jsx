import NavBar from "../components/NavBar";
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
        </>
    )
}

export default Header