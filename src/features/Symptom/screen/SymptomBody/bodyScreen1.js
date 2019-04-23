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
import { BOBY_SCREEN2, SYMPTOM_SCREEN } from "../../router";
import { HERB_SCREEN } from "../../../Herb/router";
import { LISTHERB_SCREEN, HOME_SCREEN } from "../../../HomeMain/router";
import { AllDetailSymptom } from "../../redux/actions";
import { SETLOAD } from "../../../HomeMain/redux/actions";
import { SETLOADING } from "../../../Herb/redux/actions";

class bodyScreen1 extends React.PureComponent {
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
                        {title === 'ปวดท้อง, จุกเสียด' ?
                            <View style={styles.containerTouch}>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, คลื่นไส้`);
                                        this.props.navigation.navigate({routeName: BOBY_SCREEN2, params: { title: `${title}, คลื่นไส้` }});
                                    }}
                                >
                                    <CommonText text={'คลื่นไส้'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, ท้องอืด`);
                                        this.props.navigation.navigate({routeName: BOBY_SCREEN2, params: { title: `${title}, ท้องอืด` }});
                                    }}
                                >
                                    <CommonText text={'ท้องอืด'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={styles.containerTouch}>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, เบื่ออาหาร`);
                                        this.props.navigation.navigate({routeName: BOBY_SCREEN2, params: { title: `${title}, เบื่ออาหาร` }})
                                    }}
                                >
                                    <CommonText text={'เบื่ออาหาร'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, อาหารไม่ย่อย`);
                                        this.props.navigation.navigate({routeName: BOBY_SCREEN2, params: { title: `${title}, อาหารไม่ย่อย` }});
                                    }}
                                >
                                    <CommonText text={'อาหารไม่ย่อย'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                        }
                        {title === 'ปวดท้อง, จุกเสียด' ?
                            <View>
                                <View style={styles.viewDisease}>
                                    <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                                    <CommonText text={'โรคกรดไหลย้อน'} size={18} />
                                </View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height:'71%', margin: '1%', padding: '1%'}}>
                                    <View style={{flex: 1}}>
                                        <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                        <CommonText text={'ผักชี, ขมิ้นชัน'} size={18} />
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                        <TouchableOpacity
                                            onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'โรคกรดไหลย้อน' }})}
                                        >
                                            <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            :
                            <View>
                                <View style={styles.viewDisease}>
                                    <CommonText text={'เสี่ยงเป็นโรค'} size={20} />
                                    <CommonText text={'เสี่ยงเป็นโรคกระเพาะ, ท้องผูก'} size={18} />
                                </View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height:'71%', margin: '1%', padding: '1%'}}>
                                    <View style={{flex: 1}}>
                                        <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                        <CommonText text={'ผักชี,ขมิ้นชัน,กระเจี๊ยบเขียว'} size={18} />
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

bodyScreen1.navigationOptions  = ({navigation}) => ({
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
)(bodyScreen1);
