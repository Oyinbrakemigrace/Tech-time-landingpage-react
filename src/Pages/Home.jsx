import React , {useState} from 'react'
import heroimg from "../assets/HERO IMAGEE.png"
import arrow from "../assets/arrow_outward.png"
import pic1 from "../assets/Frame 95.png"
import pic2 from "../assets/Frame 96.png"
import pic3 from "../assets/Frame 97.png"
import pic4 from "../assets/Frame 98.png"
import pic5 from "../assets/Frame 99.png"
import zoom from "../assets/zoom.png"
import stripe from "../assets/stripe.png"
import monday from "../assets/monday.png"
import slack from "../assets/slack.png"
import dropbox from "../assets/dropbox.png"
import audio from "../assets/frame 110.png"
import recorded from "../assets/vid.png"
import live from "../assets/live.png"
import notes from "../assets/note.png"
import unsplash from "../assets/Frame 122.png"
import crown from "../assets/crown.png"
import unsplash2 from "../assets/unsplash2.png"
import frame131 from "../assets/Frame 131.png"
import frame132 from "../assets/Frame 132.png"
import frame133 from "../assets/Frame 133.png"
import frame134 from "../assets/Frame 134.png"
import unsplash5 from "../assets/unsplash5.png"
import unsplash6 from "../assets/unsplash6.png"
import unsplash7 from "../assets/unsplash7.png"
import unsplash8 from "../assets/unsplash8.png"
import unsplash9 from "../assets/unsplash9.png"
import unsplash10 from "../assets/unsplash10.png"
import star from "../assets/star.png"
import clock from "../assets/clock.png"
import book from "../assets/book.png"
import pro1 from "../assets/pic1.png"
import pro2 from "../assets/pic2.png"
import pro3 from "../assets/pic3.png"
import pro4 from "../assets/pic4.png"
import pro5 from "../assets/pic5.png"
import pro6 from "../assets/pic6.png"
import comm from "../assets/Frame 209.png"
import Accordion from '../Accordion'







