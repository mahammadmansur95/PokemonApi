import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const PokemonList = () => {
  let history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      render: (text) => (
        <button
          onClick={() =>
            history.push({
              pathname: '/pokemon',
              state: {
                url: data.filter((o) => {
                  if(o.name === text){
                    console.log("object ->",o.url);
                    return o.url;
                  }
                }),
              },
            })
          }
        >
          {text}
        </button>
      ),
    },
    // {
    //   title: 'View',
    //   dataIndex: 'url',
    //   key: 'view',
    //   render: (text) => (
    //     <button
    //       onClick={() =>
    //         history.push({
    //           pathname: '/pokemon',
    //           state: {
    //             url: text,
    //           },
    //         })
    //       }
    //     >
    //       view
    //     </button>
    //   ),
    // },
  ];

  return (
    <div>
      <h1 style={{ 'text-align': 'center' }}>Pokemon list</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default PokemonList;
