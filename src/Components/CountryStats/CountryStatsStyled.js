import { styled } from "@mui/material"

export const App = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://northernvirginiamag.com/wp-content/uploads/2020/06/people-with-masks.jpg");
`

export const InfoDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 800px;
  height: 300px;
  background-color: white;
  padding-top: 50px;
  margin-bottom: 50px;
`
export const InfoChild = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.3rem;
  height: 100px;
`
export const CasesDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.3rem;
  width: 180px;
  text-align: center;
  font-size: 0.9rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`
