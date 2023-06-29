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
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'end',
  },
  menuContainer: {
    position: 'fixed', /* 고정 위치 설정 */
    top: 0, /* 상단에 고정 */
    left: 0, /* 좌측에 고정 */
    height: '100vh', /* 화면 전체 높이로 설정 */
    width: '20%',
    border: '1px solid red',
    ...styleComponent.flexColCenterSet,
  },
  mainContainer: {
    width: '80%',
    height: '100%',
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  profileBox: {
    width: '90%',
    height: '400px',
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