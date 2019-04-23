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
import { HEAD_SCREEN10, HEAD_SCREEN1, SYMPTOM_SCREEN } from "../../router";
import { HERB_SCREEN } from "../../../Herb/router";
import { LISTHERB_SCREEN, HOME_SCREEN } from "../../../HomeMain/router";
import { AllDetailSymptom } from "../../redux/actions";

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
        return (
            <HandleBack onBack={this.onBack}>
                <Container>
                    <View style={{flex: 1}}>
                        <View style={styles.containerTitle}>
                            <CommonText text={'เจ็บคอ'} size={20} />
                        </View>
                        <View style={styles.containerTouch}>
                            <TouchableOpacity
                                style={styles.containerButton}
                                onPress={ () => {
                                    this.props.REDUCER_Getdetail('เจ็บคอ, ไอ');
                                    this.props.navigation.navigate({routeName: HEAD_SCREEN1, params: { title: 'เจ็บคอ, ไอ' }});
                                }}
                            >
                                <CommonText text={'ไอ'} size={20} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.containerButton}
                                onPress={ () => {
                                    this.props.REDUCER_Getdetail('เจ็บคอ, น้ำมูก');
                                    this.props.navigation.navigate({routeName: HEAD_SCREEN10, params: { title: 'เจ็บคอ, น้ำมูก' }});
                                }}
                            >
                                <CommonText text={'น้ำมูก'} size={20} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.containerButton}
                                onPress={ () => {
                                    this.props.REDUCER_Getdetail('เจ็บคอ, มีเสมหะ');
                                    this.props.navigation.navigate({routeName: HEAD_SCREEN10, params: { title: 'เจ็บคอ, มีเสมหะ' }});
                                }}
                            >
                                <CommonText text={'มีเสมหะ'} size={20} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.containerButton}
                                onPress={ () => {
                                    this.props.REDUCER_Getdetail('เจ็บคอ, คัดจมูก');
                                    this.props.navigation.navigate({routeName: HEAD_SCREEN10, params: { title: 'เจ็บคอ, คัดจมูก' }});
                                }}
                            >
                                <CommonText text={'คัดจมูก'} size={20} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.containerButton}
                                onPress={ () => {
                                    this.props.REDUCER_Getdetail('เจ็บคอ, จาม');
                                    this.props.navigation.navigate({routeName: HEAD_SCREEN10, params: { title: 'เจ็บคอ, จาม' }});
                                }}
                            >
                                <CommonText text={'จาม'} size={20} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewDisease}>
                            <CommonText text={'เสี่ยงเป็น'} size={20} />
                            <CommonText text={'ไมเกรน, อาจเป็นไข้หวัด,อาจเป็นวัณโรค,อาจเป็นภูมิแพ้'} size={18} />
                        </View>
                        <View style={styles.viewHerb}>
                            <View style={{flex: 1}}>
                                <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                <CommonText text={'เก๊กฮวย, มะนาว'} size={18} />
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <TouchableOpacity
                                    onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'เก๊กฮวย' }})}
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

headScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <HeaderTitle text={'อาการส่วนหัว'} color={'#fff'} style={{marginLeft: '-20%'}}  />,
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
        REDUCER_Getdetail: bindActionCreators(AllDetailSymptom, dispatch)
    })
)(headScreen);
