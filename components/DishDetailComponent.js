import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, Modal, StyleSheet, Button } from 'react-native';
import { Card, Icon, Input, Rating } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postComment } from '../redux/ActionCreators';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    favorites: state.favorites
  }
}

const mapDispatchToProps = dispatch => ({
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
})

function RenderDish(props) {
  const dish = props.dish;

  if (dish != null) {
    return(
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
        <Card
          featuredTitle={dish.name}
          image={{uri: baseUrl + dish.image}}>
          <Text style={{margin: 10}}>
            {dish.description}
          </Text>
          <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
            <Icon
              raised
              reverse
              name={ props.favorite ? 'heart' : 'heart-o' }
              type='font-awesome'
              color='#F50'
              onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
            />
            <Icon
              raised
              reverse
              name='pencil'
              type='font-awesome'
              color='#4B088A'
              onPress={() => props.toggleModal()}
            />
          </View>
        </Card>
      </Animatable.View>
    )
  }
  else {
    return(<View></View>)
  }
}

function RenderComments(props) {
  const comments = props.comments
  const renderCommentItem = ({item, index}) => {
    return(
      <View key={index} style={{margin: 10}}>
        <Text style={{fontSize: 14}}>{item.comment}</Text>
        <Rating 
          style={{alignItems:'left'}}
          imageSize={20}
          startingValue={item.rating}>
        </Rating>
        <Text style={{fontSize: 12}}>{'--' + item.author + ', ' + item.date}</Text>
      </View>
    )
  }
  return(
    <Animatable.View animation='fadeInUp' duration={2000} delay={1000}>
      <Card title='Comments'>
        <FlatList
          data={comments}
          renderItem={renderCommentItem}
          keyExtractor={item => item.id.toString()}>
        </FlatList>
      </Card>
    </Animatable.View>
  )
}

class DishDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rating: 5,
      author: '',
      comment: '',
      showModal: false
    }
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal})
  }

  resetFrom() {
    this.setState({
      rating: 5,
      author: '',
      comment: '',
      showModal: false
    })
  }

  handleComment(dishId) {
    console.log(JSON.stringify(this.state))
    this.props.postComment(dishId, this.state.rating, this.state.author, this.state.comment)
    this.toggleModal()
  }

  markFavorite(dishId) {
    this.props.postFavorite(dishId)
  }

  render() {
    const dishId = this.props.route.params.dishId;
    return(
      <ScrollView>
        <RenderDish 
          dish={this.props.dishes.dishes[+dishId]}
          favorite={this.props.favorites.some(el => el === dishId)}
          onPress={() => this.markFavorite(dishId)}
          toggleModal={() => this.toggleModal()}
        />
        <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)}/>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.showModal}
          onDismiss={() => {this.toggleModal(); this.resetFrom()}}
          onRequestClose={() => {this.toggleModal(); this.resetFrom()}}>
          <View style={styles.formRow}>
          <Rating 
            startingValue={this.state.rating}
            showRating
            onFinishRating={(rating) => this.setState({rating: rating})}>
          </Rating>
            <Input
              leftIcon={{type: 'font-awesome', name:'user-o'}}
              placeholder='Author'
              onChangeText = {(text) => this.setState({author: text})}
            />
            <Input
              leftIcon={{type: 'font-awesome', name:'comment-o'}}
              placeholder='Comment'
              onChangeText = {(text) => this.setState({comment: text})}
            />
            <Button 
              title='SUBMIT'
              color='#512DA8'
              onPress={() => this.handleComment(dishId)}
              accessibilityLabel='Sumbit button'
            />
            <Button 
              title='CANCEL'
              color='#585858'
              onPress={() => {this.toggleModal(); this.resetFrom()}}
              accessibilityLabel='Cancel button'
            />
          </View>
        </Modal>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    margin: 20
  },
  modalTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#E1AB22',
    marginBottom: 20
  },
  modalTitleH: {
    fontSize: 28,
    textAlign: 'center',
    color: '#E1AB22',
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);