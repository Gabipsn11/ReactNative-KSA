import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Open Sans Semi Bold',
    color: '#000',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingTop: 20, 
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 7,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF9900',
    transform: [{ rotate: '90deg' }],
    marginRight: 5,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  turmaCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    maxWidth: '45%',
    borderStyle: 'solid',
    borderColor: '#333',
    borderWidth: 1,
    paddingBottom: 15,
  },
  turmaName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  turmaDesc: {
    fontSize: 14,
    color: '#333',
  },
  turmaLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#FF9900',
    paddingTop: 20, 
    paddingBottom: 10,
    width: '70%',
    alignItems: 'center',
  },
  turmaCardHeader: {
    backgroundColor: '#FF9900',
    paddingTop: 5,
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  turmaImage: {
    width: 20,
    height: 15, 
    marginRight: 5,
  },
  turmaMembers: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    width: '65%',
    maxWidth: '100%',
  },
  turmaMemberText: {
    fontSize: 12,
    color: '#333',
    flexShrink: 1,
  },
  decor: {
    position: 'absolute',
    top: -10,
    right: -40,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  turmaFotoProf: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 1,
    position: 'absolute',
    left: 10,
    top: -15, // Ajuste para garantir que o topo do círculo fique para fora do card
  },
  turmaCardHeaderDesc:{
    paddingLeft: 80,
  },
  turmaCardHeaderText: {
    fontWeight: 'bold',
    color: '#FFF',
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Faz com que o overlay cubra toda a ImageBackground
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Ajuste a cor e a opacidade conforme necessário
  },
});
