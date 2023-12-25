import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e61919',
    },
    containerHeader: {
      marginTop: '14%',
      marginBottom: '8%',
      paddingStart: '5%',
    },
    message: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FFF',
    },
    containerForm: {
      flex: 1,
      backgroundColor: '#FFF',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
    },
    title: {
      fontSize: 20,
      marginTop: 28,
    },
    input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
    },
    button: {
      backgroundColor: '#e61919',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    togglePasswordButton: {
      marginTop: 10,
      alignSelf: 'flex-end',
    },
    togglePasswordButtonText: {
      color: '#a1a1a1',
      fontSize: 14,
    },
  });
  