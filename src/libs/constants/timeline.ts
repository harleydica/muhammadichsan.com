export interface Timeline {
  title: string
  description: string
  place: string
  start_date: Date
  end_date: Date | null
  type: 'edu' | 'work'
}

export const timeline: Array<Timeline> = [
  {
    title: 'Primary School',
    type: 'edu',
    place: 'SD Muhammadiyah Kadisoka',
    start_date: new Date(2011, 3, 14),
    end_date: new Date(2017, 7, 18),
    description:
      'While in elementary school I was taught a lot about the religion of Islam, about attitudes, manners and socializing well.'
  },
  {
    title: 'Secondary School',
    type: 'edu',
    place: 'SMPN 1 Kalasan',
    start_date: new Date(2017, 8, 16),
    end_date: new Date(2020, 5, 23),
    description:
      'In high school I learned about basic sciences such as science, English, and mathematics. For the past 1 year I have been studying online completely and I have used it to find my passion for the future by learning new things.'
  },
  {
    title: 'High School',
    type: 'work',
    place: 'SMKN 2 Depok',
    start_date: new Date(2020, 7, 12),
    end_date: null,
    description:
      'During the transition from middle school to high school I have found my passion and I am trying to pursue it, namely in the field of computers. With that, I entered a vocational school majoring in SIJA (System Information Networking and Application). I am very happy to study here because I have a lot of time specifically to learn about the fields that I am good at and the school material also supports it.'
  }
]
