import neonHallway from "../../assets/neon-hallway.png";

function SupportTheProject() {
  return (
    <div className="scrollable-div" style={{ maxHeight: "95vh" }}>
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
              &bull; Themed or character artwork; <br></br>
              &bull; Short stories or flavor text;<br></br>
              &bull; Graphic design or UX / UI improvements;<br></br>
              &bull; Bugfixes or ticket submissions;<br></br>
              &bull; Feedback regarding playtesting;<br></br>
              &bull; Any other contributions you feel would benefit the
              supplement.
            </p>
          </div>
          <p className="game-mechanics-text">
            Email submissions to <em>qpgdevelopment@gmail.com</em>. Make sure to
            include your name or an alias with the submission - if the
            contribution is used for the project, I will add your name or alias
            to the <strong> contributors </strong> page.
          </p>
          <p className="game-mechanics-text">
            <em>cyberpyre</em> is open source, which means that all of the
            source code used for the project is publicly available for you to
            view and use. You can find the source code on{" "}
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
            You may also consider donating on my{" "}
            <a
              href="https://github.com/qpgdev/cyberpyre"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#bd00ff" }}
            >
              {" "}
              Patreon.
            </a>
            &nbsp; Any donations recieved will be reinvested into the project,
            either to keep the site up and running or to commission artwork from
            the community.
          </p>
          <p className="game-mechanics-text">
            Please do not attempt to donate AI generated artwork for the
            project. While a project like <em>cyberpyre </em> is certainly
            hungry for artwork in order to hit the right vibe, it's important to
            me that any donations to this project go towards human artists, who
            have real mouths to feed. Consider commissioning an artist you enjoy
            and donating their work to the site!
          </p>
          <p className="game-mechanics-text">
            I sincerely hope that you and your playgroup enjoy the project.  Have fun, and stay thirsty!
          </p>
        </div>
        <img src={neonHallway} style={{ height: "95vh" }}></img>
      </div>
    </div>
  );
}

export default SupportTheProject;
