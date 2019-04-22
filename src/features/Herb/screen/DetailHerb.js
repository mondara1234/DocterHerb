import React from 'react';
import { Alert, BackHandler, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Container ,Card, Content } from 'native-base';
import HandleBack from "../../common/components/HandleBack";
import HeaderTitle from '../../common/components/HeaderTitle';
import CommonText from '../../common/components/CommonText';
import SideMenu from '../../common/components/SideMenu';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavigationActions } from "react-navigation";
import {HERB_SCREEN} from "../router";
import {SYMPTOM_SCREEN} from "../../Symptom/router";
import {HOME_SCREEN} from "../../HomeMain/router";

class DetailHerb extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            editing: true,
            title: ''
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
        const { title } = this.props.navigation.state.params;
        this.setState( {title : title});

        return (
            <HandleBack onBack={this.onBack}>
                <Container>
                    <View style={styles.container}>
                        <CommonText text={'ชื่อสมุนไพร'} size={20} />
                        <View style={styles.containerimg}>
                            <Image
                                style={{width: 120, height: 120}}
                                source={require('../../../../pulic/assets/img/logoApp.jpg')}
                            />
                        </View>
                        <Content style={{width: '100%'}}>
                            <View style={styles.containerDetail}>
                                <CommonText text={'รายละเอียด'} size={20} />
                                <CommonText text={'ไข้เืลอกออก'} size={18} />
                            </View>
                            <View style={styles.containerDetail}>
                                <CommonText text={'สรรพคุณ'} size={20} />
                                <CommonText text={'ใช้...แก้งานให้จบ'} size={18} />
                            </View>
                        </Content>
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

DetailHerb.navigationOptions  = ({navigation}) => ({
    headerTitle: <HeaderTitle text={'รายละเอียดสมุนไพร'} color={'#fff'} style={{marginLeft: '-20%'}} />,
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: '5%',
        paddingTop: 5
    },
    containerimg: {
        borderWidth: 2,
        borderColor: '#37818e',
        margin: '5%'
    }
    ,
    containerDetail: {
        borderWidth: 2,
        borderColor: '#37818e',
        width: '99.9%',
        margin: '1%',
        padding: '1%'
    }
});

export default connect(
    null,
    (dispatch) => ({
        NavigationActions: bindActionCreators(NavigationActions, dispatch),
    })
)(DetailHerb);
