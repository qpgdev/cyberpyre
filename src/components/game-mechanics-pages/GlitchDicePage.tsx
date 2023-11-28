import '../../App.css';

function GlitchDicePage() {
  return (
    <div className='scrollable-div' style={{maxHeight: '95vh'}}>

    <div style ={{ marginTop: '50px', marginLeft: '200px', marginRight: '200px'}}>
        <p className="setting-the-scene-title">
            glitch dice, glitchy criticals, and terminal failures
        </p>
        <p className ='game-mechanics-text'>
            Each time a character with cyberware compiles a dice pool (see Vampire: the Masquerade: 5th Ed Corebook, p.___) which utilizes any of that cyberware, 
            the dice pool must be augmented with <strong>Glitch Dice</strong> (usually blue or purple, 
            but you may choose any color other than those you are using for Hunger dice or normal dice). 
            Attribute rolls, Discipline power rolls, Operating System power rolls, 
            and any other roll which utilize a character’s installed cyberware will swap a number of normal dice with Glitch Dice equal to half their character’s Cyberware Density, rounded up.
        </p>
        <p className ='game-mechanics-text'>
            If a character rolls a critical success and one of the 10s lands on a Glitch die, that is considered a <strong>Glitchy Critical</strong>.  
            The character still succeeds in their action, but they do so at a cost - 
            focused solely on achieving their goal, they may think themselves transhuman (or subhuman) and lose any concern for collateral damage or for the well-being of those around them. 
            The character could begin to disassociate, and watch their body perform actions they’re barely cognizant of making.  
            Storytellers are encouraged to be creative here, but ultimately the message to your players is: 
            <em>  You achieve your goal, but at what cost?</em>
        </p>
        <p className ='game-mechanics-text'>
            If a character fails a dice roll which resulted in at least one 1 on a Glitch die, that is considered a <strong>Terminal Failure.  </strong> 
            The character fails their action catastrophically, in an incredibly obvious way. Terminal Failures often have lasting consequences, 
            and can result in a cyberpsychotic episode or in a <strong>Cybernetic Compulsion</strong> as the character becomes acutely aware of (or beholden to) the cybernetics in their body.
        </p>

        <p className ='game-mechanics-text'>
            For vampires, any Glitch Dice in their dice pool are assumed to be both Hunger Dice and Glitch Dice simultaneously.  
            First swap Glitch dice for normal dice, subtract the number of Glitch dice added from the Hunger dice to be added, 
            then swap the remaining Hunger dice with normal dice as usual.  
            The Storyteller should be sure to describe a Glitchy Critical as if the vampire also rolled a Messy Critical 
            (see Vampire: the Masquerade: 5th Ed Corebook, p.___).
      </p>

      <p className ='example-text' style={{border: '2px solid', padding: '10px', marginTop: '50px', marginBottom: '50px', marginLeft: '50px', marginRight: '50px'}}>
        <strong> Example: </strong>
        <em>Isaac, who is making a Strength + Brawl roll which benefits from a Strength bonus from his cybernetic arm, will need to swap Glitch Dice into his dice pool. 
            Isaac is a vampire with one Hunger and a Cyberware Density of seven. 
            He is compiling a dice pool that consists of six dice in total. 
            The dice pool will consist of four blue Glitch dice and two normal dice. 
            Claire, on the other hand, is making a Discipline roll using a Discipline power obtained through cyberware. 
            Claire is a vampire with five Hunger and a Cyberware Density of four, and her dice pool consists of four dice in total. 
            Her dice pool will consist of two Glitch dice and two Hunger dice.</em>
      </p>
    </div>
    </div>
  )
}

// export component
export default GlitchDicePage;