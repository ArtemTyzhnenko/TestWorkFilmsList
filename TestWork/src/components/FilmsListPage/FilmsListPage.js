import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from  'redux';
import {fetchingFilms} from '../../sagas/Films/actions'

import {  FlatList, StyleSheet, Text, View } from 'react-native';

class FilmsListPage extends Component{
    componentDidMount(){
        const {actions} = this.props;
        actions.fetchingFilms();
    }
    render(){
        const {filmsList} = this.props.films;
        const filmsName = filmsList.map(item =>{ return {key: item.title}});
        return(
            <View>
                <FlatList
                    data ={...filmsName}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                fetchingFilms,
            },
            dispatch,
        )
    }
};

const mapStateToProps = state => {
    return{
        films: state.films,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsListPage);