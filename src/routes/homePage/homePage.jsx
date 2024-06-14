import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">With Real Estate, Get Your Dream Place</h1>
          <p>
          Discover your dream place with ease using our comprehensive listings,<br/>
        advanced search tools, and expert agents. From cozy city apartments to<br/>
        luxurious estates in serene landscapes, finding your ideal property is
        just a<br/> click away. Our website features advanced <span style={{color: 'black', fontWeight: 'bold'}} >chat functionality</span>,
        enabling<br/> direct negotiations with sellers or landlords. This empowers
        you to secure<br/> the best deals and make informed decisions for your real
        estate transactions.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
