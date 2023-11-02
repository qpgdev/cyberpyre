import cyberSalubri from '../../assets/salubri-cyberpunk.jpg';
import ExperimentalCyberwareTable from './what-are-augmentations-page-components/ExperimentalCyberwareTable';

// /home/qpgdev/dev/side-projects/cyberpyre/src/assets/salubri-cyberpunk.jpg

function WhatAreAugmentations() {

    const WhatAreAugmentationsStylingsTextBox = {

    }

    return (
        <div className="container">
            <div className="scrollable-div">
                <div style={{margin: '100px'}}>
                <p className="setting-the-scene-title">
                    what are augmentations?
                </p>
                <p className='game-mechanics-text' style={{marginTop: '0px', textAlign: 'left'}}>
                    In cyberpyre, installed cyberware is typically mechanically represented by <strong>Augmentations</strong>.
                    There are many forms of Augmentations, including:
                </p>
                <div style={{display: 'flex'}}>
                    <p className ='game-mechanics-text' style={{padding: '10px', marginTop: '0px', marginBottom: '0px', marginLeft: '20px', marginRight: '0px', textAlign: 'left'}}>
                        &bull; <strong>Attribute Augmentations</strong> that increase one of a character's Attributes; <br></br>
                        &bull; <strong>Neural Processors</strong> that allow for bonuses to Skills; <br></br>
                        &bull; <strong>Operating Systems</strong> which provide unique Powers; <br></br>
                        &bull; <strong>Augmentation Merits</strong> that allow for specialized abilities; <br></br>
                        &bull; <strong>Weapon</strong> Augmentations. <br></br>
                    </p>
                </div>
                <p className='game-mechanics-text'>
                    Storytellers are encouraged to experiment with homebrew Augmentations which mimic existing or create new Disciplines, Merits, or Advantages. 
                    The Cyberware Density will vary depending on the strength of the Merit itself in the chronicle, 
                    and it is left to Storyteller discretion whether the Cyberware Density of a custom piece of equipment needs to be increased at all during the course of the game. 
                    After all, the full effects of “experimental” cyberware are hard to predict for both ripperdocs and Storytellers alike.
                </p>
                <ExperimentalCyberwareTable></ExperimentalCyberwareTable>
            </div>
            </div>
        <img className="setting-the-scene-img"src={cyberSalubri}>
        </img>
      </div>
    )
}
/*
        <div className='scrollable-div' style={{maxHeight: '95vh'}}>
            <div style ={{ marginTop: '50px', marginLeft: '200px'}}>
                <p className="setting-the-scene-title">
                    what are augmentations?
                </p>
            <div style={{display:'flex'}}>
                <div style={{margin: '40px', marginTop: '0px'}}>
                    <p className='game-mechanics-text' style={{marginTop: '0px', textAlign: 'left'}}>
                        In cyberpyre, installed cyberware is typically mechanically represented by <strong>Augmentations</strong>.
                        There are many forms of Augmentations, including:
                    </p>
                    <div style={{display: 'flex'}}>
                        <p className ='game-mechanics-text' style={{padding: '10px', marginTop: '0px', marginBottom: '0px', marginLeft: '20px', marginRight: '0px', textAlign: 'left'}}>
                            &bull; <strong>Attribute Augmentations</strong> that increase one of a character's Attributes; <br></br>
                            &bull; <strong>Neural Processors</strong> that allow for bonuses to Skills; <br></br>
                            &bull; <strong>Operating Systems</strong> which provide unique Powers; <br></br>
                            &bull; <strong>Augmentation Merits</strong> that allow for specialized abilities; <br></br>
                            &bull; <strong>Weapon</strong> Augmentations. <br></br>
                        </p>
                    </div>
                    <p className='game-mechanics-text'>
                        Storytellers are encouraged to experiment with homebrew Augmentations which mimic existing or create new Disciplines, Merits, or Advantages. 
                        The Cyberware Density will vary depending on the strength of the Merit itself in the chronicle, 
                        and it is left to Storyteller discretion whether the Cyberware Density of a custom piece of equipment needs to be increased at all during the course of the game. 
                        After all, the full effects of “experimental” cyberware are hard to predict for both ripperdocs and Storytellers alike.
                    </p>
                    <ExperimentalCyberwareTable></ExperimentalCyberwareTable>
                </div>
                <img src={cyberSalubri} style={{ height: '95vh'}}></img>
            </div>
        </div>
    </div>
*/
export default WhatAreAugmentations;