import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const initialCategories = [
  { id: '1', name: 'Alimentación', icon: 'fast-food-outline', color: '#ff6347' },
  { id: '2', name: 'Transporte', icon: 'car-outline', color: '#4682b4' },
  { id: '3', name: 'Entretenimiento', icon: 'game-controller-outline', color: '#9370db' },
  { id: '4', name: 'Salud', icon: 'medkit-outline', color: '#32cd32' },
  { id: '5', name: 'Educación', icon: 'school-outline', color: '#ff4500' },
  { id: '6', name: 'Vivienda', icon: 'home-outline', color: '#1e90ff' },
  { id: '7', name: 'Ropa', icon: 'shirt-outline', color: '#ff1493' },
  { id: '8', name: 'Comunicaciones', icon: 'call-outline', color: '#20b2aa' },
  { id: '9', name: 'Viajes', icon: 'airplane-outline', color: '#ff69b4' },
  { id: '10', name: 'Ocio', icon: 'beer-outline', color: '#daa520' },
  { id: '11', name: 'Hogar', icon: 'home-outline', color: '#ffa07a' },
  { id: '12', name: 'Mascotas', icon: 'paw-outline', color: '#ffb6c1' },
  { id: '13', name: 'Tecnología', icon: 'laptop-outline', color: '#add8e6' },
  { id: '14', name: 'Cuidado Personal', icon: 'heart-outline', color: '#ff7f50' },
  { id: '15', name: 'Regalos', icon: 'gift-outline', color: '#ffe4e1' },
];

export default function Categorias({ navigation }) {
  const [categories, setCategories] = useState(initialCategories);

  const addCategory = (newCategory) => {
    setCategories((prevCategories) => [
      ...prevCategories,
      { id: String(prevCategories.length + 1), ...newCategory },
    ]);
  };

  const handleCategoryPress = (category) => {
    navigation.navigate('AgregarGastos', {
      categoria: category.name,
      color: category.color,
    });
  };

  return (
    <View style={styles.container}>
      {/* Imagen de fondo */}
      <ImageBackground 
         
        style={styles.backgroundImage}
      >
        {/* Overlay para mejorar la visibilidad del contenido */}
        <View style={styles.overlay} />

        <Text style={styles.title}>Categorías de Gastos</Text>

        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.item} 
              onPress={() => handleCategoryPress(item)} 
            >
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <Ionicons name={item.icon} size={30} color="#fff" />
              </View>
              <Text style={[styles.itemText, { color: item.color }]}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        
        <TouchableOpacity 
          style={styles.addCategoryButton} 
          onPress={() => navigation.navigate('CrearCategoria', { addCategory })}
        >
          <Ionicons name="add-circle-outline" size={50} color="#32cd32" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#272780',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.0)', 
    marginTop:90,// Fondo oscuro para mejorar el contraste
  },
  title: {
    marginTop:40,
    fontSize: 28,
    fontWeight: 'bold',
   
    color: '#FFD700',
    marginBottom: 15, fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
   
    zIndex: 1,
  },
  item: {
    flex: 1,
    flexDirection: 'column', 
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 6,
    zIndex: 1,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    textAlign: 'center',
  },
  addCategoryButton: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    zIndex: 1,
  },
});
