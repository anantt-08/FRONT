<InfoConatiner>
<InfoWrapper>
<InfoRow>
<Column1>
<TextWrapper>
<TopLine>
</TopLine>
<Heading>
</Heading>
<Subtitle>
</Subtitle>
<BtnWrap>
<Button to="home">....</Button>
</BtnWrap>
padding
color
background
</TextWrapper>
@media screen and (max-width){
	
}

import styled from "styled-components";

export const InfoConatiner=styled.div`
color:#fff;
background:{({lightBg})=>(lightBg? "#f9f9f9":"#010606") }

@media screen and (max-width:768px){
 padding : 100px 0;
}
`
export const InfoWrapper=styled.div`
 display: grid;
 z-index:1;
 height:860px;
 width:100%;
  margin-right: auto;
  margin-left: auto;
  padding:0 24px;
  justify-content:center; 
  max-width:1100px;
`
/*
so we have 2 grid areas named col1 and col2 
so we cn name wise each by grid areas thenn by grid area templates we cn design  on the bases of grid-auto-rows or grid-templates-coluns
The grid-template-columns property defines the number of columns in your grid layout, and it can define the width of each column. ex repeat(4,1fr)
The grid-template-columns property can also be used to specify the size (width) of the columns.
The grid-template-rows property defines the height of each row.
*/
export const InfoRow=styled.div`
 display:grid;
 grid-auto-columns:minmax(auto,1fr);
 align-items:center;
 grid-template-areas:{({imgStart}) =>(imgStart ? `'col2' 'col1'`: `'col1' 'col2'` )}


@media screen and (max-width:768px){
grid-template-areas:{({imgStart}) =>(imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'` )}
}
`

export const Column1=styled.div`
padding:0 15px;
margin-bottom:15px;
grid-area:col1;

`
export const Column2=styled.div`
padding:0 15px;
margin-bottom:15px;
grid-area:col2;

`
export const TextWrapper=styled.div`
max-width:540px;
padding-top:0px;
padding-bottom:60px;
`
export const TopLine=styled.p`
color:#01bf71;
font-size:16px;
line-height:16px;
font-weight:700;
letter-spacing:1.4px;
text-transform:upppercase;
margin-bottom:16px;
`



















