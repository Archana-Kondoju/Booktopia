import http from "./httpServices";
export function getGenres() {
    return http.get("http://localhost:3000/api/genres");
}
