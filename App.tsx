import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={Styles.container}>
        <Text style={Styles.title}>Francesco Figo Repu {'\n'}Anak SI</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput style={Styles.input} placeholder="Enter Your Email" />
        <TextInput
          style={Styles.input}
          placeholder="Enter Your Password"
          secureTextEntry
        />
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text style={Styles.subTitle}>Hahahah</Text>
        <Image style={Styles.foto} source={require('./assets/gambar.png')} />
        <Text style={Styles.subTitle}>Pacar Gue</Text>
        <Image style={Styles.foto} source={require('./assets/winter.jpg')} />
        <Text style={Styles.subTitle}>Waifu Gue</Text>
        <Image
          style={Styles.asen2}
          source={{
            uri: 'https://static.zerochan.net/Tokisaki.Kurumi.full.3546687.jpg',
          }}
        />
      </ScrollView>
    </>
  );
};

export default App;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 15,
    padding: 10,
    margin: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  foto: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  asen2: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    padding: 20,
    fontSize: 25,
    borderRadius: 15,
  },
  button: {
    backgroundColor: 'blue',
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});
