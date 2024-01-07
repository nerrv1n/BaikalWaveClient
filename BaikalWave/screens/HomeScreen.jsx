import React, { Component } from 'react';
import { Text, ImageBackground, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, StatusBar,  } from 'react-native';



export const HomeScreen = ({navigation, route}) => {

    React.useEffect(() => {
        if (route.params?.post) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
      }, [route.params?.post]);

    return(
        <View>
            <ImageBackground source={require('../assets/pictures/HomeScreen_back.png')}>
            <View style={styles.safeArea}>
                <Text style={styles.title}>Заказ экскурсии</Text>
                <View style={styles.mainRectangle}>
                    <View style={styles.parametres}>
                        <TouchableOpacity style={styles.parametre}
                        onPress={() =>
                            navigation.navigate('AdressScreen')}>
                            <Image style={styles.parametres_icons} source={require('../assets/icons/adress_icon.png')} />
                            <Text style={styles.parametres_text}>{route.params?.post}</Text>
                        </TouchableOpacity>
                        <Image source={require('../assets/icons/Line.png')}/>
                        <TouchableOpacity style={styles.parametre}>
                            <Image style={styles.parametres_icons} source={require('../assets/icons/route_icon.png')} />
                            <Text style={styles.parametres_text}>Мыс Хобой</Text>
                        </TouchableOpacity>
                        <Image source={require('../assets/icons/Line.png')}/>
                        <TouchableOpacity style={styles.parametre}>
                            <Image style={styles.parametres_icons} source={require('../assets/icons/date_icon.png')} />
                            <Text style={styles.parametres_text}>07.08.2024</Text>
                            <Text style={styles.parametres_text}>09:00</Text>
                        </TouchableOpacity>
                        <Image source={require('../assets/icons/Line.png')}/>
                        <TouchableOpacity style={styles.parametre}>
                            <Image style={styles.parametres_icons} source={require('../assets/icons/people_icon.png')} />
                            <Text style={styles.parametres_text}>5 человек</Text>
                        </TouchableOpacity>
                        <Image source={require('../assets/icons/Line.png')}/>
                        <TouchableOpacity style={styles.parametre}>
                            <Image style={styles.parametres_icons} source={require('../assets/icons/guide_icon.png')} />
                            <Text style={styles.parametres_text}>Индивидуальная</Text>
                        </TouchableOpacity>
                        <Image source={require('../assets/icons/Line.png')}/>
                        <TouchableOpacity style={styles.parametre}>
                            <Image style={styles.parametres_icons} source={require('../assets/icons/type_icon.png')} />
                            <Text style={styles.parametres_text}>Без экскурсовода</Text>
                        </TouchableOpacity>
                        <Image source={require('../assets/icons/Line.png')}/>
                        <TouchableOpacity style={styles.parametre}>
                            <Image style={styles.parametres_icons} source={require('../assets/icons/food_icon.png')} />
                            <Text style={styles.parametres_text}>С питанием</Text>
                        </TouchableOpacity>
                        <Image source={require('../assets/icons/Line.png')}/>
                    </View>
                </View>
                <TouchableOpacity style = {styles.buttons}>
                    <Text style = {styles.buttonText}>Заказать</Text>
                </TouchableOpacity>
                <Text style={styles.underButtonText}>Нажимая кнопку “Заказать”, вы соглашаетесь с созданием заказа в соответствии с <Text style={styles.hyperLink}>офертой</Text>
                <TouchableOpacity>
                    <Text style={styles.hyperLink2}>Как расчитывается стоимость?</Text>
                </TouchableOpacity>
                </Text>
                
            </View>
            </ImageBackground>
            <StatusBar theme='dark'></StatusBar>
        </View>
    );    
}

const styles = StyleSheet.create({

    title: {
        textAlign: 'left', 
        color: 'white', 
        fontSize: 36,  
        fontWeight: '600',
        marginLeft: 15,
        marginTop: 'auto'
    },

    safeArea: {
        width: '100%', 
        height: '100%', 
        background: '#FEFFFE', 
        flexDirection: 'column', 
        justifyContent: 'center',
        marginBottom: 'auto',
        rowGap:10,
    },
    
    mainRectangle: {
        borderRadius: 15,
        backgroundColor: '#FEFFFE',
        width: 'auto',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
    },

    parametres: {
        marginLeft: 15,
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom:'auto',
        width: 'auto',
        height: 'auto',
        rowGap: 13,
        paddingLeft: 10,
        paddingTop: 20,
        paddingBottom: 20
    },

    parametre: {
        flexDirection: 'row',
        alignItems: 'center',
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
    },

    underButtonText: {
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.50)',
        marginBottom: 'auto'
    },

    hyperLink: {
        color: '#F2542D',
    },

    hyperLink2: {
        color: '#F2542D',
        fontSize: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10
    }

})