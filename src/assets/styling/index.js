import {StyleSheet, Platform} from 'react-native';
import colors from '.../colors';

export default StyleSheet.create({
  jc: {
    justifyContent: 'center',
  },
  je: {
    justifyContent: 'flex-end',
  },
  js: {
    justifyContent: 'flex-start',
  },
  jsb: {
    justifyContent: 'space-between',
  },
  jsa: {
    justifyContent: 'space-around',
  },
  ac: {
    alignItems: 'center',
  },
  ae: {
    alignItems: 'flex-end',
  },
  as: {
    alignItems: 'flex-start',
  },
  alignSelfS: {
    alignSelf: 'flex-start',
  },
  jcac: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    display: 'flex',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flexGrow: {
    flexGrow: 1,
  },
  flex0_5: {
    flex: 0.5,
  },
  flex2: {
    flex: 2,
  },
  absolute: {
    position: 'absolute',
  },
  absoluteObject: {
    ...StyleSheet.absoluteFillObject,
  },
  ofh: {
    overflow: 'hidden',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textLeft: {
    textAlign: 'left',
  },
  h10: {
    height: 10,
  },
  h15: {
    height: 15,
  },
  h20: {
    height: 20,
  },
  h30: {
    height: 30,
  },
  h40: {
    height: 40,
  },
  h50: {
    height: 50,
  },
  h100: {
    height: 100,
  },
  h150: {
    height: 150,
  },
  h200: {
    height: 200,
  },
  w90: {
    width: 90,
  },
  w30: {
    width: 30,
  },
  w50: {
    width: 50,
  },
  w60: {
    width: 60,
  },
  w100: {
    width: 100,
  },
  w150: {
    width: 150,
  },
  w200: {
    width: 200,
  },
  m0: {
    margin: 0,
    marginStart: 0,
    marginEnd: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  m5: {
    margin: 5,
  },
  m10: {
    margin: 10,
  },
  m20: {
    margin: 20,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  ms5: {
    marginStart: 5,
  },
  ms10: {
    marginStart: 10,
  },
  ms20: {
    marginStart: 20,
  },
  me5: {
    marginEnd: 5,
  },
  me10: {
    marginEnd: 10,
  },
  me20: {
    marginEnd: 20,
  },
  p0: {
    padding: 0,
  },
  p5: {
    padding: 5,
  },
  p10: {
    padding: 10,
  },
  pt5: {
    paddingTop: 5,
  },
  pt10: {
    paddingTop: 10,
  },
  ps5: {
    paddingStart: 5,
  },
  ps10: {
    paddingStart: 10,
  },
  pb5: {
    paddingBottom: 5,
  },
  pb10: {
    paddingBottom: 10,
  },
  pe5: {
    paddingEnd: 5,
  },
  pe10: {
    paddingEnd: 10,
  },
  ucase: {
    textTransform: 'uppercase',
  },
  lcase: {
    textTransform: 'lowercase',
  },
  ccase: {
    textTransform: 'capitalize',
  },
  f10: {
    fontSize: 10,
  },
  f12: {
    fontSize: 12,
  },
  f14: {
    fontSize: 14,
  },
  f16: {
    fontSize: 16,
  },
  f18: {
    fontSize: 18,
  },
  f20: {
    fontSize: 20,
  },
  textBold: {
    fontWeight: 'bold',
  },
  b1: {
    borderWidth: 1,
  },
  bb1: {
    borderBottomWidth: 1,
  },
  b2: {
    borderWidth: 2,
  },
  bb2: {
    borderBottomWidth: 2,
  },
  br5: {
    borderRadius: 5,
  },
  br10: {
    borderRadius: 10,
  },
  br15: {
    borderRadius: 15,
  },
  br30: {
    borderRadius: 30,
  },
  textWhite: {
    color: 'white',
  },
  textBlack: {
    color: '#000',
  },
});
