import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { SafeAreaView } from 'react-native';
//import TextInputMask from 'react-native-text-input-mask';

const DismissKeyboardHOC = (Comp) => {
    return ({ children, ...props }) => (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Comp {...props}>
          {children}
        </Comp>
      </TouchableWithoutFeedback>
    );
  };
  const DismissKeyboardView = DismissKeyboardHOC(View)

export const LoginStartScreen = ({navigation}) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <DismissKeyboardView>
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.title}>Вход</Text>
            <Text style={styles.underTitleText}>Введите свой номер, и мы отправим на него СМС-сообщение с кодом</Text>
            <TextInput style = {styles.textField}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="+7 902 513 13 28"
            placeholderTextColor={'black'}
            keyboardType="numeric"
            maxLength={11}
            />
            <TouchableOpacity style = {styles.buttons}
                onPress={() =>
                    navigation.navigate('LoginSecondScreen', {number: number})
                }
            >
            <Text style = {styles.buttonText}>Получить код</Text>
             </TouchableOpacity>
             <Text style={styles.underButtonText}> Нажимая кнопку “Получить код”, вы принимаете условия <Text style={styles.hyperLink}>Политики конфиденциальности</Text> </Text>
        </SafeAreaView>
    </DismissKeyboardView>
    
  );
}

const styles = StyleSheet.create({
    safeArea: {
        width: '100%', 
        height: '100%', 
        position: 'relative', 
        background: '#FEFFFE', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        rowGap: 14
    },

    title: {
        textAlign: 'left', 
        color: 'black', 
        fontSize: 52,  
        fontWeight: '600',
        marginLeft: 11
    },

    underTitleText: {
        color: 'rgba(0, 0, 0, 0.50)', 
        fontSize: 14, 
        fontWeight: '400',
        marginLeft: 11
    },

    textField: {
        color: 'black', 
        fontSize: 32, 
        fontWeight: '300' ,
        marginLeft: 11,
        
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize:20,
        fontWeight: '400'
    },

    buttons: {
        backgroundColor: '#1481BA',
        alignItems: 'center',
        width: 360,
        height: 'auto',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight:60,
        paddingTop:20,
        paddingBottom:19,
        borderRadius:20,
        marginLeft: "auto",
        marginRight: "auto"
    },

    underButtonText: {
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.50)'
    },

    hyperLink: {
        color: '#F2542D',
    }
});
