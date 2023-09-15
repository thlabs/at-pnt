import { Text, SafeAreaView, StyleSheet, Image, View, Button } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subtitle}>
          th
      </Text>
      <Text style={styles.paragraph}>
          Japan
      </Text>
      
      <Image
        style={styles.imagem}
        source={{
          uri: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        }}
      />
      <Image
        style={styles.imagem}
        source={{
          uri: 'https://images.unsplash.com/photo-1613487957484-32c977a8bd62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
        }}
      />

      <View style={styles.buttonView}>
        <Button
          title="press me"
          color="#841584"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#101010',
    padding: 8,
  },
  paragraph: {
    color: "white",
    marginBottom: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagem: {
    width: 200,
    height: 133,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    borderRadius: 10,
  },
  buttonView: {
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
  }
});
