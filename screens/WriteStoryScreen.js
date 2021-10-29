import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native';
import { TextInput } from 'react-native';

export default class WriteStoryScreen extends React.Component(){
    render(){
        return(
            <View style = {StyleSheet.container}>
                <Header> Write Story </Header>
                <TextInput>Title Of Story</TextInput>
                <TextInput>Author of the Story</TextInput>
                <TextInput multiline = {true}>Write the Story</TextInput>
                <TouchableOpacity>Submit Story</TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    }
})