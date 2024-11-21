import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  content: {
    paddingTop: height * 0.02, // 2% da altura da tela
    paddingBottom: height * 0.06, // 6% da altura da tela
  },
  triangleContainer: {
    alignItems: 'center',
    marginTop: height * -0.035, // -3.5% da altura da tela
  },
  triangle: {
    width: width * 0.5, // 50% da largura da tela
    height: height * 0.25, // 25% da altura da tela
    position: 'absolute',
    top: height * -0.09, // -9% da altura da tela
    left: width * -0.1, // -10% da largura da tela
  },
  textContainer: {
    marginTop: height * 0.16, // 16% da altura da tela
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    fontSize: width * 0.06, // 6% da largura da tela
    fontWeight: 'bold',
    color: '#021320',
    borderBottomWidth: 4,
    borderBottomColor: '#0C476F',
    paddingBottom: 10,
    fontFamily: 'Open Sans Semi Bold',
  },
  welcomeText: {
    fontSize: width * 0.06, // 6% da largura da tela
    fontWeight: 'bold',
    color: '#021320',
    fontFamily: 'Open Sans Semi Bold',
  },
  subText: {
    color: '#A8A8A8',
    fontFamily: 'Open Sans',
    fontSize: width * 0.035, // 3.5% da largura da tela
    fontWeight: '600',
    lineHeight: width * 0.045, // 4.5% da largura da tela
    marginTop: height * 0.025, // 2.5% da altura da tela
    textAlign: 'center',
  },
  questionText: {
    marginTop: height * 0.034, // 3.4% da altura da tela
    fontSize: width * 0.035, // 3.5% da largura da tela
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '600',
    color: '#000',
    left: width * 0.05, // 5% da largura da tela
  },
  asterisk: {
    color: '#FF0606',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.03, // 3% da altura da tela
  },
  circleWithText: {
    alignItems: 'center',
  },
  circleWrapper: {
    width: width * 0.24, // 24% da largura da tela
    height: width * 0.24, // 24% da largura da tela
    borderRadius: (width * 0.24) / 2, // 50% do tamanho do cÃ­rculo
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImage: {
    width: width * 0.2, // 20% da largura da tela
    height: height * 0.1, // 10% da altura da tela
    borderRadius: (width * 0.2) / 2, // 50% do tamanho da imagem
  },
  selectedOption: {
    borderWidth: 3,
    borderColor: '#5A9BD5',
  },
  optionTextWrapper: {
    marginTop: height * 0.01, // 1% da altura da tela
    alignItems: 'center',
  },
  optionText: {
    fontSize: width * 0.03, // 3% da largura da tela
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '700',
    color: '#000',
  },
  selectedTextOption: {
    color: '#28a745',
  },
  imageContainer: {
    marginTop: '10%',
    height: height * 0.25, // 25% da altura da tela
    marginLeft: width * -0.4, // 40% da largura da tela
  },
  image: {
    width: '100%',
    height: '100%',
  },
  footer: {
    width: '100%',
    height: height * 0.065, // 6.5% da altura da tela
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03395F',
  },
});