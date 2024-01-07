import React, { Component } from 'react';
import { ImageBackground, Image, View, StyleSheet, TouchableOpacity, Text, TextInput, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';

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

export const AdressScreen = ({navigation, route}) => {

    const [adress, setAdress] = React.useState('');

    return(
        <DismissKeyboardView>
            <ImageBackground source={require('../assets/pictures/map.png')}>
                <View style={styles.Container}>
                    <View style={styles.mainRectangle}>
                        <View style={styles.parametre}>
                            <Image style={styles.parametres_icons} source={require('../assets/icons/adress_icon.png')} />
                            <TextInput style={styles.parametres_text}
                            placeholder='Адрес'
                            value={adress}
                            onChangeText={setAdress}
                            ></TextInput>
                        </View>

                        <Image style={styles.line} source={require('../assets/icons/Line.png')}/>
                        <TouchableOpacity style = {styles.buttons}
                            onPress={() => {
                                // Pass and merge params back to home screen
                                navigation.navigate({
                                  name: 'HomeScreen',
                                  params: { adress: adress },
                                  merge: true,
                                });
                              }}>
                                <Text style = {styles.buttonText}>Выбрать</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </DismissKeyboardView>
    );
}

const styles = StyleSheet.create({

    mainRectangle: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#FEFFFE',
        width: '100%',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column',
        shadowOffset: {width: 0, height: -10},
        shadowOpacity: 0.25,
        shadowRadius: 50,
        justifyContent: 'flex-end',
    },

    Container: {
        width: '100%', 
        height: '100%', 
        background: '#FEFFFE', 
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        rowGap:10,
        marginBottom:0
    },

    parametre: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 27,
        paddingLeft: 31,
        marginTop: 80
    },

    parametres_icons: {
        width: 30,
        height: 30
    },

    parametres_text: {
        fontSize: 20,
        marginRight: 'auto',
        marginLeft: 20,
    },

    line: {
        margin: 10
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize:20,
        fontWeight: '400'
    },

    buttons: {
        backgroundColor: 'black',
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
        marginBottom: 38
    }

})