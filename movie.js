// Sample movie data
const movies = [
  { title: "GODZILLA X KONG: ĐẾ CHẾ MỚI", description: "Godzilla x Kong: Đế Chế Mới, Godzilla x Kong: The New Empire 2024 HD", year: 2015, image: "https://phimmoitv.org/storage/images/godzilla-x-kong-de-che-moi/godzilla-x-kong-de-che-moi-thumb.jpg" },
  { title: "DỮ PHƯỢNG HÀNH", description: "Các vị thần cổ đại đã chết, và chỉ còn một vị thần cuối cùng trên thế giới - Xingzhi. Người ta đồn rằng vị Thần Hành khiển này đã sống một mình trên thiên giới hàng vạn năm, tàn nhẫn và không thèm khát. Trong cuộc chiến giữa người bất tử và yêu quái, anh đã tự mình lật ngược tình thế, và từ đó, Du Men bị cuốn đi, dấu vết của anh khó mà tìm lại được.", year: 2022, image: "https://phim.nguonc.com/public/images/Post/PostCategory/4ebep1_4f.jpg" },
  { title: "Tay Đua Kiệt Xuất", description: "Bộ phim kể về một chú cu li chậm chạp tên Trí (Zhi) có niềm say mê với tốc độ. Ngôi làng nơi Trí và bà ngoại sống đang đứng trước nguy cơ bị phá hủy để xây dựng một khu trung tâm sang trọng. Khi đó, Trí đã đặt cược với Quang Phế (Vainglorious) - nhà đương kim vô địch của cuộc đua Con đường Tơ lụa (Silk Road Rally). Với sự giúp đỡ của một nhà cựu vô địch đua xe, Trí tham gia Cuộc đua Con đường Tơ lụa kéo dài bốn ngày với hy vọng chiến thắng để cứu ngôi làng cũng như thực hiện ước mơ đua xe của mình.", year: 2015, image: "https://phimmoitv.org/storage/images/tay-dua-kiet-xuat/tay-dua-kiet-xuat-thumb.jpg" },
  { title: "Shin Cậu Bé Bút Chì", description: "Phim 3DCG! Shin Cậu Bé Bút Chì: Đại Chiến Siêu Năng Lực ~Sushi Bay~ kể về hai nguồn sáng đặc biệt từ vũ trụ mang theo siêu năng lực đặc biệt tới Trái Đất. Một nguồn sáng tích cực nhập vào nhóc Shin, khiến cặp mông của cậu trở nên nóng bỏng và có khả năng điều khiển những đồ vật xung quanh theo ý muốn. Cuộc chiến giữa siêu năng lực này hứa hẹn sẽ mang lại những tình huống hài hước và thú vị cho khán giả.", year: 2015, image: "https://phimmoitv.org/storage/images/shin-cau-be-but-chi-dai-chien-sieu-nang-luc-sushi-bay/shin-cau-be-but-chi-dai-chien-sieu-nang-luc-sushi-bay-thumb.jpg" }
];

// Function to display movie details in modal
function displayMovieDetails(title, description) {
  const modal = document.getElementById("myModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const playButton = document.getElementById("playButton");

  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modal.style.display = "block";

  // Add click event listener to play button
  playButton.addEventListener('click', function() {
    alert("Playing movie...");
    modal.style.display = "none";
  });
}

// Function to create movie elements and add click event listener
function createMovieElements() {
  const movieList = document.getElementById("movieList");
  movies.forEach(movie => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `<img src="${movie.image}" alt="${movie.title}">`;
    movieElement.addEventListener('click', function() {
      displayMovieDetails(movie.title, movie.description);
    });
    movieList.appendChild(movieElement);
  });
}

// Create movie elements when the page loads
document.addEventListener('DOMContentLoaded', function() {
  createMovieElements();
});

// Close the modal when the close button is clicked
const closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
