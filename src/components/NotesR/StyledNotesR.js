import Styled from 'styled-components';
import { theme } from '../../StyledMain';

const StyledNotesR = Styled.main`

        background: ${theme.$primary};
        margin:1rem 2rem;
        border-radius: 1rem;
        padding-bottom: 3rem;
        color: ${theme.$tertiary};
        .notesRender{
            margin:1rem;
        }
.swiper {
  width: 12rem;
  height: 18rem;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
   font-size: 10px;
  color: #fff;
  padding: 0.5rem;
}

.swiper-slide:nth-child(odd) {
  background: ${theme.$secondary};
}

.swiper-slide:nth-child(even) {
 background: ${theme.$extra};
}
    .btnAdd{
        display:flex;
        background: ${theme.$primary};
        color: ${theme.$secondary};
        justify-content: right;
        align-items: right;
        margin:0 auto;
        margin-right:3rem;
        button{
            background: ${theme.$primary};
            color: ${theme.$pre};
            font-size: 1rem;
            font-weight: bold;
            border:none;
            border-bottom: 2px solid ${theme.$secondary};
        }
    }
    h3{
        font-size: 1rem;
        font-weight: bold;
        padding-top:1rem;
        color: ${theme.$pre};
        margin:0 auto;

      }
      .titleI{
        color: #f00
      }
      span{
        font-size: .3rem;
        display:flex;
        justify-content: flex-end;
        color:${theme.$primary};
        font-weight:bold;
      }
      strong{
        display:flex;
        justify-content:flex-start;
        color:${theme.$primary};
        font-weight:bold;
      }
      .contentNote{
        display:flex;
        justify-content:center;
        align-items:center;
        width:10rem;
        max-width:12rem;
      } 
     textarea{
      width:10rem;
        min-width:10rem;
        max-width:10rem;
        height:10rem;
        min-height:10rem;
        max-height:10rem;
        border-radius: 1rem;
        background: none;
        border:none;
        color: #000;
        :focus{
            outline:none;
        }
     }

     
      button{
        display:flex;
        justify-content:flex-start;
        background:none;
        border:none;
        color: #000;
   
        font-size: 2rem;
        cursor:pointer;
      }


@media (min-width: 900px){
        .swiper {
          width: 25rem;
          height: 35rem;
      }
        .swiper-slide {
          font-size: 1rem;
      }
      .btnAdd{
        button{
          font-size:3rem
        }
      }
      textarea{
        width:15rem;
        min-width:15rem;
        max-width:15rem;
        height:17rem;
        min-height:17rem;
        max-height:17rem;
      }
      h3{
          font-size: 2rem;
      }
      p{
          font-size: 1rem;
      }
      span{
          font-size: .8rem;
          padding-top:3rem;
        }

      }
`;

export default StyledNotesR;
