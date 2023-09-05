import {View, Text, Button, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import ProductCart from '../../../component/ProductCart/ProductCart';
import styles from './FilterDateScreen.style';
import {useSelector} from 'react-redux';
import Error from '../../../component/Error/Error';
import Loading from '../../../component/Loading/Loading';

const FilterDateScreen = ({navigation}) => {
  const data = useSelector(state => state.products.data);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

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

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.selectDateContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Başlangıç Tarihi Seç"
            onPress={() => setStartPickerOpen(true)}
            style={styles.button}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {startDate.toLocaleDateString('tr', 'TR')}
          </Text>
        </View>
      </View>
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
      <View style={styles.selectDateContainer}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Bitiş Tarihi Seç"
            onPress={() => setEndPickerOpen(true)}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {endDate.toLocaleDateString('tr', 'TR')}
          </Text>
        </View>
      </View>

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
