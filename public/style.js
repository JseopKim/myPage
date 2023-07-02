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
    height: '2000px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'end',
  },
  menuContainer: {
    width: '100%',
    height: '20%',
    border: '1px solid blue',
    ...styleComponent.flexColCenterSet,
  },
  menuTitle: {
    width: '95%',
    height: '20%',
    border: '1px solid red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitleText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'center',
    border: '1px solid blue',
    fontSize: '70px',
  },
  menuBox: {
    width: '95%',
    height: '50%',
    ...styleComponent.flexRowCenterSet,
    justifyContent: 'end',
    alignItems: 'end',
    border: '1px solid red',
    gap: '50px',
  },
  menu: {
    ...styleComponent.flexRowCenterSet,
    justifyContent: 'space-evenly',
    border: '1px solid red',
    fontSize: '50px',
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileBox: {
    width: '100%',
    height: '100%',
    border: '1px solid red',
    ...styleComponent.flexColCenterSet,
    justifyContent: 'start',
  },
  profileImg: {
    width: '300px',
    height: '300px',
    border: '1px solid red',
  },
  writeBox: {
    width: '90%',
    height: '200px',
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
  },
  boxContainer: {
    width: '90%',
    height: '15%',
    border: '1px solid red',
    marginTop: '30px',
    ...styleComponent.flexRowCenterSet,
    justifyContent: 'space-evenly',
  },
  boxComponent: {
    width: '15%',
    height: '70%',
    border: '1px solid red',
  },
}

const eventStyle = {
  menuEvent: {
    borderBottom: '8px solid black',
    cursor: 'pointer',
  },
}