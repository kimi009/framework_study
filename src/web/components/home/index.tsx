import * as React from 'react'
import { useFetch } from 'react-hooks-fetch'
const { Suspense } = React
const { useState, useEffect } = React

const DisplayRemoteData = () => {
  const { error, data } = useFetch('/api/userInfo')
  console.log(9, data)
  if (error) return <span>Error:{error.message}</span>
  if (!data) return null // this is important
  return <span>RemoteData:{data.data.age}</span>
}

const Home = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <DisplayRemoteData />
  </Suspense>
)

export default Home

// import React, { Suspense } from 'react';
// import { useFetch } from 'react-hooks-fetch';

// const DisplayRemoteData = () => {
//   const { error, data } = useFetch('http://...');
//   if (error) return <span>Error:{error.message}</span>;
//   if (!data) return null; // this is important
//   return <span>RemoteData:{data}</span>;
// };

// const App = () => (
//   <Suspense fallback={<span>Loading...</span>}>
//     <DisplayRemoteData />
//   </Suspense>
// );