const Home = () => {
  const accordionData = [ {
    question: "Is there a free trial available?",
    answer:`Yes, you can. You don’t need any background knowledge in IT or coding before you can register. 
    Having one is only an advantage for you. At LASOP, we start from the basics and guide you through all you 
    need to know to be a successful software developer.`
  },
    {
      question: "Can i change my plan later?",
    answer:" "
  },

    {
      question: "Are the courses lifetime?",
      answer:" "
    },
      {
        question: "How do i reach out to mentors?",
        answer:" "
      },

      {
        question: "Do we get job ready after taking courses?",
        answer:" "
      },
  ]

  return (
    <>
    <div className="hero container-fluid">
      <div className="row">
        <div className="col-md-6 col-12">

            <div className='text-white p-md-5 mt-5 my-5 text-center text-md-start'>
            <h1 className='fw-bolder'>Grow your skills to advance your career path </h1>
            <p className='fw-light fs-6 my-4'>Build your future with our quality education. the best and largest all-in-one 
              online tutoring platform1 in the world</p>
              <button className='btn btn-md border-1 fw-bold rounded-0 border-white bg-transparent text-white my-3'>Get started now <img src={arrow} alt="" /></button>
              <button className='btn rounded-1 border fw-bold p-md-2 mx-4 bg-white my-3 text-primary'>Enroll now</button>
              <div className='img my-3'>
              <img className='pic1' src={pic1} alt="pic1" />
              <img className='pic2' src={pic2} alt="pic2" />
              <img className='pic3' src={pic3} alt="pic3" />
              <img className='pic4' src={pic4} alt="pic4" />
              <img className='pic5' src={pic5} alt="pic4" />
              <p style={{marginLeft: "-3rem"}} className='fw-bolder fs-3 d-inline'>255+</p><small className='fs-6 fw-light'>Previews</small>
              </div>
            </div>
        </div>
        
        <div className='hero-img col-md-6 col-12'>
            <img src={heroimg} alt="hero-img" />
            </div>
      </div>
    </div>

    <div className='clients container-fluid'>
      <div className="row">
        <div className="col-12 d-flex justify-content-evenly p-2">
          <img src={zoom} alt="zoom" />
          <img src={stripe} alt="stripe" />
          <img src={monday} alt="monday" />
          <img src={slack} alt="slack" />
          <img src={dropbox} alt="dropbox" />
        </div>
      </div>

    </div>

    <div className="high-quality container-fluid">
      <div className="row">
        <div className="client col-md-6 col-12 p-4">
          <img src={crown} alt="" />
          <h1 className='fw-bolder ms-5'>High quality video, audio & live classes</h1>
          <p className='ms-5 text-secondary'>High-definition video is video of higher resolution and quality than standard definition. 
            while there’s no standard meaning for high definition, generally any standard video image</p>
            <button className="courses btn fw-bold btn-md text-white ms-5 my-3">View Courses</button>
            <div className=''>
              <button className='btn btn-md bg-white ms-md-5 my-2 mx-2 p-2 fw-bold'><img src={audio} alt="" className='mx-3' />Audio classes</button>
              <button className='btn btn-md bg-white ms-md-5 my-2 mx-2 p-2 fw-bold'><img src={recorded} alt="" className='mx-3' />Recorded classes</button>
              <button className='btn btn-md bg-white ms-md-5 my-2 mx-2 p-2 fw-bold'><img src={live} alt="" className='mx-3' />Live classes</button>
              <button className='btn btn-md bg-white ms-md-5 my-2 mx-2 p-2 fw-bold'><img src={notes} alt="" className='mx-3' />50+ notes</button>
            </div>
        </div>
        <div className="col-md-6 col-12 ">
          <div className='unsplash-img p-md-5 p-3 '>
          <img src={unsplash} alt=""  className= "img1" />
          </div>
        </div>
      </div>
    </div>

    <div className="this container-fluid">
      <div className="row ">
        <div className="col-md-6 col-12 p-4">

          <h1 className='fw-bolder w-100  ms-5'>This is why we are the best from others</h1>
          <p className='text-secondary  ms-5'>High-definition video is video of higher resolution and quality than standard definition. 
            While there’s no standard meaning for high definition, generally any standard video image</p>
            <img src={unsplash2} alt="" className=' ms-5'/>
      </div>
        <div className="col-md-6 col-12 my-5">
          <div className='d-flex justify-content-between'>

            <div className='experienced-mentors p-3 mx-4'>
              <img src={frame131} alt="" />
              <h5>Experienced Mentors</h5>
              <p className='text-secondary'>High-definition video is video of higher resolution and quality than standard definition. 
                High-definition video is video of higher resolution and quality than standard definition. </p>
            </div>

            <div className='experienced-mentors p-3'>
              <img src={frame132} alt="" />
              <h5>One-on-one Meetings</h5>
              <p className='text-secondary'>High-definition video is video of higher resolution and quality than standard definition. 
                High-definition video is video of higher resolution and quality than standard definition. </p>
            </div>
          </div>

          <div className='d-flex justify-content-between'>
            <div className='experienced-mentors p-3 mx-4 my-4'>
              <img src={frame134} alt="" />
              <h5>One-on-one Meetings</h5>
              <p className='text-secondary'>High-definition video is video of higher resolution and quality than standard definition. 
                High-definition video is video of higher resolution and quality than standard definition. </p>
            </div>

            <div className='experienced-mentors p-3 my-4'>
              <img src={frame133} alt="" />
              <h5>Affordable Prices</h5>
              <p className='text-secondary'>High-definition video is video of higher resolution and quality than standard definition. 
                High-definition video is video of higher resolution and quality than standard definition. </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="course container-fluid p-md-5">
      <div className="row">
        <div className='browse '>
          <h1 className='fw-bolder text-center'>Browse our popular courses</h1>
          <p className='text-secondary text-center mx-4'>High-definition video is video of higher resolution and quality than standard definition. While there’s no standard meaning for high definition, 
            generally any standard video image</p>
            <div>
              <ul className='list-unstyled d-flex justify-content-evenly fw-normal '>
                <li className='text-primary fw-bold'>All categories</li>
                <li>Design</li>
                <li>Development</li>
                <li>Marketing</li>
              </ul>
            </div>
        </div>
        <div className="col-md-4 col-6 ">
          <div className="card my-2">
            <div className="card-header">
              <img src={unsplash5} alt="" />
            </div>
            <div className="card-body">
              <div className='d-flex justify-content-between align-items-center'>
                <p className='design'>Design</p>
                <p className=' rate text-secondary'>4.7k <img src={star} alt="" /> (32.7k+)</p>
              </div>
              <h3 className='fw-bold'>Introduction to user research in UX Design</h3>
              <div className='d-flex justify-content-between mt-4'>
                <span className='duration text-secondary '><img src={clock} alt="" /> 23hrs 50mins</span>
                <span className='duration text-secondary'><img src={book} alt="" /> 15 Lessons</span>
              </div>
              <div className='d-flex justify-content-between align-items-center mt-4 '>
                  <span className=' name fw-bold'><img src={pro5} alt="" />  Leonard Victor</span>
                  <span className='cost fw-bold text-primary'>$15.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-6">
          <div className="card my-2">
            <div className="card-header">
              <img src={unsplash6} alt="" />
            </div>
            <div className="card-body">
              <div className='d-flex justify-content-between align-items-center'>
                <p className='design'>Marketing</p>
                <p className=' rate text-secondary'>4.7k <img src={star} alt=""/> (8.7k+)</p>
              </div>
              <h3 className='fw-bold '>Introduction to  new Marketing audience </h3>
              <div className='d-flex justify-content-between mt-4'>
                <span className='duration text-secondary '><img src={clock} alt="" /> 22hrs 30mins</span>
                <span className='duration text-secondary'><img src={book} alt="" /> 22 Lessons</span>
              </div>
              <div className='d-flex justify-content-between align-items-center mt-4 '>
                  <span className=' name fw-bold'><img src={pro6} alt="" />  Jeffery williams</span>
                  <span className='cost fw-bold text-primary'>$32.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-md-4 col-6">
          <div className="card my-2">
            <div className="card-header">
              <img src={unsplash7} alt="" />
            </div>
            <div className="card-body">
              <div className='d-flex justify-content-between align-items-center'>
                <p className='design'>Development</p>
                <p className=' rate text-secondary'>4.7k <img src={star} alt="" /> (12.7k+)</p>
              </div>
              <h3 className='fw-bold'>Introduction to HTML, CSS & Bootstrap</h3>
              <div className='d-flex justify-content-between mt-4'>
                <span className='duration text-secondary '><img src={clock} alt="" /> 45hrs 50mins</span>
                <span className='duration text-secondary'><img src={book} alt="" /> 55 Lessons</span>
              </div>
              <div className='d-flex justify-content-between align-items-center mt-4 '>
                  <span className=' name fw-bold'><img src={pro1} alt="" />  Claretta Mason</span>
                  <span className='cost fw-bold text-primary'>$55.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-6">
          <div className="card my-2">
            <div className="card-header">
              <img src={unsplash8} alt="" />
            </div>
            <div className="card-body">
              <div className='d-flex justify-content-between align-items-center'>
                <p className='design'>Development</p>
                <p className=' rate text-secondary'>4.7k <img src={star} alt="" /> (32.7k+)</p>
              </div>
              <h3 className='fw-bold'>Introduction to Javascript, Git & GitHub</h3>
              <div className='d-flex justify-content-between mt-4'>
                <span className='duration text-secondary '><img src={clock} alt="" /> 30hrs 50mins</span>
                <span className='duration text-secondary'><img src={book} alt="" /> 22 Lessons</span>
              </div>
              <div className='d-flex justify-content-between align-items-center mt-4 '>
                  <span className=' name fw-bold'><img src={pro2} alt="" />  Jessica Duke</span>
                  <span className='cost fw-bold text-primary'>$45.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-6">
          <div className="card my-2">
            <div className="card-header">
              <img src={unsplash9} alt="" />
            </div>
            <div className="card-body">
              <div className='d-flex justify-content-between align-items-center'>
                <p className='design'>Marketing</p>
                <p className=' rate text-secondary'>4.7k <img src={star} alt="" /> (4.7k+)</p>
              </div>
              <h3 className='fw-bold'>Introduction to outroom  marketing analysis</h3>
              <div className='d-flex justify-content-between mt-4'>
                <span className='duration text-secondary '><img src={clock} alt="" /> 33hrs 50mins</span>
                <span className='duration text-secondary'><img src={book} alt="" /> 26 Lessons</span>
              </div>
              <div className='d-flex justify-content-between align-items-center mt-4 '>
                  <span className=' name fw-bold'><img src={pro3} alt="" />  Samuel Jacobs</span>
                  <span className='cost fw-bold text-primary'>$25.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-6">
          <div className="card my-2">
            <div className="card-header">
              <img src={unsplash10} alt="" />
            </div>
            <div className="card-body">
              <div className='d-flex justify-content-between align-items-center'>
                <p className='design'>Marketing</p>
                <p className=' rate text-secondary'>4.7k <img src={star} alt="" /> (15.7k+)</p>
              </div>
              <h3 className='fw-bold'>Introduction to live marketing analysis</h3>
              <div className='d-flex justify-content-between mt-4'>
                <span className='duration text-secondary '><img src={clock} alt="" /> 10hrs 50mins</span>
                <span className='duration text-secondary'><img src={book} alt="" /> 32 Lessons</span>
              </div>
              <div className='d-flex justify-content-between align-items-center mt-4 '>
                  <span className=' name fw-bold'><img src={pro4} alt="" />  Adam Smith</span>
                  <span className='cost fw-bold text-primary'>$25.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='btn btn-md bg-primary text-white fw-bold d-block m-auto mt-2'>Explore all Courses</button>
    </div>

    <div className="community container-fluid mt-4">
      <div className="row">
        <div className="col-12 text-center">
          <p className='mt-4'>Join our community</p>
          <h3 className='fw-bolder'>Are you  ready to connect with the future talent of the tech world?</h3>
          <p>Meet up with other techstars and grow together</p>
          <div><img src={comm} alt="comm" /></div>
          <button className='btn btn-md bg-white my-4 text-primary rounded-1 fw-bold'>Join our community</button>
        </div>
      </div>
    </div>

    <div className="faq container-fluid">
      <div className="row">
        <div className="col-12">
          <div className='text-center'>
            <h2 className='my-4 fw-bolder'>Frequently Asked Questions</h2>
            <p>High-definition video is video of higher resolution and quality than standard definition. while there’s 
              no standard meaning for high definition, generally any standard video image</p>
          </div>
          <div className='accordion my-5 m-auto'>
          {accordionData.map(({question, answer})=>(<Accordion question={question} answer={answer}/>))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default Home