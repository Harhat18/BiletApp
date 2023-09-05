import React, {useState, useEffect} from 'react';
import {View, TextInput, FlatList} from 'react-native';
import styles from './SearchScreen.style';

import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';
import ProductCart from '../../../component/ProductCart/ProductCart';
import IconButton from '../../../component/IconButton/IconButton';
import {useSelector} from 'react-redux';

const SearchScreen = ({navigation}) => {
  const data = useSelector(state => state.products.data);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  const [filteredData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState([]);

  const currentDate = new Date();
  const filtered = filteredData.filter(
    item => new Date(item.date) >= currentDate,
  );

  useEffect(() => {
    setFilterData(data);
    setMasterData(data);
    return () => {};
  }, [data]);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  const searchFilter = text => {
    const searchText = text.toUpperCase();
    const newFilteredData = masterData.filter(item => {
      const itemTitle = item.title ? item.title.toUpperCase() : '';
      const itemCategory = item.category ? item.category.toUpperCase() : '';
      const itemPlace = item.place ? item.place.toUpperCase() : '';

      const titleMatch = itemTitle.includes(searchText);
      const categoryMatch = itemCategory.includes(searchText); // Kategoriye göre arama
      const placeMatch = itemPlace.includes(searchText); // Yere göre arama

      return titleMatch || categoryMatch || placeMatch; // Herhangi biri eşleşirse kabul et
    });

    setFilterData(newFilteredData);
    setSearch(text);
  };

  const renderSearch = ({item}) => (
    <ProductCart data={item} onSelect={() => handleProductselect(item._id)} />
  );
  const handleProductselect = _id => {
    navigation.navigate('ProductDetailScreen', {_id});
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.backgroundStyle}>
        <IconButton
          name={'magnify'}
          color={'black'}
          size={26}
          style={styles.iconStyle}
        />
        <TextInput
          value={search}
          placeholder="Etkinlik Adı, Kategori veya Yer Ara"
          onChangeText={text => searchFilter(text)}
          style={styles.inputStyle}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.container}>
        {
          <FlatList
            data={filtered}
            renderItem={renderSearch}
            keyExtractor={(item, index) => index.toString()}
          />
        }
      </View>
    </View>
  );
};

export default SearchScreen;
