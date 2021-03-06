import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v1';

const TagsList = styled.div`
  overflow: hidden;
  height: 100%;
  max-height: 28px;
  transition: all 0.15s ease-out;
`;

const Tag = styled(Chip)`
  height: 16px;
  margin-left: 2px;
  margin-right: 2px;
  font-size: 11px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  span {
    padding-left: 6px;
    padding-right: 6px;
  }
` as typeof Chip;

const TopDiv = styled.div`
  overflow: hidden;
  height: 100%;
  max-height: 20px;
  transition: all 0.15s ease-out;
`;

const Title = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 400;
  transition: all 0.15s ease-out;
`;

const Description = styled(Typography)`
  display: -webkit-box;
  font-weight: 300;
  opacity: 0;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledContent = styled(CardContent)`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  bottom: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  max-height: 100px;
  transition: all 0.2s ease-out;

  :hover {
    background-color: white;
    opacity: 0.9;
    max-height: 300px;
    transition: all 0.2s ease-in;

    ${TopDiv} {
      max-height: 184px;
      transition: max-height 0.25 ease-in;
    }

    ${TagsList} {
      max-height: 76px;
      padding-top: 10px;
      transition: max-height 0.25 ease-in;
    }

    ${Description} {
      opacity: 1;
      transition: opacity 0.25s ease-in;
    }

    ${Title} {
      font-size: 18px;
      transition: font-size 0.25s ease-in;
    }
  }
` as typeof CardContent;

const TitleComponent = Title as typeof Typography;
const DescriptionComponent = Description as typeof Typography;

type Props = {
  title: string;
  description: string;
  tags: string[];
  handleViewArticle: () => void;
};

export const StyledCardContent: React.SFC<Props> = props => {
  const { title, tags, description, handleViewArticle } = props;
  return (
    <StyledContent onClick={handleViewArticle}>
      <TopDiv>
        <TitleComponent gutterBottom={true}>{title.toUpperCase()}</TitleComponent>
        <DescriptionComponent gutterBottom={true}>{description}</DescriptionComponent>
      </TopDiv>
      <TagsList>
        {tags.map(tag => (
          <Tag key={uuid()} label={tag.toUpperCase()} />
        ))}
      </TagsList>
    </StyledContent>
  );
};
