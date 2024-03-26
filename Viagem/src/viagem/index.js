import styles from './styles';

export default function Viagem({ destino, distancia, etanol, gasolina}) {
    consumoEtanol = distancia / 9 * etanol
    consumoGasolina = distancia / 11 * gasolina

    return <view style ={consumoEtanol < consumoGasolina ? styles.etanol : styles.gasolina}>
        <text>{destino}</text>
        <text>Distancia:{distancia}Km</text>
        <text>Preço do Etanol: {etanol.locateString('pt_BR', 'R$')}</text> <text>{etanol}</text>
        <text>Preço da Gasolina: {gasolina.locateString('pt_BR', 'R$')}</text> <text>{gasolina}</text>
    </view>
}