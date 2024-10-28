import React,{useState} from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { useSelector } from "react-redux";
import { selectTransactionsByDay,selectTransactionsByMonth, selectTransactionsByYear } from "../../redux/reducers/Transactions";

import Header from "../../components/Header/Header";
import BackButton from "../../components/BackButton/BackButton";
import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";

const TransactionList = ({navigation}) => {
  const [filter, setFilter] = useState('day');
  const balance = useSelector((state) => state.transactions.balance);

  const transactions = useSelector(
    filter === 'day' ? selectTransactionsByDay :
    filter === 'month' ? selectTransactionsByMonth : 
    selectTransactionsByYear
  );
  const categories = useSelector(state => state.categories)

  console.log(transactions)
  console.log(categories)

  const renderItem = ({item, index}) => {
    // const myArrayFiltered = item.categories.filter((el) => {
    //   return name === el.categoryId
    // });
    // console.log(myArrayFiltered)

    return(
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text>{index + 1}</Text>
        <Text>{item.title}</Text> 
        <Text>₹{item.amount}</Text>
        {/* <Text>{item.category}</Text> */}
      </View>
    )
  };

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.backgroundWhite]}>
        
        <View style={[globalStyle.pageHeader, style.headerContainer]}>
          <BackButton onPress={() => navigation.goBack()} />

          <Header title={'Transaction List'} type={2} />
        </View>

        <View style={{marginHorizontal:15}}>
          <View style={[globalStyle.marginBottom24]}>
            <Header title={'Your Balance'} type={3}></Header>
            <Header title={'₹' + Number(balance)} type={1} color={'#156CF7'}></Header>
          </View>

          <Picker selectedValue={filter} onValueChange={(value) => setFilter(value)}>
            <Picker.Item label="Day" value="day" />
            <Picker.Item label="Month" value="month" />
            <Picker.Item label="Year" value="year" />
          </Picker>

          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Header title={"Sr. No."} type={2}/>
            <Header title={"Description"} type={2}/>
            <Header title={"Amount"} type={2}/>
            <Header title={"Category"} type={2}/>
          </View>

          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}

          />
        </View>
      </SafeAreaView>
    )
}

export default TransactionList