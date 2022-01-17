import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, Image, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { Button } from "../components/Button";
import { SecondBackground } from "../components/Images/SecondBackground/SecondBackground";

export const DetailsScreen = () => {
    const navigation = useNavigation();
    const item = useRoute().params.item
    const [opinion, setOpinion] = useState('')
    const [storedOpionion, setStoredOpinion] = useState()

    const getOpinion = async () => {
        try{
            setStoredOpinion(await AsyncStorage.getItem(item.id.toString()))
        }catch (error) {
            console.warn('Get Opinion', error.message)
        }
    }

    useEffect(() => {
        getOpinion()
    }, [])

    const handleBackButton = useCallback(() => {
        navigation.goBack()
    }, []) 

    const leaveOpinion = async () => {
        try {
            await AsyncStorage.setItem(item.id.toString(), opinion);
            setStoredOpinion(await AsyncStorage.getItem(item.id.toString()))
          } catch (error) {
            console.warn('Leave Opinion Error', error.message)
          }
    }

    return (
        <>
        <SecondBackground />
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title}>Title: {item.title}</Text>
            {storedOpionion && 
            <View style={styles.opinionContainer}>
                <Text style={styles.fontStyle1}>{storedOpionion}</Text>
            </View>}
            <View style={styles.itemContainer}>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../assets/ItemImage.jpeg')}
                    />
                    <Text style={styles.fontStyle1}>Lp: {item.id}</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.fontStyle2}>Body: {item.body}</Text>
                </View>
            </View>
            <TextInput
                onChangeText={setOpinion}
                placeholder={'LEAVE OPINION'}
                style={styles.textInput}
                value={opinion}
            />
            <Button onPress={leaveOpinion} title='LEAVE OPINION' variant="blue"/>
            <Button onPress={handleBackButton} title='BACK' variant="grey"/>
        </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignContent: 'center', 
        justifyContent: 'center'
    },
    opinionContainer:{
        padding: 16
    },
    itemContainer: {
        padding: 8,
        margin: 8,
        borderRadius: 10,
        opacity: 0.9,
        flexDirection: 'row'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        padding: 16,
        alignSelf: 'center'
    },
    fontStyle1:{
        fontSize: 16,
        padding: 8,
        fontWeight: 'bold'
    },
    fontStyle2:{
        fontSize: 14,
        padding: 8,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    textInput: {
        alignSelf: 'center',
        padding: 10, 
        height: 70, 
        width:  '80%', 
        margin: 15, 
        borderBottomWidth: 1, 
        borderColor: 'black',
    },
    image: {
        height: 50, 
        width: 50, 
        borderRadius: 40,
        alignSelf: 'center'
    },
    dataContainer: {
        paddingRight: 40
    }
})
