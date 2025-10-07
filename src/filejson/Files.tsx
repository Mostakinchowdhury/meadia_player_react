type media = {
  id: number
  name: string
  type: 'img' | 'audio' | 'video'
  path: string
  thumnail: string
  isfavorite: boolean
}

export const Files: media[] = [
  {
    id: 1,
    name: 'cld-sample-5',
    type: 'img',
    path: 'https://res.cloudinary.com/drlwzalqk/image/upload/v1759600770/cld-sample-5.jpg',
    thumnail: '/img.jpg',
    isfavorite: false
  },
  {
    id: 2,
    name: 'audio1',
    type: 'audio',
    path: 'https://res.cloudinary.com/drlwzalqk/video/upload/v1759794265/audio3_gtqg22.mp3',
    thumnail: '/audio.jpg',
    isfavorite: false
  },
  {
    id: 3,
    name: 'audio3',
    type: 'audio',
    path: 'https://res.cloudinary.com/drlwzalqk/video/upload/v1759794253/audio1_jihaix.mp3',
    thumnail: '/audio.jpg',
    isfavorite: false
  },
  {
    id: 4,
    name: 'Me dil likhu to diltha me song',
    type: 'video',
    path: 'https://res.cloudinary.com/drlwzalqk/video/upload/v1759601298/Ishq_Official_Lyrical_Video_I_Amir_Ameer_Faheem_Abdullah_Rauhan_Malik_I_Love_Song_2024_wp10xr.mp4',
    thumnail: '/video.jpg',
    isfavorite: false
  },
  {
    id: 5,
    name: 'audio2',
    type: 'audio',
    path: 'https://res.cloudinary.com/drlwzalqk/video/upload/v1759794261/audio2_c0ptey.mp3',
    thumnail: '/audio.jpg',
    isfavorite: false
  },
  {
    id: 6,
    name: 'mostakin1',
    type: 'img',
    path: 'https://res.cloudinary.com/drlwzalqk/image/upload/v1759620186/profile/image/p0crhqktadxngylbz6b2.jpg',
    thumnail: '/img.jpg',
    isfavorite: false
  },
  {
    id: 7,
    name: 'mostakin2',
    type: 'img',
    path: 'https://res.cloudinary.com/drlwzalqk/image/upload/v1759715826/product/media/zd7pkblohfkav1uqfjon.jpg',
    thumnail: '/img.jpg',
    isfavorite: false
  },
  {
    id: 8,
    name: 'Saiyyan - Kailash Kher  Paresh Kamath  Naresh Kamath   Jhoomo Re',
    type: 'video',
    path: 'https://res.cloudinary.com/drlwzalqk/video/upload/v1759601114/Saiyyan_-_Kailash_Kher_Paresh_Kamath_Naresh_Kamath_Jhoomo_Re_rsgnq8.mp4',
    thumnail: '/video.jpg',
    isfavorite: false
  },
  {
    id: 9,
    name: 'DIPANNITA_Sorry_Dipannita_সরি_দীপান্বিতা_Official_Music_Video_t8nubf',
    type: 'video',
    path: 'https://res.cloudinary.com/drlwzalqk/video/upload/v1759601375/DIPANNITA_Sorry_Dipannita_%E0%A6%B8%E0%A6%B0%E0%A6%BF_%E0%A6%A6%E0%A7%80%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%AC%E0%A6%BF%E0%A6%A4%E0%A6%BE_Official_Music_Video_t8nubf.mp4',
    thumnail: '/video.jpg',
    isfavorite: false
  },

  {
    id: 10,
    name: 'mostakin3',
    type: 'img',
    path: 'https://res.cloudinary.com/drlwzalqk/image/upload/v1759620291/profile/image/ru8zjxodklxr1tyewhsk.jpg',
    thumnail: '/img.jpg',
    isfavorite: true
  },
  {
    id: 11,
    name: 'Kun_Faya_Kun_-_Lyrics_WORMONO_x_Drifting_Lights_Lofi_Remake_i2o0x8',
    type: 'video',
    path: 'https://res.cloudinary.com/drlwzalqk/video/upload/v1759601117/Kun_Faya_Kun_-_Lyrics_WORMONO_x_Drifting_Lights_Lofi_Remake_i2o0x8.mp4',
    thumnail: '/video.jpg',
    isfavorite: true
  }
]

export const favsetter = (inpid: number, value: boolean): void => {
  Files[inpid - 1].isfavorite = value
}
