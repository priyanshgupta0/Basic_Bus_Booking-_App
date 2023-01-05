import React, { useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;

// const SingleSeat = [
//   {
//     id: '1',
//     name: 'S1',
//     book: false,
//   },
//   {
//     id: '2',
//     name: 'S2',
//     book: false,
//   },
//   {
//     id: '3',
//     name: 'S3',
//     book: false,
//   },
//   {
//     id: '4',
//     name: 'S4',
//     book: false,
//   },
// ]

const App = () => {
  const [num, setnum] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [Seat, setSeat] = useState([
    {
      id: '1',
      name: 'S1',
      book: false,
    },
    {
      id: '2',
      name: 'S2',
      book: false,
    },
    {
      id: '3',
      name: 'S3',
      book: false,
    },
    {
      id: '4',
      name: 'S4',
      book: false,
    },
    {
      id: '5',
      name: 'S5',
      book: false,
    },
    {
      id: '6',
      name: 'S6',
      book: false,
    },
    {
      id: '7',
      name: 'S7',
      book: false,
    },
    {
      id: '8',
      name: 'S8',
      book: false,
    },
    {
      id: '9',
      name: 'S9',
      book: false,
    },
    {
      id: '10',
      name: 'S10',
      book: false,
    },
    {
      id: '11',
      name: 'S11',
      book: false,
    },
    {
      id: '12',
      name: 'S12',
      book: false,
    },
  ])
  // const [Booked, setBooked] = useState(false);

  function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  const Book = () => {
    if (num.length > 0) {
      let a = random_item(num);
      let b = num.indexOf(a);
      console.log(num);
      console.log(b);
      num.splice(b, 1);
      setnum([...num]);
      console.log(num);
      Seat[a].book = !Seat[a].book;
      var UpdatedSeats = Seat;
      console.log(Seat[b])
      setSeat([...UpdatedSeats]);
      // setBooked(!Booked)
    } else {
      alert('All seats are booked')
    }
  }

  const clean = () => {
    setnum([...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]])
    for (let a = 0; a < Seat.length; a++) {
      Seat[a].book = !Seat[a].book;
    }
    setSeat([...Seat]);
  }

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: mobileW * .05,
        }}
      />
    );
  }

  const RenderSeat = ({ item }) => {
    return (
      <View style={[styles.Seat, { backgroundColor: item.book ? 'grey' : 'white' }]} >
        <Text style={styles.SeatText}>{item.name}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={{ color: 'black', alignSelf: "center", fontWeight: "bold", fontSize: 20, margin: mobileW * .05 }}>Select A Seat</Text>
      <View style={{ alignItems: "center" }}>
        {/* <FlatList
          data={SingleSeat}
          renderItem={RenderSeat}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={FlatListItemSeparator}
        /> */}
        {/* <View style={{ flex: 5 }}></View> */}
        <FlatList
          data={Seat}
          renderItem={RenderSeat}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={FlatListItemSeparator}
          numColumns={3}
          columnWrapperStyle={{}}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => { Book() }}>
        <Text style={styles.buttonText}>Book</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { clean() }}>
        <Text style={styles.buttonText}>clear</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    backgroundColor: 'orange',
    height: mobileW * .1,
    width: mobileW * .2,
    justifyContent: "center",
    alignSelf: "center",
    margin: mobileW * .05,
    borderWidth: 2,
    borderRadius: 5
  },
  buttonText: {
    color: 'black',
    fontWeight: "600",
    alignSelf: "center"
  },
  Seat: {
    height: mobileW * .3,
    width: mobileW * .2,
    // backgroundColor: 'cyan',
    marginLeft: mobileW * .05,
    marginRight: mobileW * .05,
    justifyContent: "center",
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
  },
  SeatText: {
    color: 'black',
    fontWeight: "bold",
    alignSelf: "center",
  }
})

export default App;