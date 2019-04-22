import React from 'react';
import { Alert, BackHandler, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Container } from 'native-base';
import { withNavigation } from "react-navigation";
import HandleBack from "../../../common/components/HandleBack";
import SideMenu from '../../../common/components/SideMenu';
import HeaderTitle from '../../../common/components/HeaderTitle';
import {SYMPTOM_SCREEN} from "../../router";
import {HOME_SCREEN} from "../../../HomeMain/router";
import {HERB_SCREEN} from "../../../Herb/router";

class headScreen extends React.PureComponent {
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

        const { navigate } = this.props.navigation;

        return (
            <HandleBack onBack={this.onBack}>
                <Container>
                    <View style={styles.container}>

                    </View>
                    <SideMenu
                        homeScreen={() => this.props.navigation.navigate(HOME_SCREEN)}
                        symptomScreen={() => this.props.navigation.navigate(SYMPTOM_SCREEN)}
                        herbScreen={() => this.props.navigation.navigate(HERB_SCREEN)}
                    />
                </Container>
            </HandleBack>
        );
    }
}

headScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <HeaderTitle text={'อาการส่วนหัว'} color={'#fff'} />,
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
        marginTop: 30,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default withNavigation(headScreen);
