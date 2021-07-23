import React from 'react'
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

export default ToWatchList = (props) => {
    const renderItem = ({item}) => {
        return <ListItem title={item} />
    }

    return (
        <FlatList data={props.toWatchList} renderItem={renderItem} keyExtractor={(item) => item.id.toString()}/>
    )
}