
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Pressable, FlatList, StyleSheet, View, Image, TextInput } from 'react-native';
import { MainBackground } from "../components/Images/MainBackground/MainBackground";

export const HomeScreen = () => {
    const navigation = useNavigation();

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(2)
    const [displayData, setDisplayData] = useState()

    const onItemPress = (item) => {
        navigation.navigate('DetailsScreen', {item: item})
    }

    const renderItem = ({ item }) => {
        return (
            <Pressable style={styles.itemContainer} onPress={() => onItemPress(item)}>
                <View style={styles.dataContainer}>
                    <Text style={styles.fontStyle1}>Lp: {item.id} {"\n"}</Text>
                    <Text style={styles.fontStyle2}>Title: {item.title} {"\n"}</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../../assets/ItemImage.jpeg')}
                />
            </Pressable>
        )
    }

    const onEndReached = () => {
        setCurrentPage(prevStat => setCurrentPage(prevStat + 1))
        setDisplayData(data.slice(0, (20 * currentPage)))
    }

    const fetchData = () => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                fdata = json
                setData(json)
                setDisplayData(json.slice(0, 20))
                setIsLoading(false)
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(isLoading) { return <Text>Loading data...</Text> }

    return (
        <>
        <MainBackground />
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>SOME DATA</Text>
            <FlatList
                data={displayData || []}
                renderItem={renderItem}
                onEndReached={onEndReached}
                onEndReachedThreshold ={0.1}
            />
        </SafeAreaView>
        </>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignContent: 'center', 
        justifyContent: 'center'
    },
    itemContainer: {
        flex: 0.5,
        padding: 8,
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#ADD8E6',
        opacity: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dataContainer: {
        paddingRight: 32,
        width: '80%'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        padding: 16,
        alignSelf: 'center'
    },
    fontStyle1:{
        fontSize: 16,
        fontWeight: '500'
    },
    fontStyle2:{
        fontSize: 14,
        fontStyle: 'italic',
    },
    image: {
        height: 50, 
        width: 50, 
        borderRadius: 40,
        alignSelf: 'center',
        paddingLeft: 24
    },
    searchBar: {
        alignSelf: 'center',
        padding: 10, 
        height: 70, 
        width:  '80%', 
        margin: 15, 
        borderBottomWidth: 1, 
        borderColor: 'black',
    },
})
