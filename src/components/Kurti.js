/* DressPage.css */

.dress-page {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.dress-item {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.dress-item h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.dress-item p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.dress-images {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.dress-image {
  width: 48%;
  border-radius: 5px;
  transition: transform 0.2s;
}

.dress-image:hover {
  transform: scale(1.05);
}

.buy-now {
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buy-now:hover {
  background-color: #e5533d;
}

/* Crack effect */
.crack-effect {
  animation: crack 1s forwards;
}

@keyframes crack {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95) rotate(5deg);
  }
  100% {
    transform: scale(0.9) rotate(-5deg);
    opacity: 0;
  }
}