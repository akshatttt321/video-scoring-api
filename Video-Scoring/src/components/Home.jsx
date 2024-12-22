import React, { useState } from "react";

const sampleVideos = [
  {
    id: 1,
    title: "Stylish Shoes Showcase",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  },
  {
    id: 2,
    title: "Elegant Watches Ad",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  },
  {
    id: 3,
    title: "Modern Furniture Promo",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  },
];

const HomePage = () => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [count, setCount] = useState(1)
  const [product, setProduct] = useState('')
  const [tagline,setTagline] = useState('')
  const [brandPallete,setBrandPallete] = useState([])
  const [height, setHeight] = useState(0)
  const [width,setWidth] = useState(0)
  const [CTA,setCTA] = useState('')
  const [Logo, setLogo] = useState('')
  const [Video, setVideo] = useState('')
  const [Duration, setDuration] = useState(0)
  const [BGFG, setBgSeperation] = useState(0)
  const [BrandAdherence, setBrandAdherence] = useState(0)
  const [VisualAppeal, setVisualAppeal] = useState(0)
  const [ProductFocus, setProductFocus] = useState(0)
  const [CallToAction, setCallToAction] = useState(0)
  const [AudienceRelevance, setAudienceRelevance] = useState(0)

  function Submit(){

    setShowOverlay(true)
    const data = {
      "video_details": {
      "product_name": product,
      "tagline": tagline,
      "brand_palette": brandPallete,
      "dimensions": {
      "width": width,
      "height": height
      },
      "duration": Duration,
      "cta_text": CTA,
      "logo_url": Logo,
      "product_video_url": Video
      },
      "scoring_criteria": {
      "background_foreground_separation": BGFG,
      "brand_guideline_adherence": BrandAdherence,
      "creativity_visual_appeal": VisualAppeal,
      "product_focus": ProductFocus,
      "call_to_action": CallToAction,
      "audience_relevance": AudienceRelevance
      }
      }
      console.log(data)
  }
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="h-full overflow-hidden flex flex-col w-full justify-between items-start bg-gray-100 text-gray-800"
    style={{backgroundImage:"url('pexels-goldcircuits-2425232.jpg')", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}
    >
        <div className="flex  ml-16 gap-28 justify-between w-1/3 h-screen">
        <div className="flex flex-col items-center gap-4">
        <div className="relative w-0.5 bg-gray-300 h-56">
        <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-300 rounded-full"></div>
      </div>
      <div className="flex bg-[url('pexels-fwstudio-33348-129733.jpg')] items-center justify-center h-40 w-48 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold uppercase">Generate</h1>
    </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-0.5 bg-gray-300 h-[430px]">
        <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-300 rounded-full"></div>
      </div>
      <div className="flex bg-[url('pexels-fwstudio-33348-172276.jpg')] items-center justify-center h-40 w-48 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold uppercase">Your</h1>
    </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-0.5 bg-gray-300 h-72">
        <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-300 rounded-full"></div>
      </div>
      <div className="flex bg-[url('pexels-fwstudio-33348-163999.jpg')] items-center justify-center h-40 w-48 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold uppercase">Own</h1>
    </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-0.5 bg-gray-300 h-32">
        <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-300 rounded-full"></div>
      </div>
      <div className="flex bg-[url('pexels-fwstudio-33348-129723.jpg')] transform rotate-12 items-center justify-center h-40 w-48 text-black rounded-lg shadow-lg">
      <h1 className="text-2xl mix-blend-multiply font-semibold uppercase">Product</h1>
    </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-0.5 bg-gray-300 h-96">
        <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-300 rounded-full"></div>
      </div>
      <div className="flex bg-[url('pexels-fwstudio-33348-132193.jpg')] items-center justify-center h-40 w-48 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold uppercase">Ad</h1>
    </div>
      </div>
    </div>
    <div className="flex mb-8 relative gap-28 flex-col">
    <div className="flex justify-center w-screen items-center ">
        <div className="relative w-0.5 bg-gray-300 h-56">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
        </div>      
        </div>
        </div>
        <div className="flex justify-between w-screen items-center ">
        <div className="relative w-[530px] bg-gray-300 h-0.5">
        <div className="absolute  top-0 left-1 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
        </div>      
        </div>
        <div className="relative w-[530px] bg-gray-300 h-0.5">
        <div className="absolute  top-0 right-1 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
        </div>      
        </div>
        </div>
        <div className="flex justify-center w-screen items-center ">
        <div className="relative w-0.5 bg-gray-300 h-56">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
        </div>      
        </div>
        </div>
        <div className="absolute top-48 left-[500px] bg-white shadow-md rounded-lg overflow-hidden">
      <div className=" h-64">
        <video
          controls
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="text-xl font-semibold mb-2">{}</h4>
      </div>
    </div>
    <div className="absolute top-0 left-12 w-1/3 border-t-2 border-white "></div>
    <div className="absolute top-0 right-12 w-1/3 border-t-2 border-white "></div>
    <div className="absolute bottom-0 left-12 w-1/3 border-t-2 border-white "></div>
    <div className="absolute bottom-0 right-12 w-1/3 border-t-2 border-white "></div>
    <button 
    onClick={() => {setShowForm(true)}}
    className='bg-blue bottom-10 p-2 right-10 w-18 h-12 rounded-xl bg-blue-500 absolute'>Get Started</button>
        </div>
        <div>
    {showForm &&( <div className='flex flex-col overflow-hidden items-center justify-center min-h-screen'>
        <div className=' m-6 border-t-2 border-gray-300 h-full min-h-screen gap-16 flex items-start justify-between'>
          <div className= " mt-5 flex flex-col w-1/3 justify-center items-center">
          <div className="relative w-0.5 bg-gray-300 h-56">
            <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-300 rounded-full"></div>
          </div>
        <div className="flex justify-center items-center h-1/2 rounded-xl">
          <div className="w-full p-6 bg-white rounded-xl shadow-lg border-t-2 border-l-2 border-fuchsia-700">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Enter your product Details
            </h2>
            <label className="m-2 text-gray-700 font-semibold" htmlFor="product-name">Product Name</label>
              <input
                onChange={(e) => setProduct(e.target.value)}
                label="Product Name"
                type="text"
                placeholder="Enter Product Name"
                className="w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="m-2 text-gray-700 font-semibold" htmlFor="Tagline">Product Tagline</label>
              <input
              onChange={(e) => setTagline(e.target.value)}
                label="Tagline"
                type="text"
                placeholder="Enter Product Tagline"
                className="w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className='flex justify-between'>
              <label className="m-2 text-gray-700 font-semibold" htmlFor="brand pallete">Brand Pallete</label>
              <div className='flex gap-2'>
              <button
              onClick={() => setCount(count + 1)}
              className="w-16 h-8 mb-2 py-1 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            >
              Add
            </button>
            <button
              onClick={() => count>1? setCount(count - 1):null}
              className="w-16 h-8 mb-2 py-1 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            >
              Del
            </button>
            </div>
              </div>
              {Array.from({ length: count }).map((_, i) => (
            <input
            onChange={(e) => {
              const updatedPalette = [...brandPallete];
              updatedPalette[i] = e.target.value;
              setBrandPallete(updatedPalette);
            }}
              key={i}
              label={`Brand Palette ${i + 1}`}
              type="text"
              placeholder={`Enter Color's Hex Code`}
              className="w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
          </div>
        </div>
          </div>
          <div className= " mt-5 flex flex-col w-1/3 justify-center items-center">
          <div className="relative w-0.5 bg-gray-300 h-56">
            <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-300 rounded-full"></div>
          </div>
          <div className="flex justify-center items-center h-1/2 rounded-xl">
          <div className="w-full p-6 bg-white rounded-xl shadow-lg border-t-2 border-l-2 border-fuchsia-700">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Enter Video Dimensions
            </h2>
            <label className="m-2 text-gray-700 font-semibold" htmlFor="product-name">Video Height</label>
              <input
                onChange={(e) => setHeight(e.target.value)}
                type="number"
                placeholder="Product Name"
                className="w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="m-2 text-gray-700 font-semibold" htmlFor="product-name">Video Width</label>
              <input
              onChange={(e) => setWidth(e.target.value)}
                type="number"
                placeholder="Product Name"
                className="w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
          </div>
        </div>
          </div>
          <div className= " mt-5 flex flex-col w-1/3 justify-center items-center">
          <div className="relative w-0.5 bg-gray-300 h-56">
            <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-300 rounded-full"></div>
          </div>
          <div className="flex justify-center items-center h-1/2 rounded-xl">
          <div className="w-full p-6 bg-white rounded-xl shadow-lg border-t-2 border-l-2 border-fuchsia-700">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Enter Video Details
            </h2>
            <label className="m-2 text-gray-700 font-semibold" htmlFor="Tagline">CTA Text</label>
              <input
              onChange={(e) => setCTA(e.target.value)}
                type="text"
                placeholder="Enter Call To Action"
                className="w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
               <label className="m-2 text-gray-700 font-semibold" htmlFor="Tagline">Logo URL</label>
              <input
              onChange={(e) => setLogo(e.target.value)}
                type="url"
                placeholder="Enter Logo Url"
                className="w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
               <label className="m-2 text-gray-700 font-semibold" htmlFor="Tagline">Video URL</label>
              <input
              onChange={(e) => setVideo(e.target.value)}
                type="url"
                placeholder="Enter Video Url"
                className="w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
               <label className="m-2 text-gray-700 font-semibold" htmlFor="Tagline">Duration</label>
               <input
               onChange={(e) => setDuration(e.target.value)}
                type="number"
                placeholder="Enter Video Duration"
                className="w-full p-3 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
          </div>
        </div>
          </div>
          <div className= " mt-5 flex flex-col w-1/3 justify-center items-center">
          <div className="relative w-0.5 bg-gray-300 h-56">
            <div className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full border-4 border-gray-800">
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-300 rounded-full"></div>
          </div>
          <div className="flex justify-center items-center h-1/2 rounded-xl">
          <div className="w-full p-6 bg-white rounded-xl shadow-lg border-t-2 border-l-2 border-fuchsia-700">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Enter Scoring Criteria
            </h2>
            <div className='flex flex-col gap-8'>
            <div className='flex items-center justify-between'> 
              <label className="m-2 text-gray-700 font-semibold" htmlFor="Tagline">BG-FG Seperation</label>
               <input
               onChange={(e) => setBgSeperation(e.target.value)}
                type="number"
                placeholder="Max Score"
                className="w-32 p-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              </div>
              <div className='flex items-center justify-between'> 
              <label className="m-2 text-gray-700 font-semibold" htmlFor="Tagline">Brand Adherence</label>
               <input
                onChange={(e) => setBrandAdherence(e.target.value)}
                type="number"
                placeholder="Max Score"
                className="w-32 p-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              </div>
              <div className='flex items-center justify-between'> 
              <label className="m-2 text-gray-700 font-semibold" htmlFor="Tagline">Visual Appeal</label>
               <input
                onChange={(e) => setVisualAppeal(e.target.value)}
                type="number"
                placeholder="Max Score"
                className="w-32 p-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              </div>
               <div className='flex items-center justify-between'> 
              <label className="m-2 text-gray-700 font-semibold" htmlFor="Tagline">Product Focus</label>
               <input
               onChange={(e) => setProductFocus(e.target.value)}
                type="number"
                placeholder="Max Score"
                className="w-[120px] p-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              </div>
               <div className='flex items-center justify-between'> 
              <label className="m-2 text-gray-700 font-semibold" htmlFor="Tagline">Call To Action</label>
               <input
               onChange={(e) => setCallToAction(e.target.value)}
                type="number"
                placeholder="Max Score"
                className="w-[120px] p-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              </div>
              <div className='flex items-center justify-between'> 
              <label className="m-2 text-gray-700 font-semibold" htmlFor="Tagline">Audience Relevance</label>
               <input
               onChange={(e) => setAudienceRelevance(e.target.value)}
                type="number"
                placeholder="Max Score"
                className="w-[120px] p-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              </div>
              </div>
          </div>
        </div>
          </div>
        </div>
        <button
      onClick={Submit}
      type="submit"
      className="relative mb-6 inline-flex items-center justify-center w-32 px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-indigo-700 to-purple-800 rounded-xl shadow-lg hover:shadow-purple-800/70 group"
    >
      <span className="absolute inset-0 w-32 h-full transition-transform translate-x-0 translate-y-0 bg-gradient-to-br from-gray-700 via-indigo-900 to-black opacity-75 group-hover:translate-y-full group-hover:translate-x-full"></span>
      <span className="relative">Generate</span>
    </button>
     {/* Video Overlay */}
     {showOverlay && (
            <div 
            onClick={() => showOverlay?setShowOverlay(false):null}
            className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <img src='https://media.tenor.com/vRHC2Oxk45MAAAAi/gunpoint-pointing-gun-at-you.gif' className="w-64 h-64" alt="React Logo" />
            </div>
          )}
      </div>)}
          </div>
          </div>
          
  );
};

export default HomePage;
