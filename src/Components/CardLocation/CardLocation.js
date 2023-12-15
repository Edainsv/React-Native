import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class CardLocation extends React.Component {
	render() {
		return (
			<View style={styles.cardLocation}>
				<ImageBackground
					source={{uri: this.props.cover}}
					style={styles.cover}
				>
					<LinearGradient
						colors={['transparent', 'rgba(0,0,0,0.8)']}
						style={styles.linear}
					>
						<Text style={styles.title}>{this.props.title}</Text>
					</LinearGradient>
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
	},
	linear: {
		flex: 1,
		justifyContent: 'flex-end',
		padding: 20,
		paddingRight: '20%',
	},
	title: {
		color: '#fff',
		fontSize: 18
	}
});

export default CardLocation;