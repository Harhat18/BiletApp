import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './FilterScreen.style';

import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';
import ProductCart from '../../../component/ProductCart/ProductCart';
import {useSelector} from 'react-redux';

const FilterScreen = ({navigation}) => {
  const data = useSelector(state => state.products.data);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  const [selectedCategory, setSelectedCategory] = useState('Hepsi');

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  const filteredData =
    selectedCategory === 'Hepsi'
      ? data
      : data.filter(item => item.category === selectedCategory);
  const currentDate = new Date();

  const filtered = filteredData.filter(
    item => new Date(item.date) >= currentDate,
  );
  const sortedData = filtered.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  const renderFilter = ({item}) => (
    <ProductCart data={item} onSelect={() => handleProductselect(item._id)} />
  );
  const handleProductselect = _id => {
    navigation.navigate('ProductDetailScreen', {_id});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kategorinizi Seçiniz</Text>
      <View style={styles.selectContent}>
        {['Hepsi', 'Konser', 'Tiyatro', 'Festival'].map(category => (
          <TouchableOpacity
            key={category}
            onPress={() => handleCategorySelect(category)}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}>
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {filtered.length === 0 ? (
        <View style={styles.warning}>
          <Text style={styles.warningText}>
            Seçilen kategoride kayıtlı faaliyet yoktur.
          </Text>
        </View>
      ) : (
        <FlatList
          data={sortedData}
          renderItem={renderFilter}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
};

export default FilterScreen;
