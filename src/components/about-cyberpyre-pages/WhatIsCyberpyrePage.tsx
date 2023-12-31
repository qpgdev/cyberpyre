import neonClubGarage from "../../assets/neon-club-garage.png";

function WhatIsCyberpyrePage() {
  return (
    <div className="what-is-cyberpyre">
      <div className="scrollable-div" style={{ maxHeight: "95vh" }}>
        <div style={{ display: "flex" }}>
          <img src={neonClubGarage} style={{ height: "80vh" }}></img>
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
              Welcome to Bite City.
            </p>
            <p className="primary-text">
              The year is 2100. The blaze of the Second Inquisition, launched
              against Kindred almost a century ago, is now nothing but long-cold
              ash. The Camarilla’s last-ditch decision to embrace technology in
              the midst of one of the greatest onslaughts they’ve ever faced has
              catapulted them into a position of power that they haven’t seen
              since the Dark Ages. In the world of <em>cyberpyre,</em> the Cam
              controls the megacorps, the Anarchs run the streets, and mortals
              try the best they can to scrape by in a world where working 80
              hours a week still doesn’t bring in enough credits to afford a
              studio apartment. So what now?
            </p>
            <p className="primary-text">
              Kindred stalk the neon streets with all of the supernatural tools
              they perviously had at their disposal, and then some. Titanium
              bones, SynthInsight optics, retractable fangs that siphon blood
              into a second stomach to reduce your hunger... with the parallel
              advancements in cybernetics in Blood Sorcery, the possibilities
              for augmentations are endless. That being said, mortals have
              gotten pretty creative with cyberware on their own. It's harder to
              puncture the flesh when someone has subdermal armor implants...
            </p>
            <p className="primary-text">
              <em>cyberpyre</em> is a unofficial supplementary ruleset for
              <em>Vampire: The Masquerade 5th Edition, </em> a tabletop
              role-playing game which is sometimes colloquially referred to by
              players as <em>V5</em>. If you are interested in this supplement,
              I would recommend finding a copy of the V5 Corebook, and
              potentially the V5 Player’s Guide. While references to some core
              mechanics of V5 will be provided, this supplement will largely
              assume that you have played V5 before, or are at least familiar
              with most of the core mechanics. If a core concept of V5 is more
              thoroughly explained in the source material, references to the
              relevant pages of the official books will be provided as
              necessary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIsCyberpyrePage;
