import React from 'react'
import assets from '../assets'
import styles from '../styles/Global'

const FeatureCard = ({ iconText, iconUrl }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using a coss-platform technology, React
            Native.
          </p>

          <div className={styles.flexWrap}>
            <FeatureCard iconText="React Native" iconUrl={assets.react} />
            <FeatureCard iconText="Javascript" iconUrl={assets.javascript} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features