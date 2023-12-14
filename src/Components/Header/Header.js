import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Banner from './../Banner/Banner';

class Header extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					source={require('./../../../assets/logo1.png')}
				/>

				<View style={styles.nav}>
					<Text style={styles.primaryColor}>Accueil</Text>
					<Text style={styles.primaryColor}>A propos</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	nav: {
		flexDirection: 'row',
		gap: 20
	},
	primaryColor: {
		color: '#FF6060'
	}
});

export default Header;

