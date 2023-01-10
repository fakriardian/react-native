import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const EditNote = ({ setCurrentPage, dataList, editData }) => {
    const [title, setTitle] = useState(dataList.title);
    const [desc, setDesc] = useState(dataList.desc);

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Edit Note</Text>
            <CustomTextInput
                text={title}
                onChange={setTitle}
                label="Judul"
                placeholder="Judul"
                numberOfLines={1}
                multiline={false}
                defaultValue={title}
            />
            <CustomTextInput
                text={desc}
                onChange={setDesc}
                label="Deskripsi"
                placeholder="Deskripsi"
                multiline
                numberOfLines={4}
                defaultValue={desc}
            />
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#247881"
                    color="#fff"
                    text="Simpan"
                    width="100%"
                    onPress={() => {
                        editData(dataList.id, title, desc)
                        setCurrentPage('home')
                    }}
                />
            </View>
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#DDDDDD"
                    color="#203239"
                    text="Kembali ke Home"
                    width="100%"
                    onPress={() => setCurrentPage('home')}
                />
            </View>
        </View>
    );
};

EditNote.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
    dataList: PropTypes.object.isRequired,
    editData: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
    },
    pageTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: '#203239',
    },
    spacerTop: {
        marginTop: 30,
    },
});

export default EditNote;