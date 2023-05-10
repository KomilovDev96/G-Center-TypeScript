import { Image } from 'antd'
import StyledCard from './Style'
type Props = {
  img: string;
  title: string;
  description: string;
};
function UsersCard({ img, title, description }: Props) {
  return (
    <StyledCard>
      <div className="users">
        <Image className="users__img" src={img} alt={title} preview={false} />
        <h3 className="users__card">{title}</h3>
        <p className="user__text">{description}</p>
      </div>
    </StyledCard>

  )
}

export default UsersCard