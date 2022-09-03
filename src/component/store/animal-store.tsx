import { createSlice } from "@reduxjs/toolkit";

export interface AnimalProps {
  id?: string;
  name: string;
  species: string;
  age: number;
  description: string;
  imageUrl?: string;
  creator?: string;
}

const DUMMY_ANIMALS = [
  {
    id: "a1",
    name: "봉순",
    species: "코리안 숏헤어",
    age: 13,
    description: "성질이 드러움",
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-528127648-scaled.jpg?resize=1536,1027",
    creator: "u1",
  },
  {
    id: "a2",
    name: "봉철",
    species: "페르시안 친칠라",
    age: 9,
    description: "털이 많이 빠짐",
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-528127648-scaled.jpg?resize=1536,1027",
    creator: "u1",
  },
];

const initialAnimalState: AnimalProps[] = DUMMY_ANIMALS;

const animalSlice = createSlice({
  name: "animalReducer",
  initialState: initialAnimalState,
  reducers: {
    addAnimal: (state: AnimalProps[], action) => {
      state.push({
        name: action.payload.name,
        species: action.payload.species,
        age: action.payload.age,
        description: action.payload.description,
        imageUrl: action.payload.imageUrl,
        creator: action.payload.creator
      });
    },
    editAnimal: (state: AnimalProps[], action) => {
      let identifiedAnimal = state.find(
        (animal) => animal.id === action.payload.id
      );
      if (identifiedAnimal) {
        identifiedAnimal.name = action.payload.name;
        identifiedAnimal.species = action.payload.species;
        identifiedAnimal.age = action.payload.age;
        identifiedAnimal.description = action.payload.description;
      }
    },
  },
});

export const { editAnimal, addAnimal } = animalSlice.actions;
export default animalSlice;
