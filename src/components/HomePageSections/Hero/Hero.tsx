import styles from './Hero.module.css';
import heroImg from '../../../assets/images/homePage/heroImg.png';

export function Hero() {
  return (
    <section
      className={styles.heroSection}
      >
       <img
        src={heroImg}
        alt=""
        className={styles.heroBackground}
      />
    
        <div className={
            styles.heroContent
        }>
      <h1 className={
            styles.heroMainText
        }>The Best Streaming Experience</h1>
      <p className={
            styles.heroParagraph
        }>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
   <button className={
            styles.heroButton
        }>
    <svg className={styles.playIcon}>
    <use href="/symbol.svg#icon-play" />
  </svg>
    Start Watching Now</button>
    </div></section>
  );
}
