import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Preloader from './Preloader';

const Wrapper = styled.main`padding: 2rem;`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;
const Name = styled.a`
  color: #1e2c42;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Lato', sans-serif;
`;
const Title = styled.h2`
  font-family: 'Noto Sans', sans-serif;
  text-align: center;
  margin: 2rem 0 2rem 0;
`;

class DetailsPage extends PureComponent {
  componentDidMount() {
    const { fetchDetails, repo, match } = this.props;
    fetchDetails(repo, match.params.issue);
  }
  render() {
    const { url, avatar, name, title, content, isFetching } = this.props.details
    return isFetching
      ? <Preloader />
      : <Wrapper>
          <Author>
            <a href={url}>
              <Avatar src={avatar} alt={name} />
            </a>
            <Name href={url}>
              {name}
            </Name>
          </Author>
          <Title>
            {title}
          </Title>
          <Content>
            <ReactMarkdown source={content || ''} />
          </Content>
        </Wrapper>;
  }
}

export default DetailsPage;
