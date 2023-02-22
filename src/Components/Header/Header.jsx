import './Header.css';
import profileImage from './../../assets/images/profile-image.jpg'

export default function Header() {
  return (
    <>
        {/* <div className="background-profile-image"> */}
        <div className="container">
            <img className="header-profile-image" src={profileImage} alt="Profile picture of Kapil" />
        </div>
        <h2 className="header-name">Kapil Thapa</h2>
        <h1 className="header-title">Portfolio</h1>
        <p className="header-p">Front-End Developer</p>
        {/* </div> */}
    </>
  );
}
