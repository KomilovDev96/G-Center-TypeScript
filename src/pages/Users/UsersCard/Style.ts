import styled from "styled-components";
import { convertPxToRem } from "utils";
import colors from "styles/colors";

const { userCardBG, black } = colors

export default styled.div`
     padding: 0 ${convertPxToRem(15)};
     text-align: center;
     width: calc(100% / 12 * 3);    
     .users{
        background : ${userCardBG};
        padding: ${convertPxToRem(20)};
        border-radius: ${convertPxToRem(6)};
        margin-bottom: 10px;
     }
     &:last-child {
        margin-right: 0;
     }
     .users__img{
        width: ${convertPxToRem(52)};
        height: ${convertPxToRem(52)};
        border-radius: 50%;
     }
     .users__card{
        font-weight: 600;
        font-size: ${convertPxToRem(18)};
        color: ${black};
     }
     .user__text{
        font-size: ${convertPxToRem(14)};
        line-height: ${convertPxToRem(17)};
        font-weight: 400;
     }
     @media (max-width: ${convertPxToRem(992)}) {
        width: calc(100% / 12 * 4);    
        .users{
            margin: 10px 0;
        }
     }
     @media (max-width: ${convertPxToRem(768)}) {
        width: calc(100% / 12 * 6);    
     }
     @media (max-width: ${convertPxToRem(576)}) {
        width: 100%;    
     }
     
`;
