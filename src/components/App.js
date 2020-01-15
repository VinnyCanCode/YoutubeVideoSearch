import React, { Component } from 'react';
import Searchbar from './Searchbar';
import youtubeApi from './youtubeApi';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit('react js');
  }

  onSearchSubmit = async term => {
    const searchResults = await youtubeApi.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: searchResults.data.items,
      selectedVideo: searchResults.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <Searchbar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                searchResults={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
