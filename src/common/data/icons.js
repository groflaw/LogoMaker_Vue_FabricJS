const iconLists = [
  {
    imageName: "arrow-pointing-to-right",
    image: require("../../assets/images/svg/arrow-pointing-to-right.svg"),
  },
  {
    imageName: "arrow-pointing-to-up",
    image: require("../../assets/images/svg/arrow-pointing-to-up.svg"),
  },
  { imageName: "arrow", image: require("../../assets/images/svg/arrow.svg") },
  {
    imageName: "barChart",
    image: require("../../assets/images/svg/barChart.svg"),
  },
  {
    imageName: "battery-level-1",
    image: require("../../assets/images/svg/battery-level-1.svg"),
  },
  {
    imageName: "battery-level-2",
    image: require("../../assets/images/svg/battery-level-2.svg"),
  },
  {
    imageName: "battery-level",
    image: require("../../assets/images/svg/battery-level.svg"),
  },
  {
    imageName: "battery",
    image: require("../../assets/images/svg/battery.svg"),
  },
  { imageName: "beer", image: require("../../assets/images/svg/beer.svg") },
  {
    imageName: "benefitChart",
    image: require("../../assets/images/svg/benefitChart.svg"),
  },
  { imageName: "bike", image: require("../../assets/images/svg/bike.svg") },
  {
    imageName: "bookmark",
    image: require("../../assets/images/svg/bookmark.svg"),
  },
  {
    imageName: "calendar",
    image: require("../../assets/images/svg/calendar.svg"),
  },
  {
    imageName: "cancelButton",
    image: require("../../assets/images/svg/cancelButton.svg"),
  },
  {
    imageName: "caution",
    image: require("../../assets/images/svg/caution.svg"),
  },
  { imageName: "chain", image: require("../../assets/images/svg/chain.svg") },
  { imageName: "chair", image: require("../../assets/images/svg/chair.svg") },
  { imageName: "check", image: require("../../assets/images/svg/check.svg") },
  { imageName: "cloud", image: require("../../assets/images/svg/cloud.svg") },
  {
    imageName: "cocktail",
    image: require("../../assets/images/svg/cocktail.svg"),
  },
  { imageName: "cofee", image: require("../../assets/images/svg/cofee.svg") },
  {
    imageName: "compass",
    image: require("../../assets/images/svg/compass.svg"),
  },
  {
    imageName: "coverage",
    image: require("../../assets/images/svg/coverage.svg"),
  },
  {
    imageName: "cropping",
    image: require("../../assets/images/svg/cropping.svg"),
  },
  { imageName: "cup", image: require("../../assets/images/svg/cup.svg") },
  { imageName: "cycle", image: require("../../assets/images/svg/cycle.svg") },
  {
    imageName: "diamond",
    image: require("../../assets/images/svg/diamond.svg"),
  },
  {
    imageName: "download-from-the-cloud",
    image: require("../../assets/images/svg/download-from-the-cloud.svg"),
  },
  {
    imageName: "dustbin-1",
    image: require("../../assets/images/svg/dustbin-1.svg"),
  },
  {
    imageName: "dustbin",
    image: require("../../assets/images/svg/dustbin.svg"),
  },
  {
    imageName: "edit-tool",
    image: require("../../assets/images/svg/edit-tool.svg"),
  },
  {
    imageName: "envelope",
    image: require("../../assets/images/svg/envelope.svg"),
  },
  {
    imageName: "erlenmeyer-flask",
    image: require("../../assets/images/svg/erlenmeyer-flask.svg"),
  },
  { imageName: "eye", image: require("../../assets/images/svg/eye.svg") },
  {
    imageName: "file-folder",
    image: require("../../assets/images/svg/file-folder.svg"),
  },
  { imageName: "gear", image: require("../../assets/images/svg/gear.svg") },
  {
    imageName: "gift-box-with-a-bow",
    image: require("../../assets/images/svg/gift-box-with-a-bow.svg"),
  },
  {
    imageName: "graduation-cap",
    image: require("../../assets/images/svg/graduation-cap.svg"),
  },
  {
    imageName: "hand-pointing-to-left",
    image: require("../../assets/images/svg/hand-pointing-to-left.svg"),
  },
  {
    imageName: "hand-pointing-to-right",
    image: require("../../assets/images/svg/hand-pointing-to-right.svg"),
  },
  {
    imageName: "headphones",
    image: require("../../assets/images/svg/headphones.svg"),
  },
  { imageName: "heart", image: require("../../assets/images/svg/heart.svg") },
  {
    imageName: "homepage",
    image: require("../../assets/images/svg/homepage.svg"),
  },
  {
    imageName: "hourglass",
    image: require("../../assets/images/svg/hourglass.svg"),
  },
  { imageName: "inbox", image: require("../../assets/images/svg/inbox.svg") },
  {
    imageName: "international-globe",
    image: require("../../assets/images/svg/international-globe.svg"),
  },
  { imageName: "key", image: require("../../assets/images/svg/key.svg") },
  { imageName: "laptop", image: require("../../assets/images/svg/laptop.svg") },
  {
    imageName: "light-bulb",
    image: require("../../assets/images/svg/light-bulb.svg"),
  },
  {
    imageName: "location-flag",
    image: require("../../assets/images/svg/location-flag.svg"),
  },
  {
    imageName: "location-pointer-1",
    image: require("../../assets/images/svg/location-pointer-1.svg"),
  },
  {
    imageName: "location-pointer",
    image: require("../../assets/images/svg/location-pointer.svg"),
  },
  {
    imageName: "locked-padlock",
    image: require("../../assets/images/svg/locked-padlock.svg"),
  },
  {
    imageName: "magic-wand",
    image: require("../../assets/images/svg/magic-wand.svg"),
  },
  {
    imageName: "magnifying-glass",
    image: require("../../assets/images/svg/magnifying-glass.svg"),
  },
  {
    imageName: "male-avatar",
    image: require("../../assets/images/svg/male-avatar.svg"),
  },
  {
    imageName: "medal-with-a-star",
    image: require("../../assets/images/svg/medal-with-a-star.svg"),
  },
  {
    imageName: "mercury-thermometer",
    image: require("../../assets/images/svg/mercury-thermometer.svg"),
  },
  {
    imageName: "musical-note",
    image: require("../../assets/images/svg/musical-note.svg"),
  },
  {
    imageName: "mute-speakers",
    image: require("../../assets/images/svg/mute-speakers.svg"),
  },
  {
    imageName: "notebook",
    image: require("../../assets/images/svg/notebook.svg"),
  },
  {
    imageName: "office-briefcase",
    image: require("../../assets/images/svg/office-briefcase.svg"),
  },
  {
    imageName: "old-phone",
    image: require("../../assets/images/svg/old-phone.svg"),
  },
  {
    imageName: "open-book",
    image: require("../../assets/images/svg/open-book.svg"),
  },
  {
    imageName: "open-umbrella",
    image: require("../../assets/images/svg/open-umbrella.svg"),
  },
  {
    imageName: "outbox-send-mail",
    image: require("../../assets/images/svg/outbox-send-mail.svg"),
  },
  {
    imageName: "paper-cup-with-a-drinking-straw",
    image: require("../../assets/images/svg/paper-cup-with-a-drinking-straw.svg"),
  },
  {
    imageName: "paper-note",
    image: require("../../assets/images/svg/paper-note.svg"),
  },
  {
    imageName: "photo-camera",
    image: require("../../assets/images/svg/photo-camera.svg"),
  },
  {
    imageName: "pie-chart",
    image: require("../../assets/images/svg/pie-chart.svg"),
  },
  {
    imageName: "piece-of-paper-and-pencil",
    image: require("../../assets/images/svg/piece-of-paper-and-pencil.svg"),
  },
  {
    imageName: "play-button",
    image: require("../../assets/images/svg/play-button.svg"),
  },
  {
    imageName: "power-button",
    image: require("../../assets/images/svg/power-button.svg"),
  },
  {
    imageName: "pushpin",
    image: require("../../assets/images/svg/pushpin.svg"),
  },
  {
    imageName: "question-mark",
    image: require("../../assets/images/svg/question-mark.svg"),
  },
  { imageName: "random", image: require("../../assets/images/svg/random.svg") },
  {
    imageName: "reusable-shopping-bag",
    image: require("../../assets/images/svg/reusable-shopping-bag.svg"),
  },
  {
    imageName: "satellite-dish",
    image: require("../../assets/images/svg/satellite-dish.svg"),
  },
  {
    imageName: "screwdriver-and-wrench",
    image: require("../../assets/images/svg/screwdriver-and-wrench.svg"),
  },
  {
    imageName: "selection-tool",
    image: require("../../assets/images/svg/selection-tool.svg"),
  },
  {
    imageName: "shopping-basket",
    image: require("../../assets/images/svg/shopping-basket.svg"),
  },
  {
    imageName: "shopping-cart",
    image: require("../../assets/images/svg/shopping-cart.svg"),
  },
  {
    imageName: "smartphone",
    image: require("../../assets/images/svg/smartphone.svg"),
  },
  {
    imageName: "speech-bubble-with-text-lines",
    image: require("../../assets/images/svg/speech-bubble-with-text-lines.svg"),
  },
  {
    imageName: "speech-bubble",
    image: require("../../assets/images/svg/speech-bubble.svg"),
  },
  { imageName: "star", image: require("../../assets/images/svg/star.svg") },
  {
    imageName: "subtracting-button",
    image: require("../../assets/images/svg/subtracting-button.svg"),
  },
  { imageName: "tablet", image: require("../../assets/images/svg/tablet.svg") },
  { imageName: "tailor", image: require("../../assets/images/svg/tailor.svg") },
  {
    imageName: "telephone-handle",
    image: require("../../assets/images/svg/telephone-handle.svg"),
  },
  {
    imageName: "television-with-antenna",
    image: require("../../assets/images/svg/television-with-antenna.svg"),
  },
  {
    imageName: "television",
    image: require("../../assets/images/svg/television.svg"),
  },
  {
    imageName: "thumb-up",
    image: require("../../assets/images/svg/thumb-up.svg"),
  },
  { imageName: "travel", image: require("../../assets/images/svg/travel.svg") },
  {
    imageName: "unlocked-padlock",
    image: require("../../assets/images/svg/unlocked-padlock.svg"),
  },
  {
    imageName: "update-arrow",
    image: require("../../assets/images/svg/update-arrow.svg"),
  },
  {
    imageName: "update-arrows",
    image: require("../../assets/images/svg/update-arrows.svg"),
  },
  {
    imageName: "uploading-files-to-the-cloud",
    image: require("../../assets/images/svg/uploading-files-to-the-cloud.svg"),
  },
  {
    imageName: "video-camera",
    image: require("../../assets/images/svg/video-camera.svg"),
  },
  {
    imageName: "voice-recorder",
    image: require("../../assets/images/svg/voice-recorder.svg"),
  },
  {
    imageName: "volume-control",
    image: require("../../assets/images/svg/volume-control.svg"),
  },
  {
    imageName: "wallet-with-zipper",
    image: require("../../assets/images/svg/wallet-with-zipper.svg"),
  },
  {
    imageName: "weighing-scale",
    image: require("../../assets/images/svg/weighing-scale.svg"),
  },
  { imageName: "wrench", image: require("../../assets/images/svg/wrench.svg") },
];

export default iconLists;
