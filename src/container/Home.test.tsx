import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

global.fetch = () => {
  const responseData = {
    data: [
      {
        type: "gif",
        id: "bLhHnPAY2qZPFOgend",
        url: "https://giphy.com/gifs/spiritawards-independent-spirit-awards-indie-bLhHnPAY2qZPFOgend",
        slug: "spiritawards-independent-spirit-awards-indie-bLhHnPAY2qZPFOgend",
        bitly_gif_url: "https://gph.is/g/Z7Ye2Xm",
        bitly_url: "https://gph.is/g/Z7Ye2Xm",
        embed_url: "https://giphy.com/embed/bLhHnPAY2qZPFOgend",
        username: "spiritawards",
        source: "https://www.youtube.com/watch?v=dSpl10BIgaI",
        title:
          "Standing Ovation Indie Spirit GIF by Film Independent Spirit Awards",
        rating: "pg",
        content_url: "",
        source_tld: "www.youtube.com",
        source_post_url: "https://www.youtube.com/watch?v=dSpl10BIgaI",
        is_sticker: 0,
        import_datetime: "2024-02-25 23:59:09",
        trending_datetime: "2024-02-26 00:15:07",
        images: {
          original: {
            height: "263",
            width: "480",
            size: "3822113",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            mp4_size: "755814",
            mp4: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            webp_size: "1285734",
            webp: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            frames: "68",
            hash: "a2fcc16d96d80255c5b759f139922c15",
          },
          downsized: {
            height: "210",
            width: "384",
            size: "1560771",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy-downsized.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
          },
          downsized_large: {
            height: "263",
            width: "480",
            size: "3822113",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
          },
          downsized_medium: {
            height: "263",
            width: "480",
            size: "3822113",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
          },
          downsized_small: {
            height: "134",
            width: "245",
            mp4_size: "115102",
            mp4: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy-downsized-small.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g",
          },
          downsized_still: {
            height: "210",
            width: "384",
            size: "30943",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy-downsized_s.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-downsized_s.gif&ct=g",
          },
          fixed_height: {
            height: "200",
            width: "365",
            size: "1863407",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/200.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200.gif&ct=g",
            mp4_size: "420649",
            mp4: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/200.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            webp_size: "873450",
            webp: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/200.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200.webp&ct=g",
          },
          fixed_height_downsampled: {
            height: "200",
            width: "365",
            size: "175400",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/200_d.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            webp_size: "109622",
            webp: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/200_d.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200_d.webp&ct=g",
          },
          fixed_height_small: {
            height: "100",
            width: "183",
            size: "622249",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/100.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100.gif&ct=g",
            mp4_size: "147927",
            mp4: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/100.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            webp_size: "320630",
            webp: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/100.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100.webp&ct=g",
          },
          fixed_height_small_still: {
            height: "100",
            width: "183",
            size: "11086",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/100_s.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100_s.gif&ct=g",
          },
          fixed_height_still: {
            height: "200",
            width: "365",
            size: "27209",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/200_s.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200_s.gif&ct=g",
          },
          fixed_width: {
            height: "110",
            width: "200",
            size: "737714",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/200w.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            mp4_size: "167587",
            mp4: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/200w.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            webp_size: "363720",
            webp: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/200w.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200w.webp&ct=g",
          },
          fixed_width_downsampled: {
            height: "110",
            width: "200",
            size: "66852",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/200w_d.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            webp_size: "40192",
            webp: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/200w_d.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200w_d.webp&ct=g",
          },
          fixed_width_small: {
            height: "55",
            width: "100",
            size: "223984",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/100w.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            mp4_size: "48736",
            mp4: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/100w.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            webp_size: "131218",
            webp: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/100w.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100w.webp&ct=g",
          },
          fixed_width_small_still: {
            height: "55",
            width: "100",
            size: "4051",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/100w_s.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100w_s.gif&ct=g",
          },
          fixed_width_still: {
            height: "110",
            width: "200",
            size: "12926",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/200w_s.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200w_s.gif&ct=g",
          },
          looping: {
            mp4_size: "2361607",
            mp4: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy-loop.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-loop.mp4&ct=g",
          },
          original_still: {
            height: "263",
            width: "480",
            size: "65558",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy_s.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy_s.gif&ct=g",
          },
          original_mp4: {
            height: "262",
            width: "480",
            mp4_size: "755814",
            mp4: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
          },
          preview: {
            height: "152",
            width: "278",
            mp4_size: "39656",
            mp4: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy-preview.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-preview.mp4&ct=g",
          },
          preview_gif: {
            height: "50",
            width: "91",
            size: "46361",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy-preview.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-preview.gif&ct=g",
          },
          preview_webp: {
            height: "104",
            width: "190",
            size: "48064",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/giphy-preview.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-preview.webp&ct=g",
          },
          "480w_still": {
            height: "263",
            width: "480",
            size: "3822113",
            url: "https://media0.giphy.com/media/bLhHnPAY2qZPFOgend/480w_s.jpg?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=480w_s.jpg&ct=g",
          },
        },
        user: {
          avatar_url:
            "https://media2.giphy.com/avatars/spiritawards/Ruc6GB0z1iwr.png",
          banner_image: "",
          banner_url: "",
          profile_url: "https://giphy.com/spiritawards/",
          username: "spiritawards",
          display_name: "Film Independent Spirit Awards",
          description:
            "The Film Independent Spirit Awards is the annual celebration of the independent, artist-driven films that bring a unique vision to filmmaking. Watch Live Thursday 4/22 at 10pm on IFC.",
          instagram_url: "https://instagram.com/filmindependent",
          website_url: "https://www.filmindependent.org/spirit-awards/",
          is_verified: true,
        },
        analytics_response_payload:
          "e=Z2lmX2lkPWJMaEhuUEFZMnFaUEZPZ2VuZCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9MGM5NGYyMmJmZTFwaTNlMWl4MHNzbm13aHlsMXVrODNjdDNmNGdvM3VtOXNvMzZwJmN0PWc",
        analytics: {
          onload: {
            url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWJMaEhuUEFZMnFaUEZPZ2VuZCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9MGM5NGYyMmJmZTFwaTNlMWl4MHNzbm13aHlsMXVrODNjdDNmNGdvM3VtOXNvMzZwJmN0PWc&action_type=SEEN",
          },
          onclick: {
            url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWJMaEhuUEFZMnFaUEZPZ2VuZCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9MGM5NGYyMmJmZTFwaTNlMWl4MHNzbm13aHlsMXVrODNjdDNmNGdvM3VtOXNvMzZwJmN0PWc&action_type=CLICK",
          },
          onsent: {
            url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWJMaEhuUEFZMnFaUEZPZ2VuZCZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9MGM5NGYyMmJmZTFwaTNlMWl4MHNzbm13aHlsMXVrODNjdDNmNGdvM3VtOXNvMzZwJmN0PWc&action_type=SENT",
          },
        },
      },
      {
        type: "gif",
        id: "YdGUYXws5mD2fxFKxg",
        url: "https://giphy.com/gifs/rvappstudios-monday-mondays-montag-YdGUYXws5mD2fxFKxg",
        slug: "rvappstudios-monday-mondays-montag-YdGUYXws5mD2fxFKxg",
        bitly_gif_url: "https://gph.is/g/4w19vKn",
        bitly_url: "https://gph.is/g/4w19vKn",
        embed_url: "https://giphy.com/embed/YdGUYXws5mD2fxFKxg",
        username: "rvappstudios",
        source: "https://www.rvappstudios.com/",
        title: "Happy Monday Morning GIF by Lucas and Friends by RV AppStudios",
        rating: "g",
        content_url: "",
        source_tld: "www.rvappstudios.com",
        source_post_url: "https://www.rvappstudios.com/",
        is_sticker: 0,
        import_datetime: "2023-10-30 13:58:42",
        trending_datetime: "0000-00-00 00:00:00",
        images: {
          original: {
            height: "480",
            width: "480",
            size: "3041609",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
            mp4_size: "664907",
            mp4: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
            webp_size: "1059750",
            webp: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
            frames: "108",
            hash: "501fb305c78fe9990b820319bb188c64",
          },
          downsized: {
            height: "480",
            width: "480",
            size: "1052212",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy-downsized.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-downsized.gif&ct=g",
          },
          downsized_large: {
            height: "480",
            width: "480",
            size: "3041609",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
          },
          downsized_medium: {
            height: "480",
            width: "480",
            size: "3041609",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
          },
          downsized_small: {
            height: "268",
            width: "268",
            mp4_size: "141666",
            mp4: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy-downsized-small.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-downsized-small.mp4&ct=g",
          },
          downsized_still: {
            height: "480",
            width: "480",
            size: "33458",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy-downsized_s.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-downsized_s.gif&ct=g",
          },
          fixed_height: {
            height: "200",
            width: "200",
            size: "748019",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/200.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200.gif&ct=g",
            mp4_size: "209800",
            mp4: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/200.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200.mp4&ct=g",
            webp_size: "387282",
            webp: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/200.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200.webp&ct=g",
          },
          fixed_height_downsampled: {
            height: "200",
            width: "200",
            size: "44721",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/200_d.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200_d.gif&ct=g",
            webp_size: "54796",
            webp: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/200_d.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200_d.webp&ct=g",
          },
          fixed_height_small: {
            height: "100",
            width: "100",
            size: "308175",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/100.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100.gif&ct=g",
            mp4_size: "101753",
            mp4: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/100.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100.mp4&ct=g",
            webp_size: "177014",
            webp: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/100.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100.webp&ct=g",
          },
          fixed_height_small_still: {
            height: "100",
            width: "100",
            size: "4838",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/100_s.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100_s.gif&ct=g",
          },
          fixed_height_still: {
            height: "200",
            width: "200",
            size: "11272",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/200_s.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200_s.gif&ct=g",
          },
          fixed_width: {
            height: "200",
            width: "200",
            size: "748019",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/200w.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200w.gif&ct=g",
            mp4_size: "209800",
            mp4: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/200w.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200w.mp4&ct=g",
            webp_size: "387282",
            webp: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/200w.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200w.webp&ct=g",
          },
          fixed_width_downsampled: {
            height: "200",
            width: "200",
            size: "44721",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/200w_d.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200w_d.gif&ct=g",
            webp_size: "54796",
            webp: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/200w_d.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200w_d.webp&ct=g",
          },
          fixed_width_small: {
            height: "100",
            width: "100",
            size: "308175",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/100w.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100w.gif&ct=g",
            mp4_size: "48679",
            mp4: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/100w.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100w.mp4&ct=g",
            webp_size: "177014",
            webp: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/100w.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100w.webp&ct=g",
          },
          fixed_width_small_still: {
            height: "100",
            width: "100",
            size: "4838",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/100w_s.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=100w_s.gif&ct=g",
          },
          fixed_width_still: {
            height: "200",
            width: "200",
            size: "11272",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/200w_s.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=200w_s.gif&ct=g",
          },
          looping: {
            mp4_size: "2582635",
            mp4: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy-loop.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-loop.mp4&ct=g",
          },
          original_still: {
            height: "480",
            width: "480",
            size: "51290",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy_s.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy_s.gif&ct=g",
          },
          original_mp4: {
            height: "480",
            width: "480",
            mp4_size: "664907",
            mp4: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
          },
          preview: {
            height: "290",
            width: "290",
            mp4_size: "32340",
            mp4: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy-preview.mp4?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-preview.mp4&ct=g",
          },
          preview_gif: {
            height: "100",
            width: "100",
            size: "48222",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy-preview.gif?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-preview.gif&ct=g",
          },
          preview_webp: {
            height: "124",
            width: "124",
            size: "49302",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/giphy-preview.webp?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=giphy-preview.webp&ct=g",
          },
          "480w_still": {
            height: "480",
            width: "480",
            size: "3041609",
            url: "https://media0.giphy.com/media/YdGUYXws5mD2fxFKxg/480w_s.jpg?cid=0c94f22bfe1pi3e1ix0ssnmwhyl1uk83ct3f4go3um9so36p&ep=v1_gifs_trending&rid=480w_s.jpg&ct=g",
          },
        },
        user: {
          avatar_url:
            "https://media2.giphy.com/avatars/rvappstudios/0ax9ZCLRtVSK.jpg",
          banner_image:
            "https://media2.giphy.com/channel_assets/rvappstudios/OO67KPR3kRBn.jpg",
          banner_url:
            "https://media2.giphy.com/channel_assets/rvappstudios/OO67KPR3kRBn.jpg",
          profile_url: "https://giphy.com/rvappstudios/",
          username: "rvappstudios",
          display_name: "Lucas and Friends by RV AppStudios",
          description:
            "Lucas & Friends By RV AppStudios created free educational apps, nursery rhymes and kids songs on YouTube, children's books, and more. Over 30 million kids use our educational apps every month for free!",
          instagram_url: "https://instagram.com/rvappstudios",
          website_url: "http://www.rvappstudios.com",
          is_verified: true,
        },
        analytics_response_payload:
          "e=Z2lmX2lkPVlkR1VZWHdzNW1EMmZ4Rkt4ZyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9MGM5NGYyMmJmZTFwaTNlMWl4MHNzbm13aHlsMXVrODNjdDNmNGdvM3VtOXNvMzZwJmN0PWc",
        analytics: {
          onload: {
            url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVlkR1VZWHdzNW1EMmZ4Rkt4ZyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9MGM5NGYyMmJmZTFwaTNlMWl4MHNzbm13aHlsMXVrODNjdDNmNGdvM3VtOXNvMzZwJmN0PWc&action_type=SEEN",
          },
          onclick: {
            url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVlkR1VZWHdzNW1EMmZ4Rkt4ZyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9MGM5NGYyMmJmZTFwaTNlMWl4MHNzbm13aHlsMXVrODNjdDNmNGdvM3VtOXNvMzZwJmN0PWc&action_type=CLICK",
          },
          onsent: {
            url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVlkR1VZWHdzNW1EMmZ4Rkt4ZyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9MGM5NGYyMmJmZTFwaTNlMWl4MHNzbm13aHlsMXVrODNjdDNmNGdvM3VtOXNvMzZwJmN0PWc&action_type=SENT",
          },
        },
      },
    ],
  };
  return { json: () => new Promise((resolve) => resolve(responseData)) };
};

describe("Home cotainer", () => {
  it("should render Home container", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.findAllByTestId("home")).toBeTruthy();
  });
  it("should be able to fetch data", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("GO"));
    const gifs = screen.findByTestId("search-img");
    gifs.then((elems) => {
      expect(elems).toBeDefined();
    });
  });
  it("should be able to access trending button", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText("Trending")).toBeDefined();
  });
  it("should navigate to trending", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId("trendingBtn"));
  });
});
