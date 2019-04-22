import React from 'react';
import { Alert, BackHandler, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Container ,Card } from 'native-base';
import HandleBack from "../../../common/components/HandleBack";
import HeaderTitle from '../../../common/components/HeaderTitle';
import CommonText from '../../../common/components/CommonText';
import SideMenu from '../../../common/components/SideMenu';
import {BOBY_SCREEN4, SYMPTOM_SCREEN} from "../../router";
import { HERB_SCREEN} from "../../../Herb/router";
import {LISTHERB_SCREEN, HOME_SCREEN} from "../../../HomeMain/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavigationActions } from "react-navigation";
import {AllDetailSymptom} from "../../redux/actions";

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
                        <View style={{borderWidth: 2, borderColor: '#37818e', alignItems: 'center'}}>
                            <CommonText text={this.state.title} size={20} />
                        </View>
                        {title === 'ปวดท้อง, แน่นท้อง, อาหารไม่ย่อย, ท้องเฟ้อ' ?
                            <View style={{flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                margin: 10}}>
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
                            <View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                    <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                                    <CommonText text={'ไข้เืลอกออก'} size={18} />
                                </View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height:'71%', margin: '1%', padding: '1%'}}>
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
                            :title === 'ปวดท้อง, แน่นท้อง, เบื่ออาหาร, อุจาระไม่ออก' ?
                            <View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%', marginTop: '5%'}}>
                                    <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                                    <CommonText text={'โรคท้องผูก'} size={18} />
                                </View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height:'73%', margin: '1%', padding: '1%'}}>
                                    <View style={{flex: 1}}>
                                        <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                        <CommonText text={'ผักชี,ขมิ้นชัน,กระเจี๊ยบเขียว,มะขามแขก,ใบมะรุม,เม็ดแมงลัก,ขี้เหล็ก'} size={18} />
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
                                :title === 'ปวดท้อง, จัดเสียด, คลื่นไส้, อาเจียน' ?
                                    <View>
                                        <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%', marginTop: '5%'}}>
                                            <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                                            <CommonText text={'ไข้เืลอกออก'} size={18} />
                                        </View>
                                        <View style={{borderWidth: 2, borderColor: '#37818e', height:'73%', margin: '1%', padding: '1%'}}>
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
                                    :
                                        <View>
                                            <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%', marginTop: '5%'}}>
                                                <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                                                <CommonText text={'ไข้เืลอกออก'} size={18} />
                                            </View>
                                            <View style={{borderWidth: 2, borderColor: '#37818e', height:'73%', margin: '1%', padding: '1%'}}>
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
                        }
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

bodyScreen3.navigationOptions  = ({navigation}) => ({
    headerTitle: <HeaderTitle text={'อาการส่วนลำตัว'} color={'#fff'} style={{marginLeft: '-20%'}}  />,
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
)(bodyScreen3);
