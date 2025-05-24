import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5.js';
import Slider from '@react-native-community/slider';

const Control = () => {
  //Variable declare
  const [temperature, setTemperature] = useState(60);
  const [duration, setDuration] = useState(50);
  const [intensity, setIntensity] = useState(30);
  const [pattern, setPattern] = useState('Wave');

  const quicActions = [
    {name: 'Guided Stretch', icon: 'arrow-up', color: '#F59E0B'},
    {name: 'Posture Check', icon: 'check', color: '#3B82F6'},
    {name: 'Cool Down', icon: 'thermometer', color: '#EF4444'},
    {name: 'Meditation', icon: 'arrow-down', color: '#10B981'},
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 20, gap: 20}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Mat Control</Text>
        <Text style={styles.subtitle}>Control your ZenMat's functions</Text>
      </View>

      {/* Note Section : Removeable */}
      <Text style={{color: 'red', textAlign: 'center', width: '100%'}}>
        *** This page is only a Designing Reference. Buttons and Pressable are
        not working functionally
      </Text>

      {/* Warm-Up Section */}
      <View style={styles.cardContainer}>
        <View style={styles.cardBorderTeal}>
          <View style={styles.cardHeaderTeal}>
            <View style={styles.cardHeaderContent}>
              <Text style={styles.cardTitle}>Warm-Up Mode</Text>
              <Text style={styles.badgeTeal}>Recommended</Text>
            </View>
            <Text style={styles.cardSubtitleTeal}>
              Gentle heating to prepare muscles
            </Text>
          </View>
          <View style={styles.cardContent}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Temperature</Text>
              <Text style={styles.labelValue}>{temperature}°C</Text>
            </View>
            <Slider
              value={temperature}
              onValueChange={setTemperature}
              maximumValue={100}
              minimumValue={0}
              step={1}
              style={styles.slider}
              minimumTrackTintColor="#14B8A6"
              maximumTrackTintColor="#D1FAE5"
              thumbTintColor="#14B8A6"
            />

            <View style={styles.labelRow}>
              <Text style={styles.label}>Duration</Text>
              <Text style={styles.labelValue}>{duration} minutes</Text>
            </View>
            <Slider
              value={duration}
              onValueChange={setDuration}
              maximumValue={100}
              minimumValue={0}
              step={1}
              style={styles.slider}
              minimumTrackTintColor="#14B8A6"
              maximumTrackTintColor="#D1FAE5"
              thumbTintColor="#14B8A6"
            />

            <Pressable style={styles.actionButtonTeal} android_ripple={{color:'gray'}}>
              <Icon name="play" size={16} color="#fff" />
              <Text style={styles.buttonText}>Start Warm-Up</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Intensity Secrion */}
      <View style={styles.cardBorderPurple}>
        <View style={styles.cardHeaderPurple}>
          <Text style={styles.cardTitle}>Relaxation Mode</Text>
          <Text style={styles.cardSubtitlePurple}>
            Soothing vibrations for deep relaxation
          </Text>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Intensity</Text>
            <Text style={styles.labelValue}>{intensity}%</Text>
          </View>
          <Slider
            value={intensity}
            onValueChange={setIntensity}
            maximumValue={100}
            minimumValue={0}
            step={1}
            style={styles.slider}
            minimumTrackTintColor="#A855F7"
            maximumTrackTintColor="#E9D5FF"
            thumbTintColor="#A855F7"
          />

          <View style={styles.labelRow}>
            <Text style={styles.label}>Pattern</Text>
            <Text style={styles.labelValue}>{pattern}</Text>
          </View>
          <View style={styles.patternRow}>
            {['Wave', 'Pulse', 'Constant'].map(item => (
              <Pressable
                key={item}
                style={[
                  styles.patternButton,
                  pattern === item && styles.patternButtonActive,
                ]}
                onPress={() => setPattern(item)}
                android_ripple={{color:'gray'}}>
                <Text style={styles.patternText}>{item}</Text>
              </Pressable>
            ))}
          </View>

          <Pressable style={styles.actionButtonPurple} android_ripple={{color:'gray'}}>
            <Icon name="play" size={16} color="#fff" />
            <Text style={styles.buttonText}>Begin Relaxation</Text>
          </Pressable>
        </View>
      </View>

      {/* quick Action Section */}
      <View style={styles.quickCard}>
        <Text style={styles.quickTitle}>Quick Actions</Text>
        <View style={styles.quickGrid}>
          {quicActions.map((action, index) => (
            <Pressable key={index} style={styles.quickButton} android_ripple={{color:'gray'}}>
              <Icon name={action.icon} size={16} color={action.color} />
              <Text style={styles.quickButtonText}>{action.name}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Control;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 16},
  header: {alignItems: 'center', marginBottom: 10},
  title: {fontSize: 20, fontWeight: 'bold'},
  subtitle: {fontSize: 13, color: '#6B7280'},
  cardContainer: {gap: 20},
  cardBorderTeal: {
    borderWidth: 2,
    borderColor: '#99F6E4',
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardBorderPurple: {
    borderWidth: 2,
    borderColor: '#E9D5FF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardHeaderTeal: {backgroundColor: '#14B8A6', padding: 12},
  cardHeaderPurple: {backgroundColor: '#A855F7', padding: 12},
  cardHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {color: '#fff', fontWeight: '600'},
  cardSubtitleTeal: {color: '#99F6E4', fontSize: 12, marginTop: 4},
  cardSubtitlePurple: {color: '#F3E8FF', fontSize: 12, marginTop: 4},
  badgeTeal: {
    backgroundColor: '#fff',
    color: '#14B8A6',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    fontSize: 11,
  },
  cardContent: {padding: 16},
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {fontSize: 13, color: '#6B7280'},
  labelValue: {fontSize: 13, fontWeight: '500'},
  slider: {marginBottom: 24},
  actionButtonTeal: {
    flexDirection: 'row',
    backgroundColor: '#14B8A6',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    gap: 15,
  },
  actionButtonPurple: {
    flexDirection: 'row',
    backgroundColor: '#A855F7',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    gap: 15,
  },
  buttonText: {color: '#fff', fontWeight: '500'},
  patternRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  patternButton: {
    flex: 1,
    marginHorizontal: 4,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
  },
  patternButtonActive: {backgroundColor: '#C084FC'},
  patternText: {fontSize: 12},
  quickCard: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
  },
  quickTitle: {fontWeight: '600', marginBottom: 12},
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickButton: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    gap: 10,
  },
  quickButtonText: {fontSize: 13},
});
