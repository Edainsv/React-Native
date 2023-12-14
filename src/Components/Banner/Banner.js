import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

class Banner extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.color}>Ma bannière sera ici</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 15
	},
	color: {
		color: 'red',
		position: 'absolute',
		zndex: 40
	}
});

export default Banner;