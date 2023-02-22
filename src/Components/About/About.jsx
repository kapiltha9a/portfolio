import styles from './About.module.css';
import profileImage from './../../assets/images/profile-image.jpg';
import SubPageTitle from '../Presentational/SubPageTitle/SubPageTitle';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutRow}>
        <SubPageTitle title={'A little about me'} />
        {/* <<h3 className={styles.aboutMeHeader}>A little about me</h3>> */}
        <img src={profileImage} alt="#" />
      </div>
      <div className={styles.aboutRow}>
        <p className={styles.aboutMeP}>I am a react developer currently based in DMV area. I've been working in front-end development for the past four years.</p>
        <img src={profileImage} alt="#" />
      </div>
    </div>
  );
}
