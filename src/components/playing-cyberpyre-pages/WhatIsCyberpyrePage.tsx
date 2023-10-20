import '../../App.css';
import boot from '../../assets/neon-boot.png';

function WhatIsCyberpyrePage() {

  return (
    <div className='scrollable-div' style={{maxHeight: '95vh'}}>
      <div style={{display: 'flex'}}>
      <div style ={{ marginTop: '50px', marginLeft: '100px', marginRight: '100px', justifyContent:'center'}}>
        <p className ='setting-the-scene-title' style={{fontFamily: 'Orbitron'}}>
            welcome to bite city
        </p>
        <p className ='game-mechanics-text'>
          <em>cyberpyre</em> is an unofficial supplement for Vampire: the Masquerade - 5th Edition, a tabletop role-playing game 
          which is sometimes colloquially referred to by players as <em>V5</em>.  If you are interested in this supplement, I 
          would recommend finding a copy of the V5 Corebook, and potentially the V5 Player’s Guide.  While references to 
          core mechanics of V5 will be provided, this supplement will largely assume that you have played V5 before, or 
          are at least familiar with most of the core mechanics.  If a core concept of V5 is more thoroughly explained in the 
          source material, references to the official books will be provided as necessary.
        </p>   
      </div>
      <img src={boot} style={{height:'95vh'}}></img>
      </div>
    </div>
  )
}

export default WhatIsCyberpyrePage;