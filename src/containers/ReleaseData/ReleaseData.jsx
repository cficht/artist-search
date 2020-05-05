import React from 'react';
import { useParams } from 'react-router-dom';
import Release from '../../components/Release/Release';

const ReleaseData = () => {

  let { artistName, releaseId} = useParams();

  const recordings = [
    {
      id: '04532aae-d0cb-403c-8e09-7ea1716a124c',
      title: 'Ask Me Why'
    },
    {
      id: '14c4b37f-8a93-4dc3-bc23-2ed86cdb20bb',
      title: 'There’s a Place',
    },
    {
      title: 'Love Me Do',
      id: '1f518811-7cf9-4bdc-a656-0958e130f312'
    }
  ];

  return (
    <>
      <Release artistName={artistName} recordings={recordings}/>
    </>
  );
};

export default ReleaseData;
