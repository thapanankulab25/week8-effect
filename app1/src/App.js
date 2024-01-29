import React from 'react';
import RefsFunc from './refs-func';
import RefsArray from './refs-array';
import MessageBox from './state-func';

export default function App() {

  return <>
  <RefsFunc /> ,<br></br>, <RefsArray />,<br></br>,<MessageBox />; 
  </>
}
