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
import { BOBY_SCREEN4, SYMPTOM_SCREEN } from "../../router";
import { HERB_SCREEN } from "../../../Herb/router";
import { LISTHERB_SCREEN, HOME_SCREEN } from "../../../HomeMain/router";
import { AllDetailSymptom } from "../../redux/actions";
import { SETLOAD } from "../../../HomeMain/redux/actions";
import { SETLOADING } from "../../../Herb/redux/actions";

class bodyScreen3 extends React.PureComponent {
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
                        <View style={styles.containerTitle}>
                            <CommonText text={this.state.title} size={20} />
                        </View>
                        {title === 'ปวดท้อง, แน่นท้อง, อาหารไม่ย่อย, ท้องเฟ้อ' ?
                            <View style={styles.containerTouch}>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, ปวดลิ้นปี่`);
                                        this.props.navigation.navigate({routeName: BOBY_SCREEN4, params: { title: `${title}, ปวดลิ้นปี่` }});
                                    }}
                                >
                                    <CommonText text={'ปวดลิ้นปี่'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                            :null
                        }
                        {title === 'ปวดท้อง, แน่นท้อง, อาหารไม่ย่อย, ท้องเฟ้อ' ?
                            <View style={{flex:1}}>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                    <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                                    <CommonText text={'โรคกระเพาะอาหารอักเสบ'} size={18} />
                                </View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', flex:1, margin: '1%', padding: '1%'}}>
                                    <View style={{flex: 1}}>
                                        <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                        <CommonText text={'ผักชี, ขมิ้นชัน, กระเจี๊ยบเขียว, มะขามแขก, ใบมะรุม, เม็ดแมงลัก'} size={18} />
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                        <TouchableOpacity
                                            onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'โรคกระเพาะอาหารอักเสบ' }})}
                                        >
                                            <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            :title === 'ปวดท้อง, แน่นท้อง, เบื่ออาหาร, อุจาระไม่ออก' ?
                            <View style={{flex:1}}>
                                <View style={styles.viewDisease}>
                                    <CommonText text={'คุณเป็นโรค'} size={20} />
                                    <CommonText text={'โรคท้องผูก'} size={18} />
                                </View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', flex:1, margin: '1%', padding: '1%'}}>
                                    <View style={{flex: 1}}>
                                        <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                        <CommonText text={'ผักชี, ขมิ้นชัน, กระเจี๊ยบเขียว&&ว่านหางจระเข้&&หัวปลี, กล้วยน้ำวา'} size={18} />
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                        <TouchableOpacity
                                            onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'โรคท้องผูก' }})}
                                        >
                                            <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                                :title === 'ปวดท้อง, จุกเสียด, คลื่นไส้, อาเจียน' ?
                                    <View style={{flex:1}}>
                                        <View style={styles.viewDisease}>
                                            <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                                            <CommonText text={'โรคกรดไหลย้อน'} size={18} />
                                        </View>
                                        <View style={{borderWidth: 2, borderColor: '#37818e', flex:1, margin: '1%', padding: '1%'}}>
                                            <View style={{flex: 1}}>
                                                <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                                <CommonText text={'ผักชี, ขมิ้นชัน, อบเชย, โหระพา, น้ำมันมะกอก'} size={18} />
                                            </View>
                                            <View style={{flexDirection: 'row',
                                                justifyContent: 'flex-end'}}>
                                                <TouchableOpacity
                                                    onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'โรคกรดไหลย้อน' }})}
                                                >
                                                    <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    :title === 'ปวดท้อง, จุกเสียด, ท้องอืด, เรอเปรี้ยว' ?
                                        <View style={{flex:1}}>
                                            <View style={styles.viewDisease}>
                                                <CommonText text={'คุณเป็นโรค'} size={20} />
                                                <CommonText text={'โรคกรดไหลย้อน'} size={18} />
                                            </View>
                                            <View style={{borderWidth: 2, borderColor: '#37818e', flex:1, margin: '1%', padding: '1%'}}>
                                                <View style={{flex: 1}}>
                                                    <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                                    <CommonText text={'ผักชี, ขมิ้นชัน, อบเชย, โหระพา, น้ำมันมะกอก, กุยช่าย'} size={18} />
                                                </View>
                                                <View style={{flexDirection: 'row',
                                                    justifyContent: 'flex-end'}}>
                                                    <TouchableOpacity
                                                        onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'โรคกรดไหลย้อน' }})}
                                                    >
                                                        <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                        :null
                        }
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

bodyScreen3.navigationOptions  = ({navigation}) => ({
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
        padding: '1%',
        marginTop: '5%'
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
)(bodyScreen3);
