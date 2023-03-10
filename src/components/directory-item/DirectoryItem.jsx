import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./DirectoryItemStyles";

export default function DirectoryItem({ category }) {
  const { title, imageUrl } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>

      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}
