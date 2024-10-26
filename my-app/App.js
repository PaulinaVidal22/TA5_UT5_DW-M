import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const images = [
  { id: '1', src: require('./assets/muget.jpg'), description: 'Un ramo de pequeñas flores blancas, conocidas como muguet o lirio de los valles, rodeadas de hojas verdes. Las delicadas flores cuelgan en racimos, creando un contraste con el fondo oscuro.' },
  { id: '2', src: require('./assets/bookAesthetic.jpg'), description: 'Una escena artística con una paleta de colores pastel, pinceles, espátulas y tubos de pintura. Las manchas de color y las herramientas crean un ambiente desordenado pero inspirador, evocando el proceso creativo.' },
  { id: '3', src: require('./assets/artsyAesthetic.png'), description: 'Un libro abierto con anotaciones escritas a mano y cinta decorativa, colocado junto a un teclado de computadora portátil. La combinación de lectura y tecnología sugiere un ambiente de estudio acogedor y personal.' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.src} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  list: {
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'orchid',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '90%',
  },
  image: {
    width: 200, //300
    height: 200,
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    color: '#333',
  },
});
