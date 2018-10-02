import * as actionTypes from '../Actions/actions';

import screenshotAH from '../../assets/images/what_is_ah.jpg';
import screenshotDino from '../../assets/images/1.jpg';
import screenshotYosemite from '../../assets/images/2.jpg';
import screenshotMonoLake from '../../assets/images/3.jpg';
import screenshotMudPots from '../../assets/images/4.jpg';
import screenshotSandDunes from '../../assets/images/5.jpg';
import screenshotSandManituSprings from '../../assets/images/6.jpg';

const initialState = {
    episodes: [ 
        {
            id: "59zq4srDM_Y",
            name: "Adventure Hydrology",
            image: screenshotAH,
            blurb: "Hi all! My name is Chris and I am the world’s first Adventure Hydrologist.  Come join me as we explore what makes this planet so amazing! ",
            copy: "I am Water Scientist (aka- Hydrologist) who is exploring our spectacular world and sharing with you, stories of our planets present, past and future.  Come with me and explore the tops of mountains to the bottom of canyons.  Dive with me in the ocean,  splash with me through swamps and get drenched with me in a coastal rainforest.  There is a lot to learn about our this shiny blue ball we call home and so many adventures to be had… so let's get to it.",
            pathname: "/Episode/",
            className: 'one'
        },
        {
            id: "rTNoL36oAEw",
            name: "Imperial Sand Dunes",
            image: screenshotSandDunes,
            pathname: "/Episode/",
            blurb: "100+ degree temperatures; sand dunes as far the eye can see; and an ATV…  I believe it is time we explore this sandy ecosystem.  Join me on a desert adventure through the Imperial Sand Dunes.",
            copy: "Riding across the largest sand dune complex in California is an amazing experience.  Rising over 300 feet tall from the desert floor and spanning all the way into Mexico, what seems to be a dry, hot and unforgiving landscape is actually one of the most vibrant arid ecosystems in California.  Learn & Adventure with me!",
            className: 'two'
        },
        {
            id: "6oJmAicsK8A",
            name: "Yosemite’s Secrets",
            image: screenshotYosemite,
            pathname: "/Episode/",
            blurb: "Yosemite’s grandeur is only surpassed by the story of how ice, fire, water and time shaped this valley.  Hit the trails and come with me to uncover the secret of Yosemite.",
            copy: "One of the most well-known, and visited, National Parks in the world, Yosemite is a bucket list destination.  But hidden its cliffs of granite, grassy meadows and cascading waterfalls, are the story of this parks past, present and perhaps its future.  Explore Yosemite and learn to adventure.",
            className: 'three'
        },
        {
            id: "9VF3dj3Tc_8",
            name: "Edge of Survival",
            image: screenshotMonoLake,
            pathname: "/Episode/",
            blurb: "Where can you find active volcanoes, boiling streams, 13,000 ft. mountains and an ancient lake hanging in the balance?  Come explore a silent shoreline covered with bizarre towers, learn why it almost disappeared and come understand a history spans civilization.  Let’s go explore Mono Lake.",
            copy: "Only 14 miles from Yosemite National Park you will find the ancient Mono Lake.  Millions of years old, this lake is a serene spot surrounded by volcanoes, cracking fault lines and some of the highest peaks in the United States.  It’s also a lake that supports one of the most dynamic ecosystems in North America.",
            className: 'four'
        },
        {
            id: "jrLZyxTenkw",
            name: "Manitou Springs",
            image: screenshotSandManituSprings,
            pathname: "/Episode/",
            blurb: "Wander through a bustling mountain town filled with castles, hiking trails, and penny arcades as we search for some of  the best water in Colorado.  Come with me and let’s see if we can find all of Manitou’s natural mineral springs.",
            copy: "Manitou Springs lives up to its name... especially the “springs” part.  Wandering the vibrant mountain town you will have the chance to hunt for some of the best water in all of Colorado.  The springs here come out of walls, buildings and can even be found in open courtyards.  The fun of it all is trying to find these eclectic springs and taste the different “flavors”.  Come along as we go find ourselves some high quality H2O.",
            className: 'four'
        },
        {
            id: "rc6tzTFnSJU",
            name: "The Mud Pots",
            image: screenshotMudPots,
            pathname: "/Episode/",
            blurb: "What do earthquakes, volcanoes & water have in common? Come with me and find out the answer as we explore the Mud Pots.",
            copy: "Mud volcanos, the San Andres Fault and boiling groundwater come together to create a place out of this world.  Join me as we explore a truly bizarre landscape in middle of one of Southern California’s driest landscapes.  Welcome to the Mud Pots.",
            className: 'four'
        },
        {
            id: "XprYUrEl3dE",
            image: screenshotDino,
            pathname: "/Episode/",
            name: "Dinosaur National Monument",
            blurb: "Exploring Dinosaur National Monument in the dead of winter means one thing… it’s only you, the trails and the Dinosaurs.  Join me on an adventure unlike any other. Here at Dino … they want you to touch the dinosaurs.",
            copy: "In Northeast Utah you can explore Dinosaur National Monuments water carved canyons, ancient petroglyphs, or wander its box canyons. You can also explore an area filled with more dinosaur bones you’ve ever seen in your life.  Added bonus… here at DNM they ask you to touch the fossils.",
            className: 'four'
        }
    ],
    selectedEpisode: 0
}

const reducer = ( state = initialState , action ) => {
    switch( action.type ) {
        case actionTypes.SELECT_EPISODE:
            console.log('actionTypes.SELECT_EPISODE')
            return {
                ...state,
                selectedEpisode: action.id
            }
            default :
            return state;
    }
}

export default reducer;