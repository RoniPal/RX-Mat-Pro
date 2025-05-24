import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5.js';
import ToggleSwitch from './components/ToggleSwitch.js';
import Button from './components/Button.js';

const Connect = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Icon name="rss" size={40} color={'#0f766e'} />
        </View>
        <Text style={styles.title}>Connect Your RX Mat</Text>
        <Text style={styles.subtitle}>
          Pair your smart yoga mat to unlock all features and track your
          progress
        </Text>
        
      </View>

      {/* Note Section : Removeable */}
      <Text style={{color:'red',textAlign:'center',width:"100%"}}>
          *** This page is only a Designing Reference. Buttons and Pressable are not working functionally 
        </Text>

      {/* Bluetooth Card */}
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Bluetooth</Text>
            <ToggleSwitch inital={false} onToggle={() => {}} />
          </View>

          <View style={styles.deviceItem}>
            <View style={styles.deviceInfo}>
              <View style={[styles.deviceIcon, {backgroundColor: '#D1FAE5'}]}>
                <Icon name='check-circle' size={20} color={'green'} />
              </View>
              <View>
                <Text style={styles.deviceName}>RX Mat Pro</Text>
                <Text style={styles.deviceStatus}>Connected</Text>
              </View>
            </View>
            <Button title={"Disconncet"} />
          </View>

          <View style={styles.deviceItem}>
            <View style={styles.deviceInfo}>
              <View style={[styles.deviceIcon, {backgroundColor: '#F3F4F6'}]}>
                <Icon name='key' size={20} color={'#6B7280'} />
              </View>
              <View>
                <Text style={styles.deviceName}>RX Mat Cushion</Text>
                <Text style={styles.deviceStatus}>Available</Text>
              </View>
            </View>
            <Button title={"Conncet"} />
          </View>
        </View>
      </View>

      {/* Wi-Fi Card */}
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Wi-Fi Connection</Text>
            <ToggleSwitch inital={false} onToggle={() => {}} />
          </View>

          {['Home_WiFi', 'Yoga_Studio', 'Guest_Network'].map((name, index) => (
            <View style={styles.wifiRow} key={index}>
              <View style={styles.wifiInfo}>
                <Icon name='rss-square' size={20} color={'#6B7280'} />
                <Text style={styles.wifiName}>{name}</Text>
              </View>
              {name === 'Guest_Network' ? (
                <Button title={"Conncet"} />
              ) : (
                <Button title={"Saved"} />
              )}
            </View>
          ))}

          <Pressable style={styles.fullButton} android_ripple={{color: 'gray'}}>
            <Icon name='plus-circle' size={16} color={'black'} />
              <Text style={styles.fullButtonText}>Add New Network</Text>
            </Pressable>
        </View>
      </View>

      {/* Troubleshooting */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Having trouble connecting?</Text>
        <Pressable android_ripple={{color: 'gray'}}>
          <Text style={styles.troubleshootLink}>View Troubleshooting Guide</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Connect;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 24,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#CCFBF1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 4,
    color: '#6B7280',
    textAlign: 'center',
    maxWidth: 260,
  },
  card:{
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: '#F9FAFB'
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  deviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  deviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deviceIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  deviceName: {
    fontWeight: 500,
    fontSize: 18,
  },
  deviceStatus: {
    fontSize: 12,
    color: '#6B7280',
  },
  wifiRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  wifiInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  wifiName: {
    marginLeft: 8
  },
  fullButton: {
    marginTop: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    height:40
  },
  fullButtonText:{
    fontWeight: 500,
    fontSize:16,
  },
  footer: {
    alignItems: 'center',
    marginTop: 16
  },
  footerText: {
    fontSize: 12,
    color: '#6B7280'
  },
  troubleshootLink: {
    color: '#0D9488',
    marginTop: 4
  },
});
