import lady from "../../assets/images/p6.png";
import item1 from "../../assets/images/p7.png";
import item2 from "../../assets/images/p8.png";
import item3 from "../../assets/images/m1.jpg";
import item4 from "../../assets/images/m2.jpg";
import item5 from "../../assets/images/m3.jpg";

export type MiniStory = {
  id: string;
  user: {
    name: string;
    avatar: string;
    time: string;
  };
  story: string;
  product: {
    title: string;
    brand: string;
    price: string;
    image: string;
  };
};

export const miniCarouselsData: MiniStory[][] = [
  [
    {
      id: "ms-1",
      user: { name: "Balogun Joseph", avatar: item1, time: "2h ago" },
      story:
        "Detty December in Nigeria can be alot if you do not have the right friends and so I am putting together this list to help anyone who is planning a trip to Nigeria this December to discover the right vendors or product for a great time",
      product: {
        title: "Keen December Plan",
        brand: "Travel",
        price: "₦200,000.00",
        image: item3,
      },
    },

    {
        id: "ms-2",
        user: { name: "Balogun Joseph", avatar: item1, time: "2h ago" },
        story:
          "Detty December in Nigeria can be alot if you do not have the right friends and so I am putting together this list to help anyone who is planning a trip to Nigeria this December to discover the right vendors or product for a great time",
        product: {
          title: "Keen December Plan",
          brand: "Travel",
          price: "₦200,000.00",
          image: item3,
        },
      },
  ],
  [
    {
        id: "ms-4",
        user: { name: "Christopher Obi", avatar: lady, time: "4h ago" },
        story:
          "I just bought this speaker, It’s perfect for remote work presentations and video calls. The portable design allows for easy transport between meetings while maintaining excellent sound quality for professional communication.",
        product: {
          title: "Portable Bluetooth Speaker",
          brand: "Portable Equipments",
          price: "₦150,000.00",
          image: item5,
        },
      },
      {
        id: "ms-5",
        user: { name: "Christopher Obi", avatar: lady, time: "4h ago" },
        story:
          "I just bought this speaker, It’s perfect for remote work presentations and video calls. The portable design allows for easy transport between meetings while maintaining excellent sound quality for professional communication.",
        product: {
          title: "Portable Bluetooth Speaker",
          brand: "Portable Equipments",
          price: "₦150,000.00",
          image: item5,
        },
      },
  ],
  [
    {
      id: "ms-8",
      user: { name: "Faridah Abdullah", avatar: item2, time: "2h ago" },
      story:
        "Finding like minded people and spots can be challenging when you are on the move so if you are planning on visiting Port Harcourt during Sallah, here are the best Muslim themed spots in the city for decent and quiet work",
      product: {
        title: "Tea & Shisha Cafe",
        brand: "Cafe’s",
        price: "₦8,000.00",
        image: item4,
      },
    },
    {
        id: "ms-9x",
        user: { name: "Faridah Abdullah", avatar: item2, time: "2h ago" },
        story:
          "Finding like minded people and spots can be challenging when you are on the move so if you are planning on visiting Port Harcourt during Sallah, here are the best Muslim themed spots in the city for decent and quiet work",
        product: {
          title: "Tea & Shisha Cafe",
          brand: "Cafe’s",
          price: "₦8,000.00",
          image: item4,
        },
      },
  ],
];
