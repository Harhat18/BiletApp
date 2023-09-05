import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import useFetch from '../../../hooks/useFetch/useFetch';
import {API_URL} from '@env';
import ProductCart from '../../../component/ProductCart/ProductCart';
import styles from './FilterDateScreen.style';
const FilterDateScreen = ({navigation}) => {
  const {data, error, loading} = useFetch(API_URL);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startPickerOpen, setStartPickerOpen] = useState(false);
  const [endPickerOpen, setEndPickerOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const isEventInDateRange = eventDate => {
    return eventDate >= startDate && eventDate <= endDate;
  };

  useEffect(() => {
    const filteredEvents = data.filter(event =>
      isEventInDateRange(new Date(event.date)),
    );
    setFilteredData(filteredEvents);
  }, [startDate, endDate, data]);

  const renderFilter = ({item}) => (
    <ProductCart data={item} onSelect={() => handleProductselect(item._id)} />
  );
  const handleProductselect = _id => {
    navigation.navigate('ProductDetailScreen', {_id});
  };
  return (
    <View style={styles.container}>
      <Button
        title="Başlangıç Tarihi Seç"
        onPress={() => setStartPickerOpen(true)}
        style={styles.button}
      />
      <DatePicker
        modal
        title="Başlangıç Tarihini Seç"
        mode="date"
        confirmText="Tarihi Seç"
        cancelText="İptal"
        open={startPickerOpen}
        date={startDate}
        onConfirm={selectedDate => {
          setStartPickerOpen(false);
          setStartDate(selectedDate);
        }}
        onCancel={() => {
          setStartPickerOpen(false);
        }}
      />
      <Button
        style={styles.button}
        title="Bitiş Tarihi Seç"
        onPress={() => setEndPickerOpen(true)}
      />
      <DatePicker
        modal
        title="Bitiş Tarihini Seç"
        mode="date"
        confirmText="Tarihi Seç"
        cancelText="İptal"
        open={endPickerOpen}
        date={endDate}
        onConfirm={selectedDate => {
          setEndPickerOpen(false);
          setEndDate(selectedDate);
        }}
        onCancel={() => {
          setEndPickerOpen(false);
        }}
      />
      <Text>
        Seçilen Başlangıç Tarihi: {startDate.toLocaleDateString('tr', 'TR')}
      </Text>
      <Text>
        Seçilen Bitiş Tarihi: {endDate.toLocaleDateString('tr', 'TR')}
      </Text>

      {filteredData.length === 0 ? (
        <View style={styles.warning}>
          <Text style={styles.warningText}>
            Seçilen tarihlerde faaliyet yoktur.
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

export default FilterDateScreen;
