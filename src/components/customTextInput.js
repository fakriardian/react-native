import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Text, StyleSheet, View } from 'react-native';

const CustomTextInput = ({
    text,
    onChange,
    label,
    multiline,
    numberOfLines,
}) => {
    const styles = StyleSheet.create({
        textInputWrapper: {
            marginTop: 20,
        },
        input: {
            borderWidth: 2,
            borderColor: '#DDD',
            padding: 10,
        },
    });

    return (
        <View style={styles.textInputWrapper}>
            <Text>{label}</Text>
            <TextInput
                multiline={multiline}
                numberOfLines={numberOfLines}
                style={styles.input}
                placeholder={label}
                onChangeText={onChange}
                defaultValue={text}
            />
        </View>
    );
};

CustomTextInput.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    multiline: PropTypes.bool.isRequired,
    numberOfLines: PropTypes.number.isRequired,
};

CustomTextInput.defaultProps = {
    text: '',
};

export default CustomTextInput;