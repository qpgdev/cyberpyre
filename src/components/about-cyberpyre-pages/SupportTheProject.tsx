import neonHallway from "../../assets/neon-hallway.png";

import { useNavigate } from "react-router-dom";

function SupportTheProject() {
  const navigate = useNavigate();

  const navigateToCyberwareDensity = () => {
    navigate("/game-mechanics/cyberware-density");
  };

  return (
    <div className="support-the-project" style={{ maxHeight: "95vh" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            marginTop: "50px",
            marginLeft: "100px",
            marginRight: "100px",
            justifyContent: "center",
          }}
        >
          <p
            className="setting-the-scene-title"
            style={{ fontFamily: "Orbitron", fontSize: "50px" }}
          >
            Thanks for stopping by!
          </p>
          <p className="game-mechanics-text">
            <em>cyberpyre</em> is a one-person passion project. If you'd like to
            contribute, consider donating your time or talents with:<br></br>
          </p>
          <div style={{ display: "flex" }}>
            <p
              className="game-mechanics-text"
              style={{
                padding: "10px",
                marginTop: "0px",
                marginBottom: "0px",
                marginLeft: "20px",
                marginRight: "0px",
                textAlign: "left",
              }}
            >
              &bull; Feedback regarding playtesting;<br></br>
              &bull; Themed or character artwork / photography; <br></br>
              &bull; Short stories or flavor text;<br></br>
              &bull; Graphic design or UX / UI improvements;<br></br>
              &bull; Bugfixes or ticket submissions;<br></br>
              &bull; Any other contributions you feel would benefit the
              supplement.
            </p>
          </div>
          <p className="game-mechanics-text">
            Email submissions to <em>qpgdevelopment@gmail.com</em>. Make sure to
            include your name or an alias with the submission, and your express
            consent for the emailed material to be used in the project. If the
            contribution is used for the project, I will add your name or alias
            to the <strong> contributors </strong> page.
          </p>
          <p className="game-mechanics-text">
            <em>cyberpyre</em> is open source, which means that all of the
            source code used for the project is publicly available for you to
            view and use. You can find the source code on
            <a
              href="https://github.com/qpgdev/cyberpyre"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#bd00ff" }}
            >
              {" "}
              GitHub.
            </a>
          </p>
          <p className="game-mechanics-text">
            You may also consider donating on
            <a
              href="https://more.ko-fi.com/patreon-alternative?ref=vs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#bd00ff" }}
            >
              {" "}
              Ko-Fi.
            </a>
            &nbsp; Any donations recieved will be reinvested into the project,
            either to keep the site up and running or to commission artwork from
            the community.
          </p>
          <p className="game-mechanics-text">
            Please do not attempt to donate AI generated artwork for the
            project. While a project like <em>cyberpyre </em> is certainly
            hungry for art in order to deliver the right vibes, it's important
            to me that any donations to this project go towards human artists,
            who have real mouths to feed. Instead, consider commissioning an
            artist you enjoy and donating their work to the site!
          </p>
          <p className="game-mechanics-text">
            I sincerely hope that you and your friends enjoy playing what I've
            put together. If you want to connect, feel free to join the
            <a
              href="https://more.ko-fi.com/patreon-alternative?ref=vs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#bd00ff" }}
            >
              {" "}
              Discord.{" "}
            </a>
            Have fun, and stay thirsty!
          </p>
          <button
            className="intro-button-alt"
            onClick={navigateToCyberwareDensity}
          >
            Get started
          </button>
        </div>
        <img src={neonHallway}></img>
      </div>
    </div>
  );
}

export default SupportTheProject;
