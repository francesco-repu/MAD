import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise2 = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>BIODATA</Text>

        <View style={styles.topSection}>
          <Image
            source={require('./assets/Saya.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Francesco Repu</Text>
          <Text style={styles.phone}>085394921446</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.text}>
            <Text style={styles.bold}>NIM:</Text> 105012210027
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Tempat, Tanggal Lahir:</Text> Manado, 11
            November 2004
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Agama:</Text> Advent
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Jenis Kelamin:</Text> Laki-laki
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Alamat:</Text> Perum Wenwin
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Hobby:</Text> Turu,Main Game,Scroll Tiktok
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Email:</Text> francescofigorepu@gmail.com
          </Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Masukan Kata-Kata Hari ini"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tekan Aja Ga Ada Guna</Text>
        </TouchableOpacity>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Informasi Lainnya</Text>
          <Text style={styles.infoText}>INI CEWEK GUE</Text>
          <Image
            source={require('./assets/winter.jpg')}
            style={styles.infoImage}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e4e4',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#007bff',
    padding: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  phone: {
    fontSize: 18,
    color: 'white',
  },
  column: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    color: '#555',
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 100,
    height: 120,
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSection: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  infoImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});
