import React from 'react'
import Slider from "react-slick";
// Imported css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../src/index.css'

const Carousal = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // fade:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // const arr = [0, 1, 2, 3, 4,5,6,7,8]
  const arr = [
    {
      "title": "Sunny Day",
      "description": "Clear skies and abundant sunshine.",
      "image": "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="
    },
    {
      "title": "Cloudy with a Chance of Rain",
      "description": "Overcast skies with a possibility of rain showers.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Partly_cloudy_with_a_chance_of_rain_-_panoramio.jpg/1200px-Partly_cloudy_with_a_chance_of_rain_-_panoramio.jpg"
    },
    {
      "title": "Snowy Wonderland",
      "description": "A winter wonderland with snowfall and frosty landscapes.",
      "image": "https://media.istockphoto.com/id/619639650/photo/snowing-on-jubilee-gardens-in-london-at-dusk.jpg?s=612x612&w=0&k=20&c=PP69HNvxfShRWZ3i4_Kh_JByds2W5R6TsYjOzRp6lE8="
    },
    {
      "title": "Misty Morning",
      "description": "Foggy conditions in the early hours of the day.",
      "image": "https://images.unsplash.com/photo-1463832571670-f2de35cf1629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1pc3R5JTIwbW9ybmluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    },
    {
      "title": "Rainbow After the Rain",
      "description": "A beautiful rainbow shining after a rainstorm.",
      "image": "https://images.unsplash.com/photo-1593362831502-5c3ad1c05f57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    },
    {
      "title": "Golden Sunset",
      "description": "A breathtaking sunset with warm golden hues.",
      "image": "https://images.unsplash.com/photo-1507993482586-c837fa4ed916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGVuJTIwc3Vuc2V0fGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
      "title": "Thunderstorm Approaching",
      "description": "Dark clouds and thunderstorm on the horizon.",
      "image": "https://media.istockphoto.com/id/693396762/photo/dramatic-supercell-thunderstorm-crosses-the-texas-plains.jpg?s=612x612&w=0&k=20&c=JQXfX1opXH55Q6Sw5nNDX8d5-O0N0xApCOYEez2RGu8="
    },
    {
      "title": "Lush Green Forest",
      "description": "A serene forest with lush green trees and vegetation.",
      "image": "https://previews.123rf.com/images/infoguides/infoguides1906/infoguides190600152/127031241-background-of-lush-green-forest-viewed-from-above.jpg"
    }
  ]


  return (
    <>
      {/* <h1 className='text-3xl text-red-600'>hello</h1> */}
      <div style={{ width: '80%', margin: 'auto' }}>
        {/* <FastCarousal/> */}
      </div>
      <div className='text-center m-2'>
        <a href='https://github.com/prashanthakur' target='_blank' className='bg-blue-300 p-3 m-3'>view github code</a>
      </div>

      <Slider {...settings} className='m-[30px] md:m-[100px]'>
        {
          arr.map((val) => {
            return (
              <>
                <div class="max-w-sm rounded overflow-hidden shadow-lg m-8">
                  <img class="w-full" src={val.image} alt="" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{val.title}</div>
                    <p class="text-gray-700 text-base">
                      {val.description}
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div>
                </div>
              </>
            )
          })
        }
      </Slider>
      {/* <FastCarousal/> */}
    </>
  )
}

export default Carousal