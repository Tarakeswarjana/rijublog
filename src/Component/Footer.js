import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../css/footer.css"
const Footer = () => {
  return (
  <div className='container'>
     <div className='left1'>
    <p id="face"> <FacebookIcon/> </p>
    <p id='insta'><InstagramIcon/></p>
    <p id="linkd"><LinkedInIcon/></p>
    </div>
    <div className='right1'>
    <p>এটি এমন ওয়েবসাইট যা বিশ্বের অবিশ্বাস্য তথ্য ধারণ করে শুধু আমার ইউটিউবের পরিবারের সাথে থাকুন আমি আপনাকে সব আপডেট দেব</p>
    <p id='youtube'><YouTubeIcon/></p>
    <p>contact me for paid promotion</p>
    </div>
  </div>
   
  );
}

export default Footer;
