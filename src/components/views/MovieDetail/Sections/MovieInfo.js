import React from 'react'
import { Descriptions, Badge, Button } from 'antd';
import { useSelector } from 'react-redux';

function MovieInfo(props) {

    const user = useSelector(state => state.user)
    const { movie } = props;

    function handleClick(){
      if (user.userData && !user.userData.isAuth) {
        return alert('Please Log in first');
    }else{
      return alert("Movie book")
    }}
    
    return (
      <>
        <Descriptions title="Movie Info" bordered>
        <Descriptions.Item label="Title">{movie.original_title}</Descriptions.Item>
        <Descriptions.Item label="release_date">{movie.release_date}</Descriptions.Item>
        <Descriptions.Item label="revenue">{movie.revenue}</Descriptions.Item>
        <Descriptions.Item label="runtime">{movie.runtime}</Descriptions.Item>
        <Descriptions.Item label="vote_average" span={2}>
        {movie.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="vote_count">{movie.vote_count}</Descriptions.Item>
        <Descriptions.Item label="status">{movie.status}</Descriptions.Item>
        <Descriptions.Item label="popularity">{movie.popularity}</Descriptions.Item>
      </Descriptions>
      <Button type="primary" value="Default" onClick={handleClick}>Booking</Button>
    </>
    )
}

export default MovieInfo
