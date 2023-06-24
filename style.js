const styleComponent = {
  width: {
    width100vw: '100vw',
    width100p: '100%',
  },
  height: {
    height100vh: '100vh',
    height100p: '100%',
  },
  flexRowCenterSet: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexColCenterSet: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const style = {
  rootContainer: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    ...styleComponent.flexRowCenterSet,
  },
  menuContainer: { 
    width: '20%',
    height: '100%',
    border: '1px solid red',
    ...styleComponent.flexColCenterSet,
  },
  mainContainer: {
    width: '80%',
    height: '100%',
    border: '1px solid red',
    ...styleComponent.flexRowCenterSet,
  },
  profileBox: {
    width: '90%',
    height: '30%',
    border: '1px solid red',
    ...styleComponent.flexColCenterSet,
  },
  indexBox: {
    width: '90%',
    height: '40%',
  },
  indexComponent: {
    width: styleComponent.width.width100p,
    height: '15%',
    border: '1px solid red',
    marginTop: '10px',
    marginBottom: '10px',
  },
  writeBox: {
    width: '90%',
    height: '200px',
    border: '1px solid blue',
  },
  titleBox: {
    width: styleComponent.width.width100p,
    height: '30%',
    border: '1px solid red',
  },
  detailBox: {
    width: styleComponent.width.width100p,
    height: '70%',
    border: '1px solid red',
  }
}