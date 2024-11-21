import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  content: {
    paddingTop: 20,
    paddingBottom: 60,
  },
  triangleContainer: {
    alignItems: 'center',
    marginTop: -35,
  },
  triangle: {
    width: 189,
    height: 201,
    position: 'absolute',
    top: -90,
    left: -40,
  },
  textContainer: {
    marginTop: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#021320',
    borderBottomWidth: 4,
    borderBottomColor: '#0C476F',
    paddingBottom: 10,
    fontFamily: 'Open Sans Semi Bold',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#021320',
    fontFamily: 'Open Sans Semi Bold',
  },
  subText: {
    color: '#A8A8A8',
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    marginTop: 25,
    textAlign: 'center',
  },
  questionText: {
    marginTop: 34,
    fontSize: 14,
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '600',
    color: '#000',
    left: 20,
  },
  asterisk: {
    color: '#FF0606',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  circleWithText: {
    alignItems: 'center',
  },
  circleWrapper: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImage: {
    width: 80,
    height: 71,
    borderRadius: 31.5,
  },
  selectedOption: {
    borderWidth: 3,
    borderColor: '#5A9BD5',
  },
  optionTextWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 12,
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '700',
    color: '#000',
  },
  selectedTextOption: {
    color: '#28a745',
  },
  imageContainer: {
    marginTop: '10%',
    height: 195,
    marginLeft: '-40%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  footer: {
    width: '100%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03395F',
  },
});
