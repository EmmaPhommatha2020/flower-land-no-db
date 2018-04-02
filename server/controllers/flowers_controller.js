// variable
let flowers = [
  { id: 1, title: "Rose", text: "Meaning: A red rose represent an unmistakable expression of love.", img: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 2, title: "Daisy", text: "Meaning: Daisies represents innocence and purity.", img: "https://images.pexels.com/photos/128664/pexels-photo-128664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 3, title: "Tulip", text: "Meaning: Tulips represents generally perfect love.", img: "https://images.pexels.com/photos/103573/pexels-photo-103573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 4, title: "Sunflower", text: "Meaning: Sunflowers represents seeking out positivity and strength.", img: "https://images.pexels.com/photos/59990/sunflowers-sunflower-yellow-petal-59990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 5, title: "Lavender", text: "Meaning: Lavender represents silence and luck.", img: "https://images.unsplash.com/photo-1492055995629-7253a5b5afaa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d7a5e43e9ab5c73b094803e3359b7c7&auto=format&fit=crop&w=1776&q=80" },
  { id: 6, title: "Jasmine", text: "Meaning: Jasmine represents Love, delicate beauty and grace.", img: "https://images.pexels.com/photos/965982/pexels-photo-965982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 7, title: "Orchid", text: "Meaning: Orchid represents love, luxury, beauty and strength.", img: "https://images.pexels.com/photos/667043/pexels-photo-667043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 8, title: "Peony", text: "Meaning: Peony represents romance and a happy marriage.", img: "https://images.pexels.com/photos/99571/cherries-flowers-closeup-white-99571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }
];
let favFlowers = [];

// module.exports
module.exports = {

  read: (req, res) => {
    res.status(200).send(flowers)
  },

  readfavFlower: (req, res) => {
    res.status(200).send(favFlowers)
  },

  create: (req, res) => {
    const { id } = req.body;
    const flowerId = flowers.findIndex(flower => flower.id === id);
    favFlowers.push(flowers[flowerId])
    res.status(200).send(favFlowers)
  },

  update: (req, res) => {
    const { text } = req.body;
    const { id } = req.params;

    const flower = favFlowers.filter((flower) => flower.id == id)
    const flowerObj = flower[0];
    const index = favFlowers.indexOf(flower[0]);
    if (index !== -1) favFlowers[index] = {
      id,
      title: flowerObj.title,
      text,
      img: flowerObj.img
    }
    console.log(favFlowers, 'favFlowers')

    res.status(200).send(favFlowers)
  },

  delete: (req, res) => {
    let deleteId = req.params.id;
    flowerId = favFlowers.filter(item => item.id === deleteId);
    favFlowers.splice(flowerId, 1);
    res.status(200).send(favFlowers);
  }
}

