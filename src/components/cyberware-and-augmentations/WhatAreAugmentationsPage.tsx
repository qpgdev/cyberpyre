import cyberSalubri from '../../assets/cyberpunk-5841711_1920.jpg';

function WhatAreAugmentations() {

    return (
        <div className='scrollable-div' style={{maxHeight: '95vh'}}>
        
        <div style ={{ marginTop: '50px', marginLeft: '200px', marginRight: '200px' }}>
            <p className="setting-the-scene-title">
                what are augmentations?
            </p>
            <div style={{display:'flex'}}>
                <div style={{margin: '40px', marginTop: '0px'}}>
                <p className='game-mechanics-text' style={{marginTop: '0px', textAlign: 'left'}}>
                    In cyberpyre, installed cyberware is typically mechanically represented by <strong>Augmentations</strong>.
                    There are many forms of Augmentations, including:
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <p className ='game-mechanics-text' style={{padding: '10px', marginTop: '20px', marginBottom: '20px', marginLeft: '50px', marginRight: '50px', textAlign: 'left'}}>
                    &bull; Augmentations that increase one of a character's Attributes; <br></br>
                    &bull; Neural Processors that allow for bonuses to Skills; <br></br>
                    &bull; Operating Systems which provide unique Powers; <br></br>
                    &bull; Augmentation Merits that allow for specialized abilities; <br></br>
                    &bull; Weapon Augmentations. <br></br>
                </p>
                </div>
                <p className='game-mechanics-text'>
                Storytellers are encouraged to experiment with homebrew Augmentations which mimic existing or create new Disciplines, Merits, or Advantages. 
                The Cyberware Density will vary depending on the strength of the Merit itself in the chronicle, 
                and it is left to Storyteller discretion whether the Cyberware Density of a custom piece of equipment needs to be increased at all during the course of the game. 
                After all, the full effects of “experimental” cyberware are hard to predict for both ripperdocs and Storytellers alike.
                </p>
                <p className='game-mechanics-text'>
                Weak or niche experimental cyberware should begin with a Cyberware Density of 1;
                Unremarkable or common experimental cyberware should begin with a Cyberware Density of 2;
                Reasonably strong experimental cyberware should begin with a Cyberware Density of 3;
                Very strong experimental cyberware should begin with a Cyberware Density of 4;
                Powerful or story-altering experimental cyberware should begin with a Cyberware Density of 5.
            </p>
                </div>
                <img src={cyberSalubri} style={{maxHeight: '550px'}}></img>
            </div>



        </div>

        </div>

    )
}

export default WhatAreAugmentations;