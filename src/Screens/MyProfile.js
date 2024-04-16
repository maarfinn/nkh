import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from '../CustomComponent/Header';
import {Colors} from '../Utils/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../Utils/loginReducer';

const MyProfile = () => {
  const profileData = {
    name: 'Asfahan',
    email: 'asfahan.arfinn@gmail.com',
    avatar: require('../Assets/Logo.png'),
    experience: 'React Native 2.8 years of experience',
    jobTitle: 'Software Engineer',
    location: 'Bengaluru, India',
  };
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.login.user);
  console.log('userProfile', userProfile);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Header isDetail={true} headerTitle={'My Profile'} />
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <Image source={profileData.avatar} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{profileData.name}</Text>
            <Text style={styles.email}>{profileData.email}</Text>
            <Text style={styles.experience}>{profileData.experience}</Text>
            <Text style={styles.jobTitle}>{profileData.jobTitle}</Text>
            <Text style={styles.location}>{profileData.location}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 80,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  experience: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: 'gray',
  },
  logoutButton: {
    backgroundColor: Colors.mainColor,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MyProfile;
