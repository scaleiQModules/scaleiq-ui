import { BasicCard, Icon, useTheme } from '@scaleiq/scaleiq-ui';
import styles from './Home.module.css';
import RingChart from './RingChart';

const Home = () => {
  const { darkMode } = useTheme();
  return (
    <div className={styles.homeContainer} data-dark-mode={darkMode}>
      <main className={styles.main} data-dark-mode={darkMode}>
        <h1>
          Welcome to <b>ScaleiQ</b> AI Integrated Platform
        </h1>
        <div className={styles.content} style={{ width: '70%' }}>
          <p>
            Explore how ScaleiQ effortlessly incorporates cutting-edge
            technologies like Al and Quantum Computing, providing organizations
            with a whole new realm of possibilities.
          </p>
        </div>
      </main>

      <video
        controls={false}
        poster="https://i.vimeocdn.com/video/1932337453-ef4b36f0cac0fc5d859bf7900c69c114fc30e35792740c7e53856b8c7f0b47ee-d_1920x1080?r=pad"
        width="100%"
        height="auto"
        autoPlay
        muted
        loop
        className={styles.video}
      >
        <source src="./ingestorv1.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <div className={styles.newsListContainer}>
        <BasicCard
          title="Latest Updates and News"
          className={styles.secondCard}
        >
          <ul className={styles.newsList}>
            <li>
              <p>30 min</p>
              <a href="#">ScaleiQ Security Update</a>
            </li>
            <li>
              {' '}
              <p>5 days</p>
              <a href="#">
                Quantum Computing is now integrated into the platform
              </a>
            </li>
            <li>
              <p>1 week</p>
              <a href="#">Equinix maintenance schedule</a>
            </li>
            <li>
              <p>1 month</p>
              <a href="#">New ScaleiQ AI Marketplace</a>
            </li>
            <li>
              <p>2 months</p>
              <a href="#">ScaleiQ AI Health Dashboard</a>
            </li>
            <li>
              <p>3 months</p>
              <a href="#">ScaleiQ AI Health Dashboard</a>
            </li>
          </ul>
          <a className={styles.seeAll} href="#">
            See all latest <Icon iconName="ChevronRight" size={'28'} />
          </a>
        </BasicCard>
      </div>
      <div className={styles.twoColumnsContainer}>
        <div className={styles.twoColumns}>
          <BasicCard title="" className={styles.secondCard}>
            <div style={{ display: 'flex', gap: '1.5rem', width: '100%' }}>
              <img
                width={'25%'}
                src="./brain.svg"
                alt="Brain Jump Start Solutions"
                className={styles.brainImage}
              />
              <div style={{ width: '100%' }}>
                <h2
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '500',
                    marginBottom: '0.4rem',
                  }}
                >
                  Brain Jump Start Solutions
                </h2>
                <ul className={styles.newsList}>
                  <li>
                    <a href="#">Vigilance Recommender </a>
                  </li>
                  <li>
                    <a href="#">Data Monetization with Al Engine</a>
                  </li>
                  <li>
                    <a href="#">Transform Big-Data into Smart Data</a>
                  </li>
                </ul>
              </div>
            </div>
          </BasicCard>
          <BasicCard title="Explore" className={styles.secondCard}>
            <ul className={styles.newsList}>
              <li>
                <a href="#">
                  Al Optimization for your Supply Chain and Logistics
                  Distribution{' '}
                </a>
              </li>
              <li>
                <a href="#">Al Application Modeling and Build</a>
              </li>
              <li>
                <a href="#">Quantum Solutions Introduction</a>
              </li>
            </ul>
          </BasicCard>
        </div>
        <BasicCard title="ScaleiQ AI Health" className={styles.secondCard}>
          <div className={styles.healthContainer}>
            <h3>Services Availability</h3>
            <div className={styles.healthGraphics}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  height: '100%',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                <h4>West</h4>
                <RingChart
                  percentages={[82]}
                  colors={['#3FC495']}
                  size={120}
                  strokeWidth={20}
                  innerText="82%"
                />
                <RingChart
                  percentages={[99]}
                  colors={['#3FC495']}
                  size={120}
                  strokeWidth={20}
                  innerText="99%"
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <h4 style={{ height: '20%' }}></h4>
                <div
                  style={{
                    height: '40%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    /*        padding: '4rem 0 0 0', */
                  }}
                >
                  <p style={{ textAlign: 'center' }}>Cloud Services</p>
                </div>

                <div
                  style={{
                    height: '40%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <p style={{ textAlign: 'center' }}>Equinix Data center</p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  height: '100%',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                <h4>East</h4>
                <RingChart
                  percentages={[65]}
                  colors={['#F6BF3D']}
                  size={120}
                  strokeWidth={20}
                  innerText="65%"
                />
                <RingChart
                  percentages={[45]}
                  colors={['#EE6964']}
                  size={120}
                  strokeWidth={20}
                  innerText="45%"
                />
              </div>
            </div>
          </div>
        </BasicCard>
      </div>
    </div>
  );
};

export default Home;
