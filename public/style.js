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
    backgroundColor: '#0C0F0A',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'end',
    overflowX: 'hidden',
  },
  menuContainer: {
    width: '100%',
    height: '30%',
    ...styleComponent.flexColCenterSet,
    justifyContent: 'space-between',
  },
  menuTitle: {
    width: '95%',
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'center',
    fontWeight: 700, 
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
    fontWeight: 700, 
  },
  mainContainer: {
    width: styleComponent.width.width100p,
    height: styleComponent.height.height100p,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileBox: {
    width: styleComponent.width.width100p,
    height: styleComponent.height.height100p,
    ...styleComponent.flexRowCenterSet,
    justifyContent: 'start',
  },
  profileImgBox: {
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-evenly',
    marginLeft: '30px',
    borderLeft: '5px solid #79EF39',
  },
  profileImg: {
    width: '300px',
    height: '400px',
    marginLeft: '30px',
    backgroundImage: "url('./picture.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: '10px',
  },
  profileInfo: {
    width: '90%',
    height: '40%',
    marginLeft: '30px',
    fontSize: '30px',
    fontWeight: 400,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRight: '5px solid #79EF39',
  },
  profileContentBox: {
    width: '40%',
    height: '100%',
    backgroundColor: '#0C0F0A',
    ...styleComponent.flexColCenterSet,
    gap: '40px',
    borderTop: '3px solid #79EF39',
  },
  profileContent: {
    width: '20%',
    height: '7%',
    borderRadius: '20px',
    backgroundColor: '#79EF39',
    color: '#091802',
    fontSize: '20px',
    ...styleComponent.flexRowCenterSet,
    textDecoration: 'none',
  },
  icon: {
    width: '50px',
    height: '50px'
  },
  growthContainer: {
    width: styleComponent.width.width100p,
    height: styleComponent.height.height100p,
    ...styleComponent.flexColCenterSet,
    justifyContent: 'space-evenly',
  },
  contentBox: {
    width: '100%',
    height: '100%',
    ...styleComponent.flexRowCenterSet,
    justifyContent: 'space-evenly',
  },
  setBox: {
    width: '50px',
    height: '50px',
    border: '3px solid #79EF39',
    borderRadius: '15px',
  },
  writeBox: {
    width: '1000px',
    height: '150px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  titleBox: {
    width: styleComponent.width.width100p,
    height: '30%',
    marginLeft: '20px',
    fontSize: '25px',
  },
  detailBox: {
    width: styleComponent.width.width100p,
    height: '40%',
    marginLeft: '20px',
  },
  linkBox: {
    width: styleComponent.width.width100p,
    height: '30%',
    marginLeft: '20px',
  },
  imgGithub: {
    textDecoration: 'none',
    color: '#79EF39',
  },
  boxContainer: {
    width: '100%',
    height: '60%',
    marginTop: '30px',
    ...styleComponent.flexRowCenterSet,
    justifyContent: 'space-evenly',
  },
  boxComponent: {
    width: '300px',
    aspectRatio: '1/1',
    ...styleComponent.flexRowCenterSet,
    fontSize: '40px',
    border: '5px solid #79EF39',
    borderRadius: '30px',
    boxShadow: "0 0 10px 5px rgba(121, 239, 57, 0.5)",
    cursor: 'pointer',
  },
  modal: {
    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '10%',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#091802',
    margin: '10% auto',
    padding: '20px',
    boxShadow: "0 0 10px 5px rgba(121, 239, 57, 0.3)",
    width: '80%',
    height: '70%',
    borderRadius: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  aboutContainer: {
    width: styleComponent.width.width100p,
    height: styleComponent.height.height100p,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subMenuBox: {
    height: '70%',
  },
  subMenuNameBox: {
    width: '100%',
    height: '10%',
  },
  subMenu: {
    width: '180px',
    height: '95%',
    backgroundColor: '#79EF39',
    borderRadius: '50px',
    ...styleComponent.flexRowCenterSet,
    fontSize: '20px',
    color: '#091802',
  },
  subMenuDetailBox: {
    width: styleComponent.width.width100p,
    height: '90%',
    ...styleComponent.flexRowCenterSet,
  },
  subMenuDetail: {
    height: '100%',
    marginLeft: '20px',
  },
  education: {
    display: 'flex',
    flexDirection: 'column',
  },
  educationFont: {
    fontSize: '30px',
  },
  educationTitle: {
    fontSize: '50px',
  },
  skillBox: {
    width: '50%',
    height: styleComponent.height.height100p,
  },
  skillTitleName: {
    width: styleComponent.width.width100p,
    height: '33.33%',
    fontSize: '50px',
  },
  skillContentName: {
    width: styleComponent.width.width100p,
    height: '33.33%',
  },
  activityBox: {
    width: '33.33%',
    height: styleComponent.height.height100p,
  },
  activityTitleOne: {
    width: styleComponent.width.width100p,
    height: '80%',
    fontSize: '50px',
  },
  activityTitleTwo: {
    width: styleComponent.width.width100p,
    height: '20%',
    fontSize: '50px',
  },
  activitySubTitleOneThree: {
    width: styleComponent.width.width100p,
    height: '15%',
    fontSize: '30px',
  },
  activitySubTitleTwo: {
    width: styleComponent.width.width100p,
    height: '50%',
    fontSize: '30px',
  },
  activitySubTitleFour: {
    width: styleComponent.width.width100p,
    height: '20%',
    fontSize: '30px',
  },
  activityContentOne: {
    width: styleComponent.width.width100p,
    height: '15%',
  },
  activityContentTwo: {
    width: styleComponent.width.width100p,
    height: '50%',
  },
  activityContentThree: {
    width: styleComponent.width.width100p,
    height: '15%',
  },
  activityContentFour: {
    width: styleComponent.width.width100p,
    height: '20%',
  },
}

const eventStyle = {
  menuEvent: {
    borderBottom: '8px solid #ffffff',
    cursor: 'pointer',
  },
}