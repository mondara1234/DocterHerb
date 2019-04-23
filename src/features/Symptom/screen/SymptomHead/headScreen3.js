import React from 'react';
import { Alert, BackHandler, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Container ,Card } from 'native-base';
import HandleBack from "../../../common/components/HandleBack";
import HeaderTitle from '../../../common/components/HeaderTitle';
import CommonText from '../../../common/components/CommonText';
import SideMenu from '../../../common/components/SideMenu';
import {HEAD_SCREEN4, SYMPTOM_SCREEN} from "../../router";
import {HERB_SCREEN} from "../../../Herb/router";
import {HOME_SCREEN, LISTHERB_SCREEN} from "../../../HomeMain/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavigationActions } from "react-navigation";
import {AllDetailSymptom} from "../../redux/actions";

class headScreen3 extends React.PureComponent {
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
                        {title === 'เจ็บคอ, ไอ, อ่อนเพลีย, ตัวร้อน' ?
                            <View style={{flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                margin: 10}}>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, เสียงแหบ`);
                                        this.props.navigation.navigate({routeName: HEAD_SCREEN4, params: { title: `${title}, เสียงแหบ` }});
                                    }}
                                >
                                    <CommonText text={'เสียงแหบ'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, หนาวสั่น`);
                                        this.props.navigation.navigate({routeName: HEAD_SCREEN4, params: { title: `${title}, หนาวสั่น` }});
                                    }}
                                >
                                    <CommonText text={'หนาวสั่น'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                            :title === 'เจ็บคอ, ไอ, อ่อนเพลีย, ปวดเมื่อย' ?
                                <View style={{flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    margin: 10}}>
                                    <TouchableOpacity
                                        style={styles.containerButton}
                                        onPress={ () => {
                                            this.props.REDUCER_Getdetail(`${title}, เจ็บหน้าอก`);
                                            this.props.navigation.navigate({routeName: HEAD_SCREEN4, params: { title: `${title}, เจ็บหน้าอก` }});
                                        }}
                                    >
                                        <CommonText text={'เจ็บหน้าอก'} size={20} color={'#fff'} />
                                    </TouchableOpacity>
                                </View>
                                :null
                        }
                        {title === 'เจ็บคอ, ไอ, อ่อนเพลีย, ตัวร้อน' ?
                            <View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                    <CommonText text={'เสี่ยงเป็น'} size={20} />
                                    <CommonText text={'ไข้หวัด'} size={18} />
                                </View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height:'71%', margin: '1%', padding: '1%'}}>
                                    <View style={{flex: 1}}>
                                        <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                        <CommonText text={'เก๊กฮวย, ผักชีฝรั่ง, หอมแดง, อบเชย'} size={18} />
                                    </View>
                                    <View style={{flexDirection: 'row',
                                        justifyContent: 'flex-end'}}>
                                        <TouchableOpacity
                                            onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'ไข้หวัด' }})}
                                        >
                                            <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            :title === 'เจ็บคอ, ไอ, อ่อนเพลีย, ปวดเมื่อย' ?
                                <View>
                                    <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                        <CommonText text={'เสี่ยงเป็น'} size={20} />
                                        <CommonText text={'วัณโรค'} size={18} />
                                    </View>
                                    <View style={{borderWidth: 2, borderColor: '#37818e', height:'71%', margin: '1%', padding: '1%'}}>
                                        <View style={{flex: 1}}>
                                            <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                            <CommonText text={'เก๊กฮวย, ผักชีฝรั่ง, เหงือกปลาหมอ, ทองพันชั่ง'} size={18} />
                                        </View>
                                        <View style={{flexDirection: 'row',
                                            justifyContent: 'flex-end'}}>
                                            <TouchableOpacity
                                                onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'วัณโรค' }})}
                                            >
                                                <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                :title === 'เจ็บคอ, ไอ, ปวดหัว, คลื่นไส้' ?
                                    <View>
                                        <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%', marginTop: '5%'}}>
                                            <CommonText text={'คุณเป็น'} size={20} />
                                            <CommonText text={'ไมเกรน'} size={18} />
                                        </View>
                                        <View style={{borderWidth: 2, borderColor: '#37818e', height:'75%', margin: '1%', padding: '1%'}}>
                                            <View style={{flex: 1}}>
                                                <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                                <CommonText text={'ผักชีฝรั่ง, เก๊กฮวย, กระเทียม, ขิง'} size={18} />
                                            </View>
                                            <View style={{flexDirection: 'row',
                                                justifyContent: 'flex-end'}}>
                                                <TouchableOpacity
                                                    onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'ไมเกรน' }})}
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
                        homeScreen={() => this.props.navigation.navigate(HOME_SCREEN)}
                        symptomScreen={() => this.props.navigation.navigate(SYMPTOM_SCREEN)}
                        herbScreen={() => this.props.navigation.navigate(HERB_SCREEN)}
                    />
                </Container>
            </HandleBack>
        );
    }
}

headScreen3.navigationOptions  = ({navigation}) => ({
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
)(headScreen3);
