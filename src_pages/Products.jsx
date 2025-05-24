import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { collection, getDocs, getFirestore } from '@react-native-firebase/firestore';

const Products = () => {

  //Variable Declare
  const [Products, setProducts] = useState([])

  //Initialization
  const db = getFirestore()

  //Fetch Products
  const fetchProducts = async () => {
    try {
      const productRef = collection(db, 'products')
      const productSnap = await getDocs(productRef)
      console.log(productSnap)
      const productData = productSnap.docs.map(doc => {
        const data = doc.data()
        return data;
      })
      console.log(productData)
      setProducts(productData)
    } catch (error) {
      Alert.alert("Error",'No Products Found')
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Products & Features</Text>
        <Text style={styles.subtitle}>
          Discover the latest ZenMat innovations
        </Text>
      </View>

      {/* Hero Image */}
      <View style={styles.heroContainer}>
        <Image
          source={require('./assets/photos/heroProduct.png')}
          style={styles.heroImage}
        />
        <LinearGradient
          colors={['rgba(192, 192, 192, 0.07)', 'rgba(0, 0, 0, 0.78)']}
          style={styles.heroOverlay}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>New Collection</Text>
          </View>
          <Text style={styles.heroTitle}>RX Mat 2025 Collection</Text>
          <Text style={styles.heroSubtitle}>
            Your smart companion for mindful practice
          </Text>
        </LinearGradient>
      </View>

      {/* Products List */}
      {Products.map((product, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardRow}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: product.photo}} // replace with actual image
                style={styles.productImage}
              />
              {product.status && (
                <View style={[styles.productBadge, { backgroundColor: product.badgeColor }]}>
                  <Text style={styles.productBadgeText}>{product.status}</Text>
                </View>
              )}
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.productName}>{product.title}</Text>
                <Text style={styles.productPrice}>₹{product.price}</Text>
              </View>
              <Text style={styles.productDescription}>{product.description}</Text>
              <View style={styles.featureList}>
                {product.tags.map((tag, i) => (
                  <View key={i} style={styles.featureBadge}>
                    <Text style={styles.featureText}>{tag}</Text>
                  </View>
                ))}
              </View>
              <Pressable style={[styles.button]} android_ripple={{color: 'gray'}}>
                <Text style={[styles.buttonText]}>
                  Learn More
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      ))}

      <Pressable style={styles.outlineButtonFull} android_ripple={{color: 'gray'}}>
        <Text style={styles.outlineButtonText}>View All Products</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: 13,
    marginTop: 2,
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
  badge: {
    backgroundColor: '#14b8a6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  heroSubtitle: {
    color: '#d1d5db',
    fontSize: 13,
    marginTop: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
  },
  cardRow: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: '33%',
    height: 130,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  productBadgeText: {
    color: '#fff',
    fontSize: 10,
  },
  cardContent: {
    flex: 1,
    padding: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#14b8a6',
  },
  productDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  featureList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 4,
  },
  featureBadge: {
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 4,
  },
  featureText: {
    fontSize: 11,
    color: '#374151',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#14b8a6',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  outlineButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#14b8a6',
  },
  outlineButtonText: {
    color: '#14b8a6',
  },
  outlineButtonFull: {
    marginTop: 16,
    paddingVertical: 10,
    borderRadius: 6,
    borderColor: '#14b8a6',
    borderWidth: 1,
    alignItems: 'center',
  },
});
