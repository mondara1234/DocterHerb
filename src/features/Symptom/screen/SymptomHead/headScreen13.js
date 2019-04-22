import React from 'react';
import { Alert, BackHandler, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Container ,Card } from 'native-base';
import HandleBack from "../../../common/components/HandleBack";
import HeaderTitle from '../../../common/components/HeaderTitle';
import CommonText from '../../../common/components/CommonText';
import SideMenu from '../../../common/components/SideMenu';
import {SYMPTOM_SCREEN} from "../../router";
import {HERB_SCREEN} from "../../../Herb/router";
import {HOME_SCREEN, LISTHERB_SCREEN} from "../../../HomeMain/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavigationActions } from "react-navigation";
import {AllDetailSymptom} from "../../redux/actions";

class headScreen13 extends React.PureComponent {
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
                    <View style={{flex: 1}}>
                        <View style={{borderWidth: 2, borderColor: '#37818e', alignItems: 'center', paddingTop: '1%'}}>
                            <CommonText text={this.state.title} size={20} />
                        </View>
                        <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%', marginTop: '5%'}}>
                            <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                            <CommonText text={'ไข้เืลอกออก'} size={18} />
                        </View>
                        <View style={{borderWidth: 2, borderColor: '#37818e', height:'72.5%', margin: '1%', padding: '1%'}}>
                            <View style={{flex: 1}}>
                                <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                <CommonText text={'ใช้...แก้งานให้จบ'} size={18} />
                            </View>
                            <View style={{flexDirection: 'row',
                                justifyContent: 'flex-end'}}>
                                <TouchableOpacity
                                    onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'ชื่อโรค' }})}
                                >
                                    <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                </TouchableOpacity>
                            </View>
                        </View>
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

headScreen13.navigationOptions  = ({navigation}) => ({
    headerTitle: <HeaderTitle text={'อาการส่วนหัว'} color={'#fff'} style={{marginLeft: '-20%'}}  />,
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerButton: {
        padding: 10,
        backgroundColor: '#37818e',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

function mapStateToProps(state) {
    return{
        detailsymptom: state.dataSymptom
    };
}

export default connect(
    mapStateToProps,
    (dispatch) => ({
        NavigationActions: bindActionCreators(NavigationActions, dispatch),
        REDUCER_Getdetail: bindActionCreators(AllDetailSymptom, dispatch)
    })
)(headScreen13);
