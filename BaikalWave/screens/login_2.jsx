import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Image, SafeAreaView,Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

const adress = '';


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


export const LoginSecondScreen = ({navigation, route}) => {

    const [number1, number2, number3, number4, onChangeNumber] = React.useState('');

    return (
        <DismissKeyboardView>
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.title}>Введите код</Text>
                <Text style={styles.underTitleText}>СМС с кодом было отправлено на указанный номер</Text>
                <Text style={styles.phoneNum}>{route.params.number}</Text>
                <View style={styles.numberPlates}>
                    <View style={styles.plate}>
                        <TextInput style = {styles.plateInput}
                            onChangeText={onChangeNumber}
                            value={number1}
                            keyboardType="numeric"
                            maxLength={1}
                        />
                    </View>
                    <View style={styles.plate}>
                        <TextInput style = {styles.plateInput}
                                onChangeText={onChangeNumber}
                                value={number2}
                                keyboardType="numeric"
                                maxLength={1}
                            />
                    </View>
                    <View style={styles.plate}>
                        <TextInput style = {styles.plateInput}
                                onChangeText={onChangeNumber}
                                value={number3}
                                keyboardType="numeric"
                                maxLength={1}
                            />
                    </View>
                    <View style={styles.plate}>
                        <TextInput style = {styles.plateInput}
                                onChangeText={onChangeNumber}
                                value={number4}
                                keyboardType="numeric"
                                maxLength={1}
                            />
                    </View>
                </View>
                <TouchableOpacity style = {styles.buttons}
                onPress={() =>
                    navigation.navigate('HomeScreen')}>
                    <Text style = {styles.buttonText}>Войти</Text>
                    
                </TouchableOpacity>
            </SafeAreaView>
        </DismissKeyboardView>
    );
}


const styles = StyleSheet.create({
    backButton: {
        width: 'auto',
        height: 'auto'
        
    },

    safeArea: {
        width: '100%', 
        height: '100%', 
        position: 'relative', 
        background: '#FEFFFE', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        rowGap: 0
    },

    title: {
        textAlign: 'left', 
        color: 'black', 
        fontSize: 52,  
        fontWeight: '600',
        marginLeft: 9
    },

    underTitleText: {
        color: 'rgba(0, 0, 0, 0.50)', 
        fontSize: 14, 
        fontWeight: '400',
        marginLeft: 11,
        marginTop: 14,
    },

    phoneNum: {
        fontSize: 16, 
        fontWeight: '500',
        marginLeft: 11,

    },

    numberPlates: {
        flexDirection: 'row',
        columnGap: 10,
        width: 'auto',
        height: 'auto',
        marginLeft:11,
        marginTop: 14
    },

    plate: {
        borderRadius: 10,
        borderWidth:2,
        borderColor: 'rgba(242, 84, 45, 0.50)',
        width: 70,
        height: 79,
        justifyContent: 'center',
        alignItems: 'center'
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
        marginRight: "auto",
        marginTop: 14
    },

    plateInput: {
        fontSize: 40, 
        height: 79, 
        width: 70,
        textAlign: 'center'
    }
});
