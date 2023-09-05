import React, {useState} from 'react';
import {View, Text, Modal, FlatList, Pressable} from 'react-native';
import styles from './FilterScreen.style';

import useFetch from '../../../hooks/useFetch/useFetch';
import {API_URL} from '@env';

import Error from '../../../component/Error/Error';
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

  const renderFilter = ({item}) => (
    <ProductCart data={item} onSelect={() => handleProductselect(item._id)} />
  );
  const handleProductselect = _id => {
    navigation.navigate('ProductDetailScreen', {_id});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtre</Text>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.filterButton}>
          {selectedCategory === 'all' ? 'Hepsi' : selectedCategory}
        </Text>
      </Pressable>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>x</Text>
            </Pressable>
            <Pressable
              onPress={() => handleCategorySelect('all')}
              style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Hepsi</Text>
            </Pressable>
            <Pressable
              onPress={() => handleCategorySelect('Konser')}
              style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Konser</Text>
            </Pressable>
            <Pressable
              onPress={() => handleCategorySelect('Tiyatro')}
              style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Tiyatro</Text>
            </Pressable>
            <Pressable
              onPress={() => handleCategorySelect('Festival')}
              style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Festival</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {filteredData.length === 0 ? (
        <View style={styles.warning}>
          <Text style={styles.warningText}>
            Seçilen kategoride kayıtlı faaliyet yoktur.
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredData}
          renderItem={renderFilter}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
};

export default FilterScreen;
