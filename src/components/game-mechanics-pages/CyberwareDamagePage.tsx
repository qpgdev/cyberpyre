import '../../App.css';

function CyberwareDamagePage() {
  return (
    <div className='scrollable-div' style={{maxHeight: '95vh'}}>

    <div style ={{ marginTop: '50px', marginLeft: '200px', marginRight: '200px'}}>

        <p className="setting-the-scene-title">
            damaging, targeting, or destroying cyberware
        </p>
        <p className ='game-mechanics-text'>
            Once a character becomes impaired (their Health tracker is completely filled with damage), 
            further damage to the character also damages their cyberware in an equal amount to the damage dealt.
            While the effects of this damage varies by cyberware,
            unless otherwise specified, the result of this damage is the reduction of benefits provided by that cyberware on a one-for-one basis of the benefits provided 
            by the Cyberware Density of that cyberware.  Damage to cyberware does not reduce Cyberware Density.
        </p>
        <p className ='game-mechanics-text'>
            The effects of the Cyberware Damage varies depending on the cyberware: <br></br>
        </p>
        <p className ='game-mechanics-text' style={{padding: '10px', marginTop: '20px', marginBottom: '20px', marginLeft: '50px', marginRight: '50px'}}>
            &bull; Each point of Cyberware Damage to Attribute Augmentations eliminates any bonuses provided by the Cyberware Density of the damaged cyberware on a one-for-one basis; <br></br>
            &bull; Each point of Cyberware Damage to a neural processor reduces the total number of chip slots as well as destroying the chips in the affected slots;<br></br>
            &bull; Each point of Cyberware Damage to cyberware which grants Cyber or Discipline powers reduces the level of the Cyber power or Discipline by one dot 
            and disables access to a power granted by that cyberware, beginning with the highest level Discipline power granted by that cyberware and descending from there; <br></br>
            &bull; Cyberware Damage to Weapon cyberware disables the weapon once damage equal to the Cyberware Density level of the weapon has been dealt to the cyberware;<br></br>
            &bull; Each point of Cyberware Damage to Armor-specific cyberware reduces the character's Armor by 2 dots;<br></br>
            &bull; Each point of Cyberware Damage to Merit-specific or experimental cyberware reduces the dots provided by that cyberware by 1, 
            and eliminates that Merit once damage equal to the Cyberware Density level of the Merit has been dealt to the cyberware.<br></br>
        </p>
        <p className ='game-mechanics-text'>
            A piece of cyberware cannot receive more damage than its Cyberware Density level without being fully destroyed. 
        </p>
        <p className ='game-mechanics-text'>
            Unless the assailant made a called shot (see Vampire: the Masquerade: 5th Ed Corebook, p.___), 
            the type of cyberware that is damaged is determined by the damaged character. 
            Damaged cyberware does not decrease a character’s Cyberware Density until removed or swapped following the tests regarding <strong>Installing, Removing, or Swapping Cyberware.</strong>
        </p>

        <p className ='example-text' style={{border: '2px solid', padding: '10px', marginTop: '50px', marginBottom: '50px', marginLeft: '50px', marginRight: '50px'}}>
            <strong> Example: </strong>
            <em>Abby has a neural processor with a Cyberware Density of 2, 
            a cybernetic arm with a Cyberware Density of 3 which grants her 3 levels in Potence, 
            and a cybernetic leg with a Cyberware Density of 1 which grants her +1 to her Dexterity and +1 point of Armor. 
            Abby has 5 Health boxes and currently suffers from five levels of Superficial damage. 
            Since each box of her Health tracker is filled, she is considered to be Impaired. 
            Any additional damage to her person will also cause damage to her cyberware. 
            She takes six additional Superficial damage, which, after halved, 
            converts three of her Health tracker's Superficial damage to Aggravated Damage and also causes three levels of Cyberware Damage. 
            She decides to allocate one Cyberware Damage to each piece: 
            the damage to her neural processor causes her to lose access to one of the chip slots she has installed, 
            as well as destroying the chip installed in that slot; 
            the damage to her arm causes her to lose one dot in Potence, 
            which also causes her to lose access to a level three Potence power; 
            the damage to her leg causes her to lose the +1 bonus to her Dexterity and the +1 to her Armor.</em>
        </p>
        <p className ='game-mechanics-text'>
            A Called Shot on a specific piece of cyberware by an assailant during combat is made with a negative modifier to the attacker's dice pool 
            equal to 2 plus the Cyberware Density of the targeted cyberware. 
            Each success on the margin inflicts Cyberware Damage as listed above in addition to the standard Health damage dealt by the attack. 
            A restrained target or a target affected by surprise only requires an attack test by the assailant against a difficulty of the Cyberware Density 
            of the cyberware in order to directly damage it.
        </p>
        <p className ='game-mechanics-text'>
            Some weapons and powers are specifically designed to damage or disrupt the function of cyberware. 
            These weapons and powers typically deal temporary Cyberware Damage to cyberware to disable it, 
            which lasts until the end of the scene; if the attack roll is a critical success, however, the Cyberware Damage is permanent as normal.
        </p> 
        <p className ='game-mechanics-text'>
            Damaged cyberware can be repaired by a character with the right know-how, facilities, and equipment. 
            Characters attempting to repair cyberware should follow the rules for Installing, Removing, or Swapping Cyberware listed within the <strong>installing / removing cyberware</strong> page 
            listed under the <strong>game mechanics</strong> tab, 
            increasing the difficulty by 1 for each level of damage the cyberware has sustained and repairing up to two levels of damage worth 
            of cyberware for each success greater than the margin on the Technology roll. 
            This roll cannot repair beyond the maximum Cyberware Density of the installed cyberware.
        </p>
        <p className ='example-text' style={{border: '2px solid', padding: '10px', marginTop: '50px', marginBottom: '50px', marginLeft: '50px', marginRight: '50px'}}>
            <strong> Example: </strong>
            <em>A neural processor with a Cyberware Density of 3 has sustained two points of Cyberware Damage, 
                which sets the difficulty of repairing it to 5. 
                The character attempting the repair rolls six successes, repairing two levels worth of Cyberware Damage - 
                this restores the two damaged chip slots back to full working capacity (though the chips contained therein were still destroyed).</em>
        </p>        
    </div>

    </div>
  )
}

// export component
export default CyberwareDamagePage;