import React, { useEffect, useState } from 'react';
import { Card, Cell, Info, Avatar, Button } from '@telegram-apps/telegram-ui';  
import {postEvent} from '@telegram-apps/sdk-react';
const NewUserPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
        <div>
        <Button onClick={() => postEvent("web_app_request_phone")}>
  Share my Phone Number
</Button>
        </div>
      {posts.map(post => (
        <Cell
  after={<Info subtitle="Received" type="text">+1000</Info>}
  before={<Avatar size={48} />}
  subtitle="Yesterday"
  key={post.id}
>
  {post.title}
</Cell>
      ))}
    </div>
  );
};

export default NewUserPage;
