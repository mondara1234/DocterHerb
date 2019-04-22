import React from 'react';
import { Alert, BackHandler, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Container ,Card } from 'native-base';
import HandleBack from "../../../common/components/HandleBack";
import HeaderTitle from '../../../common/components/HeaderTitle';
import CommonText from '../../../common/components/CommonText';
import SideMenu from '../../../common/components/SideMenu';
import {HEAD_SCREEN13, SYMPTOM_SCREEN} from "../../router";
import {HERB_SCREEN} from "../../../Herb/router";
import {HOME_SCREEN, LISTHERB_SCREEN} from "../../../HomeMain/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavigationActions } from "react-navigation";
import {AllDetailSymptom} from "../../redux/actions";

class headScreen12 extends React.PureComponent {
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
                        {title === 'เจ็บคอ, น้ำมูก, มีเสมหะ, คัดจมูก' || title === 'เจ็บคอ, น้ำมูก, คัดจมูก, มีเสมหะ' || title === 'เจ็บคอ, คัดจมูก, น้ำมูก, มีเสมหะ' || title === 'เจ็บคอ, คัดจมูก, มีเสมหะ, น้ำมูก' || title === 'เจ็บคอ, มีเสมหะ, คัดจมูก, น้ำมูก' || title === 'เจ็บคอ, มีเสมหะ, น้ำมูก, คัดจมูก' ?
                            <View style={{flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                margin: 10}}>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, จาม`);
                                        this.props.navigation.navigate({routeName: HEAD_SCREEN13, params: { title: `${title}, จาม` }});
                                    }}
                                >
                                    <CommonText text={'จาม'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                            :title === 'เจ็บคอ, น้ำมูก, มีเสมหะ, จาม' || title === 'เจ็บคอ, น้ำมูก, จาม, มีเสมหะ' || title === 'เจ็บคอ, จาม, น้ำมูก, มีเสมหะ' || title === 'เจ็บคอ, จาม, มีเสมหะ, น้ำมูก' || title === 'เจ็บคอ, มีเสมหะ, จาม, น้ำมูก' || title === 'เจ็บคอ, มีเสมหะ, น้ำมูก, จาม' ?
                            <View style={{flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                margin: 10}}>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, คัดจมูก`);
                                        this.props.navigation.navigate({routeName: HEAD_SCREEN13, params: { title: `${title}, คัดจมูก` }});
                                    }}
                                >
                                    <CommonText text={'คัดจมูก'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                                :title === 'เจ็บคอ, มีเสมหะ, คัดจมูก, จาม' || title === 'เจ็บคอ, มีเสมหะ, จาม, คัดจมูก' || title === 'เจ็บคอ, คัดจมูก, จาม, มีเสมหะ' || title === 'เจ็บคอ, คัดจมูก, มีเสมหะ, จาม' || title === 'เจ็บคอ, จาม, คัดจมูก, มีเสมหะ' || title === 'เจ็บคอ, จาม, มีเสมหะ, คัดจมูก' ?
                                    <View style={{flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        margin: 10}}>
                                        <TouchableOpacity
                                            style={styles.containerButton}
                                            onPress={ () => {
                                                this.props.REDUCER_Getdetail(`${title}, น้ำมูก`);
                                                this.props.navigation.navigate({routeName: HEAD_SCREEN13, params: { title: `${title}, น้ำมูก` }});
                                            }}
                                        >
                                            <CommonText text={'น้ำมูก'} size={20} color={'#fff'} />
                                        </TouchableOpacity>
                                    </View>
                                    :title === 'เจ็บคอ, คัดจมูก, น้ำมูก, จาม' || title === 'เจ็บคอ, คัดจมูก, จาม, น้ำมูก' || title === 'เจ็บคอ, น้ำมูก, คัดจมูก, จาม' || title === 'เจ็บคอ, น้ำมูก, จาม, คัดจมูก' || title === 'เจ็บคอ, จาม, คัดจมูก, น้ำมูก' || title === 'เจ็บคอ, จาม, น้ำมูก, คัดจมูก' ?
                                        <View style={{flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            margin: 10}}>
                                            <TouchableOpacity
                                                style={styles.containerButton}
                                                onPress={ () => {
                                                    this.props.REDUCER_Getdetail(`${title}, มีเสมหะ`);
                                                    this.props.navigation.navigate({routeName: HEAD_SCREEN13, params: { title: `${title}, มีเสมหะ` }});
                                                }}
                                            >
                                                <CommonText text={'มีเสมหะ'} size={20} color={'#fff'} />
                                            </TouchableOpacity>
                                        </View>
                                        :null
                        }
                        {title === 'เจ็บคอ, น้ำมูก, มีเสมหะ, คัดจมูก' || title === 'เจ็บคอ, น้ำมูก, คัดจมูก, มีเสมหะ' || title === 'เจ็บคอ, คัดจมูก, น้ำมูก, มีเสมหะ' || title === 'เจ็บคอ, คัดจมูก, มีเสมหะ, น้ำมูก' || title === 'เจ็บคอ, มีเสมหะ, คัดจมูก, น้ำมูก' || title === 'เจ็บคอ, มีเสมหะ, น้ำมูก, คัดจมูก' ?
                            <View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                    <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                                    <CommonText text={'โรคภูมิแพ้'} size={18} />
                                </View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height:'71%', margin: '1%', padding: '1%'}}>
                                    <View style={{flex: 1}}>
                                        <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                        <CommonText text={'เก๊กฮวย,หอมใหญ่,กระเทียม,มะกรูด'} size={18} />
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
                            :title === 'เจ็บคอ, น้ำมูก, มีเสมหะ, จาม' || title === 'เจ็บคอ, น้ำมูก, จาม, มีเสมหะ' || title === 'เจ็บคอ, จาม, น้ำมูก, มีเสมหะ' || title === 'เจ็บคอ, จาม, มีเสมหะ, น้ำมูก' || title === 'เจ็บคอ, มีเสมหะ, จาม, น้ำมูก' || title === 'เจ็บคอ, มีเสมหะ, น้ำมูก, จาม' ?
                            <View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                    <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                                    <CommonText text={'โรคกระเพาะ'} size={18} />
                                </View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height:'71%', margin: '1%', padding: '1%'}}>
                                    <View style={{flex: 1}}>
                                        <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                        <CommonText text={'ผักชี, ขมิ้นชัน, กระเจี๊ยบเขียว'} size={18} />
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
                                :title === 'เจ็บคอ, มีเสมหะ, คัดจมูก, จาม' || title === 'เจ็บคอ, มีเสมหะ, จาม, คัดจมูก' || title === 'เจ็บคอ, คัดจมูก, จาม, มีเสมหะ' || title === 'เจ็บคอ, คัดจมูก, มีเสมหะ, จาม' || title === 'เจ็บคอ, จาม, คัดจมูก, มีเสมหะ' || title === 'เจ็บคอ, จาม, มีเสมหะ, คัดจมูก' ?
                                    <View>
                                        <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                            <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                                            <CommonText text={'โรคกระเพาะ'} size={18} />
                                        </View>
                                        <View style={{borderWidth: 2, borderColor: '#37818e', height:'71%', margin: '1%', padding: '1%'}}>
                                            <View style={{flex: 1}}>
                                                <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                                <CommonText text={'ผักชี, ขมิ้นชัน, กระเจี๊ยบเขียว'} size={18} />
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
                                    :title === 'เจ็บคอ, คัดจมูก, น้ำมูก, จาม' || title === 'เจ็บคอ, คัดจมูก, จาม, น้ำมูก' || title === 'เจ็บคอ, น้ำมูก, คัดจมูก, จาม' || title === 'เจ็บคอ, น้ำมูก, จาม, คัดจมูก' || title === 'เจ็บคอ, จาม, คัดจมูก, น้ำมูก' || title === 'เจ็บคอ, จาม, น้ำมูก, คัดจมูก' ?
                                        <View>
                                            <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                                <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                                                <CommonText text={'โรคกระเพาะ'} size={18} />
                                            </View>
                                            <View style={{borderWidth: 2, borderColor: '#37818e', height:'71%', margin: '1%', padding: '1%'}}>
                                                <View style={{flex: 1}}>
                                                    <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                                    <CommonText text={'ผักชี, ขมิ้นชัน, กระเจี๊ยบเขียว'} size={18} />
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

headScreen12.navigationOptions  = ({navigation}) => ({
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
)(headScreen12);
