import "../../App.css";
import boot from "../../assets/neon-boot.png";

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
            You may also consider donating on my {" "}
            <a
              href="https://github.com/qpgdev/cyberpyre"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#bd00ff" }}
            >
              {" "}
              Patreon.
            </a>
            &nbsp; Any donations recieved will be reinvested into the project in the following priority order 
            (though expect these priorities to change here and there as time goes on): <br></br>
          </p>
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
            &bull; Keeping the site up and running; <br></br>
            &bull; Purchasing artwork for the site. <br></br>
            </p>
          <p className="game-mechanics-text">
            <em>cyberpyre</em> is open source, which means that all of the
            source code used for the project is publicly available for you to
            view and use. You can find the source code on {" "}
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
        </div>
        <img src={boot} style={{ height: "95vh" }}></img>
      </div>
    </div>
  );
}

export default SupportTheProject;
