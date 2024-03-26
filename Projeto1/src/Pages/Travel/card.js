
import { formatCurrency } from '../../utils/formatCurrency';
import stylesCard from './styleCard';

import { Text, View } from 'react-native';

const Card = ({ distance, priceAlcool, priceGasoline }) => {
  const valueAlcool = distance / 9;
  const alcool = valueAlcool * priceAlcool;

  const valueGasoline = distance / 11;
  const gasoline = valueGasoline * priceGasoline;

  return (
    <View style={alcool > gasoline ? stylesCard.cardAlcool : stylesCard.cardGasoline}>
      <View style={stylesCard.titleContainer}>
        <Text style={stylesCard.title}>{alcool > gasoline ? "Alcool leva vantagem" : "Gasolina leva vantagem"}  </Text>
      </View>
      <Text style={stylesCard.subTitle}>Preço da gasolina: {formatCurrency(priceGasoline)}</Text>
      <Text style={stylesCard.subTitle}>Preço do alcool: {formatCurrency(priceAlcool)}</Text>
      <Text style={stylesCard.subTitle}>Distância: {distance} km</Text>
      <Text style={stylesCard.subTitle}>Valor gasto com gasolina para veículo que faz 11km/l: {formatCurrency(alcool)}</Text>
      <Text style={stylesCard.subTitle}>Valor gasto com alcool para veículo que faz 9km/l: {formatCurrency(gasoline)}</Text>
    </View>
  );
};

export default Card