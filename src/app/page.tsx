import Image from "next/image";
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className = {styles.container}>

      <h1>Welcome to my Dog Adoption Site</h1>
      <h2>Learn more below</h2>

      <div className = {styles.imageContainer}>

        <div className = {styles.imageWrapper}>
          <img src ="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg" alt = "dog one"/>
          <p>This is jake</p>
        </div>

        <div className = {styles.imageWrapper}>
          <img src ="https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1722953201.3050609/fluffy-dogs-hero-1-1.jpg" alt = "dog two"/>
          <p>This is benny</p>
        </div>

        <div className = {styles.imageWrapper}>
          <img src ="https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J" alt = "dog three"/>
          <p>This is doug</p>
        </div>
        
      </div>

    </div>
    
  );
}
