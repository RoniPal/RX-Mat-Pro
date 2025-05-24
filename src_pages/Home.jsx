import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Path, Polygon} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome5.js';
import { useNavigation } from '@react-navigation/native';

//Feature Array,
const features = [
  {
    title: 'Posture Alerts',
    description: 'Real-time feedback on your yoga poses',
    icon: (
      <>
        <Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <Path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </>
    ),
    iconBackground: {backgroundColor: '#DBEAFE'},
    iconColor: '#2563EB',
    cardStyle: {backgroundColor: '#F0FDFA'},
  },
  {
    title: 'Pressure Sensing',
    description: 'Monitors weight distribution during poses',
    icon: (
      <>
        <Path d="M12 2v4" />
        <Path d="M12 18v4" />
        <Path d="m4.93 4.93 2.83 2.83" />
        <Path d="m16.24 16.24 2.83 2.83" />
        <Path d="M2 12h4" />
        <Path d="M18 12h4" />
        <Path d="m4.93 19.07 2.83-2.83" />
        <Path d="m16.24 7.76 2.83-2.83" />
      </>
    ),
    iconBackground: {backgroundColor: '#EDE9FE'},
    iconColor: '#7C3AED',
    cardStyle: {backgroundColor: '#FDF4FF'},
  },
  {
    title: 'Guided Sessions',
    description: 'Follow along with expert instructors',
    icon: (
      <>
        <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <Path d="m9 12 2 2 4-4" />
      </>
    ),
    iconBackground: {backgroundColor: '#FEF3C7'},
    iconColor: '#F59E0B',
    cardStyle: {backgroundColor: '#FFFBEB'},
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your improvement over time',
    icon: (
      <>
        <Path d="M12 2v4" />
        <Path d="M12 18v4" />
        <Path d="M4.93 4.93l4.24 4.24" />
        <Path d="M14.83 14.83l4.24 4.24" />
        <Path d="M2 12h4" />
        <Path d="M18 12h4" />
        <Path d="M4.93 19.07l4.24-4.24" />
        <Path d="M14.83 9.17l4.24-4.24" />
      </>
    ),
    iconBackground: {backgroundColor: '#DCFCE7'},
    iconColor: '#22C55E',
    cardStyle: {backgroundColor: '#F0FDF4'},
  },
];

//Main App
const Home = () => {

  //Navigation
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator= {false}>
      {/* Hero Image */}
      <View style={styles.heroContainer}>
        <Image
          source={require('./assets/photos/mat.png')}
          style={styles.heroImage}
        />
        <LinearGradient
          colors={['rgba(192, 192, 192, 0.07)', 'rgba(0, 0, 0, 0.78)']}
          style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>RX Mat Pro</Text>
          <Text style={styles.heroSubtitle}>
            Your smart companion for mindful practice
          </Text>
          <Pressable style={styles.connectBtn} android_ripple={{color: 'gray'}} onPress={() => navigation.navigate('Connect')}>
            <Text style={styles.connectBtnText}>Connect to Mat</Text>
          </Pressable>
        </LinearGradient>
      </View>

      {/* Feature Section */}
      <View style={styles.grid}>
        {features.map((feature, index) => (
          <View key={index} style={[styles.card, feature.cardStyle]}>
            <View style={[styles.iconWrapper, feature.iconBackground]}>
              <Svg
                width={20}
                height={20}
                stroke={feature.iconColor}
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                {feature.icon}
              </Svg>
            </View>
            <Text style={styles.cardTitle}>{feature.title}</Text>
            <Text style={styles.cardText}>{feature.description}</Text>
          </View>
        ))}
      </View>

      {/* Recommendation Section */}
      <View style={styles.recommendCard}>
        <Text style={styles.recommendTitle}>Today's Recommendation</Text>
        <View style={styles.recommendRow}>
          <View style={styles.recommendIconWrapper}>
            <Svg
              width={24}
              height={24}
              stroke="#14B8A6"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24">
              <Path d="M12 2 4 10l8 8 8-8-8-8Z" />
              <Path d="m12 22 4-4-8-8-4 4 8 8Z" />
            </Svg>
          </View>
          <View style={styles.recommendDetails}>
            <Text style={styles.sessionTitle}>Morning Flow</Text>
            <Text style={styles.sessionSubtitle}>
              15 min • Beginner friendly
            </Text>
            <View style={styles.ratingRow}>
              <View style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Svg
                    key={i}
                    width={12}
                    height={12}
                    fill="#FFC107"
                    stroke="#FFC107"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24">
                    <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </Svg>
                ))}
              </View>
              <Text style={styles.ratingText}>4.8 (120)</Text>
            </View>
          </View>
          <Pressable style={styles.playButton} android_ripple={{color: 'gray'}}>
            <Icon name='play' size={14} color={'black'} />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heroContainer: {
    height: 256,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    position: 'relative',
  },
  heroImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
  },
  heroTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  heroSubtitle: {
    color: '#D1D5DB',
    marginTop: 4,
  },
  connectBtn: {
    backgroundColor: '#14B8A6',
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  connectBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    borderRadius: 24,
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
  recommendCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FFF',
    marginBottom: 24,
    elevation: 1,
  },
  recommendTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 12,
  },
  recommendRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommendIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#CCFBF1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommendDetails: {
    flex: 1,
    marginLeft: 16,
  },
  sessionTitle: {
    fontWeight: '500',
    fontSize: 14,
  },
  sessionSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  stars: {
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 6,
  },
  playButton: {
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    width:30,
    height:30,
  },
});
