import React from 'react';
import { View, Text, ScrollView } from "react-native";
import ToWatchList from './ToWatchListComponent';


export default Home = (props) => {
    return (
        <View>
            <ToWatchList toWatchList={props.toWatchList} />
        </View>
    )
}