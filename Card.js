function Card({width, height, borderRadius, frontContent, backContent, offset}) {
  const [isClicked, setIsClicked] = React.useState(false);
  const styles = {
    scene: {height: height, width: width, perspective: '400px'},
    card: {borderRadius, position: 'relative', width: '100%', height: '100%', transition: 'transform 1s', transformStyle: 'preserve-3d', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', transformOrigin: offset ? 'center right' : 'center center'},
    cardFace: {boxSizing: 'border-box', position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', borderRadius, padding: '1rem'},
    cardFaceFront: {backgroundColor: 'blue'},
    cardFaceBack: {backgroundColor: 'red', transform: 'rotateY(180deg)'},
    isFlipped: {transform: offset ? 'translateX(-100%) rotateY(-180deg)' : 'rotateY(-180deg)'}
  }
  return <div style={styles.scene}>
    <div style={!isClicked ? styles.card : {...styles.card, ...styles.isFlipped}} onClick={()=>setIsClicked(prev => !prev)}>
      <div style={{...styles.cardFace, ...styles.cardFaceFront}}>{frontContent}</div>
      <div style={{...styles.cardFace, ...styles.cardFaceBack}}>{backContent}</div>
    </div>
  </div>
}
