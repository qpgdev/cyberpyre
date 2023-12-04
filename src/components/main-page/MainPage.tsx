import neonClubGarage from "../../assets/neon-club-garage.png";
import manGunNeon from "../../assets/man-gun-neon.png";

function MainPage() {
  return (
    <div className="main-page">
      <div className="setting-the-scene">
        <div className="container">
          <div className="scrollable-div">
            <p
              className="setting-the-scene-title"
              style={{ fontFamily: "Orbitron" }}
            >
              "You have no idea what unlife <br></br>
              was like in the old days."
            </p>
            <p
              className="intro-narrative"
              style={{ fontFamily: "Orbitron", fontSize: "20px" }}
            >
              Well, in MY old days, anyway. You'd be hiding in gutters and
              filth, holding in the breath you no longer had, just prayin' the
              flames wouldn’t reach you as the Second Inquisition burned your
              haven to the ground. It hardly even mattered if you got away - it
              never took them long to find you again. For us, the first few
              decades after the turn of the century were filled with nothing but
              fire and ash. We were backed into a corner. No matter where you
              were, no matter WHO you were, you could already smell the smoke.
              There was nowhere left to go. <br></br> <br></br>
              The Circle made a decision - learn how to use human tech. Sure, it
              was risky. When you’d never used a computer before, you were half
              as likely to expose your IP to the Inquisition as you were to
              check your email. Still, I’d never seen Anarchs and Cam work
              together like that. The young teaching the old, the old actually
              listening. It was beautiful, in a sort of fucked up way. The
              LaSombra and Nosferatu took a particular liking to tech - you know
              how they love their secrets. Same as now, most of the skeletons
              folks had in their closets were either on their hard drive or
              buried in their browser history. <br></br> <br></br>
              It was slow going, and a lot of us didn't make it, but we made it
              work. However we had to do it, we made it happen. Blackmail,
              coercion, intimidation, bribes, the works. Things we’d already
              been doing to govs for centuries - we just had more information,
              now. Pushing the right people out of office, letting the right
              ones in. The church saw numbers drop, which saw tithes drop, and
              the Inquisition started finding it hard to mount a classified
              global assault without a single government willing to grant them
              the funding.<br></br> <br></br>
              Around that time, we bought out a bunch of corpos, and founded a
              few of the big megacorps. That neolibertarian movement was just
              starting to take off, and if you were a Kindred with a millenia
              worth of wealth to be throwing around, you wanted to invest in
              tech. Besides, a lot of the companies had already built the
              infrastructure we needed. Most of their shit already had spyware
              installed before we ever even thought about buying them out. All
              we had to do was have Alexa stop listening for what brand of
              toilet paper you use and start listening to the stuff that would
              get us some real leverage - a casual slur, a rendezvous with the
              mistress, that kind of stuff. Humans like to play the good guys,
              but if you focus the microscope on a few of them, you start to
              find out that they aren’t much better than we are. <br></br>{" "}
              <br></br>
              When it was over, the Cam kicked the Anarch Barons to the curb.
              They’d been planning a coup, the Circle got wind of it, blah blah
              blah - a tale as old as time, right? They left an open letter for
              the rest of the rabble - those who weren’t in leadership - to
              prove ourselves in the corpos. To be honest, it isn’t a bad gig.
              I’ve worked there for half a century now. We’ve gone pretty hard
              on advertising to the neo-gothic vampire wannabe. Half the attacks
              that you’d expect came from Kindred are actually just a mortal
              cyberpsycho chromed out in the newest neovamp tech that just
              forgot to take their immunoblockers that morning. Having a few
              harmless sips is tame by comparison. Flash your corpo ID, and cops
              tend to look the other way if you get a bit too thirsty on a night
              out. <br></br> <br></br>
              Anyway, you were saying we have to be careful, but that’s the neat
              part - we kind of don’t. Not anymore. The Masquerade is still on,
              but no one can tell if it’s a Kindred or a cyberpsycho tearin'
              someone’s throat out. Who has the time to keep track of every
              murder nowadays? Mortals have short memories. <br></br> <br></br>
              Rest easy, choom. We won.
            </p>
          </div>
          <img className="setting-the-scene-img" src={neonClubGarage}></img>
        </div>
      </div>
      <div className="what-is-cyberpyre">
        <div className="scrollable-div" style={{ maxHeight: "95vh" }}>
          <div style={{ display: "flex" }}>
            <img src={manGunNeon} style={{ height: "95vh" }}></img>
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
              <p className="game-mechanics-text">
                The year is 2100. The blaze of the Second Inquisition, launched
                against Kindred almost a century ago, is now nothing but
                long-cold ash. The Camarilla’s last-ditch decision to embrace
                technology in the midst of one of the greatest onslaughts
                they’ve ever faced has catapulted them into a position of power
                that they haven’t seen since the Dark Ages. In the world of{" "}
                <em>cyberpyre,</em> the Cam controls the megacorps, the Anarchs
                run the streets, and mortals try the best they can to scrape by
                in a world where working 80 hours a week still doesn’t bring in
                enough credits to afford a studio apartment. So what now?
              </p>
              <p className="game-mechanics-text">
                Kindred stalk the neon streets with all of the supernatural
                tools they perviously had at their disposal, and then some.
                Titanium bones, SynthInsight optics, retractable fangs that
                siphon blood into a second stomach to reduce your hunger... with
                the parallel advancements in cybernetics in Blood Sorcery, the
                possibilities for augmentations are endless. That being said,
                mortals have gotten pretty creative with cyberware on their own.
                It's harder to puncture the flesh when someone has subdermal
                armor implants...
              </p>
              <p className="game-mechanics-text">
                <em>cyberpyre</em> is an unofficial supplement for{" "}
                <em>Vampire: The Masquerade 5th Edition, </em> a tabletop
                role-playing game which is sometimes colloquially referred to by
                players as <em>V5</em>. If you are interested in this
                supplement, I would recommend finding a copy of the V5 Corebook,
                and potentially the V5 Player’s Guide. While references to some
                core mechanics of V5 will be provided, this supplement will
                largely assume that you have played V5 before, or are at least
                familiar with most of the core mechanics. If a core concept of
                V5 is more thoroughly explained in the source material,
                references to the relevant pages of the official books will be
                provided as necessary.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="kindred-in-the-future"></div>
      <div className="support-the-project"></div>
    </div>
  );
}

export default MainPage;
