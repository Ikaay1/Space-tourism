import {
	CrewDataInterface,
	DestinationDataInterface,
	TechnologyDataInterface,
} from './interface';

export const crewData: CrewDataInterface[] = [
    {
        profession: 'Commander',
        name: 'Douglas Hurley',
        details:
            'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        image: '/assets/crew/image-douglas-hurley.png',
    },
    {
        profession: 'Mission Specialist',
        name: 'MARK SHUTTLEWORTH',
        details:
            'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        image: '/assets/crew/image-mark-shuttleworth.png',
    },
    {
        profession: 'PILOT',
        name: 'Victor Glover',
        details:
            'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        image: '/assets/crew/image-victor-glover.png',
    },
    {
        profession: 'Flight Engineer',
        name: 'Anousheh Ansari',
        details:
            'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        image: '/assets/crew/image-anousheh-ansari.png',
    },
];

export const destinationData: DestinationDataInterface[] = [
    {
        planet: 'MOON',
        details:
            'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',

        distance: '384,400 km',
        time: '3 DAYS',
        image: '/assets/destination/image-moon.png',
    },
    {
        planet: 'MARS',
        details:
            'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',

        distance: '225 MIL. km',
        time: '9 MONTHS',
        image: '/assets/destination/image-mars.png',
    },
    {
        planet: 'EUROPA',
        details:
            'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',

        distance: '628 MIL. km',
        time: '3 YEARS',
        image: '/assets/destination/image-europa.png',
    },
    {
        planet: 'TITAN',
        details:
            'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',

        distance: '1.6 BIL. km',
        time: '7 YEARS',
        image: '/assets/destination/image-titan.png',
    },
];

export const technologyData: TechnologyDataInterface[] = [
    {
        num: '1',
        header: 'LAUNCH VEHICLE',
        details:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        image: '/assets/technology/image-launch-vehicle-portrait.jpg /assets/technology/image-launch-vehicle-landscape.jpg',
    },
    {
        num: '2',
        header: 'SPACEPORT',
        details:
            'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
        image: '/assets/technology/image-spaceport-portrait.jpg /assets/technology/image-spaceport-landscape.jpg',
    },
    {
        num: '3',
        header: 'SPACE CAPSULE',
        details:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        image: '/assets/technology/image-space-capsule-portrait.jpg /assets/technology/image-space-capsule-landscape.jpg',
    },
];
