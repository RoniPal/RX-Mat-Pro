import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState, version } from 'react';
import Button from './components/Button.js';
import Icon from 'react-native-vector-icons/FontAwesome5.js';
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from '@react-native-firebase/firestore';

const Updates = () => {

  //Veriable declares
  const [currentVersion, setcurrentVersion] = useState('')
  const [currentVersionDate, setcurrentVersionDate] = useState('')
  const [updatedVersion, setupdatedVersion] = useState('')
  const [matchVersion, setmatchVersion] = useState(true)
  const [UpdateHistory, setUpdateHistory] = useState([])

  //Initialize
  const db = getFirestore()

  //Current version
  const FetchCurrentVersion = async () => {
    try {
      const userRef = doc(db, 'user', '01-01-2025-12-23-11')
      const userSnap = await getDoc(userRef)
      console.log(userSnap.data())
      setcurrentVersion(userSnap.data().version)
      setcurrentVersionDate(userSnap.data().date)
    } catch (error) {
      setcurrentVersion('Error')
      console.log(error)
    }
  }

  useEffect(() => {
    FetchCurrentVersion()
  }, [])


  //Update Checks
  const FetchUpdatedVersion = async () => {
    try {
      const updateRef = query(
        collection(db, 'updates'),
        where('status', '==', 'new')
      )
      const updateSnap = await getDocs(updateRef)

      if(updateSnap.empty){
        setmatchVersion(true)
        return
      }

      console.log(updateSnap.docs)
      const updateData = updateSnap.docs.map(doc => {
        const version = doc.data().version
        return version
      })
      console.log(updateData[0])
      setupdatedVersion(updateData[0]);

      //Match Versions
      
  if(currentVersion === updatedVersion){
    setmatchVersion(true)
  }else{
    setmatchVersion(false)
  }
    } catch (error) {
      setcurrentVersion('Error')
      console.log(error)
    }
  }

  //Update Now... test only... not change in database
  const handleUpdate = async() => {
    try {
      const userRef = doc(db, 'user', '01-01-2025-12-23-11')
      const date = new Date()
      await setDoc(userRef, {
        version: updatedVersion,
        date: `${date.getDate()}-${(date.getMonth())+1}-${date.getFullYear()}`
      },{merge: true})
      setcurrentVersion(updatedVersion)

      //Update version ...
      const updateRef = doc(db, 'updates', updatedVersion)
      await setDoc(updateRef, {
        status: 'old'
      },{merge: true})

      FetchUpdatedHistory()
      FetchUpdatedVersion()
      FetchCurrentVersion()

    } catch (error) {
      setcurrentVersion('Error')
      console.log(error)
    }
  }


  //Update History 
  const FetchUpdatedHistory = async () => {
    try {
      const updateRef = query(
        collection(db, 'updates'),
        where('status', '==', 'old')
      )
      const updateSnap = await getDocs(updateRef)
      console.log(updateSnap.docs)
      const updateData = updateSnap.docs.map(doc => {
        const data = doc.data()
        return {
         date: data.date,
         changes: data.changes,
         version: data.version
      }
      })
      console.log(updateData)
      setUpdateHistory(updateData)
    } catch (error) {
      setcurrentVersion('Error')
      console.log(error)
    }
  }

  useEffect(() => {
    FetchUpdatedHistory()
  }, [])



  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Software Updates</Text>
        <Text style={styles.headerSubtitle}>Keep your RX Mat up to date</Text>
      </View>

      {/* Current Version Card */}
      <View style={[styles.card, styles.greenBorder]}>
        <View style={styles.cardContent}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.cardTitle}>Current Version</Text>
              <Text style={styles.cardSubtitle}>{matchVersion ? 'Your mat is up to date' : `${updatedVersion} update available`}</Text>
            </View>
            <View style={[styles.badgeGreen, {backgroundColor: matchVersion ? '#D1FAE5' : '#fad1d1'}]}>
              <Text style={[styles.badgeGreenText, {color: matchVersion ? 'green' : 'red'}]}>{currentVersion}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.circleIcon}>
              <Icon name='check-circle' size={20} color={'green'} />
            </View>
            <View style={styles.flex1}>
              <Text style={styles.deviceTitle}>RX Mat Pro</Text>
              <Text style={styles.deviceSubtitle}>Last updated: {currentVersionDate}</Text>
            </View>
            {matchVersion ? (
              <Button title={"Check for Updates"} onPress={FetchUpdatedVersion} />
            ) : (
              <Button title={"Update Now"} onPress={handleUpdate} />
            )}
          </View>
        </View>
      </View>

      {/* Update History */}
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Update History</Text>

          {UpdateHistory.map((update, index) => (
            <View key={index} style={styles.historyBlock}>
              <View style={styles.rowBetween}>
                <View style={styles.row}>
                  <View style={styles.badgeGray}>
                    <Text style={styles.badgeGrayText}>{update.version}</Text>
                  </View>
                  <Text style={styles.updateDate}>{update.date}</Text>
                </View>
                {update.version === currentVersion && (
                  <View style={styles.badgeOutline}>
                    <Text style={styles.badgeOutlineText}>Current</Text>
                  </View>
                )}
              </View>
              <View style={styles.updateDescription}>
                {update.changes.map((change, i) => (
                  <Text key={i} style={styles.bullet}>
                    • {change}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Beta Program Card */}
      <View style={[styles.card, styles.blueCard]}>
        <View style={styles.cardContent}>
          <View style={[styles.row, {height:30}]}>
            <Icon name='info-circle' size={20} color={'#1E40AF'} />
            <Text style={styles.betaTitle}>Beta Program</Text>
          </View>
          <Text style={styles.betaDescription}>
            Join our beta program to get early access to new features and updates.
          </Text>
          <Pressable style={styles.blueButton} android_ripple={{color:'gray'}}>
            <Text style={styles.blueButtonText}>Join Beta Program</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Updates;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: 'white',
  },
  cardContent: {
    padding: 16,
  },
  greenBorder: {
    borderColor: '#D1FAE5',
  },
  blueCard: {
    backgroundColor: '#EFF6FF',
    borderColor: '#BFDBFE',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  badgeGreen: {
    backgroundColor: '#D1FAE5',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeGreenText: {
    color: '#047857',
    fontWeight: '500',
  },
  badgeGray: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
  },
  badgeGrayText: {
    color: '#374151',
  },
  badgeOutline: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeOutlineText: {
    fontSize: 10,
  },
  checkIcon: {
    color: '#16A34A',
    fontSize: 16,
  },
  circleIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#D1FAE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
  },
  deviceTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  deviceSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  outlineButtonText: {
    fontSize: 12,
    color: '#111827',
  },
  historyBlock: {
    marginBottom: 24,
  },
  updateDate: {
    fontSize: 12,
    color: 'gray',
  },
  updateDescription: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginTop: 4,
  },
  bullet: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 4,
  },
  infoIcon: {
    fontSize: 18,
    color: '#2563EB',
    marginRight: 8,
  },
  betaTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E40AF',
    textAlign:'center'
  },
  betaDescription: {
    fontSize: 13,
    color: '#1E40AF',
    marginVertical: 12,
  },
  blueButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  blueButtonText: {
    color: 'white',
    fontWeight: '500',
  },
});
