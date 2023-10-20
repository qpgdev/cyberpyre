function CyberwareDensityEffectsTable() {

  return (
    <div className='cyberpyre-density-effects-table' style={{border: '2px solid', marginTop: '50px', marginBottom: '50px', marginLeft: '50px', marginRight: '50px'}}>
        <p >
          <strong>
            Cyberware Density Effects Table
          </strong>
        </p>

        {/* Level 0 */}
        <div className='cyberware-density-box' style={{display: 'flex', borderTop: '2px solid', padding:'10px'}}>
          <p style={{minHeight:'1px', verticalAlign: 'center',  textAlign:'center', padding: '10px', paddingTop: '0px', width: '100px'}}>
            <strong> Level 0 </strong>
          </p>
          <div className='cyberware-density-effects-box' style={{paddingLeft: '1em'}}>
            <p style={{textAlign: 'left', marginBottom:'0px'}}>
              <em>The character has no cyberware installed.</em>
            </p>
            <p style={{textAlign: 'left', paddingLeft:'1em', marginTop: '0px'}}>
              &bull; The character cannot be affected by Social or Mental powers which are used via cyberware.
            </p>
          </div>
        </div>

        {/* Level 1 */}
        <div className='cyberware-density-box' style={{display: 'flex', borderTop: '2px solid', padding:'10px'}}>
        <p style={{minHeight:'1px', verticalAlign: 'center',  textAlign:'center', padding: '10px', paddingTop: '0px', width: '100px'}}>
            <strong> Level 1 </strong>
          </p>
          <div className='cyberware-density-effects-box' style={{paddingLeft: '1em'}}>
            <p style={{textAlign: 'left', marginBottom:'0px'}}>
              <em>The character has minimal cyberware.</em>
            </p>
            <p style={{textAlign: 'left', paddingLeft:'1em', marginTop: '0px'}}>
              &bull; Maximum Humanity reduced by a total of 1.<br></br>
              &bull; Maximum Blood Potency reduced by a total of 1 (cannot reduce less than minimum Blood Potency).<br></br>
              &bull; The character has +2 to dice pools that resist Social or Mental powers used via cyberware.<br></br>
              &bull; The character swaps 1 normal die with 1 Glitch die in any of their dice pools which uses their cyberware.<br></br>
            </p>
          </div>
        </div>

        {/* Level 2 */}
        <div className='cyberware-density-box' style={{display: 'flex', borderTop: '2px solid', padding:'10px'}}>
          <p style={{minHeight:'1px', verticalAlign: 'center',  textAlign:'center', padding: '10px', paddingTop: '0px', width: '100px'}}>
            <strong> Level 2 </strong>
          </p>
          <div className='cyberware-density-effects-box' style={{paddingLeft: '1em'}}>
            <p style={{textAlign: 'left', marginBottom:'0px'}}>
              <em>The character has an average amount of cyberware.</em>
            </p>
            <p style={{textAlign: 'left', paddingLeft:'1em', marginTop: '0px'}}>
              &bull; Maximum Humanity reduced by a total of 2.<br></br>
              &bull; Maximum Blood Potency reduced by a total of 1 (cannot reduce less than minimum Blood Potency).<br></br>
              &bull; The character has +1 to dice pools that resist Social or Mental powers used via cyberware.<br></br>
              &bull; The character swaps 1 normal die with 1 Glitch die in any of their dice pools which uses their cyberware.<br></br>
            </p>
          </div>
        </div>

        {/* Level 3 */}
        <div className='cyberware-density-box' style={{display: 'flex', borderTop: '2px solid', padding:'10px'}}>
          <p style={{minHeight:'1px', verticalAlign: 'center',  textAlign:'center', padding: '10px', paddingTop: '0px', width: '100px'}}>
            <strong> Level 3 </strong>
          </p>
          <div className='cyberware-density-effects-box' style={{paddingLeft: '1em'}}>
            <p style={{textAlign: 'left', marginBottom:'0px'}}>
              <em>The character has a slightly above average amount of cyberware.</em>
            </p>
            <p style={{textAlign: 'left', paddingLeft:'1em', marginTop: '0px'}}>
              &bull; Maximum Humanity reduced by a total of 3.<br></br>
              &bull; Maximum Blood Potency reduced by a total of 2 (cannot reduce less than minimum Blood Potency).<br></br>
              &bull; The character swaps 2 normal die with 2 Glitch dice in any of their dice pools which use their cyberware.<br></br>
            </p>
          </div>
        </div>

        {/* Level 4 */}
        <div className='cyberware-density-box' style={{display: 'flex', borderTop: '2px solid', padding:'10px'}}>
          <p style={{minHeight:'1px', verticalAlign: 'center',  textAlign:'center', padding: '10px', paddingTop: '0px', width: '100px'}}>
            <strong> Level 4 </strong>
          </p>
          <div className='cyberware-density-effects-box' style={{paddingLeft: '1em'}}>
            <p style={{textAlign: 'left', marginBottom:'0px'}}>
              <em>The character has a high amount of cyberware.</em>
            </p>
            <p style={{textAlign: 'left', paddingLeft:'1em', marginTop: '0px'}}>
              &bull; Maximum Humanity reduced by a total of 4.<br></br>
              &bull; Maximum Blood Potency reduced by a total of 2 (cannot reduce less than minimum Blood Potency).<br></br>
              &bull; The character swaps 2 normal dice with 2 Glitch dice in any of their dice pools which use their cyberware.<br></br>
            </p>
          </div>
        </div>

        {/* Level 5 */}
        <div className='cyberware-density-box' style={{display: 'flex', borderTop: '2px solid', padding:'10px'}}>
          <p style={{minHeight:'1px', verticalAlign: 'center',  textAlign:'center', padding: '10px', paddingTop: '0px', width: '100px'}}>
            <strong> Level 5 </strong>
          </p>
          <div className='cyberware-density-effects-box' style={{paddingLeft: '1em'}}>
            <p style={{textAlign: 'left', marginBottom:'0px'}}>
              <em>The character is almost more cyberware than flesh.</em>
            </p>
            <p style={{textAlign: 'left', paddingLeft:'1em', marginTop: '0px'}}>
              &bull; Maximum Humanity reduced by a total of 5.<br></br>
              &bull; Maximum Blood Potency reduced by a total of 3 (cannot reduce less than minimum Blood Potency).<br></br>
              &bull; The character has -1 to dice pools that resist Social or Mental powers used via cyberware.<br></br>
              &bull; The character swaps 3 normal dice with 3 Glitch dice in any of their dice pools which use their cyberware.<br></br>
            </p>
          </div>
        </div>

        {/* Level 6 */}
        <div className='cyberware-density-box' style={{display: 'flex', borderTop: '2px solid', padding:'10px'}}>
          <p style={{minHeight:'1px', verticalAlign: 'center',  textAlign:'center', padding: '10px', paddingTop: '0px', width: '100px'}}>
            <strong> Level 6 </strong>
          </p>
          <div className='cyberware-density-effects-box' style={{paddingLeft: '1em'}}>
            <p style={{textAlign: 'left', marginBottom:'0px'}}>
              <em>The character is more cyberware than flesh.</em>
            </p>
            <p style={{textAlign: 'left', paddingLeft:'1em', marginTop: '0px'}}>
              &bull; Maximum Humanity reduced by a total of 6.<br></br>
              &bull; Maximum Blood Potency reduced by a total of 3 (cannot reduce less than minimum Blood Potency).<br></br>
              &bull; The character has -2 to dice pools that resist Social or Mental powers used via cyberware.<br></br>
              &bull; The character swaps 3 normal dice with 3 Glitch dice in any of their dice pools which use their cyberware.<br></br>
            </p>
          </div>
        </div>

        {/* Level 7 */}
        <div className='cyberware-density-box' style={{display: 'flex', borderTop: '2px solid', padding:'10px'}}>
          <p style={{minHeight:'1px', verticalAlign: 'center',  textAlign:'center', padding: '10px', paddingTop: '0px', width: '100px'}}>
            <strong> Level 7 </strong>
          </p>
          <div className='cyberware-density-effects-box' style={{paddingLeft: '1em'}}>
            <p style={{textAlign: 'left', marginBottom:'0px'}}>
              <em>The character is significantly more cyberware than flesh.</em>
            </p>
            <p style={{textAlign: 'left', paddingLeft:'1em', marginTop: '0px'}}>
              &bull; Maximum Humanity reduced by a total of 7.<br></br>
              &bull; Maximum Blood Potency reduced by a total of 4 (cannot reduce less than minimum Blood Potency).<br></br>
              &bull; The character has -3 to dice pools that resist Social or Mental powers used via cyberware.<br></br>
              &bull; The character swaps 4 normal dice with 4 Glitch dice in any of their dice pools which use their cyberware.<br></br>
            </p>
          </div>
        </div>

        {/* Level 8 */}
        <div className='cyberware-density-box' style={{display: 'flex', borderTop: '2px solid', padding:'10px'}}>
          <p style={{minHeight:'1px', verticalAlign: 'center',  textAlign:'center', padding: '10px', paddingTop: '0px', width: '100px'}}>
            <strong> Level 8 </strong>
          </p>
          <div className='cyberware-density-effects-box' style={{paddingLeft: '1em'}}>
            <p style={{textAlign: 'left', marginBottom:'0px'}}>
              <em>The character is composed almost entirely of cyberware and is rapidly losing touch with their sense of self.</em>
            </p>
            <p style={{textAlign: 'left', paddingLeft:'1em', marginTop: '0px'}}>
              &bull; Maximum Humanity reduced by a total of 8.<br></br>
              &bull; Maximum Blood Potency reduced by a total of 4 (cannot reduce less than minimum Blood Potency).<br></br>
              &bull; The character has -3 to dice pools that resist Social or Mental powers used via cyberware.<br></br>
              &bull; The character swaps 4 normal dice with 4 Glitch dice in any of their dice pools which use their cyberware.<br></br>
            </p>
          </div>
        </div>

        {/* Level 9 */}
        <div className='cyberware-density-box' style={{display: 'flex', borderTop: '2px solid', padding:'10px'}}>
          <p style={{minHeight:'1px', verticalAlign: 'center',  textAlign:'center', padding: '10px', paddingTop: '0px', width: '100px'}}>
            <strong> Level 9 </strong>
          </p>
          <div className='cyberware-density-effects-box' style={{paddingLeft: '1em'}}>
            <p style={{textAlign: 'left', marginBottom:'0px'}}>
              <em>The character consists almost entirely of cyberware and teeters on the brink of cyberpsychosis. Anything could send them over the edge.</em>
            </p>
            <p style={{textAlign: 'left', paddingLeft:'1em', marginTop: '0px'}}>
              &bull; Maximum Humanity reduced by a total of 9.<br></br>
              &bull; Maximum Blood Potency reduced by a total of 5 (cannot reduce less than minimum Blood Potency).<br></br>
              &bull; The character has -4 to dice pools that resist Social or Mental powers used via cyberware.<br></br>
              &bull; The character swaps 5 normal dice with 5 Glitch dice in any of their dice pools which use their cyberware.<br></br>
            </p>
          </div>
        </div>

        {/* Level 10 */}
        <div className='cyberware-density-box' style={{display: 'flex', borderTop: '2px solid', padding:'10px'}}>
          <p style={{minHeight:'1px', verticalAlign: 'center',  textAlign:'center', padding: '10px', paddingTop: '0px', width: '100px'}}>
            <strong> Level 10 </strong>
          </p>
          <div className='cyberware-density-effects-box' style={{paddingLeft: '1em'}}>
            <p style={{textAlign: 'left', marginBottom:'0px'}}>
              <em>The character immediately experiences a life-shattering cyberpsychotic episode. </em>
            </p>
            <p style={{textAlign: 'left', paddingLeft:'1em', marginTop: '0px'}}>
              &bull; Maximum Humanity reduced by a total of 10.<br></br>
              &bull; Maximum Blood Potency reduced by a total of 5 (cannot reduce less than minimum Blood Potency).<br></br>
              &bull; The character has -5 to dice pools that resist Social or Mental powers used via cyberware.<br></br>
              &bull; The character swaps 5 normal dice with 5 Glitch dice in any of their dice pools which use their cyberware.<br></br>
              &bull; Players may act out one final scene with their character in the throes of cyberpsychosis before the character is lost to Storyteller control forever.<br></br>
            </p>
          </div>
        </div>
      </div>
  )
}

export default CyberwareDensityEffectsTable;