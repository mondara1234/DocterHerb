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
import { HEAD_SCREEN12, SYMPTOM_SCREEN } from "../../router";
import { HERB_SCREEN} from "../../../Herb/router";
import { HOME_SCREEN, LISTHERB_SCREEN } from "../../../HomeMain/router";
import { AllDetailSymptom } from "../../redux/actions";
import { SETLOAD } from "../../../HomeMain/redux/actions";
import { SETLOADING } from "../../../Herb/redux/actions";

class headScreen11 extends React.PureComponent {
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
                        {title === 'เจ็บคอ, น้ำมูก, มีเสมหะ' || title === 'เจ็บคอ, มีเสมหะ, น้ำมูก' ?
                            <View style={{flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                margin: 10}}>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, คัดจมูก`);
                                        this.props.navigation.navigate({routeName: HEAD_SCREEN12, params: { title: `${title}, คัดจมูก` }});
                                    }}
                                >
                                    <CommonText text={'คัดจมูก'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, จาม`);
                                        this.props.navigation.navigate({routeName: HEAD_SCREEN12, params: { title: `${title}, จาม` }});
                                    }}
                                >
                                    <CommonText text={'จาม'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                            :title === 'เจ็บคอ, น้ำมูก, คัดจมูก' || title === 'เจ็บคอ, คัดจมูก, น้ำมูก'?
                            <View style={{flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                margin: 10}}>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, มีเสมหะ`);
                                        this.props.navigation.navigate({routeName: HEAD_SCREEN12, params: { title: `${title}, มีเสมหะ` }});
                                    }}
                                >
                                    <CommonText text={'มีเสมหะ'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.containerButton}
                                    onPress={ () => {
                                        this.props.REDUCER_Getdetail(`${title}, จาม`);
                                        this.props.navigation.navigate({routeName: HEAD_SCREEN12, params: { title: `${title}, จาม` }});
                                    }}
                                >
                                    <CommonText text={'จาม'} size={20} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                                :title === 'เจ็บคอ, น้ำมูก, จาม' || title === 'เจ็บคอ, จาม, น้ำมูก'?
                                    <View style={{flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        margin: 10}}>
                                        <TouchableOpacity
                                            style={styles.containerButton}
                                            onPress={ () => {
                                                this.props.REDUCER_Getdetail(`${title}, มีเสมหะ`);
                                                this.props.navigation.navigate({routeName: HEAD_SCREEN12, params: { title: `${title}, มีเสมหะ` }});
                                            }}
                                        >
                                            <CommonText text={'มีเสมหะ'} size={20} color={'#fff'} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.containerButton}
                                            onPress={ () => {
                                                this.props.REDUCER_Getdetail(`${title}, คัดจมูก`);
                                                this.props.navigation.navigate({routeName: HEAD_SCREEN12, params: { title: `${title}, คัดจมูก` }});
                                            }}
                                        >
                                            <CommonText text={'คัดจมูก'} size={20} color={'#fff'} />
                                        </TouchableOpacity>
                                    </View>
                                    :title === 'เจ็บคอ, มีเสมหะ, คัดจมูก' || title === 'เจ็บคอ, คัดจมูก, มีเสมหะ'?
                                        <View style={{flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            margin: 10}}>
                                            <TouchableOpacity
                                                style={styles.containerButton}
                                                onPress={ () => {
                                                    this.props.REDUCER_Getdetail(`${title}, น้ำมูก`);
                                                    this.props.navigation.navigate({routeName: HEAD_SCREEN12, params: { title: `${title}, น้ำมูก` }});
                                                }}
                                            >
                                                <CommonText text={'น้ำมูก'} size={20} color={'#fff'} />
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.containerButton}
                                                onPress={ () => {
                                                    this.props.REDUCER_Getdetail(`${title}, จาม`);
                                                    this.props.navigation.navigate({routeName: HEAD_SCREEN12, params: { title: `${title}, จาม` }});
                                                }}
                                            >
                                                <CommonText text={'จาม'} size={20} color={'#fff'} />
                                            </TouchableOpacity>
                                        </View>
                                        :title === 'เจ็บคอ, มีเสมหะ, จาม' || title === 'เจ็บคอ, จาม, มีเสมหะ'?
                                            <View style={{flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                margin: 10}}>
                                                <TouchableOpacity
                                                    style={styles.containerButton}
                                                    onPress={ () => {
                                                        this.props.REDUCER_Getdetail(`${title}, น้ำมูก`);
                                                        this.props.navigation.navigate({routeName: HEAD_SCREEN12, params: { title: `${title}, น้ำมูก` }});
                                                    }}
                                                >
                                                    <CommonText text={'น้ำมูก'} size={20} color={'#fff'} />
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={styles.containerButton}
                                                    onPress={ () => {
                                                        this.props.REDUCER_Getdetail(`${title}, คัดจมูก`);
                                                        this.props.navigation.navigate({routeName: HEAD_SCREEN12, params: { title: `${title}, คัดจมูก` }});
                                                    }}
                                                >
                                                    <CommonText text={'คัดจมูก'} size={20} color={'#fff'} />
                                                </TouchableOpacity>
                                            </View>
                                            :title === 'เจ็บคอ, คัดจมูก, จาม' || title === 'เจ็บคอ, จาม, คัดจมูก'?
                                                <View style={{flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    margin: 10}}>
                                                    <TouchableOpacity
                                                        style={styles.containerButton}
                                                        onPress={ () => {
                                                            this.props.REDUCER_Getdetail(`${title}, น้ำมูก`);
                                                            this.props.navigation.navigate({routeName: HEAD_SCREEN12, params: { title: `${title}, น้ำมูก` }});
                                                        }}
                                                    >
                                                        <CommonText text={'น้ำมูก'} size={20} color={'#fff'} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={styles.containerButton}
                                                        onPress={ () => {
                                                            this.props.REDUCER_Getdetail(`${title}, มีเสมหะ`);
                                                            this.props.navigation.navigate({routeName: HEAD_SCREEN12, params: { title: `${title}, มีเสมหะ` }});
                                                        }}
                                                    >
                                                        <CommonText text={'มีเสมหะ'} size={20} color={'#fff'} />
                                                    </TouchableOpacity>
                                                </View>
                                                :null
                        }
                        {title === 'เจ็บคอ, น้ำมูก, มีเสมหะ' || title === 'เจ็บคอ, มีเสมหะ, น้ำมูก' ?
                            <View style={{flex: 1}}>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                    <CommonText text={'คุณเป็น'} size={20} />
                                    <CommonText text={'ภูมิแพ้'} size={18} />
                                </View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', flex: 1, margin: '1%', padding: '1%'}}>
                                    <View style={{flex: 1}}>
                                        <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                        <CommonText text={'เก๊กฮวย, หอมใหญ่, มะกรูด, ฟักเขียว'} size={18} />
                                    </View>
                                    <View style={{flexDirection: 'row',
                                        justifyContent: 'flex-end'}}>
                                        <TouchableOpacity
                                            onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'ภูมิแพ้' }})}
                                        >
                                            <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            :title === 'เจ็บคอ, น้ำมูก, คัดจมูก' || title === 'เจ็บคอ, คัดจมูก, น้ำมูก'?
                            <View style={{flex: 1}}>
                                <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                    <CommonText text={'คุณเป็น'} size={20} />
                                    <CommonText text={'ภูมิแพ้'} size={18} />
                                </View>
                                <View style={{borderWidth: 2, borderColor: '#37818e', flex: 1, margin: '1%', padding: '1%'}}>
                                    <View style={{flex: 1}}>
                                        <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                        <CommonText text={'เก๊กฮวย, หอมใหญ่, มะกรูด, พริกไทย'} size={18} />
                                    </View>
                                    <View style={{flexDirection: 'row',
                                        justifyContent: 'flex-end'}}>
                                        <TouchableOpacity
                                            onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'ภูมิแพ้' }})}
                                        >
                                            <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                                :title === 'เจ็บคอ, น้ำมูก, จาม' || title === 'เจ็บคอ, จาม, น้ำมูก'?
                                    <View style={{flex: 1}}>
                                        <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                            <CommonText text={'คุณเป็น'} size={20} />
                                            <CommonText text={'ภูมิแพ้'} size={18} />
                                        </View>
                                        <View style={{borderWidth: 2, borderColor: '#37818e', flex: 1, margin: '1%', padding: '1%'}}>
                                            <View style={{flex: 1}}>
                                                <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                                <CommonText text={'เก๊กฮวย, หอมใหญ่, กระเทียม'} size={18} />
                                            </View>
                                            <View style={{flexDirection: 'row',
                                                justifyContent: 'flex-end'}}>
                                                <TouchableOpacity
                                                    onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'ภูมิแพ้' }})}
                                                >
                                                    <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    :title === 'เจ็บคอ, มีเสมหะ, คัดจมูก' || title === 'เจ็บคอ, คัดจมูก, มีเสมหะ'?
                                        <View style={{flex: 1}}>
                                            <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                                <CommonText text={'คุณเป็น'} size={20} />
                                                <CommonText text={'ภูมิแพ้'} size={18} />
                                            </View>
                                            <View style={{borderWidth: 2, borderColor: '#37818e', flex: 1, margin: '1%', padding: '1%'}}>
                                                <View style={{flex: 1}}>
                                                    <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                                    <CommonText text={'เก๊กฮวย, กระเทียม, มะกรูด, ฟักเขียว, ชะพลู'} size={18} />
                                                </View>
                                                <View style={{flexDirection: 'row',
                                                    justifyContent: 'flex-end'}}>
                                                    <TouchableOpacity
                                                        onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'ภูมิแพ้' }})}
                                                    >
                                                        <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                        :title === 'เจ็บคอ, มีเสมหะ, จาม' || title === 'เจ็บคอ, จาม, มีเสมหะ'?
                                            <View style={{flex: 1}}>
                                                <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                                    <CommonText text={'คุณเป็น'} size={20} />
                                                    <CommonText text={'ภูมิแพ้'} size={18} />
                                                </View>
                                                <View style={{borderWidth: 2, borderColor: '#37818e', flex: 1, margin: '1%', padding: '1%'}}>
                                                    <View style={{flex: 1}}>
                                                        <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                                        <CommonText text={'เก๊กฮวย, กระเทียม, มะกรูด, ดอกคำฝอย'} size={18} />
                                                    </View>
                                                    <View style={{flexDirection: 'row',
                                                        justifyContent: 'flex-end'}}>
                                                        <TouchableOpacity
                                                            onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'ภูมิแพ้' }})}
                                                        >
                                                            <CommonText text={'ดูรายละเอียดสมุนไพร...'} size={18} />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                            :title === 'เจ็บคอ, คัดจมูก, จาม' || title === 'เจ็บคอ, จาม, คัดจมูก'?
                                                <View style={{flex: 1}}>
                                                    <View style={{borderWidth: 2, borderColor: '#37818e', height: 100 ,margin: '1%', padding: '1%'}}>
                                                        <CommonText text={'คุณเป็น'} size={20} />
                                                        <CommonText text={'ภูมิแพ้'} size={18} />
                                                    </View>
                                                    <View style={{borderWidth: 2, borderColor: '#37818e', flex: 1, margin: '1%', padding: '1%'}}>
                                                        <View style={{flex: 1}}>
                                                            <CommonText text={'สมุนไพรที่ช่วยรักษาอาการได้'} size={20} />
                                                            <CommonText text={'เก๊กฮวย, กระเทียม, มะกรูด, ฟักเขียว, ดอกคำฝอย'} size={18} />
                                                        </View>
                                                        <View style={{flexDirection: 'row',
                                                            justifyContent: 'flex-end'}}>
                                                            <TouchableOpacity
                                                                onPress={ () => this.props.navigation.navigate({routeName: LISTHERB_SCREEN, params: { title: 'ภูมิแพ้' }})}
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

headScreen11.navigationOptions  = ({navigation}) => ({
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
        REDUCER_Getdetail: bindActionCreators(AllDetailSymptom, dispatch),
        REDUCER_SetLoading: bindActionCreators(SETLOADING, dispatch),
        REDUCER_SetLoadinglist: bindActionCreators(SETLOAD, dispatch)
    })
)(headScreen11);
