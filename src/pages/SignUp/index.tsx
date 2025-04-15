import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import {Arrow} from '../../assets';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerRow}>
        <Arrow />
        <Gap width={16} />
        <Header title="Sign Up" />
      </View>
      <View style={styles.contentContainer}>
        <Gap height={26} />

        <TouchableOpacity style={styles.photoContainer}>
          <View style={styles.addPhotoCircle}>
            <Text style={styles.addPhotoText}>Add{'\n'}Photo</Text>
          </View>
        </TouchableOpacity>

        <Gap height={24} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhotoCircle: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhotoText: {
    fontSize: 14,
    color: '#8D92A3',
    textAlign: 'center',
  },
});
