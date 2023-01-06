import { Tooltip,Collapse } from 'antd';
import React, { useState } from 'react';
import  artists from './Artists';
const { Panel } = Collapse;
function modernPerson(name,no1s,yearlyFans, fans, Awards ,lAwards,vAwards,songs,age,totalStreams){
    this.name=name;
    this.no1s=no1s;
    this.yearlyFans=yearlyFans;
    this.fans=fans;
    this.Awards=Awards;
    this.lAwards=lAwards;
    this.vAwards=vAwards;
    this.songs=songs;
    this.age=age;
    this.totalStreams=totalStreams;

  }

function NewArtistForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAge = Math.floor(Math.random() * 30 + 15);
    let modern = new modernPerson(name, 0, 0, 0, 0, 0, 0, [], newAge, 0);
    artists.push(modern);
    setName('');
  };

  return (
    <Collapse >
          <Panel header="Add A New Artist" key="1">

    <Tooltip title='New artists are added every month' >
    <form onSubmit={handleSubmit}>
      <label>
       Add Artisit:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </Tooltip>
    </Panel>
    </Collapse>
  );
}

export default NewArtistForm;
 