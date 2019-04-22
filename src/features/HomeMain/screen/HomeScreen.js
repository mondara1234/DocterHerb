import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList, BackHandler, Alert, Keyboard, Image} from 'react-native';
import { Container, Header, Left, Thumbnail, CheckBox, Body, ListItem } from 'native-base';
import Autocomplete from 'react-native-autocomplete-input';
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavigationActions } from "react-navigation";
import HandleBack from "../../common/components/HandleBack";
import SideMenu from '../../common/components/SideMenu';
import CommonText from '../../common/components/CommonText';
import HeaderTitle from '../../common/components/HeaderTitle';
import HeaderLeftMenu from '../../common/components/HeaderLeftMenu';
import {HOME_SCREEN} from "../router";
import {HERB_SCREEN} from "../../Herb/router";
import {SYMPTOM_SCREEN} from "../../Symptom/router";

class homeScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            setDataFood: [],
            query: '',
            editing: true
        };
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

    //ไว้รับค่าแล้วค้นหา
    findFilm(value) {
        this.setState({query: value});
        console.log('date =' , this.state.query);
    }

    BtnClear(){ // ปุ่ม x (ลบ)
        let data = this.state.setDataFood;
        this.setState({
            films: data,
            query: ''
        })
    }

    render() {
        return (
            <HandleBack onBack={this.onBack}>
                <Container>
                    <View style={styles.container}>
                        <View style={styles.containerViewSearch}>
                            <Icon name={'user-md'} size={30}/>
                            <Autocomplete
                                style={styles.containerSearch}/*กำหนดรูปแบบช่องค้นหา*/
                                containerStyle={styles.autocompleteContainer}/*กำหนดรูปแบบแถบแสดงค้นหา*/
                                defaultValue={this.state.query} /*กำหนดค่าเริ่มต้นให้กับ แวรู้*/
                                onChangeText={(value) => this.findFilm(value)} /*ส่งค่าที่กรอกเข้าไป*/
                                placeholder={'กรุณากรอกชื่อโรค เช่น โรคกระเพราะ'} /*ลายน้ำเพื่อพิมจะหายไป*/
                            />
                            {this.state.query ?
                                <View style={{ flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => this.BtnClear()} >
                                        <Icon name={'close'} size={25} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.BtnClear()} style={{marginLeft: 10}} >
                                        <Icon name={'search'} size={25} />
                                    </TouchableOpacity>
                                </View>
                                : null
                            }
                        </View>
                        <Image
                            style={{width: '100%', height: '30%', marginTop: '20%'}}
                            source={require('../../../../pulic/assets/img/imgHome.png')}
                        />
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

homeScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <HeaderTitle text={'หน้าหลัก'} color={'#fff'} />,
    headerLeft: null
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    autocompleteContainer:{
        width: '50%',
        marginHorizontal: 10
    },
    containerSearch: {
        height: 40,
        backgroundColor:'#F4F4F4',
        color:'#37818e',
        borderWidth: 2,
        borderColor: '#37818e',
    },
    btnClear: {
        height:50,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft: 10
    },
    fontbase: {
        fontSize: 18,
        color: '#020202',
        marginBottom: 5,
        fontWeight: 'bold'
    },
    containerViewSearch: {
        height: 50,
        width: '90%',
        backgroundColor: "#F4F4F4",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5
    }

});

export default homeScreen ;

// function mapStateToProps(state) {
//     return{
//         FoodMenu: state.dataMenuFood,
//         FoodType: state.dataMenuFood
//     };
// }
//
// export default connect(
//     mapStateToProps,
//     (dispatch) => ({
//         NavigationActions: bindActionCreators(NavigationActions, dispatch),
//         REDUCER_GetMenuFood: bindActionCreators(AllMenuFood, dispatch),
//         REDUCER_GetFoodType: bindActionCreators(AllFoodType, dispatch),
//         REDUCER_ROUNTNAME: bindActionCreators(getRouteName, dispatch),
//     })
// )(homeScreen);
