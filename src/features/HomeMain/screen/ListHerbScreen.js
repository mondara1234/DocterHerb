import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList, BackHandler, Alert, Keyboard, Image} from 'react-native';
import { Container, Header, Left, Thumbnail, Body, ListItem } from 'native-base';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavigationActions } from "react-navigation";
import HandleBack from "../../common/components/HandleBack";
import SideMenu from '../../common/components/SideMenu';
import CommonText from '../../common/components/CommonText';
import HeaderTitle from '../../common/components/HeaderTitle';
import HeaderLeftMenu from '../../common/components/HeaderLeftMenu';
import {HOME_SCREEN} from "../router";
import {HERB_SCREEN, DETAILHERB_SCREEN} from "../../Herb/router";
import {SYMPTOM_SCREEN} from "../../Symptom/router";
import { AllLISTHERBDATA } from "../../HomeMain/redux/actions";
import {SERVER_URL} from "../../../common/constants";

class ListHerbScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            setDataherb: [],
            dataherb: [],
            nameherb: '',
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
        const { title } = this.props.navigation.state.params;
        const name = `${title}`;
        this.getListHerb(name);
    }

    async getListHerb(name) {
        const response = await fetch(`${SERVER_URL}/MYSQLCHI/home/SeachName.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name : name
            })
        }).then(response => response.json())
            .then((responseJson) => responseJson)
            .catch((error) => {
                console.error(error);
            });
        this.props.REDUCER_GetHerb(response);
        const dataherb = this.props.datalist.dataList;
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
    }

    sortFoodMenu() {
        Keyboard.dismiss();
        const response = this.state.films;
        if(this.state.statusSort === false){
            response.sort(function (a, b) {
                if(a.FoodName < b.FoodName) { return -1; }
                if(a.FoodName > b.FoodName) { return 1; }
                return 0;
            });
            this.setState({
                films: response,
                statusSort: true
            });
        }else{
            response.reverse(function(a, b){
                if(a.FoodName < b.FoodName) { return -1; }
                if(a.FoodName > b.FoodName) { return 1; }
                return 0;
            });
            this.setState({
                films: response,
                statusSort: false
            });
        }
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
                        {this.state.lengthherb === 0 ?
                            <View style={{flex: 1}}>
                                <CommonText text={'ไม่พบข้อมูล'} style={{fontSize: 30, marginTop: '40%'}} />
                            </View>
                            :
                        <View style={styles.containerFlasList}>
                            <View style={styles.viewNumberFound}>
                                <CommonText text={'จำนวนที่พบ'} style={styles.fonttitleFoodType} />
                                <CommonText text={this.state.lengthherb} style={styles.fontFoodType} />
                                <CommonText text={'รายการ'} style={styles.fonttitleFoodType} />
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

ListHerbScreen.navigationOptions  = ({navigation}) => ({
    header: null
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
    viewCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    listCheckBox: {
        backgroundColor: '#F4F4F4',
        borderBottomWidth: 0
    },
    fontCheckBox: {
        fontSize: 16
    },
    bgColorApp: {
        backgroundColor: '#37818e'
    },
    viewRowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCheckBox: {
        width: '99.9%',
        borderWidth: 1,
        borderColor: '#37818e'
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
    fonttitleFoodType: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 10
    },
    fontFoodType: {
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
        datalist: state.dataHome
    };
}

export default connect(
    mapStateToProps,
    (dispatch) => ({
        NavigationActions: bindActionCreators(NavigationActions, dispatch),
        REDUCER_GetHerb: bindActionCreators(AllLISTHERBDATA, dispatch)
    })
)(ListHerbScreen);

