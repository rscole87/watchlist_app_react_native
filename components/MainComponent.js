import React, { useState } from "react";
import { View } from "react-native";
import Home from "./HomeComponent";
import TESTLIST from "../shared/testList";

export default Main = () => {
    const [toWatchList, setToWatchList] = useState(TESTLIST);
    const [watchedList, setWatchedList] = useState([]);

    return (
        <Home toWatchList={toWatchList} watchedList={watchedList}/>
    )
};
