import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Home} from './pages/Home'
import {NotFound} from './pages/NotFound'
import {Layout} from './layout/Layout'

function App() {
	const [posts,  setPosts] = useState([]);
	const [postsFilter,  setPostsFilter] = useState([]);

	return (
		<Router basename='/nautilus-pg'>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index element={<Home posts={posts} setPosts={setPosts} postsFilter={postsFilter} setPostsFilter={setPostsFilter}/>}></Route>
					<Route path="*" element={<NotFound/>}></Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
