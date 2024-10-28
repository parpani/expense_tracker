import React,{useState, useEffect} from 'react';
import {SafeAreaView,ScrollView,View, Pressable, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput} from 'react-native';
import { Routes } from '../../navigation/Routes';

import globalStyle from '../../assets/styles/globalStyle';
import style from './styles';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';

import { useDispatch, useSelector} from 'react-redux';
import {resetToInitialState} from '../../redux/reducers/User';
import {logOut} from '../../api/user';
import { addTransaction } from '../../redux/reducers/Transactions';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faXmarkCircle} from '@fortawesome/free-solid-svg-icons';

const Home = ({navigation}) => {
  //const [balance, setBalance] = useState(0);
  const [showIncomeField, setshowIncomeField] = useState(false);
  const [showExpenseField, setshowExpenseField] = useState(false);
  const [incomeTitle, setIncomeTitle] = useState('');
  const [expenseTitle, setExpenseTitle] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [incomeCategory, setIncomeCategory] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');

  console.log("Income",incomeTitle, incomeAmount, incomeCategory)
  //console.log("Expense",expenseTitle, expenseAmount, expenseCategory)
  
  const dispatch = useDispatch();
  //dispatch(resetToInitialState());
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const transactions = useSelector(state => state.transactions)

  //setBalance(transactions.income - transactions.expense)
  //console.log(transactions.income - transactions.expense)

  const updateIncomeFn = () => {
    setshowIncomeField(!showIncomeField)
  }

  const updateExpenseFn = () => {
    setshowExpenseField(!showExpenseField)
  }

  const submitIncome = () => {
    const addIncome = {
      title: incomeTitle,
      id: Date.now(),
      amount: parseFloat(incomeAmount),
      date: new Date().toISOString(),
      category: incomeCategory,
      type: 'income'
    }
    //console.log(addIncome)
    dispatch(addTransaction(addIncome));
    setIncomeTitle('');
    setIncomeAmount('');
    setIncomeCategory('');
  };

  const submitExpense = () => {
    const addExpense = {
      title: expenseTitle,
      id: Date.now(),
      amount: parseFloat(expenseAmount),
      date: new Date().toISOString(),
      category: expenseCategory,
      type: 'expense'
    }
    //console.log(addExpense)
    dispatch(addTransaction(addExpense));
  }
  

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.username}>
              {/* <Header title={user.firstName + ' ' + user.lastName[0] + '. 👋'} /> */}
              <Header title={user.displayName + ' 👋'} />
            </View>
          </View>
          <View>
            <Image
              source={{uri: user.profileImage}}
              style={style.profileImage}
              resizeMode={'contain'}
            />
            <TouchableOpacity
              onPress={async () => {
                dispatch(resetToInitialState());
                await logOut();
              }}>
              <Header type={3} title={'Logout'} color={'#156CF7'} />
            </TouchableOpacity>
          </View>
        </View>
{/* Total Balance Component */}
        <View style={[globalStyle.marginHorizontal, globalStyle.marginBottom24]}>
          <Header title={'Your Balance'} type={3}></Header>
          <Header title={'₹' + Number(transactions.balance)} type={1} color={'#156CF7'}></Header>
        </View>

{/* Add Income Transaction Component */}
        <View style={[globalStyle.marginHorizontal, style.inputContainer]}>
          <Header title={"Add Income"} type={3}></Header>
          <TouchableOpacity onPress={() => updateIncomeFn()}>
            { !showIncomeField ? 
              <Header type={3} title={'Add'} color={'#156CF7'} /> :
              <FontAwesomeIcon icon={faXmarkCircle} size={14}/>
            }
          </TouchableOpacity>
        </View>
        
        { showIncomeField ?
          <View style={[globalStyle.marginHorizontal, style.inputField, globalStyle.marginBottom24]}>
            <Input label='Add Title' placeholder={'Eg: Salary'} styles={style.inputFieldLabel} onChangeText={val => setIncomeTitle(val)}></Input>
            <Input label='Add Amount' placeholder={'in Rupees ₹'} styles={style.inputFieldLabel} onChangeText={val => setIncomeAmount(val)}></Input>

            <Dropdown label='Select Category' pickerLabel={categories.categories} onValueChange={val => setIncomeCategory(val)}/>

            <View style={style.submitBtnContainer}>
              <Button title="Submit" styles={style.submitBtn} onPress={submitIncome} isDisabled={incomeTitle.length < 4 || incomeAmount.length < 1 || incomeCategory == ''}></Button>
            </View>
          </View> : null
        }

{/* Add Expense Transaction Component */}
        <View style={[globalStyle.marginHorizontal, style.inputContainer]}>
          <Header title={"Add Expense"} type={3}></Header>
          <TouchableOpacity onPress={() => updateExpenseFn()}>
          { !showExpenseField ? 
            <Header type={3} title={'Add'} color={'#156CF7'} /> :
            <FontAwesomeIcon icon={faXmarkCircle} size={14}/>
          }          
          </TouchableOpacity>
        </View>

        { showExpenseField ? 
          <View style={[globalStyle.marginHorizontal, style.inputField, globalStyle.marginBottom24]}>
            <Input label='Add Title' placeholder={'Eg: Grocery'} styles={style.inputFieldLabel} onChangeText={val => setExpenseTitle(val)}></Input>
            <Input label='Add Amount' placeholder={'in Rupees ₹'} styles={style.inputFieldLabel} onChangeText={val => setExpenseAmount(val)}></Input>

            <Dropdown label='Select Category' pickerLabel={categories.categories} onValueChange={val => setExpenseCategory(val)}/>

            <View style={style.submitBtnContainer}>
              <Button title="Submit" styles={style.submitBtn} onPress={submitExpense} isDisabled={expenseTitle.length < 4 || expenseAmount.length < 1 || expenseCategory == ''}></Button>
            </View>
          </View> : null
        }



{/* Categories Componenet */}
        {/* <View style={[globalStyle.marginHorizontal, style.inputContainer]}>
          <Header title={"Category List"} type={3}></Header>
          <TouchableOpacity onPress={async () => navigation.navigate(Routes.Categories)}>
            <Header type={3} title={'Change'} color={'#156CF7'} />
          </TouchableOpacity>
        </View> */}

{/* Transaction List */}
        <View style={[globalStyle.marginHorizontal, style.inputContainer]}>
          <Header title={"Transaction List"} type={3}></Header>
          <TouchableOpacity onPress={async () => navigation.navigate(Routes.TransactionList)}>
            <Header type={3} title={'Check'} color={'#156CF7'} />
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;