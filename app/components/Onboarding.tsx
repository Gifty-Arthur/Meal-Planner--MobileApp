import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Onboarding = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Top: Images */}
            <View style={styles.imageSection}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    <Image style={styles.image} source={require("../../assets/images/s2.png")} />
                    <Image style={[styles.image, styles.imageRight]} source={require("../../assets/images/s3.png")} />
                </ScrollView>
            </View>

            {/* Middle: Text */}
            <View style={styles.textSection}>
                <Text style={styles.title}>Enjoy your lunch time</Text>
                <Text style={styles.subtitle}>
                    Just relax and not overthink what to eat. This is in our side with our personalized meal plans just prepared and adapted to your needs.
                </Text>
            </View>

            {/* Bottom: Footer */}
            <View style={styles.footer}>
                {/* Dots Indicator */}
                <View style={styles.dotsContainer}>
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View>

                {/* Next Button */}
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageSection: {
        flex: 5,
        marginTop: 30,
    },
    scrollContent: {
        paddingLeft: 20,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 380,
        borderRadius: 20,
        marginRight: 5,
        resizeMode: 'cover',
    },
    imageRight: {
        width: 150, // Make the second image peek in from the right
    },
    textSection: {
        flex: 3,
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 15,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        lineHeight: 22,
    },
    footer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingBottom: 20,
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
        marginRight: 8,
    },
    activeDot: {
        width: 24,
        backgroundColor: '#8B5CF6', // Purple color
    },
    nextButton: {
        backgroundColor: '#8B5CF6',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 15,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
