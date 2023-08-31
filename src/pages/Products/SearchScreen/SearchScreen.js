import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, FlatList} from 'react-native';
import useFetch from '../../../hooks/useFetch/useFetch';
import styles from './SearchScreen.style';
import {API_URL} from '@env';
import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';
import ProductCart from '../../../component/ProductCart/ProductCart';
import IconButton from '../../../component/IconButton/IconButton';

const SearchScreen = ({navigation}) => {
  const {data, loading, error} = useFetch(API_URL);

  const [filteredData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState([]);
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
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
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
          placeholder="Ara"
          onChangeText={text => searchFilter(text)}
          style={styles.inputStyle}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={filteredData}
          renderItem={renderSearch}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
