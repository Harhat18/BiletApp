import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Error from '../../../component/Error/Error';
import styles from './FilterScreen.style';
import useFetch from '../../../hooks/useFetch/useFetch';
import {API_URL} from '@env';
import Loading from '../../../component/Loading/Loading';
import ProductCart from '../../../component/ProductCart/ProductCart';

const FilterScreen = ({navigation}) => {
  const {data, loading, error} = useFetch(API_URL);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategorySelect = category => {
    setSelectedCategory(category);
    setModalVisible(false);
  };

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  // Kategoriye göre filtreleme işlemi
  const filteredData =
    selectedCategory === 'all'
      ? data
      : data.filter(item => item.category === selectedCategory);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemCategory}>{item.category}</Text>
    </View>
  );
  const renderFilter = ({item}) => (
    <ProductCart data={item} onSelect={() => handleProductselect(item._id)} />
  );
  const handleProductselect = _id => {
    navigation.navigate('ProductDetailScreen', {_id});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtre</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.filterButton}>Filtre Seç</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCategorySelect('all')}
              style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Hepsi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCategorySelect('Konser')}
              style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Konser</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCategorySelect('Tiyatro')}
              style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Tiyatro</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCategorySelect('Festival')}
              style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Festival</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <FlatList
        data={filteredData}
        renderItem={renderFilter}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default FilterScreen;
