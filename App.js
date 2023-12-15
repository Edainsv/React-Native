import { React } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Data from './datas/logements.json';

import Header from './src/Components/Header/Header';
import Footer from './src/Components/Footer/Footer';
import Banner from './src/Components/Banner/Banner';
import CardLocation from './src/Components/CardLocation/CardLocation';


export default function App() {
    return (
        <ScrollView>
            <View style={styles.app}>
                <Header />

                <Banner
                    source={require('./assets/banner.png')}
                    title={'Chez vous,\npartout et ailleurs'}
                />

                {Data.map((location) => (
                    <CardLocation
                        key={location.id}
                        title={location.title}
                        cover={location.cover}
                    />
                ))}
            </View>

            <Footer />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    app: {
        flex: 0.1,
        padding: 25,
        paddingTop: 50,
    }
});