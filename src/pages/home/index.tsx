import Home103 from "./home-103";
import Home104 from "./home-104";
import Home101 from "./home-101";
import Home102 from "./home-102";

const SCREENS = [Home101, Home102, Home103, Home104];

function shuffle() {
  let currentIndex = SCREENS.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [SCREENS[currentIndex], SCREENS[randomIndex]] = [
      SCREENS[randomIndex],
      SCREENS[currentIndex],
    ];
  }

  return SCREENS;
}
function Home() {
  let HOME = shuffle()[0];
  return (
    <div>
      <HOME />
    </div>
  );
}

export default Home;

// import Home103 from "./home-103";
// import Home104 from "./home-104";
// import Home101 from "./home-101";
// import Home102 from "./home-102";

// const SCREENS = [Home101, Home102, Home103, Home104];

// function shuffle() {
//   let screens = SCREENS;
//   let screenOrder = localStorage.getItem("@screens");
//   let timer = localStorage.getItem("@timer");

//   if (screenOrder && timer) {
//     let time = new Date(JSON.parse(timer));
//     let curr = new Date();

//     let offset = Math.abs(time.getTime() - curr.getTime()) / 1000;

//     if (offset >= 5) {
//       let currentIndex = screens.length,
//         randomIndex;

//       // While there remain elements to shuffle.
//       while (currentIndex !== 0) {
//         // Pick a remaining element.
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         // And swap it with the current element.
//         [screens[currentIndex], screens[randomIndex]] = [
//           screens[randomIndex],
//           screens[currentIndex],
//         ];
//       }

//       localStorage.setItem("@timer", JSON.stringify(new Date()));
//       localStorage.setItem(
//         "@screens",
//         SCREENS.indexOf(screens[0]).toLocaleString()
//       );

//       return SCREENS;
//     }
//   } else if (screenOrder) {
//     return [SCREENS[parseInt(screenOrder)]];
//   }
//   return SCREENS;
// }
// function Home() {
//   let HOME = shuffle()[0];
//   return (
//     <div>
//       <HOME />
//     </div>
//   );
// }

// export default Home;
