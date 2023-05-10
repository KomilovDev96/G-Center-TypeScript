import RowWraper from 'components/Row';
import SearchForm from 'components/Search'
import Wrapper from 'components/Wrapper'
import React, { ReactElement } from 'react'
import t from 'translate';
import StyledUsers from './Style'
import UsersCard from './UsersCard';
interface IUsers {
    title: string;
    description: string;
    img: string;
    centerId: string;
}

const centersUsers: IUsers[] = [
    {
        title: "Abduboriy Mirzayev",
        description: "Hightly motivited front-end devloper ",
        img: "https://cdn.pixabay.com/photo/2018/04/04/12/31/tiger-3289665_960_720.png",
        centerId: "1",
    },
    {
        title: "Abduboriy Mirzayev",
        description: "Hightly motivited front-end devloper ",
        img: "https://cdn.pixabay.com/photo/2018/04/04/12/31/tiger-3289665_960_720.png",
        centerId: "2",
    },
    {
        title: "Abduboriy Mirzayev",
        description: "Hightly motivited front-end devloper ",
        img: "https://cdn.pixabay.com/photo/2018/04/04/12/31/tiger-3289665_960_720.png",
        centerId: "3",
    },
    {
        title: "Abduboriy Mirzayev",
        description: "Hightly motivited front-end devloper ",
        img: "https://cdn.pixabay.com/photo/2018/04/04/12/31/tiger-3289665_960_720.png",
        centerId: "4",
    },
    {
        title: "Abduboriy Mirzayev",
        description: "Hightly motivited front-end devloper ",
        img: "https://cdn.pixabay.com/photo/2018/04/04/12/31/tiger-3289665_960_720.png",
        centerId: "5",
    },
    {
        title: "Abduboriy Mirzayev",
        description: "Hightly motivited front-end devloper ",
        img: "https://cdn.pixabay.com/photo/2018/04/04/12/31/tiger-3289665_960_720.png",
        centerId: "6",
    },
    {
        title: "Abduboriy Mirzayev",
        description: "Hightly motivited front-end devloper ",
        img: "https://cdn.pixabay.com/photo/2018/04/04/12/31/tiger-3289665_960_720.png",
        centerId: "7",
    },
];

function UsersCenters(): ReactElement {
    return (
        <StyledUsers>
            <Wrapper justify="space-between" align="center">
                <h2>{t("Users")}</h2>
                <SearchForm />
            </Wrapper>
            <RowWraper  className="users__wrappers">
                {centersUsers.map(({ title, description, img, centerId }) => (
                    <UsersCard
                        img={img}
                        title={title}
                        description={description}
                        key={centerId}
                    />
                ))}
            </RowWraper>
        </StyledUsers>
    )
}

export default UsersCenters
