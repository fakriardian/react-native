import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, View, Text, Alert } from 'react-native';
import CustomButton from '../components/customButton';

const NoteCard = ({ item, setCurrentPage, setDataList, dellData }) => {

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text>{item.desc}</Text>
            <View style={styles.buttons}>
                <CustomButton
                    backgroundColor="#FFC300"
                    color="#151D3B"
                    text="Ubah"
                    fontSize={12}
                    width={100}
                    // Tuliskan layar "edit" untuk ketika tombol-nya ditekan
                    onPress={() => { setCurrentPage('edit'), setDataList(item) }}
                />
                <CustomButton
                    backgroundColor="#D82148"
                    color="white"
                    text="Hapus"
                    fontSize={12}
                    width={100}
                    onPress={() => { dellData(item.id), Alert.alert('Terhapus') }}
                />
            </View>
        </View>
    );
};

NoteCard.propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
    // Tambahkan validasi type untuk "setCurrentPage"
    setCurrentPage: PropTypes.func.isRequired,
    setDataList: PropTypes.func.isRequired,
    dellData: PropTypes.func.isRequired
};

// Tambahkan "setCurrentPage" sebagai sebuah prop
const Home = ({ noteData, setCurrentPage, setDataList, dellData }) => {
    return (
        <View style={styles.container}>
            <CustomButton
                backgroundColor="#DDD"
                color="#203239"
                text="Tambahkan Note"
                width="100%"
                // Tuliskan layar "add" untuk ketika tombol-nya ditekan
                onPress={() => { setCurrentPage('add') }}
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={noteData}
                // Berikan function "setCurrentPage" ke component "NoteCard"
                renderItem={({ item }) => <NoteCard item={item} setCurrentPage={setCurrentPage} setDataList={setDataList} dellData={dellData} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

Home.propTypes = {
    noteData: PropTypes.instanceOf(Array).isRequired,
    // Tambahkan validasi type untuk "setCurrentPage"
    setCurrentPage: PropTypes.func.isRequired,
    setDataList: PropTypes.func.isRequired,
    dellData: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        padding: 10,
        marginVertical: 15,
        borderColor: '#DDD',
        borderWidth: 2,
        borderRadius: 5,
    },
    cardTitle: {
        fontWeight: '600',
        color: '#203239',
        fontSize: 16,
        marginBottom: 5,
    },
    buttons: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default Home;
