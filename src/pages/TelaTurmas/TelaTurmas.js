import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import { styles } from './TelaTurmasstyles';
import { Header, Footer } from '../../imports/import';

const TelaTurmas = () => {
  const [turmas, setTurmas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://back-end-mediotec.onrender.com/api/turmas')
      .then(response => response.json())
      .then(data => {
        setTurmas(data);
        setLoading(false); // Defina o carregamento como falso após obter os dados
      })
      .catch(error => {
        console.error('Error fetching turmas:', error);
        setLoading(false); // Defina o carregamento como falso mesmo em caso de erro
      });
  }, []);

  const renderTurma = ({ item }) => (
    <TouchableOpacity style={styles.turmaContainer}>
      <View style={styles.turmaBanner}>
        <Text style={styles.turmaDesc}>Turno: {item.turno}</Text>
      </View>
      <View style={styles.turmaLine}>
        <Text style={styles.turmaName}>{item.nome}</Text>
      </View>
      <View style={styles.turmaMembers}>
        <Image source={require('../../assets/people.png')} style={styles.turmaImage} />
        <Text style={styles.turmaMemberText} numberOfLines={1} ellipsizeMode="tail">{item.professores}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="KSA" />
      <Image source={require('../../assets/decorTelaTurmas.png')} style={styles.decor} />
      <View style={styles.line}>
        <View style={styles.triangle} />
        <Text style={styles.title}>Turmas</Text>
      </View>
      {loading ? (
        <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} size="large" color="#FF9900" />
      ) : (
        <FlatList
          data={turmas}
          renderItem={renderTurma}
          keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      )}
      <Footer />
    </View>
  );
};

export default TelaTurmas;
