let nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];
  
  export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
        
};


let messageList = [
    'Hey everyone! Welcome to the stream! 🎉',
    'What\'s up, chat? How are you all doing? 😊',
    'Don\'t forget to like and subscribe! 👍',
    'Shoutout to our newest follower! 🚀',
    'Who\'s ready for some epic gaming? 🎮',
    'Drop your favorite emoji in the chat! 🌈',
    'Let me know where you\'re tuning in from! 🌍',
    'It\'s a great day to be here with all of you! ☀️',
    'What games do you want to see in future streams? 🕹️',
    'Thanks for the support, you all rock! 🤘',
    'Remember, positive vibes only in the chat! ✨',
    'Who else is excited for the weekend? 🎉',
    'Random fact of the day: [insert interesting fact] 🤓',
    'Let\'s break a new record for likes today! 👍💯',
    'If you have any questions, feel free to ask! ❓',
    'Time for some intense gaming action! 🔥',
    'Shoutout to our top donator! 💰',
    'What\'s your favorite gaming snack? 🍕🎮',
    'Comment your favorite meme in the chat! 😂',
    'Let\'s make today\'s stream unforgettable! 🚀',
    'Big shoutout to our amazing moderators! 🙌',
    'Guess what? We hit a milestone today! 🎉🎊',
    'Who\'s your favorite game character and why? 🎮❤️',
    'If you could have any superpower, what would it be? 💪',
    'I appreciate each and every one of you! ❤️',
    'Let me know if you have any song requests! 🎶',
    'The stream wouldn\'t be the same without you! 🤗',
    'Who remembers the first game they ever played? 🕹️',
    'I\'m feeling lucky today. Are you? 🍀',
    'What\'s your go-to beverage during gaming sessions? 🥤',
    'If you could visit any fictional world, where would you go? 🌌',
    'Drop a "Hello" in the chat if you\'re having a good time! 👋',
];

export function generateRandomMessage() {
    return messageList[Math.floor(Math.random() * messageList.length)];
}
