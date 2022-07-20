export const baserUrl = (path, variables) => {
    return `https://api.themoviedb.org/3${path}?api_key=4acab85c9b9d5d7225e370e72e53ec83${variables ? variables : ""}`;
};

export const headers = {
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWNhYjg1YzliOWQ1ZDcyMjVlMzcwZTcyZTUzZWM4MyIsInN1YiI6IjYyZDgzYmMyMWQ3OGYyMDA1N2I5NTlkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SJJf2rAcgGDfBQPzoSoU6HUKV8coQzoyL8-F2I7y_mk"
    }
};