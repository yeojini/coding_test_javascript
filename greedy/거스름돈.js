// 문제 : 손님에게 받은 돈이 money 일 때, 거슬러 줘야 할 동전의 최소 개수는?
// 접근 : `가장 큰 화폐 단위부터` 돈을 거슬러 주자.

const coins = [500, 100, 50, 10];

function solution(money) {
  return coins.reduce((acc,coin) => {
    const cnt = Math.floor(money / coin);
    money %= coin;
    return acc += cnt;
  },0) 
}

console.log(solution(1260)); // 6개
