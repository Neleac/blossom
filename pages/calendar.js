import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../src/calendarUtils.js'
import { mainContent, Reflection, todo, headerOfdate } from '../src/calendarUtils.js'
import newstyle from '../styles/Calendar.module.css'


function Home() {
  const [count, setCount] = useState(1);

  return (
    <>
      <Head>
        <title>Create Next App for me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {Navbar()}

      <div className={newstyle.grid1}>
        <div className={newstyle.columnleftside}>
          <table className={newstyle.mycalendar} >

            <thead>
              <tr>
                <th colSpan={4} >November 2022 </th>
              </tr>
              <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td className={newstyle.date}><a href="#" onClick={() => setCount(1)}>1</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(2)}>2</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(3)}>3</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(4)}>4</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(5)}>5</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(6)}>6</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(7)}>7</a></td>
              </tr>

              <tr>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(8)}>8</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(9)}>9</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(10)}>10</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(11)}>11</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(12)}>12</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(13)}>13</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(14)}>14</a></td>
              </tr>

              <tr>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(15)}>15</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(16)}>16</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(17)}>17</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(18)}>18</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(19)}>19</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(20)}>20</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(21)}>21</a></td>
              </tr>

              <tr>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(22)}>22</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(23)}>23</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(24)}>24</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(25)}>25</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(26)}>26</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(27)}>27</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(28)}>28</a></td>
              </tr>

              <tr>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(29)}>29</a></td>
                <td className={newstyle.date}><a href="#" onClick={() => setCount(30)}>30</a></td>
              </tr>
            </tbody>
          </table>
          <div className={newstyle.Mood} >
            <h2><a href='\mood'>Mood</a></h2>
            <a href='\mood'><Image className={newstyle.logo} alt="Smily faces" src="./smily.png"></Image></a>
          </div>
          <div className={newstyle.Growth} >
            <h2><a href='\growth'>Growth </a></h2>
            <a href='\growth'> <Image className={newstyle.logo} alt="Growth chart" src="./growth.jpg"></Image></a>
          </div>
        </div>

        <div className={newstyle.columnmiddle}>
          <div className={newstyle.month}>
             {headerOfdate(count)} 
          </div>
          <div className={newstyle.columnEntry}>
            <h1  > Journal Entry </h1>
            {mainContent(count)}
          </div>
        </div>

        <div className={newstyle.columnrightside}>
          <div className={newstyle.Reflection} >
            <h2 style={{ borderBottom: '1.5px solid #d9d9d9' }} >Reflections:</h2>
            {Reflection(count)}
          </div>
          <div className={newstyle.ToDo}>
            <h2 style={{ borderBottom: '1.5px solid #d9d9d9' }} >To Do:</h2>
            {todo(count)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
