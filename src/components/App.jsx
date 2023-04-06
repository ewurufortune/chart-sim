
import React, { useState,useEffect } from "react";
import artists from "./Artists";
import whichFormat from "./songNames";
import news from './News'
   import NewsTicker, { Directions, TickerStates } from "react-advanced-news-ticker";
 

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
function id(){
  return Math.random(Math.floor()*5000)
}
function song(title,author,feature1,feature2,totalStream,thisWeek,lag,musicVideo,status,prevRank,newRank,authorIndex,rating,support,lastWeekStatus,thisWeekStatus,peak,woc,id){
  this.title=title;
  this.author=author;
  this.feature1=feature1;
  this.feature2=feature2;
  this.totalStream=totalStream;
  this.thisWeek=thisWeek;
  this.lag=lag;
  this.peak=peak;
  this.woc=woc;
  this.musicVideo=musicVideo;
  this.status=status;
  this.prevRank=prevRank;
  this.newRank=newRank;
  this.authorIndex=authorIndex;
  this.rating=rating;
  this.support=support;
  this.id=id;
  this.thisWeekStatus=thisWeekStatus;
  this.lastWeekStatus=lastWeekStatus;
  this.calcTotalStreams=function(){
    this.totalStream+=this.thisWeek};
    this.weeklyStream=function(){
     this.thisWeek=(this.lag/100)* (Math.floor(Math.random()*(10/100*rating)+rating));
  this.lag-=2}

}







function Release(){
    const [setArtist,newArtist]=useState('')

 function singles(){

    function newTitle(){

        const newTitles= whichFormat[Math.floor(Math.random()*whichFormat.length)]
       
        return newTitles()
        
        }
let artistturn=[]
  
function weeklyReleases(){
  const a0=Math.floor(Math.random()*artists.length)
  const artist= artists[a0]
 
  const newTitles= whichFormat[Math.floor(Math.random()*whichFormat.length)]()
   const rating=Math.floor(Math.random()*1000)
   const support=rating/2
   const artistname=artist.name
   const lag= Math.floor(Math.random()*20+80)
  let newSong=new song (newTitles,artist.name,null,null,0,0,lag,0,'🟢','-',0,a0,rating,support,11,11,'-',0,id())

  artistturn.push(artistname)
  artist.songs.push(newSong);
  return artist
  
}

function weeklyFeatures01(){
     const aI=Math.floor(Math.random()*artists.length)
  const artist= artists[aI]
  const f1=artists[Math.floor(Math.random()*artists.length)].name
  const newTitles= whichFormat[Math.floor(Math.random()*whichFormat.length)]()
   const rating=Math.floor(Math.random()*1000)
   const lag= Math.floor(Math.random()*20+80)
   const support=rating/2
   const artistname=artist.name
   artistturn.push(artistname)

  
   let newSong=new song (newTitles,artist.name,f1,null,0,0,lag,0,'🟢','-',0,aI,rating,support,11,11,'-',0,id())

  artist.songs.push(newSong);
  return artist
}


function weeklyFeatures2(){
  const aI=Math.floor(Math.random()*artists.length)
  const artist= artists[aI]
  const f1=artists[Math.floor(Math.random()*artists.length)].name;
  let f2=artists[Math.floor(Math.random()*artists.length)].name;
  
  while (f2 === f1) {
  f2 = artists[Math.floor(Math.random()*artists.length)].name;
  }
  const newTitles= whichFormat[Math.floor(Math.random()*whichFormat.length)]()
  const rating=Math.floor(Math.random()*1000)
  const support=rating/2
  const lag= Math.floor(Math.random()*20+80)
  const artistname=artist.name
  let newSong=new song (newTitles,artistname,f1,f2,0,0,lag,0,'🟢','-',0,aI,rating,support,11,11,'-',0,id())
  artistturn.push(artistname)
  artist.songs.push(newSong);
  return artist
}
const persons=[]
let a5
function wR(){
  const newRelease=Math.floor(Math.random()*6);
  if(newRelease===0){
    a5=weeklyFeatures01();
   
    
  }else if(newRelease===0){
     a5=weeklyReleases();
    
  }else if(newRelease===3){
    a5=weeklyReleases();
    
  }else if(newRelease===4){
  
     a5=weeklyFeatures2();
    
  }else if (newRelease===5) {
    a5=weeklyReleases();
  }else{
    a5=weeklyReleases();
  }
  
}

wR()

wR()


const a1=artists[Math.floor(Math.random()*artists.length)].name
const a2=artists[Math.floor(Math.random()*artists.length)].name
const a3=artists[Math.floor(Math.random()*artists.length)].name
const persons1=a1;
const persons2=a2;

persons.push(persons1)
persons.push(persons2)

const object=a5.name
        // person action subject brand/location
        const actions=['talks on','posts about','rants about','muses on','brags about','boasts about','speaks on','shows off','spills the tea on', 'opens up about','criticises','praises',"addresses",'announces', 'reveals', 'unveils', 'teases', 'debuts', 'performs', 'collaborates with', 'releases', 'premieres', 'features on', 'teams up with']
        const subjects=['self-confidence','their record label','going on tour','depression','spiritual life', 'wealth','expextations','future releases','their admiration for'+object+'.',' their craft',' having kids',' their record-deal',' the government',' their love-life',' significant other','new album', 'world tour', 'single', 'collaboration', 'music video', 'performance', 'festival appearance', 'award show', 'television appearance', 'radio interview', 'podcast episode', 'social media post', 'press conference', 'charity event',
        ' dating',' their recent performance','their latest album','their latest single','love', 'a funny story','a chilling story','new movie']
        const brands=['with '+object+' .',"on the Red Table Talk.","on Jimmy Kimmel Live","Weekend Update","on The Daily Show","on late night with Conan O'Brien",'the cover of Rolling Stone.',"on Late Night With Jimmy Fallon",' "Shaderoom Exclusive".',' in a tweet',' by '+object+'.',' with Ryan Seacrest.','- Vogue',' on the tonight show.',' on twitter.',' on facebook.',' in a skit.',' in a SNL skit.',' on instagram.',' in their new single.',' in a recent interview.',' on instagram live.',' on the tonight show.',' with Jimmy Fallon.',' on the Ellen Show.','at a press conference', 'during an interview', 'on social media', 'in a music video', 'at a live event', 'on a television show', 'on a radio station', 'on a podcast', 'on a streaming service', 'on a news website',]
       
       
        
          function generateNews(persons, actions, subjects, brands) {
             // Select a random name, action, and subject from the arrays
             const person = persons[Math.floor(Math.random() * persons.length)];
             const action = actions[Math.floor(Math.random() * actions.length)];
             const subject = subjects[Math.floor(Math.random() * subjects.length)];
             const brand = brands[Math.floor(Math.random() * brands.length)];
          
            // Combine the name, action, and subject into a news item string
            const newsItem = `${person} ${action} ${subject} ${brand}`;
          
            return newsItem;
          }
          news[0]=generateNews(persons,actions,subjects,brands)
          news[1]=generateNews(persons,actions,subjects,brands)
          news[2]=generateNews(persons,actions,subjects,brands)
          news[3]=generateNews(persons,actions,subjects,brands)
       
 


}
useEffect(() => {
  const interval = setInterval(singles, 2000);
  return () => clearInterval(interval);
}, []);
return (

  
  <div className="gossip">
  
   
    </div>
)
}




export default Release
