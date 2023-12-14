import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Data from './datas/logements.json';

import Header from './src/Components/Header/Header';
import Footer from './src/Components/Footer/Footer';
import CardLocation from './src/Components/CardLocation/CardLocation';


export default function App() {
    return (
        <View style={styles.global}>
            <View style={styles.app}>
                <Header />

                {Data.map((location) => (
                    <CardLocation
                        key={location.id}
                        title={location.title}
                        cover={location.cover}
                    />
                ))}
            </View>

            {/*<Footer />*/}
        </View>
    )
}

const styles = StyleSheet.create({
    global: {
        flex: 1
    },
    app: {
        flex: 0.1,
        padding: 25,
        paddingTop: 40,
    }
});