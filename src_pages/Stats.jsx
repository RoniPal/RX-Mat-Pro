import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from '@react-native-firebase/firestore';

const Stats = () => {
  //Variable declare
  const [user, setuser] = useState([]);
  const [userHistory, setuserHistory] = useState([]);

  const db = getFirestore();

  //Fetch User
  const fetchUserDetails = async () => {
    try {
      const userRef = doc(db, 'user', '01-01-2025-12-23-11');
      const userSnap = await getDoc(userRef);
      console.log(userSnap.data());
      setuser(userSnap.data());
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Data Not Fetched');
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  //History fetch
  const fetchUserHistory = async () => {
    try {
      const userRef = query(
        collection(db, 'user_history'),
        where('user', '==', '01-01-2025-12-23-11'),
      );
      const userSnap = await getDocs(userRef);
      console.log(userSnap);
      const userData = userSnap.docs.map(doc => {
        const data = doc.data();
        return data;
      });
      setuserHistory(userData);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Data Not Fetched');
    }
  };

  useEffect(() => {
    fetchUserHistory();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Analytics</Text>
        <Text style={styles.subtitle}>Track your yoga journey</Text>
      </View>

      {/* Numbers Section */}
      <View style={styles.grid}>
        <View style={[styles.card, {backgroundColor: '#DBEAFE'}]}>
          <View style={[styles.iconWrapper]}>
            <Text style={[styles.cardContent, {color: '#2563EB'}]}>
              {user.total_sessions}
            </Text>
          </View>
          <Text style={styles.cardTitle}>Total Sessions</Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#FEF3C7'}]}>
          <View style={[styles.iconWrapper]}>
            <Text style={[styles.cardContent, {color: '#F59E0B'}]}>
              {user.total_time}
            </Text>
          </View>
          <Text style={styles.cardTitle}>Total Minutes Spend</Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#EDE9FE'}]}>
          <View style={[styles.iconWrapper]}>
            <Text style={[styles.cardContent, {color: '#7C3AED'}]}>
              {user.relax_mode}
            </Text>
          </View>
          <Text style={styles.cardTitle}>Total Rleaxation Mode</Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#DCFCE7'}]}>
          <View style={[styles.iconWrapper]}>
            <Text style={[styles.cardContent, {color: '#22C55E'}]}>
              {user.warm_up_mode}
            </Text>
          </View>
          <Text style={styles.cardTitle}>Total Warm Up Mode</Text>
        </View>
      </View>

      {/* History section */}
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>History</Text>
        {userHistory.map((item, idx) => (
          <View key={idx} style={[styles.historyCard, {backgroundColor: item.intensity ? '#EDE9FE' : '#DCFCE7'}]}>
            <Text style={styles.historyDate}>{item.date}</Text>
            <Text style={[styles.historyText, {fontSize:16}]}>{item.mode}</Text>
            <Text style={styles.historyText}>{item.intensity ? `Intensity : ${item.intensity}%`: `Temperature : ${item.temp}°C`}</Text>
            <Text style={styles.historyText}>{item.intensity ? `Pattern : ${item.pattern}`: `Duration : ${item.duration} minutes`}</Text>
            <Text style={styles.historyText}>Total Time : {item.total_time} minutes</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {padding: 20},
  header: {alignItems: 'center', marginBottom: 20},
  title: {fontSize: 20, fontWeight: 'bold'},
  subtitle: {fontSize: 12, color: 'gray'},
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    textAlign: 'center',
  },
  iconWrapper: {
    width: 48,
    height: 48,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontWeight: 500,
    fontSize: 14,
  },
  cardText: {
    marginTop: 4,
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  cardContent: {
    fontSize: 40,
    fontWeight: 900,
  },
  chartCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  chartTitle: {fontSize: 16, fontWeight: '600', marginBottom:10},
  historyCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  historyDate: {fontWeight: 'bold', fontSize: 12, marginBottom: 4},
  historyText: {fontSize: 12, color: '#475569',width:"100%", fontWeight:900, marginBottom:5},
});
