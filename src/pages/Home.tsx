import { FC, useState } from "react";
import Map from "../components/CustomIcons/Map";
import MapComponenet from "../components/MapComponent";
import Footer from "../components/Footer";
import ImageGrid from "../components/ImageGrid";

 const Home: FC = () => {
  const [viewStateToggle, setViewStateToggle] = useState("map")

  const toggleView = () =>{
    viewStateToggle === "map" ? setViewStateToggle("list") : setViewStateToggle("map")
  }
  return (
    <>
      <main>
        {viewStateToggle === "map" ? <ImageGrid />
         : <MapComponenet />}
       
        <div className="map_container">
            <button onClick={toggleView} ><span>Show {viewStateToggle}</span> <Map /></button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home