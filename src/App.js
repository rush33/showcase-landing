import { Features, Download, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

function App() {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 250k+ people using ProNef Marketplace."
        showBtn
        mockUpImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a butery UI of ProNef NFT Marketplace. Smooth constant colors of fluent UI design."
        mockUpImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all user devices. You can easily get your app into people's hands."
        mockUpImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store."
        description="The app contains two screens. The first screen lists all NFTs while the seond one shows the deatils of a specific NFT."
        mockUpImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with ❤ by {""}
          <span className="bold">Rushad</span>
        </p>
      </div>
    </>
  );
}

export default App;
