import React,{Component} from "react";
import ReactDOM from 'react-dom';   
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import '../style/style.css';
const API_KEY="AIzaSyCyefkTWA3vf-OLnE1MZTwfmmMw9ZEZncg";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  videos:[],
			selectedVideo : null
		};
		YTSearch({key: API_KEY,term: 'music'},(videos) => {
			this.setState({
				videos:videos,
				selectedVideo :videos[0]
			})
		});
	}
	render(){
  	return (
   		<div>
	    	<SearchBar />
	    	<div className="row">
		    	<VideoDetail video={this.state.videos[0]} />

		    	<VideoList 
		    	  onVideoSelect={(selectedVideo) => this.setState({selectedVideo}) }
		    	  videos={this.state.videos} />
		    </div>	  
	  	</div>
  	);
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode); 