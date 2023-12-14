import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class Header extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					source={require('./../../../assets/logo.png')}
				/>

				<Text style={styles.copyright}>
					&copy; 2023 Kasa. All Right reserved
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	    padding: 35,
		backgroundColor: "#000",
		justifyContent: "center",
		alignItems: "center",
		gap: 20
	},
	copyright: {
		color: "#fff"
	}
});

export default Header;