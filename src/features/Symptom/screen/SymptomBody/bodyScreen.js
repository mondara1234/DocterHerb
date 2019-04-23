import React from 'react';
import { Alert, BackHandler, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Container } from 'native-base';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavigationActions } from "react-navigation";
import HandleBack from "../../../common/components/HandleBack";
import HeaderTitle from '../../../common/components/HeaderTitle';
import CommonText from '../../../common/components/CommonText';
import SideMenu from '../../../common/components/SideMenu';
import { BOBY_SCREEN1, SYMPTOM_SCREEN } from "../../router";
import { HERB_SCREEN } from "../../../Herb/router";
import { LISTHERB_SCREEN, HOME_SCREEN } from "../../../HomeMain/router";
import { AllDetailSymptom } from "../../redux/actions";
import { SETLOAD } from "../../../HomeMain/redux/actions";
import { SETLOADING } from "../../../Herb/redux/actions";

class bodyScreen extends React.PureComponent {
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
                    <View style={{flex: 1}}>
                        <View style={styles.containerTitle}>
                            <CommonText text={'ปวดท้อง'} size={20} />
                        </View>
                        <View style={styles.containerTouch}>
                            <TouchableOpacity
                                style={styles.containerButton}
                                onPress={ () => {
                                    this.props.REDUCER_Getdetail('ปวดท้อง, จุดเสียด');
                                    this.props.navigation.navigate({routeName: BOBY_SCREEN1, params: { title: 'ปวดท้อง, จุดเสียด' }});
                                }}
                            >
                                <CommonText text={'จุดเสียด'} size={20} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.containerButton}
                                onPress={ () => {
                                    this.props.REDUCER_Getdetail('ปวดท้อง, แน่นท้อง');
                                    this.props.navigation.navigate({routeName: BOBY_SCREEN1, params: { title: 'ปวดท้อง, แน่นท้อง' }});
                                }}
                            >
                                <CommonText text={'แน่นท้อง'} size={20} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewDisease}>
                            <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                            <CommonText text={'โรคกรดไหลย้อน, ท้องผูก, โรคกระเพาะ'} size={18} />
                        </View>
                        <View style={styles.viewHerb}>
                            <View style={{flex: 1}}>
                                <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                <CommonText text={'ขมิ้นชัน'} size={18} />
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <TouchableOpacity
                                    onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'ขมิ้นชัน' }})}
                                >
                                    <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                </TouchableOpacity>
                            </View>
                        </View>
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

bodyScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <HeaderTitle text={'อาการส่วนลำตัว'} color={'#fff'} style={{marginLeft: '-20%'}}  />,
});

const styles = StyleSheet.create({
    containerTitle: {
        borderWidth: 2,
        borderColor: '#37818e',
        alignItems: 'center',
        paddingTop: '1%'
    },
    containerTouch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    containerButton: {
        padding: 10,
        backgroundColor: '#37818e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewDisease: {
        borderWidth: 2,
        borderColor: '#37818e',
        height: 100 ,
        margin: '1%',
        padding: '1%'
    },
    viewHerb: {
        borderWidth: 2,
        borderColor: '#37818e',
        flex: 1,
        margin: '1%',
        padding: '1%'
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
        REDUCER_Getdetail: bindActionCreators(AllDetailSymptom, dispatch),
        REDUCER_SetLoading: bindActionCreators(SETLOADING, dispatch),
        REDUCER_SetLoadinglist: bindActionCreators(SETLOAD, dispatch)
    })
)(bodyScreen);
