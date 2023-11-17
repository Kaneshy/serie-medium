import { Routes, Route } from "react-router-dom"
import { VideoProvider } from "./context/VideoProvider"
import { ShowVideos } from "./routers/ShowVIdeos"
import { RandomVideo } from "./routers/RandomVideo"
import { HomePage } from "./routers/Home"
import temporada1 from "./routers/data/temporada1"
import temporada2 from "./routers/data/temporada2"
import temporada3 from "./routers/data/temporada3"




export const App = () => {
  return (
    <VideoProvider>
      <Routes>
        <Route path='/videos' element={<RandomVideo value={temporada1} ></RandomVideo>} ></Route>
        <Route path='/videos2' element={<RandomVideo value={temporada2} ></RandomVideo>} ></Route>
        <Route path='/videos3' element={<RandomVideo value={temporada3} ></RandomVideo>} ></Route>
        <Route path='/videosA' element={<ShowVideos></ShowVideos>} ></Route>
        <Route path='/' element={<HomePage></HomePage>} ></Route>
      </Routes>
    </VideoProvider >
  )
}
