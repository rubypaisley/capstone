import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';

import { createPollThunk } from './store/polls';

class CreatePoll extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleSubmit = () => {
    console.log('here');
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="What is your question?"
            onChangeText={text => this.setState({ text })}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#8EB51A',
              padding: 10,
              margin: 10,
              width: 300
            }}
            onPress={this.handleSubmit}
          >
            <Text style={styles.createButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    backgroundColor: '#D3D3D4',
    marginBottom: 20,
    width: 300,
    paddingHorizontal: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  },
  header: {
    padding: 10,
    marginBottom: 30,
    fontSize: 75
  }
});

const mapDispatchToProps = dispatch => {
  return {
    createPoll: (userId, poll) => dispatch(createPollThunk(userId, poll))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreatePoll);
