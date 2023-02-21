import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ILHospitalBG} from '../../assets';
import {colors, fonts} from '../../utils';
import { ListHospital } from '../../components';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}> Nearby Hospital</Text>
        <Text style={styles.desc}> 3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital/>
        <ListHospital/>
        <ListHospital/>
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    textAlign: 'center',
    color: colors.white,
    marginTop: 6,
  },
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content:{
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
