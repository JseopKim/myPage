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
    height: '130vh',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'end',
  },
  menuContainer: {
    width: '100%',
    height: '30%',
    ...styleComponent.flexColCenterSet,
    justifyContent: 'space-between',
  },
  menuTitle: {
    width: '95%',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'center',
  },
  menuTitleText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'center',
    fontSize: '70px'
  },
  menuBox: {
    width: '95%',
    height: '40%',
    ...styleComponent.flexRowCenterSet,
    justifyContent: 'end',
    gap: '50px',
  },
  menu: {
    ...styleComponent.flexRowCenterSet,
    justifyContent: 'space-evenly',
    fontSize: '50px',
  },
  mainContainer: {
    width: styleComponent.width.width100p,
    height: styleComponent.height.height100p,
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileBox: {
    width: styleComponent.width.width100p,
    height: styleComponent.height.height100p,
    border: '1px solid red',
    ...styleComponent.flexRowCenterSet,
    justifyContent: 'start',
  },
  profileImgBox: {
    width: '60%',
    height: '100%',
    border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-evenly',
    marginLeft: '30px',
  },
  profileImg: {
    width: '300px',
    height: '300px',
    border: '1px solid red',
  },
  profileInfo: {
    width: '90%',
    height: '40%',
    border: '1px solid red',
  },
  profileContentBox: {
    width: '40%',
    height: '100%',
    border: '1px solid red',
    backgroundColor: 'black',
    ...styleComponent.flexColCenterSet,
    gap: '40px',
  },
  profileContent: {
    width: '60%',
    height: '7%',
    border: '1px solid white',
  },
  growthContainer: {
    width: styleComponent.width.width100p,
    height: styleComponent.height.height100p,
    ...styleComponent.flexColCenterSet,
    justifyContent: 'space-evenly',
  },
  contentBox: {
    width: styleComponent.width.width100p,
    height: styleComponent.height.height100p,
    ...styleComponent.flexRowCenterSet,
    justifyContent: 'space-evenly',
  },
  growthImg: {
    width: '300px',
    height: '300px',
    border: '1px solid red',
    borderRadius: '20px',
  },
  writeBox: {
    width: '1000px',
    height: '200px',
    border: '1px solid blue',
    borderRadius: '20px',
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
    width: '100%',
    height: '60%',
    border: '1px solid red',
    marginTop: '30px',
    ...styleComponent.flexRowCenterSet,
    justifyContent: 'space-evenly',
    position: "relative",
    overflow: "hidden",
  },
  boxComponent: {
    width: '300px',
    border: '1px solid red',
    aspectRatio: '1/1',
    ...styleComponent.flexRowCenterSet,
    fontSize: '40px',
  },
}

const eventStyle = {
  menuEvent: {
    borderBottom: '8px solid #ffffff',
    cursor: 'pointer',
  },
}