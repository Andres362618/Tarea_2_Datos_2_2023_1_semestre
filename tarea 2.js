import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('');

  const handleConcatenate = () => {
    setResult(text1 + text2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese el primer texto:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setText1(text)}
        value={text1}
      />
      <Text style={styles.label}>Ingrese el segundo texto:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setText2(text)}
        value={text2}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleConcatenate}
      >
        <Text style={styles.buttonText}>Concatenar textos</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  result: {
    fontSize: 24,
    marginTop: 20,
  },
});
