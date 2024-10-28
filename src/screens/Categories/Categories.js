import React, {useState, useEffect} from "react";
import {View, SafeAreaView, TextInput, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from "react-redux";
//import { resetToInitialState } from "../../redux/reducers/Categories";

import Header from "../../components/Header/Header";
import BackButton from "../../components/BackButton/BackButton";

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";

const Categories = ({navigation}) => {

  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories);

  const renderItem = ({item}) => (
    <View style={[style.card]}>
      <View style={style.categoryTitle}>
        <View style={[style.color, {backgroundColor: item.color}]} />
        <Header title={item.name} type={3}></Header>
      </View>

      <View style={style.iconsContainer}>
        <TouchableOpacity style={style.icons} onPress={() => handleUpdate(item)}>
          <FontAwesomeIcon icon={faPen} color="#0096FF"/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faTrash} color="#D11A2A" onPress={() => handleDelete(item.id)}/>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.backgroundWhite]}>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
      </View>

      <View style={globalStyle.pageHeader}>
        <Header title={'Select Category'} type={2} />
      </View>

      <FlatList 
        data={categories.categories}
        renderItem={renderItem}

      />
    </SafeAreaView>
  )
}

export default Categories;