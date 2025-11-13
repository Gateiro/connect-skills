
import React, { useRef, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';

// Componente de Card (exemplo do guia)
const UserCard = ({ data }: { data: any }) => (
  <View
    style={{
      flex: 0.8,
      borderRadius: 16,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}
  >
    <Text style={{ fontSize: 22, fontWeight: "bold" }}>{data.name}</Text>
    <Text style={{ fontSize: 16, color: "#555", marginTop: 8 }}>Aprender: {data.aprender}</Text>
    <Text style={{ fontSize: 16, color: "#555", marginTop: 4 }}>Ensinar: {data.ensinar}</Text>
  </View>
);


const DUMMY_USERS = [
  { id: 1, name: "Ana Silva", aprender: "Violão", ensinar: "Inglês" },
  { id: 2, name: "Bruno Costa", aprender: "Cozinha", ensinar: "Matemática" },
  { id: 3, name: "Carla Dias", aprender: "Yoga", ensinar: "Programação" },
];

export function Home() {

  const [usuarios, setUsuarios] = useState(DUMMY_USERS);
  
 
  const swiperRef = useRef<Swiper<any>>(null);

  const handleSwipeRight = (cardIndex: number) => {
    Alert.alert('Combinação!', `Deste "match" com ${usuarios[cardIndex].name}`);
  };

  const handleSwipeLeft = (cardIndex: number) => {
    Alert.alert('Rejeitado!', `Rejeitaste ${usuarios[cardIndex].name}`); 
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f4f6" }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16, textAlign: 'center' }}>
          Encontrar Skills
        </Text>
        
        {usuarios.length > 0 ? (
          <Swiper
            ref={swiperRef}
            cards={usuarios} 
            renderCard={(card) => <UserCard data={card} />} 
            onSwipedRight={handleSwipeRight}
            onSwipedLeft={handleSwipeLeft}
            backgroundColor={"#f3f4f6"}
            stackSize={3} // 
            stackSeparation={15}
            verticalSwipe={false} 
            cardVerticalMargin={20}
            containerStyle={{ flex: 1 }}

            onSwipedAll={() => {
              Alert.alert("Ups!", "Acabaram os usuários por hoje.");
              setUsuarios([]); 
            }}
          />
        ) : (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: '#888' }}>Não há mais usuários para mostrar.</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}