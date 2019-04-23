import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, FlatList, BackHandler, Alert, Keyboard } from 'react-native';
import { Container, Header, Left, Thumbnail, Body, ListItem } from 'native-base';
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
import { DETAILHERB_SCREEN, HERB_SCREEN } from "../router";
import { HOME_SCREEN } from "../../HomeMain/router";
import { SYMPTOM_SCREEN } from "../../Symptom/router";
import { AllHerb, SETLOADING } from "../../Herb/redux/actions";
import { SERVER_URL } from "../../../common/constants";

class herbScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            setDataherb: [],
            lengthherb: 0,
            query: '',
            editing: true,
            statusSort: false
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

    componentDidMount() {
        this.getListHerb();
    }

    async getListHerb() {
        const response = await fetch(`${SERVER_URL}/MYSQLCHI/herb/Allherb.php`)
            .then(response => response.json())
            .then((responseJson) => responseJson)
            .catch((error) => {
                console.error(error);
            });
        this.props.REDUCER_GetHerb(response);
        const dataherb = this.props.dataherb.herb;
        this.setState({
            films: dataherb,
            setDataherb: dataherb,
            lengthherb: dataherb.length
        });

        this.props.REDUCER_Set_loading();
    }

    sortFoodMenu() {
        Keyboard.dismiss();
        const response = this.state.films;
        if(this.state.statusSort === false){
            response.sort(function (a, b) {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            });
            this.setState({
                films: response,
                statusSort: true
            });
        }else{
            response.reverse(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            });
            this.setState({
                films: response,
                statusSort: false
            });
        }
    }

    //ไว้รับค่าแล้วค้นหา
    findFilm(value) {
        this.setState({query: value});
        let data = this.state.setDataherb;
        if (value === '') {
            this.setState({
                films: data,
                lengthherb: data.length
            })
        }else{
            this.SearchFoodMenu(value)
        }
    }

    async SearchFoodMenu(value) {
        let valueName = `${value}`;
        const response = await fetch(`${SERVER_URL}/MYSQLCHI/herb/SeachHerbName.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                herbname : valueName
            })
        }).then(response => response.json())
            .then((responseJson) => responseJson)
            .catch((error) => {
                console.error(error);
            });
        this.props.REDUCER_GetHerb(response);
        const dataherb = this.props.dataherb.herb;
        let data = [];
        if( dataherb === 'ไม่พบ' ){
            this.setState({
                films: data,
                lengthherb: data.length
            })
        }else{
            this.setState({
                films: dataherb,
                lengthherb: dataherb.length
            })
        }
        this.props.REDUCER_Set_loading();
    }

    BtnClear(){ // ปุ่ม x (ลบ)
        let data = this.state.setDataherb;
        this.setState({
            films: data,
            query: '',
            lengthherb: data.length
        })
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.containerRenderItem}>
                <ListItem  thumbnail
                           style={styles.listItem}
                           onPress={() => this.props.navigation.navigate({routeName: DETAILHERB_SCREEN, params: {herbData: item}}) }
                >
                    <Left>
                        <Thumbnail
                            source={{uri: item.pic}}
                            style={{ width: 60, height: 60}}
                        />
                    </Left>
                    <Body>
                        <View style={styles.bodyRendsrItem}>
                            <Text numberOfLines={1} style={styles.fontbase}>{item.name}</Text>
                            <Text numberOfLines={1} style={styles.fontDisease}>{`รักษา : ${item.disease}`}</Text>
                        </View>
                    </Body>
                </ListItem>
            </View>
        )
    };

    render() {
        const loading = this.props.dataherb.loading;
        const herb = this.props.dataherb.herb;
        return (
            <HandleBack onBack={this.onBack}>
                <Container>
                    <Header style={styles.bgColorApp}>
                        <HeaderTitle text={'รายการสมุนไพร'} style={{marginLeft: '10%'}} />
                        <View style={styles.viewRowCenter}>
                            <HeaderLeftMenu
                                icon={ (this.state.statusSort === false ? 'sort-alpha-desc':'sort-alpha-asc')}
                                style={{marginRight: 5}}
                                onPress={() => this.sortFoodMenu()}
                            />
                        </View>
                    </Header>
                    <View style={styles.container}>
                        <View style={styles.containerViewSearch}>
                            <Icon name={'search'} size={25}/>
                            <Autocomplete
                                style={styles.containerSearch}/*กำหนดรูปแบบช่องค้นหา*/
                                containerStyle={styles.autocompleteContainer}/*กำหนดรูปแบบแถบแสดงค้นหา*/
                                defaultValue={this.state.query} /*กำหนดค่าเริ่มต้นให้กับ แวรู้*/
                                onChangeText={(value) => this.findFilm(value)} /*ส่งค่าที่กรอกเข้าไป*/
                                placeholder={'กรุณากรอกชื่อสมุนไพร'} /*ลายน้ำเพื่อพิมจะหายไป*/
                            />
                            {this.state.query ?
                                <TouchableOpacity onPress={() => this.BtnClear()} >
                                    <Icon name={'close'} size={25} />
                                </TouchableOpacity>
                                : null
                            }
                        </View>
                        {loading === true && herb.length === 0 ?
                            <View style={[styles.containerloading, styles.horizontal]}>
                                <ActivityIndicator size="large" color="#0000ff" />
                            </View>
                        :this.state.lengthherb === 0 ?
                            <View style={{flex: 1}}>
                                <CommonText text={'ไม่พบข้อมูล'} style={{fontSize: 30, marginTop: '40%'}} />

                            </View>
                            :
                        <View style={styles.containerFlasList}>
                            <View style={styles.viewNumberFound}>
                                <CommonText text={'จำนวนที่พบ'} style={styles.fonttitleherb} />
                                <CommonText text={this.state.lengthherb} style={styles.fontherb} />
                                <CommonText text={'รายการ'} style={styles.fonttitleherb} />
                            </View>
                            <View style={styles.containerFlasList}>
                                <FlatList
                                    data={this.state.films}
                                    extraData={this.state}
                                    renderItem={this._renderItem}
                                    keyExtractor={(item, index) => index}
                                />
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

herbScreen.navigationOptions  = ({navigation}) => ({
    header: null
});

const styles = StyleSheet.create({
    containerloading: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
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
    containerRenderItem: {
        width: '100%',
        height: 70,
        backgroundColor: "#F4F4F4",
        borderWidth: 1 ,
        borderColor: '#37818e'
    },
    listItem: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -7
    },
    bodyRendsrItem: {
        width: '100%',
        backgroundColor: 'transparent'
    },
    fontbase: {
        fontSize: 18,
        color: '#020202',
        marginBottom: 5,
        fontWeight: 'bold'
    },
    fontDisease: {
        fontSize: 14,
        color: '#37818e'
    },
    bgColorApp: {
        backgroundColor: '#37818e'
    },
    viewRowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerViewSearch: {
        height: 50,
        width: '90%',
        backgroundColor: "#F4F4F4",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5
    },
    viewNumberFound: {
        width: '100%',
        height: 40,
        backgroundColor: "#37818e",
        flexDirection: 'row',
        alignItems: 'center'
    },
    fonttitleherb: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 10
    },
    fontherb: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 5,
        fontWeight: 'bold'
    },
    containerFlasList: {
        flex: 1,
        width: '100%'
    }

});

function mapStateToProps(state) {
    return{
        dataherb: state.dataHerb
    };
}

export default connect(
    mapStateToProps,
    (dispatch) => ({
        NavigationActions: bindActionCreators(NavigationActions, dispatch),
        REDUCER_GetHerb: bindActionCreators(AllHerb, dispatch),
        REDUCER_Set_loading: bindActionCreators(SETLOADING, dispatch),
    })
)(herbScreen);

