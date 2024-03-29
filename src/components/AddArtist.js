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
          <Panel header={<b>Add A New Artiste</b>} key="1">

    <Tooltip title='New artists are added every month' >
    <form onSubmit={handleSubmit}>
      <label>
       Artiste Name :
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <input type="submit" value="Add" />
    </form>

    </Tooltip>
    </Panel>
    <Panel header={<b>If You like this...</b>} key="2">
    <a href="https://www.buymeacoffee.com/ewurufortune"><img  className ="buymeacoffee" alt="buy me a coffee icon" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=ewurufortune&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>
    </Panel>
    </Collapse>
  );
}

export default NewArtistForm;
 