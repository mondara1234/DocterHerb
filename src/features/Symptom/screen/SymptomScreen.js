import React from 'react';
import { Alert, BackHandler, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Container } from 'native-base';
import { NavigationActions } from "react-navigation";
import {connect } from "react-redux";
import { bindActionCreators } from "redux";
import HandleBack from "../../common/components/HandleBack";
import SideMenu from '../../common/components/SideMenu';
import HeaderTitle from '../../common/components/HeaderTitle';
import { SYMPTOM_SCREEN, BOBY_SCREEN, HEADSYM_SCREEN } from "../router";
import { HOME_SCREEN } from "../../HomeMain/router";
import { HERB_SCREEN } from "../../Herb/router";
import { SETLOAD } from "../../HomeMain/redux/actions";
import { AllHerb, SETLOADING } from "../../Herb/redux/actions";

class SymptomScreen extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            editing: true
        }
    }

    onBack = () => {
        if (this.state.editing) {
            Alert.alert(
                'แจ้งเตือน',
                'ต้องการออกจากระบบใช่ไหม ?',
                [
                    { text: 'ใช่', onPress: () => BackHandler.exitApp() },
                    { text: 'ยกเลิก', onPress: () => {}, style: "cancel" },
                ],
                { cancelable: false },
            );
            return true;
        }
        return false;
    };


    render() {
        return (
            <HandleBack onBack={this.onBack}>
                <Container>
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.containerButton}
                            onPress={ () => this.props.navigation.navigate({routeName: HEADSYM_SCREEN})}
                        >
                            <Image
                                style={{width: '100%', height: '60%'}}
                                source={require('../../../../pulic/assets/img/head.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.containerButton,{marginBottom: '10%', marginTop: 0}]}
                            onPress={ () => this.props.navigation.navigate({routeName: BOBY_SCREEN})}
                        >
                            <Image
                                style={{width: '100%', height: '60%'}}
                                source={require('../../../../pulic/assets/img/body.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <SideMenu
                        homeScreen={() => {
                            this.props.REDUCER_SetLoading();
                            this.props.REDUCER_SetLoadinglist();
                            this.props.navigation.navigate(HOME_SCREEN);
                        }}
                        symptomScreen={() => {
                            this.props.REDUCER_SetLoading();
                            this.props.REDUCER_SetLoadinglist();
                            this.props.navigation.navigate(SYMPTOM_SCREEN);
                        }}
                        herbScreen={() => {
                            this.props.REDUCER_SetLoading();
                            this.props.REDUCER_SetLoadinglist();
                            this.props.navigation.navigate(HERB_SCREEN);
                        }}
                    />
                </Container>
            </HandleBack>
        );
    }
}

SymptomScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <HeaderTitle text={'วิเคราะห์อาการ'} color={'#fff'} />,
    headerLeft: null
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerButton: {
        width: '40%',
        marginTop: '10%',
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default connect(
    null,
    (dispatch) => ({
        NavigationActions: bindActionCreators(NavigationActions, dispatch),
        REDUCER_GetHerb: bindActionCreators(AllHerb, dispatch),
        REDUCER_SetLoading: bindActionCreators(SETLOADING, dispatch),
        REDUCER_SetLoadinglist: bindActionCreators(SETLOAD, dispatch)
    })
)(SymptomScreen);
