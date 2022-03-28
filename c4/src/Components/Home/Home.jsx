import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import  axios  from "axios";
import "./Home.css"
export const Home = () => {

  const [meet, setMeet] = useState([]);

  useEffect(()=>{
    try{
      axios.get("http://localhost:8080/meetups").then((res)=>{
      setMeet([...res.data]);
    })
    }catch(error){
      console.log(error.message);
    }
  },[]);

  console.log(meet)

  return (
    <div className="homeContainer">
      <div className="homePage">
      {meet.map((el) => {
              return (
                <Link to={`/meetup/${el.id}`} className="events">
                  <img src={el.image} alt="MeetUp_Image" className="image" />
                  <h1 className="title">{el.title}</h1>
                  <h3 className="theme">{el.theme}</h3>
                  <h5 className="description">{el.description}</h5>
                  <h2 className="location">{el.location}</h2>
                  <h4 className="time">{el.time}</h4>
                </Link>
              );
            })}
      </div>

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => { }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`add your route here`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[]
            .map((el) => {
              return (
                <Link to={`add route here`} className="events">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
