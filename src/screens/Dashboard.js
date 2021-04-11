import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  ScrollView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";
import Header from "../components/Header";

const COUNTRIES_ITEM_SIZE = SIZES.width / 3;

const Dashboard = ({ navigation }) => {
  const countryScrollX = useRef(new Animated.Value(0)).current;
  const [countries, setCountries] = useState([
    { id: -1 },
    ...dummyData.countries,
    { id: -2 },
  ]);

  const renderCountries = () => {
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={0}
        snapToInterval={COUNTRIES_ITEM_SIZE}
        data={countries}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: countryScrollX,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          {
            console.log(item.name);
          }
          const opacity = countryScrollX.interpolate({
            inputRange: [
              (index - 2) * COUNTRIES_ITEM_SIZE,
              (index - 1) * COUNTRIES_ITEM_SIZE,
              index * COUNTRIES_ITEM_SIZE,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const fontSize = countryScrollX.interpolate({
            inputRange: [
              (index - 2) * COUNTRIES_ITEM_SIZE,
              (index - 1) * COUNTRIES_ITEM_SIZE,
              index * COUNTRIES_ITEM_SIZE,
            ],
            outputRange: [15, 25, 15],
            extrapolate: "clamp",
          });

          const mapSize = countryScrollX.interpolate({
            inputRange: [
              (index - 2) * COUNTRIES_ITEM_SIZE,
              (index - 1) * COUNTRIES_ITEM_SIZE,
              index * COUNTRIES_ITEM_SIZE,
            ],
            outputRange: [25, 60, 25],
            extrapolate: "clamp",
          });

          if (index === 0 || index === countries.length - 1)
            return <View style={{ width: COUNTRIES_ITEM_SIZE }}></View>;
          else
            return (
              <Animated.View
                opacity={opacity}
                style={{
                  width: COUNTRIES_ITEM_SIZE,
                  height: 130,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Animated.Image
                  source={item.image}
                  resizeMode="contain"
                  width={mapSize}
                  height={mapSize}
                  style={{
                    tintColor: COLORS.white,
                  }}
                />
                <Animated.Text
                  style={{
                    marginTop: 3,
                    color: COLORS.white,
                    ...FONTS.h1,
                    fontSize: fontSize,
                  }}
                >
                  {item.name}
                </Animated.Text>
              </Animated.View>
            );
        }}
      />
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <Header title="Asia" />
      <ScrollView>
        <View style={{ height: 700 }}>
          {/* Countries */}
          <View>{renderCountries()}</View>
          {/* Places */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
