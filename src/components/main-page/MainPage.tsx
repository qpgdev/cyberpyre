import WhatIsCyberpyrePage from "../about-cyberpyre-pages/WhatIsCyberpyrePage";
import SettingTheScenePage from "../about-cyberpyre-pages/SettingTheScenePage";
import SupportTheProject from "../about-cyberpyre-pages/SupportTheProject";
import KindredInTheFuture from "../about-cyberpyre-pages/KindredInTheFuture";

function MainPage() {
  return (
    <div className="main-page">
      <WhatIsCyberpyrePage></WhatIsCyberpyrePage>
      <div style={{ backgroundColor: "#242424", height: "5vh" }}></div>
      <SettingTheScenePage></SettingTheScenePage>
      <div style={{ backgroundColor: "#242424", height: "5vh" }}></div>
      <KindredInTheFuture></KindredInTheFuture>
      <div className="kindred-in-the-future"></div>
      <div style={{ backgroundColor: "#242424", height: "5vh" }}></div>
      <SupportTheProject></SupportTheProject>
      <div className="support-the-project"></div>
    </div>
  );
}

export default MainPage;
