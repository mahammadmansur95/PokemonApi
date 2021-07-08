import React,{useState,useEffect} from 'react';
import { useLocation} from "react-router-dom";
import './Pokemon.css';
import axios from 'axios';

const Pokemon = () => {
  let location = useLocation();
  console.log(location);

  const [data,setData] = useState([]);

  useEffect(() => {
    axios
      .get(location.state.url[0].url)
      .then((res) => {
        let name = res.data.name;
        let image = res.data.sprites.front_default;
        let experience = res.data.base_experience;
        let height = res.data.height;
        let weight = res.data.weight;
         setData({
          name: name,
          img: image,
          exp: experience,
          height : height,
          weight : weight
        });
      });
  }, []);

  return (
    <>
      <div className="heading">
        <h1 className="name">{data.name}</h1>
      </div>
      <img className="image" src={data.img}/>
      <div className="details">
        <div>
          <h2 className="h">Experience</h2>
          <p>{data.exp}</p>
        </div>
        <div>
          <h2 className="h">Height</h2>
          <p>{data.height}</p>
        </div>
        <div>
          <h2 className="h">weight</h2>
          <p>{data.weight}</p>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
