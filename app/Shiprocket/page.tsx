'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

const Page = () => {
  const [token, setToken] = useState('');
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const TokenGet = async () => {
      const response = (
        await axios.post('https://apiv2.shiprocket.in/v1/external/auth/login', {
          email: process.env.SHIPROCKET_EMAIL || 'karankapoor4999@gmail.com',
          password: process.env.SHIPROCKET_PASSWORD || 'L4aKbzEK2jpx@UP',
        })
      ).data;
      // console.log(response);
      setToken(response);
    };
    TokenGet();
  }, []);

  const FetchAllOrders = async () => {
    try {
      const { data } = await axios.get(
        'https://apiv2.shiprocket.in/v1/external/orders',
        {
          headers: {
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXYyLnNoaXByb2NrZXQuaW4vdjEvZXh0ZXJuYWwvYXV0aC9sb2dpbiIsImlhdCI6MTY5OTUzMjg4OSwiZXhwIjoxNzAwMzk2ODg5LCJuYmYiOjE2OTk1MzI4ODksImp0aSI6IjB6Uk4xRkRWb2tQSnkwanciLCJzdWIiOjQxMjkzMDIsInBydiI6IjA1YmI2NjBmNjdjYWM3NDVmN2IzZGExZWVmMTk3MTk1YTIxMWU2ZDkifQ.7LPVnO7pFPwHQIn8ondKGdQhfvrPhxY1t_ANStXq1Xo' ||
              '',
          },
        },
      );
      // console.log(data);

      if (data) setAllOrders(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const SingleOrderDataGet = async () => {
    try {
      const { data } = await axios.get(
        `https://apiv2.shiprocket.in/v1/external/orders/show/${'434366715'}`,
        {
          headers: {
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXYyLnNoaXByb2NrZXQuaW4vdjEvZXh0ZXJuYWwvYXV0aC9sb2dpbiIsImlhdCI6MTY5OTUzMjg4OSwiZXhwIjoxNzAwMzk2ODg5LCJuYmYiOjE2OTk1MzI4ODksImp0aSI6IjB6Uk4xRkRWb2tQSnkwanciLCJzdWIiOjQxMjkzMDIsInBydiI6IjA1YmI2NjBmNjdjYWM3NDVmN2IzZGExZWVmMTk3MTk1YTIxMWU2ZDkifQ.7LPVnO7pFPwHQIn8ondKGdQhfvrPhxY1t_ANStXq1Xo' ||
              '',
          },
        },
      );

      // console.log(data);
      if (data) setAllOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  const TrackingData = async () => {
    try {
      // const { data } = await axios.get(`https://apiv2.shiprocket.in/v1/external/courier/track?order_id=${'434461589'}`, {
      //     headers: {
      //         Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXYyLnNoaXByb2NrZXQuaW4vdjEvZXh0ZXJuYWwvYXV0aC9sb2dpbiIsImlhdCI6MTY5OTUzMjg4OSwiZXhwIjoxNzAwMzk2ODg5LCJuYmYiOjE2OTk1MzI4ODksImp0aSI6IjB6Uk4xRkRWb2tQSnkwanciLCJzdWIiOjQxMjkzMDIsInBydiI6IjA1YmI2NjBmNjdjYWM3NDVmN2IzZGExZWVmMTk3MTk1YTIxMWU2ZDkifQ.7LPVnO7pFPwHQIn8ondKGdQhfvrPhxY1t_ANStXq1Xo" || ""
      //     }
      // })

      // console.log(data);
      // if (data) setAllOrders(data)

      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://apiv2.shiprocket.in/v1/external/courier/track?order_id=434461589&channel_id=4453904',
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXYyLnNoaXByb2NrZXQuaW4vdjEvZXh0ZXJuYWwvYXV0aC9sb2dpbiIsImlhdCI6MTY5OTUzMjg4OSwiZXhwIjoxNzAwMzk2ODg5LCJuYmYiOjE2OTk1MzI4ODksImp0aSI6IjB6Uk4xRkRWb2tQSnkwanciLCJzdWIiOjQxMjkzMDIsInBydiI6IjA1YmI2NjBmNjdjYWM3NDVmN2IzZGExZWVmMTk3MTk1YTIxMWU2ZDkifQ.7LPVnO7pFPwHQIn8ondKGdQhfvrPhxY1t_ANStXq1Xo' ||
            '',
        },
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {JSON.stringify(token)}
      <div>
        <button
          onClick={() => FetchAllOrders()}
          style={{
            border: '1px solid white',
            padding: '10px ',
            margin: '10px 20px',
          }}
        >
          Fetch All Orders
        </button>
        <button
          onClick={() => SingleOrderDataGet()}
          style={{
            border: '1px solid white',
            padding: '10px ',
            margin: '10px 20px',
          }}
        >
          Single Order Data
        </button>
        <button
          onClick={() => TrackingData()}
          style={{
            border: '1px solid white',
            padding: '10px ',
            margin: '10px 20px',
          }}
          className=""
        >
          Tracking{' '}
        </button>
      </div>
      {JSON.stringify(allOrders)}
    </div>
  );
};

export default Page;
