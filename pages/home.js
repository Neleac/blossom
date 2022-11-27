import 'bootstrap/dist/css/bootstrap.min.css';
import home from '../styles/homepage.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons'
import { Input } from 'antd';
const { TextArea } = Input;
import Form from 'react-bootstrap/Form';


function Home() {
    const quotes = ['"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']
    return (
        <>
        <div className={home.pagebackground}>
            <div className={home.usercontainer}>
                <div style = {{display:"flex", alignItems: "center", justifyContent:"between"}} className={home.imageclass}>
                    <Image src='/user.jpeg' alt="User image" width={85} height={100} />
                    <span className={home.userinfo}>
                        <p style={{fontSize: 13}} >Tuesday, November 11, 2022.</p>
                        <p style={{fontSize: 20, color: '#4d4d4d'}} className='fw-bold'> Hello, Jane Doe.</p>
                    </span>
                    
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <button type='button' className={home.buttonstyle}>
                    Start Journaling
                    </button>
                </div>
                <br />
                <div className={home.listclass} id="countdown">
                    <li className={home.list} style={{borderRight: '1.5px solid #d9d9d9'}}><span className={home.boldletters} id="days">189</span>entries</li>
                    <li className={home.list} style={{borderRight: '1.5px solid #d9d9d9'}}><span className={home.boldletters} id="hours">140</span>day streak</li>
                    <li className={home.list}><span className={home.boldletters} id="minutes">1</span>years</li>
                </div>
                <div className={home.summary}>
                    <div className={home.calendarstyle}>
                        <div className={home.monthname}> 
                            November 2022
                        </div>
                        <div>
                            <FontAwesomeIcon className={home.iconstyle} icon={faCalendarDays} style={{boxShadow: '0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11)' }} />
                        </div>
                    </div>
                    <hr />
                    <div className={home.highlight}>
                        <div className={home.image}>
                            <Image src='/19.png' alt="User image" width={65} height={65} style={{borderRadius: '7px', boxShadow: '0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11)' }}/>
                        </div>
                        <div className={home.text}>
                            <div className={home.highlighttitle}>Highlight</div>
                            <div className={home.highlightpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                        </div>
                    </div>
                    <div className={home.highlight}>
                        <div className={home.image}>
                            <Image src='/20.png' alt="User image" width={65} height={65} style={{borderRadius: '7px', boxShadow: '0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11)' }}/>
                        </div>
                        <div className={home.text}> 
                            <div className={home.highlighttitle}>Highlight</div>
                            <div className={home.highlightpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                        </div>
                    </div>
                    {/* <div className={home.highlight}>
                        <div className={home.image}>
                            <Image src='/21.png' alt="User image" width={65} height={65} style={{boxShadow: '0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11)' }}/>
                        </div>
                        <div className={home.text}>
                            <div className={home.highlighttitle}>Highlight</div>
                            <div className={home.highlightpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className={home.content}>
                <div className={home.header}>
                    <div style={{width: '86%', display: 'inline-block', fontStyle: 'oblique'}}>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." -Author</p>
                    </div>
                    <div style={{width: '14%', display: 'inline-block'}}>
                        <Image src='/name.png' alt="User image" width={135} height={135} />
                    </div>
                </div>
                <div className={home.dailydetails}>
                    <div className={home.todo}>
                        <div className={home.todotitle}>
                            Things to do today:
                            <FontAwesomeIcon  className={home.iconstyle} icon={faPlus}></FontAwesomeIcon>
                        </div>
                        <hr />
                        <MDBCheckbox className={home.checkbox} name='flexCheck' value='' id='flexCheckDefault' label='Do Laundry' /><br />
                        <MDBCheckbox className={home.checkbox} name='flexCheck' value='' id='flexCheckDefault' label='Submit Assignment' /><br />
                        <MDBCheckbox className={home.checkbox} name='flexCheck' value='' id='flexCheckDefault' label='Buy Groceries' /><br />
                        <MDBCheckbox className={home.checkbox} name='flexCheck' value='' id='flexCheckDefault' label='Send Email to Professor' /><br />
                        <MDBCheckbox className={home.checkbox} name='flexCheck' value='' id='flexCheckChecked' label='Apply for Internships'  />
                        
                    </div>
                    <div className={home.reflection}>
                        <div className={home.textareadiv}>
                            <div className={home.todotitle}>
                                Things that I am grateful for today:
                            </div>
                            <hr />
                            <TextArea rows={8} placeholder="Today, I am grateful for..." />
                        </div>
                        <div className={home.textareadiv}>
                            <div className={home.todotitle}>
                                What will make today great:
                            </div>
                            <hr />
                            <TextArea rows={7} placeholder="Today would be great if..." />
                        </div>
                    </div>
                    <div className={home.icons}>
                        <FontAwesomeIcon className={home.icontray} icon={faChartLine}></FontAwesomeIcon>
                        <FontAwesomeIcon className={home.icontray} icon={faFaceSmileBeam}></FontAwesomeIcon>
                        {/* <FontAwesomeIcon className={home.icontray} icon={faChartSimple}></FontAwesomeIcon> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home