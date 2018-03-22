import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from  'redux';
import {fetchingFilms} from '../../sagas/Films/actions'
import films from '../../films.js'
import {  FlatList, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux'

class FilmsListPage extends Component{
    // componentDidMount(){
    //     const {actions} = this.props;
    //     actions.fetchingFilms();
    // }

    onPressFilm = () => () =>{
        Actions.comments()
    }

    render(){
        // const { filmsList } = this.props.films;

        const filmsName = films.map(item => ({key: item.title}));
        console.log(films);
        return(
            <View>
                <FlatList
                    data = {filmsName}
                    renderItem = {({item}) => <Text style={styles.list} onPress={this.onPressFilm()}>{item.key}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 10,
        paddingBottom: 10,
    },
});

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