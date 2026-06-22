import { Container } from "../../../../components/Container/Container";
import { Card } from './DeviceSectionComponents/Card/Card';
import styles from './DevicesSection.module.css';
import { categories } from '../../../../constants/DeviceSection/categories';
export function DevicesSection() {
  return (
    <Container>
    <section className={styles.devicesSection}>
        <div className={styles.devicesSectionTextWrapper}>
      <h2 className={styles.devicesSectionH}>We Provide you streaming experience across various devices.</h2>
      <p className={styles.devicesSectionP}>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
    </div>
    <div className={styles.devicesSectionCardWrapper}>
         {categories.map((category) => (
            <Card  
            key={category.id}
  icon={category.icon}
  title={category.title}
  description={category.description} />
          ))}
    </div>
    </section>
    </Container>
  );
}
