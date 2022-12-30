import { useState,useEffect } from 'react';
import { Table,Col,Row} from 'antd';
import artists from './Artists';
import news from './News';
import { Typography } from 'antd';
import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';
import Marquee from "react-fast-marquee";
import icon from './img/newsicon.png'; // add images, please make sure they can be set as src


const { Title } = Typography;

function Charts(){

  
    
   
      // Declare a state variable called "dataSource" and set it to an empty array
      const [dataSource, setDataSource] = useState([]);
      const [thenews, setNews] = useState(['News item 1', 'News item 2', 'News item 3','New Item 4','nananana 5','jjshhshshsh 6','hshsvyu sbsn s s 7']);
    
      // Define the columns for the table
      const columns = [
        {
          title:'Header',
          hidden:true,

        },
        {
          title: 'THIS WEEK',
          key: 'sn',
           width:'10%',
          
           render(text, record,index) {
            return {
              props: {
                style: { background: "black",color:'white', textAlign:'center',fontSize:'1.05rem'}
              },
              children:  <span >{record.newRank}<br/>{record.status}</span>
            };
          }
          
        },
        //
        {
          title: 'TRACK',
          dataIndex: 'title',
          key: 'title',
           width:'60%',

           render(text, record) {
            return {
              props: {
                style: { }
              },
              children:    <span>{record.title}<br/><strong>{record.artist}</strong> {record.feature1} {record.feature2}  </span>
            };
          }
        },
               

        {
          title: 'LAST WEEK',
          dataIndex: 'previousRank',
          key: 'previousRank',
          width:'10%',
          render(text, record) {
            return {
              props: {
                style: { background: '#DDDDDD',textAlign:'center' }
              },
              children: <div>{text}</div>
            };
          }
 
        },
        {
          title: 'PEAK POS.',
          dataIndex: 'peak',
          key: 'peak',
           width:'10%',
           render(text, record) {
            return {
              props: {
                style: { textAlign:'center' }
              },
              children: <div>{text}</div>
            };
          }
        },
        {
          title: 'WoC.',
          dataIndex: 'woc',
          key: 'title',
           width:'10%',
           render(text, record) {
            return {
              props: {
                style: { background: '#DDDDDD',textAlign:'center' }
              },
              children: <div>{text}</div>
            };
          }
        },
      ].filter(item=>!item.hidden);
    
      // Update the data in the table every second
      useEffect(() => {
        const interval = setInterval(() => {
            // Flatten the array of songs into a single array
            let allSongs = artists.flatMap(artist => artist.songs);
       
            // Sort the array of all songs by thisWeek in descending order
            allSongs.sort((a, b) => b.thisWeek - a.thisWeek);


            allSongs.forEach((e, i) => {
              e.weeklyStream();
              const findParent=artists.findIndex((obj)=>{
                  return obj.name===e.author
              })
              allSongs.forEach((e, i) => {
             
                  e.calcTotalStreams();
                
                  
              });
              e.newRank = i+1 ;
  

              artists[findParent].totalStreams+=e.thisWeek
  
              
          });
           
          //update artist status
          allSongs.forEach((song, index) => {
            if(song.newRank<101){
              
              song.woc++
            }
            if (song.peak ==='-') {
              // If it is, update the peak rank
              song.peak = song.newRank;
            }
            if (song.newRank < song.peak) {
              // If it is, update the peak rank
              song.peak = song.newRank;
            }
            if (song.prevRank==='-' || song.prevRank>100){
              song.status=<i className="fa-solid fa-star"></i>
              song.prevRank='-'
               }else  if (song.newRank===song.prevRank){
              song.status='➖'
               }  else  if (song.newRank<song.prevRank){
           song.status=<i className="fa-solid fa-up-long"></i>
            }else  if (song.newRank>song.prevRank){
              song.status=<i className="fa-solid fa-down-long"></i>
               }
          });
    
            // news.push('hiiiiiooo')
         
      
            setNews([news[0], news[1], news[2]]);
        
        
        
    
          // Get the top 10 songs
          let top10Songs = allSongs.slice(0, 100);
    
          // Create the data for the table
          setDataSource(top10Songs.map(song => ({
            key: song.title,
            title: song.title,
            artist: song.author,
            thisWeek: song.thisWeek,
            status:song.status,
            previousRank:song.prevRank,
            peak:song.peak,
            woc:song.woc,
            newRank:song.newRank,
            feature1: song.feature1 ? "& " + song.feature1 : "",
            feature2: song.feature2 ? ", " + song.feature2 : "",
            headTitle:'Header'
          })));
          allSongs.forEach((object, index) => {
            object.prevRank =index+1;
          });
        console.log(news)
        }, 5000);
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
      }, []);
    
      // Render the table
      return (
<div>

          <Marquee speed={150} gradientColor={['224','322','244']}>
          <div className="newsBite">{thenews[0]}</div> 
          <div className="newsBite">{thenews[1]}</div> 
          <div className="newsBite">{thenews[2]}</div> 
          <div className="newsBite">{thenews[3]}</div> 

          </Marquee>
        <div className='charts'>

         <Row>
      <Col span={24}>
      <Title level={3}> HOT 100 </Title>
      <Table dataSource={dataSource} size={'small'} columns={columns} />
      </Col>
      
    </Row>
 
        </div>
       </div>
      );
    }
    
export default Charts