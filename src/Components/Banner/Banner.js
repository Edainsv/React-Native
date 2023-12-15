import React from 'react';
import {View, Text, StyleSheet, ImageBackground } from 'react-native';

class Banner extends React.Component {
	render() {
		return (
			<ImageBackground
				style={styles.container}
				source={this.props.source}
			>
				<View style={styles.calc}>
					<Text style={styles.title}>
						{this.props.title}
					</Text>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 100,
		borderRadius: 10,
		overflow: 'hidden',
		flex: 1,
		marginTop: 15,
		marginBottom: 10
	},
	calc: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, .45)',
		justifyContent: 'center'
	},
	title: {
		marginLeft: 15,
		fontSize: 25,
		color: '#fff',
		position: 'absolute',
	}
});

export default Banner;