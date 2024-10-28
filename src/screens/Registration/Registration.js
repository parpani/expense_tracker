import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import { createUser } from '../../api/user';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

const Registration = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  //console.log(email);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>

        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Hello and Welcome!'}/>
        </View>

        <View style={globalStyle.marginBottom24}>
          <Input
            label={'First & Last Name'}
            placeholder={'Enter your full name...'}
            onChangeText={value => setFullName(value)}
          />
        </View>

        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your Email...'}
            onChangeText={value => setEmail(value)}
            secureTextEntry={false}
          />
        </View>

        <View style={globalStyle.marginBottom24}>
          <Input
            label={'Password'}
            placeholder={'******'}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
        </View>

        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        
        <View style={globalStyle.marginBottom24}>
          <Button 
            isDisabled={ fullName.length <= 2 || email.length <= 5 || password.length < 8 } 
            title={'Register'} 
            onPress={async () => {
              let user = await createUser(fullName, email, password)
              if (user.error) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('You have successfully registered');
                setTimeout(() => navigation.goBack(), 3000);
              }
            }} />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;