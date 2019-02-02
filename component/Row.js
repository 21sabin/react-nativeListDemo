import React, { Component } from 'react';
import { View ,Text ,StyleSheet} from 'react-native';

 const Row=( props ) =>{
  return (
    <View style={styles.container}>
        <Text> { props.name }</Text>
        <Text>{ props.phone }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    }
})


export default Row;
