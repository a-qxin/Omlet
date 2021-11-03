import React from 'react'

// import Bar3 from '../../public/images/bar_3.png';
// import ClassBio from '../../public/images/Bio1.png';
// import Human1 from '../../public/images/human1.png';

function Set() {

  // const set = {
  //   width: '300px',
  //   height: '200px',
  //   borderRadius: '20px',
  //   margin: '12px',
  //   boxShadow: '0 4px 20px rgba(0, 0, 0, .25)',
  //   background: '#ffffff',
  //   display: 'flex'
  // };

  // const dottedBorder = {
  //   width: '300px',
  //   height: '200px',
  //   borderRadius: '20px',
  //   margin: '12px',
  //   border: '1.5px dashed #000000',
  // };

  // const setAccentGreen = {
  //   width: '14px',
  //   borderRadius: '20px 0 0 20px',
  //   height: '100%',
  //   background: '#2ee340'
  // };
  // const setAccentRed = {
  //   width: '14px',
  //   borderRadius: '20px 0 0 20px',
  //   height: '100%',
  //   background: '#ff6767'
  // };
  // const setAccentBlue = {
  //   width: '14px',
  //   borderRadius: '20px 0 0 20px',
  //   height: '100%',
  //   background: '#00cabe'
  // };
  // const setAccentPurple = {
  //   width: '14px',
  //   borderRadius: '20px 0 0 20px',
  //   height: '100%',
  //   background: '#B073ff'
  // };

  // const setContents = {
  //   margin: '30px 30px',
  //   width: '100%',
  //   position: 'relative',
  // };

  // const setDetails = {
  //   position: 'absolute',
  //   bottom: '0',
  //   width: '100%'
  // };

  // const setTitle = {
  //   fontWeight: '600',
  //   fontSize: '26px',
  //   lineHeight: '30px',
  //   marginBottom: '8px'
  // };

  // const courseCode = {
  //   fontSize: '14px',
  //   lineHeight: '14px',
  //   margin: '0px'
  // };

  // const setHr = {
  //   border: '1px solid #c4c4c4',
  //   margin: '8px 0px'
  // };

  // const numTerms = {
  //   fontSize: '14px',
  //   lineHeight: '14px',
  //   margin: '0px'
  // };

  const cardContainer = {
    backgroundColor: 'white',
    margin: '15px',
    borderRadius: '10px',
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
  };

  const cardContents = {
    padding: '30px',
  }

  const cardTop = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const cardAccentColor = {
    width: "100%",
    height: "10px",
    backgroundColor: "#4fbe5a",
    borderRadius: '10px 10px 0 0',
  }

  const cardTitle = {
    fontWeight: 'bold',
    fontSize: '20px',
  };

  const cardClassImage = {
    width: '48px',
    height: '48px',
    borderRadius: '100px',
  };

  const classImage = {
    width: '48px',
    height: '48px',
  };

  const cardBottom = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'flex-end',
  };

  const cardBottomLeft = {
    margin:'0 10px 0 0',
    width: '70%'
  };

  const xpbar = {
    // display: 'flex'
    width: '100%'
  };

  // const cardBottomRight = {
  //   display: 'flex',
  //   alignContent: 'flex-end',
  // };

  const cardAuthorImage = {
    width: '28px',
    height: '28px',
    borderRadius: '50px',
  };

  const authorImage = {
    width: '28px',
    height: '28px',
  };

  return (
    <div style={cardContainer}>
      <div style={cardAccentColor} />
      <div style={cardContents}>
        <div style={cardTop}>
          <div>
            <div style={{ color: "#979797" }}>BIOL - 101</div>
            <div style={cardTitle}>Cell types exam 1</div>
          </div>
          <div style={cardClassImage}><img src="public/images/Bio1.png" style={classImage} /></div>
        </div>
        <br />
        <div style={cardBottom}>
          <div style={cardBottomLeft}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <div style={{ color: "#979797" }}>12 Terms</div>
              <div style={{ color: "#979797" }}>460 | 1200</div>
            </div>
            <div ><img style={xpbar} src="public/images/bar_3.png" /></div>
          </div>
          <div style={cardAuthorImage}><img src="public/images/human1.png" style={authorImage} /></div>
        </div>
      </div>
    </div>



    // <div style={set}>
    //   <div style={setAccentPurple}></div>
    //   <div style={setContents}>
    //     <div>
    //       <p style={setTitle}>Potions</p>
    //       <p style={courseCode}>PTNS - 101</p>
    //       <div style={setDetails}>
    //         <hr style={setHr} />
    //         <p style={numTerms}>5 Terms</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div style={set}>
    //       <div style={setAccentGreen}></div>
    //       <div style={setContents}>
    //         <div>
    //           <p style={setTitle}>Defence Against the Dark Arts</p>
    //           <p style={courseCode}>DADA - 101</p>
    //           <div style={setDetails}>
    //             <hr style={setHr} />
    //             <p style={numTerms}>15 Terms</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div style={set}>
    //       <div style={setAccentPurple}></div>
    //       <div style={setContents}>
    //         <div>
    //           <p style={setTitle}>Potions</p>
    //           <p style={courseCode}>PTNS - 101</p>
    //           <div style={setDetails}>
    //             <hr style={setHr} />
    //             <p style={numTerms}>5 Terms</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div style={set}>
    //       <div style={setAccentBlue}></div>
    //       <div style={setContents}>
    //         <div>
    //           <p style={setTitle}>History of Magic</p>
    //           <p style={courseCode}>HOM - 101</p>
    //           <div style={setDetails}>
    //             <hr style={setHr} />
    //             <p style={numTerms}>8 Terms</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div style={set}>
    //       <div style={setAccentRed}></div>
    //       <div style={setContents}>
    //         <div>
    //           <p style={setTitle}>Transfiguration</p>
    //           <p style={courseCode}>TNFG - 101</p>
    //           <div style={setDetails}>
    //             <hr style={setHr} />
    //             <p style={numTerms}>13 Terms</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
  );
}

export { Set };