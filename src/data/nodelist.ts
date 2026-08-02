import { NodeMapItem } from '../types/nodelist'

export const nodeList: NodeMapItem[] = [
  {
    title: 'head-integration',
    content: 'Integrating Christ\'s teachings into my personal life'
  },
  {
    title: 'goals',
    content: 'I have different goals because of my spiritual beliefs',
    parent: 'head-integration'
  },
  {
    title: 'church',
    content: 'Church service',
    parent: 'goals'
  },
  {
    title: 'family-goal',
    content: 'Focus on family, not just money',
    parent: 'goals'
  },
  {
    title: 'prophet-goal',
    content: 'I strive to follow the prophet and align my life with his teachings',
    parent: 'goals',
    connectors: [
      'commandments-goal'
    ]
  },
  {
    title: 'commandments-goal',
    content: 'I strive to keep the commandments and live my life according to the teachings of Jesus',
    parent: 'goals',
    connectors: [
      'prophet-goal'
    ]
  },
  {
    title: 'kindness',
    content: 'I have kindness and respect for others.\nI strive to give grace to others because I want grace myself.\nI recognize that others have their own lives and experiences and that everyone can have bad days, just as we can all have good days.',
    parent: 'head-integration'
  },
  {
    title: 'gods-children',
    content: 'I recognize that we are all children of God, a Heavenly Father who loves us and wants us to live good lives and be happy',
    parent: 'kindness'
  },
  {
    title: 'sakes',
    content: 'I\'ve learned that creation is for more than simply the sake of creating, nor experiences simply for the sake of experiencing.',
    parent: 'head-integration'
  },
  {
    title: 'creation',
    content: 'Creating is meant to be shared. I find fulfillment in sharing my creations with others',
    parent: 'sakes'
  },
  {
    title: 'experiences',
    content: 'Experiences are meant to be shared. I find more joy in doing things when I do them with someone else, especially someone I love',
    parent: 'sakes'
  },
  {
    title: 'life',
    content: 'Life should bring us together',
    parent: 'sakes',
    connectors: [
      'creation',
      'experiences'
    ]
  },
  {
    title: 'eternal-preparation',
    content: 'Many institutions prepare us for life here on this earth, but you will seldom find a classroom that reminds you that one day we are all going to die.\nInstitutions of the church not only teach how to live on this earth, but they also prepare me for life after this life.'
  },
  {
    title: 'head-spiritual',
    content: 'Spiritual Beliefs',
    parent: 'eternal-preparation'
  },
  {
    title: 'head-professional',
    content: 'Professional Practices',
    parent: 'eternal-preparation'
  },
  {
    title: 'family',
    content: 'Focus on family\nFamily is eternal. Thus my family is of eternal importance and consequence.',
    parent: 'head-spiritual'
  },
  {
    title: 'eternity',
    content: 'Eternity\nLife on earth comes to an end, but we, as sons and daughters of God, do not',
    parent: 'head-spiritual'
  },
  {
    title: 'recreation',
    content: 'Family time!\nI believe in the importance of wholesome recreational activities',
    parent: 'head-spiritual',
    connectors: [
      'head-professional'
    ]
  },
  {
    title: 'service',
    content: 'Service is not just something to do to get a good name or to have a good resume.',
    parent: 'head-spiritual'
  },
  {
    title: 'service-church',
    content: 'Service in the church is something I hold as special. It is an opportunity to share my talents and grow in ways that God would have me grow.',
    parent: 'service'
  },
  {
    title: 'service-neighbor',
    content: 'It is a commendment to love my neighbors and to serve them. I want to do good and help out my neighbors, community, and family.',
    parent: 'service'
  },
  {
    title: 'service-world',
    content: 'In serving, I always strive t omake the world a better place.',
    parent: 'service-neighbor'
  },
  {
    title: 'goals-plans',
    content: 'Goals and plans',
    parent: 'head-spiritual',
    connectors: [
      'head-professional'
    ]
  },
  {
    title: 'home',
    content: 'A big goal and aspiration in my life is to have a home that is large enough for my wife and I and our future family.',
    parent: 'goals-plans'
  },
  {
    title: 'career',
    content: 'I want a successful career--not because I want to be wealthy and comfortable, but because I want to be able to support my wife and family.',
    parent: 'goals-plans'
  },
  {
    title: 'stability',
    content: 'My primary quest in life is stability and establishment.',
    parent: 'head-professional',
    connectors: [
      'career'
    ]
  }
]