import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { LineaGradient } from 'expo-linear-gradient';

class CardLocation extends React.Component {
	render() {
		return (
			<View style={styles.cardLocation}>
				<ImageBackground
					source={{uri: this.props.cover}}
					style={styles.cover}
				>
					<Text>{this.props.title}</Text>

				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	cardLocation: {
		borderRadius: 10,
		height: 250,
		marginTop: 10, 
		marginBottom: 10,
		overflow: 'hidden'
	},
	cover: {
		flex: 1
	}
});

export default CardLocation;