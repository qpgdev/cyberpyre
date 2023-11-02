function ExperimentalCyberwareTable() {

    return (
        <div className='scrollable-div' style={{maxHeight: '95vh'}}>
            <div style={{display:'flex'}}>
                <div style={{margin: '40px', marginTop: '0px'}}>
                <p className ='game-mechanics-text' style={{marginTop: '0px', marginBottom: '0px',  marginRight: '0px', textAlign: 'left'}}>
                    &bull; Weak or niche experimental cyberware should begin with a Cyberware Density of 1;<br></br>
                    &bull;  Unremarkable or common experimental cyberware should begin with a Cyberware Density of 2;<br></br>
                    &bull;  Reasonably strong experimental cyberware should begin with a Cyberware Density of 3;<br></br>
                    &bull; Very strong experimental cyberware should begin with a Cyberware Density of 4;<br></br>
                    &bull; Powerful or story-altering experimental cyberware should begin with a Cyberware Density of 5.<br></br>
                </p>
                </div>
            </div>
        </div>

    )
}

export default ExperimentalCyberwareTable;