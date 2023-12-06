import styled, {css} from 'styled-components';
import { breakpoints, colors, fonts, media} from './Variable';


export const Button = styled.button.attrs({
  type:'button',
})`
  display:inline-block;
  ${props => `
    ${props.$width && `width:${props.$width}`};
    ${props.$height && `width:${props.$height}`};
  `}
  cursor:pointer;
`;

export const InnerStyle = styled.div`
  width:100%;
  max-width:${breakpoints.tab}px;
  margin:0 auto;
  padding:0 30px;
  ${media.mo} {
    padding: 0 15px;
  }
`;

export const MotionLR = styled.span`
  display:inline-block;
  animation: LeftRightInfinite 1.5s linear infinite;
  @keyframes LeftRightInfinite {
    from, to { transform:translateX(0) }
    50% {  transform:translateX(5px)}
  }
`;