import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

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
		// backgroundColor: 'grey',
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