export const genres = [
    // { _id: "1", name: "All Genres" },
     { _id: "5b21ca3eeb7f6fbccd471818", name: "Computer Science" },
   
     { _id: "5b21ca3eeb7f6fbccd471814", name: "Mathematics" },
     { _id: "5b21ca3eeb7f6fbccd471820", name: "History" }
   ];
   
   export function getGenres() {
     return genres.filter(g => g);
   }